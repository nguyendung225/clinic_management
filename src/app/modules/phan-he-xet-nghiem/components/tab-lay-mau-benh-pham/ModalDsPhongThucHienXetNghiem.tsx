import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import TextField from "../../../component/TextField";
import { SELECTION_MODE } from "../../../utils/Constant";
import { IDanhSachPhong, columnsDsPhong } from "../../const/constants";
import { Form, Formik, FormikErrors } from "formik";
import * as Yup from "yup";
import { DS_PHONG_THUC_HIEN_XN_DATA } from "../../const/FakeData";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";
import { IconButtonSave } from "../../../component/IconSvg";

type Props = {
  open: boolean;
  handleClose: () => void;
  className?: string;
};

const ModalDsPhongThucHienXetNghiem = ({ handleClose, className, open }: Props) => {
  const [rowSelected, setRowSelected] = useState<any[]>([]);
  let validationSchema = Yup.object({});
  const handleFormSubmit = (values: any) => {};
  return (
    <>
      <Modal show={open} onHide={handleClose} centered className={`dialog-background ${className}`}>
        <Formik<any>
          initialValues={{}}
          validationSchema={validationSchema}
          validateOnChange={true}
          validate={(values) => {
            const errors: FormikErrors<any> = {};
            return errors;
          }}
          onSubmit={handleFormSubmit}
        >
          {({ touched, errors, setFieldValue, values }) => (
            <Form>
              <Modal.Header closeButton className="header-modal">
                <Modal.Title>Phòng thực hiện xét nghiệm</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div >
                  <TextField
                    className=" w-50 mb-3"
                    label="Thời gian thực hiện"
                    name="thoiGianThucHien"
                    type="date"
                    labelClassName="pe-2 min-w-80px"
                  />
                  <TableCustom<IDanhSachPhong>
                    verticalScroll
                    columns={columnsDsPhong}
                    data={DS_PHONG_THUC_HIEN_XN_DATA}
                    selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
                    getSelectedRowsData={setRowSelected}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer className="d-flex justify-content-center p-2 pe-5">
                <Button
                  className="btn-fill"
                  type="submit"
                  // onClick={() => handleFormSubmit(values)}
                >
                  <IconButtonSave/>
                  <span>Lưu</span>
                </Button>
                <Button className="btn-outline" onClick={handleClose}>
                  Đóng
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ModalDsPhongThucHienXetNghiem;
