import { Button, Form, FormGroup, Modal } from "react-bootstrap"
import { LIST_DOI_TUONG_TIEP_NHAN } from "../../constants/PhanHeTiepNhan";
import TextField from "../../../component/TextField";
import LabelRequired from "../../../component/LabelRequired";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { useEffect } from "react";
import TextValidator from "../../../component/TextValidator";

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  selectedRow: any;
}

const ModalGoDuyetThanhToan = ({ show, handleCloseDialog, selectedRow }: Props) => {
  const formik = useFormik({
    initialValues: {
      ngayYeuCau: "",
      nguoiYeuCau: "",
      lyDoGoDuyet: "",
    },
    validationSchema: Yup.object({
      lyDoGoDuyet: Yup.string().required("Bắt buộc nhập")
    }),
    onSubmit: (values) => {
      console.log(values);
      handleCloseDialog();
      formik.resetForm();
    }
  })

  useEffect(() => {
    formik.setFieldValue("ngayYeuCau", moment().format("YYYY-MM-DDThh:mm"));
    formik.setFieldValue("nguoiYeuCau", "Quản trị hệ thống");
  }, [formik.values?.ngayYeuCau, formik.values?.nguoiYeuCau])

  return (
    <Modal centered show={show} onHide={handleCloseDialog}>
      <Modal.Header className="py-4" closeButton>
        <Modal.Title>
          Gỡ duyệt thanh toán
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <div className="d-flex justify-content-end h-100 text-danger border-bottom mb-2">
            <div className="text-break fw-500 text-end me-2">
              <div className="text-uppercase fw-600 fs-7">
                <span>{selectedRow[0]?.hoTen} | {selectedRow[0]?.maBn} | </span>{" "}
                <span className="fs-7">
                  Tuổi: {selectedRow[0]?.age} | {selectedRow[0]?.gioiTinh}
                </span>
              </div>
              <div className="fs-7">
                {LIST_DOI_TUONG_TIEP_NHAN.find(item => item?.code === selectedRow?.[0]?.loaiDoiTuong)?.name}
              </div>{" "}
              <div className="text-truncate fs-7">Địa chỉ: {selectedRow[0]?.diaChi}</div>
            </div>
          </div>

          <TextField
            name="ngayYeuCau"
            type="dateTime-local"
            label="Ngày yêu cầu"
            labelClassName="min-w-125px"
            className="mb-1"
            value={formik.values?.ngayYeuCau || ""}
            onChange={formik.handleChange}
          />

          <TextField
            name="nguoiYeuCau"
            type="text"
            label="Người yêu cầu"
            labelClassName="min-w-125px"
            className="mb-1"
            value={formik.values?.nguoiYeuCau || ""}
            disabled={true}
          />

          <div className="d-flex align-items-start">
            <LabelRequired isRequired label="Lý do gỡ duyệt" className="min-w-125px" />
            <TextValidator
              name="lyDoGoDuyet"
              type="text"
              as="textarea"
              value={formik.values?.lyDoGoDuyet || ""}
              onChange={formik.handleChange}
              errors={formik.errors?.lyDoGoDuyet}
              touched={formik.touched?.lyDoGoDuyet}
            />
          </div>
        </Modal.Body>

        <Modal.Footer className="py-3">
          <Button className="btn-fill" type="submit">
            Lưu
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ModalGoDuyetThanhToan