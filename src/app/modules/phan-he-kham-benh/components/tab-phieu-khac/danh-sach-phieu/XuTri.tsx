import { useFormikContext } from "formik";
import moment from "moment";
import { FC, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ObjectSelectAutocomplete } from "../../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import LabelRequired from "../../../../component/LabelRequired";
import TextField from "../../../../component/TextField";
import AutocompleteV2 from "../../../../component/AutocompleteObjectV2";
import { OptionKetQuaDieuTri, XU_TRI } from "../../../constants/KhamBenh";
import { IconButtonSave } from "../../../../component/IconSvg";
import ModalBenhKemTheo from "../../ModalBenhKemTheo";
import CapToaChoVeModal from "../../../modals/modal-tab-xu-tri/ModalCapToaChoVe";
import ChuyenPhongKhamModal from "../../../modals/modal-tab-xu-tri/ModalChuyenPhongKham";
import HetDotDieuTriNgoaiTruModal from "../../../modals/modal-tab-xu-tri/ModalHetDotDieuTriNgoaiTru";
import TuVongModal from "../../../modals/modal-tab-xu-tri/ModalTuVong";
import ChuyenTuyenModal from "../../../modals/modal-tab-xu-tri/ModalChuyenTuyen";
import { VARIABLE_STRING } from "../../../../utils/Constant";

export type KhamBenh = {
  thongTinKhamBenh?: any;
  setThongTinKhamBenh: ((data: any) => void) | undefined;
};
interface Props {
  hideFooter?: boolean;
}

export const XuTri: FC<Props> = ({ hideFooter }) => {

  const [typeBenhKemTheo, setTypeBenhKemTheo] = useState<string>("");
  const [shouldOpenXuTriModal, setShouldOpenXuTriModal] = useState<any>({});

  const { values, setFieldValue } = useFormikContext<any>();

  const handleChangeSelect = (selectedObject: any, name: string) => {
    if (VARIABLE_STRING.XU_TRI === name && selectedObject?.code) {
      let code = selectedObject?.code;
      setShouldOpenXuTriModal({ [code]: true });
    }
  };

  const handleCloseModal = () => {
    setShouldOpenXuTriModal({});
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-between h-calc-25px pe-2">
        <div>
          <Row>
            <Col xs="4" >
              <div className="d-flex justify-content-between">
                <LabelRequired label="Chẩn đoán xác định" className="min-w-145px" />
                <span className="text-lable-input">
                  <u className="text-pri text-underline me-4">Chọn chẩn đoán</u>
                </span>
              </div>
              <TextField
                className="w-100 d-flex flex-column align-items-start flex-auto spaces h-255"
                name="chuanDoanXacDinh"
                labelClassName="ms-0 min-w-145px"
                as="textarea"
              />
              <Row>
                <Col xs="6">
                  <TextField
                    className="w-100 d-flex flex-column align-items-start flex-auto spaces "
                    label="Thời gian xử trí"
                    name="thoiGianXuLy"
                    labelClassName="ms-0 min-w-145px"
                    type="dateTime-Local"
                    // readOnly
                    disable
                    value={values?.thoiGianXuLy}
                  />
                </Col>
                <Col xs="6">
                  <LabelRequired label="Kết quả điều trị" className="min-w-145px" />
                  <AutocompleteV2
                    options={OptionKetQuaDieuTri}
                    name="ketQuaDieuTri"
                    className="autocomplete-custom radius spaces width-100 "
                  />
                </Col>
                <Col xs="12">
                  <LabelRequired label="Hình thức xử trí" className="min-w-145px" />
                  <AutocompleteV2
                    options={XU_TRI}
                    name="hinhThucXuTri"
                    value={values?.hinhThucXuTri}
                    className="autocomplete-custom radius spaces width-100 "
                    onChange={(selectedOption: ObjectSelectAutocomplete) => {
                      setFieldValue("hinhThucXuTri", selectedOption);
                      setFieldValue("thoiGianXuLy", moment().format("YYYY-MM-DDTHH:mm"));
                      handleChangeSelect(selectedOption, "xuTri");
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs="8">
              <Row className="flex-row">
                <LabelRequired label="Bệnh chính - ICD10" className="min-w-145px" />
                <AutocompleteV2
                  options={[]}
                  name="benhChinhIcd10"
                  className="autocomplete-custom radius spaces width-100 "
                  getOptionLabel={(option: ObjectSelectAutocomplete) => `${option.code} - ${option.name}`}
                />
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <LabelRequired label="Bệnh kèm theo - ICD10" className="min-w-145px" />
                  <span className="text-lable-input">
                    <u className="text-pri text-underline me-4">Cập nhật bệnh chính</u>
                    <u className="text-pri text-underline">Cập nhật bệnh kèm theo</u>
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <TextField
                    className="w-100 d-flex flex-column align-items-start flex-auto spaces  pre-line"
                    name="benhKemTheo"
                    labelClassName="ms-0 min-w-145px"
                    as="textarea"
                  />
                  <Button
                    className="btn-fill"
                    onClick={() => {
                      setTypeBenhKemTheo("benhKemTheo");
                      setShouldOpenXuTriModal({ benhKemTheo: true });
                    }}
                  >
                    +
                  </Button>
                </div>
              </Row>
              <Row className="flex-row">
                <LabelRequired label="Bệnh chính - YHCT" className="min-w-145px" />
                <AutocompleteV2
                  options={[]}
                  name="benhChinhYHCT"
                  className="autocomplete-custom radius spaces width-100 "
                  getOptionLabel={(option: ObjectSelectAutocomplete) => `${option.code} - ${option.name}`}
                />
              </Row>
              <Row>
                <div className="d-flex justify-content-between">
                  <LabelRequired label="Bệnh kèm theo - YHCT" className="min-w-145px" />
                </div>
                <div className="d-flex gap-2">
                  <TextField
                    className="w-100 d-flex flex-column align-items-start flex-auto spaces "
                    name="benhKemTheoYhct"
                    labelClassName="ms-0 min-w-145px"
                    as="textarea"
                  />
                  <Button
                    className="btn-fill"
                    onClick={() => {
                      setTypeBenhKemTheo("benhKemTheoYhct");
                      setShouldOpenXuTriModal({ benhKemTheo: true });
                    }}
                  >
                    +
                  </Button>
                </div>
              </Row>
              <Row>
                <TextField
                  className="w-100 d-flex flex-column align-items-start flex-auto spaces h-85"
                  label="Lời dặn của bác sĩ"
                  name="loiDanCuaBacSi"
                  labelClassName="ms-0 min-w-145px"
                  as="textarea"
                />
              </Row>
            </Col>
          </Row>
          {shouldOpenXuTriModal.nhapVien && (
            <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
              <LabelRequired label="Tên khoa nội trú" className="min-w-145px" />
              <AutocompleteV2
                options={XU_TRI}
                name="tenKhoaNoiTru"
                className="autocomplete-custom radius spaces width-100 "
                onChange={(selectedOption: ObjectSelectAutocomplete) => handleChangeSelect(selectedOption, "xuTri")}
              />
            </Col>
          )}
          {shouldOpenXuTriModal.dieuTriNgoaiTru && (
            <Col xs={12} className="d-flex mb-3 align-items-center text-lable-input">
              <LabelRequired label="Tên khoa ngoại trú" className="min-w-145px" />
              <AutocompleteV2
                options={XU_TRI}
                name="TenKhoaNgoaiTru"
                className="autocomplete-custom radius spaces width-100 "
                onChange={(selectedOption: ObjectSelectAutocomplete) => handleChangeSelect(selectedOption, "xuTri")}
              />
            </Col>
          )}
          {values?.hinhThucXuTri?.code === "chuyenPhongKham" && (
            <Col xs={12} className="d-flex mb-3 flex-column">
              <LabelRequired label="Tên phòng khám" className="min-w-145px" />
              <AutocompleteV2
                options={[]}
                name="tenPhongKham"
                className="autocomplete-custom radius spaces width-100 "
                value={values.tenPhongKham}
                isReadOnly
                onClick={() => setShouldOpenXuTriModal({ chuyenPhongKham: true })}
                // onChange={(selectedOption) => handleChangeSelect(selectedOption, "xuTri")}
              />
            </Col>
          )}
          {values?.hinhThucXuTri?.code === "tuVong" && (
            <Col xs={12} className="d-flex mb-3 flex-column">
              <LabelRequired label="Thời điểm tử vong" className="min-w-145px" />
              <TextField name="thoiDiemTuVong" value={values.thoiDiemTuVong} />
            </Col>
          )}
        </div>
      </div>
      {shouldOpenXuTriModal.benhKemTheo && (
        <ModalBenhKemTheo
          type={typeBenhKemTheo}
          setListBenhKemTheo={(item: string) => setFieldValue(typeBenhKemTheo, item)}
          handleClose={() => handleCloseModal()}
        />
      )}
      <CapToaChoVeModal open={shouldOpenXuTriModal.capToaChoVe} handleCloseModal={() => handleCloseModal()} />
      <ChuyenPhongKhamModal open={shouldOpenXuTriModal.chuyenPhongKham} handleCloseModal={() => handleCloseModal()} />
      <HetDotDieuTriNgoaiTruModal
        open={shouldOpenXuTriModal.hetDotDieuTriNgoaiTru}
        handleCloseModal={() => handleCloseModal()}
      />
      <TuVongModal open={shouldOpenXuTriModal.tuVong} handleCloseModal={() => handleCloseModal()} />
      <ChuyenTuyenModal open={shouldOpenXuTriModal.chuyenTuyen} handleCloseModal={() => handleCloseModal()} />
    </>
  );
};

export default XuTri;
