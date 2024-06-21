import { Button, Col, Form, Row } from "react-bootstrap";
import { useFormikContext } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import { ThuocInfo } from "../../models/DSBenhNhanKhamBenhModels";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import { ThuocColumns } from "./ThuocColumns";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

type Props = {};

export const GridThuoc = (props: Props) => {
  const { handleSubmit, values } = useFormikContext<any>();
  const [dsThuoc, setDsThuoc] = useState<ThuocInfo[]>([]);
  const [selectedThuoc, setSelectedThuoc] = useState<ThuocInfo>({});

  const handleFormSubmit = (values: ThuocInfo) => {
    if (selectedThuoc?.id) {
      let index = dsThuoc.findIndex((item) => item.id === selectedThuoc.id);
      let newDsThuoc = [...dsThuoc];
      newDsThuoc[index] = values;
      setDsThuoc([...newDsThuoc]);
    } else {
      setDsThuoc([
        ...dsThuoc,
        {
          ...values,
          id: new Date().getTime(),
          thanhTien:
            values?.soLuong && values?.donGia
              ? values?.soLuong * values?.donGia
              : 0,
        },
      ]);
    }
  };

  const thuocValidationSchemas = Yup.object().shape({
    tenDuoc: Yup.string().required("Field required"),
    sang: Yup.string().required("Field required"),
    trua: Yup.string().required("Field required"),
    chieu: Yup.string().required("Field required"),
    toi: Yup.string().required("Field required"),
    soNgay: Yup.string().required("Field required"),
    soLuong: Yup.number().required("Field required"),
    donGia: Yup.number().required("Field required"),
    duongDung: Yup.string().required("Field required"),
    loaiThuoc: Yup.string().required("Field required"),
    cachDung: Yup.string().required("Field required"),
  });

  const handleSelectThuoc = (thuocInfo: ThuocInfo[]) => {
    setSelectedThuoc(thuocInfo[0]);
  };

  const handleDeleteThuoc = () => {
    let index = dsThuoc?.findIndex((item) => item?.id === selectedThuoc?.id);
    if (index > -1) {
      dsThuoc.splice(index, 1);
      setDsThuoc([...dsThuoc]);
      setSelectedThuoc({});
    }
  };

  return (
    <div className="h-100 spaces px-8 pt-8  flex flex-column ">
      <div className="p-3">
        <Form.Group as={Row}>
          <Row className="d-flex mb-4px ">
            <Col xs="8" className="d-flex p-0">
              <div className="spaces width-50 d-flex">
                <LabelRequired
                  className="ms-0 min-w-125px"
                  label="Chọn kho thuốc"
                />
                <AutocompleteV2
                  className="autocomplete-custom-tiep-nhan spaces radius-3px width-100 h-26"
                  options={[]}
                  placeholder="Chọn kho thuốc"
                  name="khoThuoc"
                />
              </div>
              <div className="spaces width-50 d-flex">
                <TextField
                  label="Tên thuốc"
                  name="tenThuoc"
                  labelClassName="min-w-125px ps-2"
                  className="w-100"
                />
              </div>
            </Col>
            <Col xs="4" className="d-flex p-0">
            <TextField
                label="Đường dùng"
                name="duongDung"
                labelClassName="min-w-100px ps-2"
                className="w-100"
              />
            </Col>
          </Row>

          <Row className="d-flex mb-4px">
            <Col xs="8" className="d-flex p-0">
              <div className="spaces w-29 d-flex">
                <TextField
                    
                    label="SL sáng"
                    name="slSang"
                    labelClassName="min-w-125px"
                    className="w-100"
                  />
              </div>
              <div className="spaces w-21 d-flex">
                <TextField
                    
                    label="SL trưa"
                    name="slTrua"
                    labelClassName="min-w-75px ps-2"
                    className="w-100"
                  />
              </div>
              <div className="spaces w-29 d-flex">
                <TextField
                    
                    label="SL chiều"
                    name="slChieu"
                    labelClassName="min-w-125px ps-2"
                    className="w-100"
                  />
              </div>
              <div className="spaces w-21 d-flex">
                <TextField
                    
                    label="SL tối"
                    name="slToi"
                    labelClassName="min-w-75px ps-2"
                    className="w-100"
                  />
              </div>
            </Col>
            <Col xs="2" className="d-flex p-0">
            <TextField
                
                label="Số lượng"
                name="soLuong"
                labelClassName="min-w-100px ps-2"
                className="w-100"
              />
            </Col>
          </Row>

          <Row className="d-flex mb-4px align-items-center">
          <Col xs="10" className="d-flex p-0">
              <div className="spaces width-100 d-flex">
            <TextField
                  
                  label="Hướng dẫn sử dụng"
                  name="hdsd"
                  labelClassName="min-w-125px"
                  className="w-100"
                />
            </div>
            </Col>
            <Col xs={2} className="spaces d-flex p-0">
              {selectedThuoc?.id ? (
                <Button
                  onClick={() => handleSubmit()}
                  className="btn btn-fill h-26 w-100 ms-2"
                >
                  Cập nhật
                </Button>
              ) : (
                <Button
                  onClick={() => handleFormSubmit(values)}
                  className="btn btn-fill h-26 w-100 ms-2"
                >
                  Thêm
                </Button>
              )}
              <Button
                variant="danger"
                className="btn-fill h-26 w-100 ms-2"
                onClick={handleDeleteThuoc}
              >
                Xóa
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </div>
      <div className="flex-1">
        <TableCustom<ThuocInfo>
          data={[...dsThuoc]}
          columns={ThuocColumns}
          selectionMode="single"
          getSelectedRowsData={handleSelectThuoc}
        />
      </div>
    </div>
  );
};

export default GridThuoc;
