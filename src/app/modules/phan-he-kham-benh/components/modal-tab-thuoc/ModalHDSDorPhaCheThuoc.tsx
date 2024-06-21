import { Form, Formik, FormikErrors } from "formik";
import { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import * as Yup from "yup";
import { IconButtonSave } from "../../../component/IconSvg";
import TextField from "../../../component/TextField";
import { CODE_ITEM_MENU_THUOC } from "../../constants/KhamBenh";

interface Props {
  type: string;
  handleClose: () => void;
  handleChangeorNhomThuocPhaChe: (values: { huongDanSuDungThuoc?: string, thongTinThuocPhaChe?: string }) => void;
}
interface IHuongDan {
  huongDanSuDungThuoc: string;
}
const ModalHDSDorPhaCheThuoc: FC<Props> = (props) => {
  let { type, handleClose, handleChangeorNhomThuocPhaChe } = props;

  let validationSchema = Yup.object({
    [type === CODE_ITEM_MENU_THUOC.SUA_HUONG_DAN_SU_DUNG?`huongDanSuDungThuoc`:`thongTinThuocPhaChe`]: Yup.string().required("Trường này là bắt buộc !"),
  });
  const handleFormSubmit = (values: any) => {
    handleChangeorNhomThuocPhaChe(values);
    handleClose();
  };

  return (
    <Modal show={true} animation centered onHide={handleClose} className="dialog-background">
      <Formik<IHuongDan>
        initialValues={{ huongDanSuDungThuoc: "" }}
        validationSchema={validationSchema}
        validateOnChange={true}
        validate={(values) => {
          const errors: FormikErrors<any> = {};
          return errors;
        }}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <div className="timKiemBenhNhan">
            <Modal.Header className="py-3 header-modal" closeButton>
              <Modal.Title className="text-pri">
                {type === CODE_ITEM_MENU_THUOC.SUA_HUONG_DAN_SU_DUNG
                  ? "Hướng dẫn sử dụng thuốc"
                  : "Thông tin thuốc pha chế"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-16 px-24 spaces">
              <div>
                <div className="spaces flex-2 mb-4">
                  <TextField
                    name={`${type === CODE_ITEM_MENU_THUOC.SUA_HUONG_DAN_SU_DUNG?"huongDanSuDungThuoc":"thongTinThuocPhaChe"}`}
                    className="custom-input "
                    // label="Hướng dẫn sử dụng thuốc"
                    labelClassName="min-w-75px"
                    as="textarea"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center py-1">
              <Button
                className="btn-fill"
                type="submit"
                // onClick={() => handleFormSubmit(values)}
              >
                <IconButtonSave />
                <span>Lưu</span>
              </Button>
              <Button className="btn-outline" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default ModalHDSDorPhaCheThuoc;
