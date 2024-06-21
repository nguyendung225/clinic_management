import { Form, Formik } from "formik";
import { FC, useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Column } from "react-table";
import * as Yup from "yup";
import TextField from "../../../component/TextField";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { SELECTION_MODE } from "../../../utils/Constant";
import { benhNhanProps } from "../../tab-them-lich-hen/ThemLichHen";
import { IconButtonSave } from "../../../component/IconSvg";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

type tiemChung = {
  id?: string;
  muiTiem: string | null;
  soMui: string | null;
};
const TabTiemChung: FC<benhNhanProps> = () => {
  let [listTiemChung, setListTiemChung] = useState<tiemChung[]>([]);
  let [selectedRow, setSelectedRow] = useState<tiemChung[]>([]);
  const formRef = useRef<any>(null);

  useEffect(() => {
    selectedRow?.length !== 0 && formRef.current?.setValues(selectedRow[0]);
  }, [selectedRow]);
//selectedRow là 1 mảng các row table được chọn
  const columns: ReadonlyArray<Column<tiemChung>> = [
    {
      Header: (props: any) => (
        <TableCustomHeader tableProps={props} title={"STT"} className="col-1 text-center text-white px-3 min-w-50px" />
      ),
      id: "stt",
      Cell: ({ ...props }: any) => {
        return <TableCustomCell className="text-center" data={+props.row.id + 1} />;
      },
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Mũi tiêm"}
          className="col-1 text-center text-white px-3 min-w-250px"
        />
      ),
      id: "muiTiem",
      Cell: ({ ...props }) => <TableCustomCell data={props.row.original?.muiTiem || ""} />,
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số mũi"}
          className="col-1 text-center text-white px-3 min-w-100px"
        />
      ),
      id: "soMui",
      Cell: ({ ...props }) => <TableCustomCell className="text-center" data={props.row.original?.soMui || ""} />,
    },
  ];
  
  let validationSchema = Yup.object({
    muiTiem: Yup.string().required("Không được để trống"),
    soMui: Yup.string().required("Không được để trống"),
  });
  const handleDelete =()=>{
    if (selectedRow[0]?.id) {
      setListTiemChung(listTiemChung?.filter((item) => (item.id !== selectedRow[0]?.id)));
      formRef.current?.resetForm()
      setSelectedRow([])
    }
  }
  return (
    <div className="tableHenKham over-flow">
      <Row>
        <Formik<tiemChung>
          initialValues={{ muiTiem: "", soMui: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            let uniqueId = Date.now().toString();
            if (values?.id) {
              setListTiemChung(listTiemChung?.map((item) => (item.id === values?.id ? (item = values) : item)));
            } else {
              setListTiemChung([...listTiemChung, { ...values, id: uniqueId }]);
            }
            actions.resetForm();
            setSelectedRow([])
          }}
          innerRef={formRef}
        >
          {({ values, setValues }) => (
            <>
              <Col xs={4}>
                <TableCustom
                  data={listTiemChung}
                  columns={columns}
                  selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                  getSelectedRowsData={setSelectedRow}
                />
              </Col>
              <Col xs={4}>
                <Form>
                  <TextField
                    
                    label="Mũi tiêm"
                    name="muiTiem"
                    labelClassName="ms-0 min-w-125px"
                    className="spaces mt-4 align-items-start flex-column"
                    value={values?.muiTiem}
                  />
                  <TextField
                    
                    label="Số mũi"
                    name="soMui"
                    type="number"
                    labelClassName="ms-0 min-w-125px"
                    className="spaces mt-4 align-items-start flex-column"
                    value={values?.soMui}
                  />
                  <div className="gap-2 d-flex align-items-center mt-3 justify-content-center">
                    <Button
                      className="btn-fill"
                      type="submit"
                      // onClick={handleFormSubmit}
                    >
                      {selectedRow?.length === 0 && !values?.id ? "Thêm" : "Sửa"}
                    </Button>
                    <Button className="btn-fill">
                      <IconButtonSave/>
                      <span>Lưu</span>
                    </Button>
                    <Button className="btn-outline" onClick={handleDelete}>Xóa</Button>
                  </div>
                </Form>
              </Col>
              <Col xs={4}>
                <TextField
                  className="spaces mt-4 align-items-start flex-column min-height-118px"
                  label="Ghi chú"
                  name="ghiChu"
                  as="textarea"
                  labelClassName="ms-0 min-w-125px"
                />
              </Col>
            </>
          )}
        </Formik>
      </Row>
    </div>
  );
};
export default TabTiemChung;
