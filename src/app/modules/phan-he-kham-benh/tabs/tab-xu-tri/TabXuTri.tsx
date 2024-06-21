import { useContext, useState } from "react";
import { Button, Col, FormCheck, Row } from "react-bootstrap";
import Autocomplete from "../../../component/AutocompleteObject";
import LabelRequired from "../../../component/LabelRequired";
import TextValidator from "../../../component/TextValidator";
import "../../PhanHeKhamBenh.scss";
import { CODE_LIST_HINH_THUC_XU_TRI, HINH_THUC_XU_TRI } from "../../constants/KhamBenh";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import { useFormik } from "formik";
import { ObjectSelectAutocomplete } from "../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { PATH_NAME, VARIABLE_STRING } from "../../../utils/Constant";
import { IVatTu } from "../../models/ThuocModels";
import ModalCapNhatThongTinRaVien from "../../modals/modal-tab-xu-tri/ModalCapNhatThongTinRaVien";
import ModalCapNhatThongTinTuVong from "../../modals/modal-tab-xu-tri/ModalCapNhatThongTinTuVong";
import { useLocation } from "react-router-dom";

export type KhamBenh = {
  thongTinKhamBenh?: any;
  setThongTinKhamBenh: ((data: any) => void) | undefined;
};

export const TabXuTri = () => {
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const { pathname } = useLocation();
  const [openModalCapNhatThongTinRaVien, setOpenModalCapNhatThongTinRaVien] = useState(false);
  const [openModalCapNhatThongTinTuVong, setOpenModalCapNhatThongTinTuVong] = useState(false);

  const formik = useFormik<IVatTu>({
    initialValues: {
      hinhThucXuTri: null,
    },
    onSubmit: (values) => {
      console.log(values);
    }
  })

  const handleSelectOption = (option: ObjectSelectAutocomplete, name: string) => {
    formik.setFieldValue(name, option)
    if (!option) return
    if (VARIABLE_STRING.CHUYEN_KHOA === option?.code) return;
    CODE_LIST_HINH_THUC_XU_TRI.includes(option?.code as string) ? setOpenModalCapNhatThongTinRaVien(true) : setOpenModalCapNhatThongTinTuVong(true);
  }

  return (
    <div>
      <div className={`spaces h-calc-vh-${PATH_NAME.KHAM_BENH === pathname ? "133" : "169"} border-bottom p-7 bg-white mb-6`}>
        <Row className="mb-1">
          <Col xs={4} className="spaces mt-1">
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <LabelRequired label="Chẩn đoán xác định" />
                <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Chọn chẩn đoán</u></a>
              </div>

              <TextValidator as="textarea" rows={5} />
            </div>

            <div>
              <div className="d-flex mb-1">
                <LabelRequired label="Nguyên nhân - ICD10" className="min-w-150px" />
                <TextValidator />
              </div>
              <TextValidator as="textarea" rows={3} />
            </div>
          </Col>

          <Col xs={8} className="ps-0">
            <div className="d-flex ">
              <LabelRequired label="Bệnh chính - ICD10" className="min-w-150px" />
              <Autocomplete options={[]} />
            </div>

            <div>
              <div className="d-flex justify-content-between">
                <LabelRequired label="Bệnh kèm theo - ICD10" />
                <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Cập nhật bệnh chính</u></a>
                <a href="/" onClick={(e) => { e.preventDefault(); }}><u>Cập nhật bệnh kèm theo</u></a>
              </div>
              <div>
                <TextValidator as="textarea" rows={9} />
              </div>
            </div>
          </Col>
        </Row>

        <div className="d-flex mb-1">
          <div className="me-2">
            <LabelRequired label="Thời gian xử trí" />
            <TextValidator type="datetime-local" className="spaces W-200" />
          </div>

          <div className="me-2 min-w-200px">
            <LabelRequired label="Kết quả điều trị" />
            <Autocomplete options={[]} />
          </div>

          <div className="me-2">
            <FormCheck type="checkbox" label="Thủ thuật" />
            <FormCheck type="checkbox" label="Nội trú" />
          </div>

          <div className="me-2">
            <FormCheck type="checkbox" label="Phẫu thuật" />
            <FormCheck type="checkbox" label="Nội trú ban ngày" />
          </div>

          <div className="me-2">
            <FormCheck type="checkbox" label="Tai biến" />
            <FormCheck type="checkbox" label="Ngoại trú" />
          </div>

          <div className="me-2">
            <FormCheck type="checkbox" label="Biến chứng" />
          </div>
        </div>

        <div className="d-flex">
          <div className="min-w-200px me-2">
            <LabelRequired label="Hình thức xử trí" />
            <Autocomplete
              options={HINH_THUC_XU_TRI}
              name="hinhThucXutri"
              value={formik.values?.hinhThucXuTri || null}
              onChange={(option) => handleSelectOption(option, VARIABLE_STRING.HINH_THUC_XU_TRI)}
            />
          </div>

          {formik.values?.hinhThucXuTri?.code === VARIABLE_STRING.CHUYEN_KHOA && <div className="w-100">
            <LabelRequired label="Tên khoa" />
            <Autocomplete options={[]} />
          </div>}
        </div>
      </div>

      <div className="d-flex gap-3 justify-content-center py-2 bg-white">
        <Button className="btn-fill" type="submit">
          Lưu
        </Button>
      </div>

      <ModalCapNhatThongTinRaVien
        show={openModalCapNhatThongTinRaVien}
        handleCloseDialog={() => setOpenModalCapNhatThongTinRaVien(false)}
        codeHinhThucXuTri={formik.values?.hinhThucXuTri?.code as string}
      />

      <ModalCapNhatThongTinTuVong show={openModalCapNhatThongTinTuVong} handleCloseDialog={() => setOpenModalCapNhatThongTinTuVong(false)} />
    </div>
  );
};

export default TabXuTri;
