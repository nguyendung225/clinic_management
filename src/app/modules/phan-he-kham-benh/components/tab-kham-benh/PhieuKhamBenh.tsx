import { useFormikContext } from "formik";
import { FC, useContext, useEffect, useState } from "react";
import { Button, Dropdown, Row } from "react-bootstrap";
import TextField from "../../../component/TextField";
import { DICH_VU_CAN_LAM_SANG, constTypeBenhKemTheo } from "../../constants/KhamBenh";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import { KetQuaDichVu, MauKhamBenh, iSinhHieu } from "../../models/ThongTinKhamBenhModel";
import SinhHieu from "./SinhHieu";
import ModalChonKetQuaDichVu from "./modal-chon-ket-qua-dich-vu/ModalChonKetQuaDichVu";
import ModalMauKhamBenhHoiBenh from "../modal-thong-tin-kham-benh/ModalMauKhamBenhHoiBenh";
import ModalTuyChonBaoCao from "../modal-thong-tin-kham-benh/ModalTuyChonBaoCao";
import ModalDanhSachMauKhamBenhHoiBenh from "../modal-thong-tin-kham-benh/ModalDanhSachMauKhamBenhHoiBenh";
import { DataDanhSachMauKhamBenh } from "../FakeData";
import ModalBenhKemTheo from "../ModalBenhKemTheo";
import ModalTrieuChung from "../modal-thong-tin-kham-benh/ModalTrieuChung";
import { trangThaiBenhNhan } from "../../constants/BenhNhanConst";

interface Props {
  hideFooter?: true;
}

export const PhieuKhamBenh: FC<Props> = ({ hideFooter }) => {
  const [openModalChonKetQuaDichVu, setOpenModalChonKetQuaDichVu] = useState<boolean>(false);
  const [ketQuaCLS, setKetQuaCLS] = useState<KetQuaDichVu[]>([]);
  const [tenDichVuCLS, setTenDichVuCLS] = useState<string>("");
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [sinhHieu, setSinhHieu] = useState<iSinhHieu>({});
  const [openModalTuyChonBaoCao, setOpenModalTuyChonBaoCao] = useState<boolean>(false);
  const [mauSelected, setMauSelected] = useState<MauKhamBenh | null>(null);
  const [openModalDanhSachMauKhamBenhHoiBenh, setOpenModalDanhSachMauKhamBenhHoiBenh] = useState<boolean>(false);
  const [openModalMauKhamBenh, setOpenModalMauKhamBenh] = useState<boolean>(false);
  const [dataDanhSachMau, setDataDanhSachMau] = useState<MauKhamBenh[]>(DataDanhSachMauKhamBenh);
  const [openModal, setOpenModal] = useState<any>({});

  let { values, setFieldValue, resetForm, setValues } = useFormikContext<any>();
  useEffect(() => {
    resetForm();
  }, [benhNhanInfo]);

  useEffect(() => {
    mauSelected?.id && setValues({ ...mauSelected });
  }, [mauSelected]);

  useEffect(() => {
    setFieldValue(
      tenDichVuCLS,
      ketQuaCLS.map((item) => `${item.tenDichVu} ${item.ketQua !== null ? "(" + item.ketQua + ")" : ""}`).join(", ")
    );
  }, [ketQuaCLS]);

  return (
    <div className="modelKhamBenh spaces h-calc-vh-364">
      <div className={`thongTinKhamBenh ${hideFooter ? "ps-4" : "ps-0"}`}>
        <Row>
          <Row className="spaces ml-8">
            <h4 className="text-title fw-bold fs-5 mb-0">I. Lý do vào viện</h4>
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              as="textarea"
              rows={3}
              name="lyDoKham"
              value={values?.lyDoKham || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              // disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="spaces ml-8">
            <h4 className="text-title fw-bold fs-5 mb-0">II. Hỏi bệnh</h4>
          </Row>
          <Row className="spaces ml-10 mt-5">
            <h4 className="fw-bold fs-6 mb-0">1. Quá trình bệnh lý</h4>
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              name="quaTrinhBenhLy"
              as="textarea"
              rows={2}
              value={values?.quaTrinhBenhLy || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              // disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="spaces ml-10 mt-5">
            <h4 className="fw-bold fs-6 mb-0">2. Tiền sử bệnh</h4>
          </Row>
          <Row className="spaces ml-10 mt-10">
            <p className="fs-6 mb-0">&#8226; Bản thân (Phát triển thể lực từ nhỏ đến lớn, những bệnh đã mắc, phương pháp ĐT, tiêm phòng, ăn uống, sinh hóa, vv...)</p>
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              name="tienSuBanThan"
              as="textarea"
              rows={2}
              value={values?.tienSuBanThan || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              // disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="spaces ml-10 mt-10">
            <p className="fs-6 mb-0">&#8226; Gia đình (Những người trong gia đình: Bệnh đã mắc, đời sống, tinh thần, vật chất, vv...)</p>
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              name="tienSuGiaDinh"
              as="textarea"
              rows={2}
              value={values?.tienSuGiaDinh || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              // disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>

          <Row className="spaces ml-8">
            <h4 className="text-title fw-bold fs-5 mb-0">III. Khám bệnh</h4>
          </Row>
          <Row className="spaces ml-10 mt-5">
            <h4 className="fw-bold fs-6 mb-0">1. Toàn thân (Ý thức, da niêm mạc, hệ thống hạch, tuyến giáp, vị trí, kích thước, số lượng, di động, vv...)</h4>
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              as="textarea"
              rows={2}
              name="khamBenh"
              value={values?.khamBenh || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              // disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="mt-2 m-8 spaces pe-0 align-items-center">
            <SinhHieu sinhHieu={sinhHieu} setSinhHieu={setSinhHieu} />
          </Row>
          <Row className="spaces ml-10 mt-5">
            <h4 className="fw-bold fs-6 mb-0">2. Các bộ phận</h4>
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              name="khamBoPhan"
              as="textarea"
              rows={2}
              value={values?.khamBoPhan || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              // disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>

          <div className="spaces ml-10 mt-5 mb-n2 d-flex flex-row justify-content-between ps-6">
            <h4 className="fw-bold fs-6">3. Tóm tắt kết quả cận lâm sàng</h4>

            <Button
              className="bg-white"
              onClick={() => {
                benhNhanInfo?.isKhamBenh && setOpenModalChonKetQuaDichVu(true);
                setTenDichVuCLS(DICH_VU_CAN_LAM_SANG.KET_QUA_CAN_LAM_SANG.code);
              }}
              disabled={!benhNhanInfo?.isKhamBenh}
            >
              <u className="fw-bold text-pri fs-13px">Chọn dịch vụ</u>
            </Button>
          </div>
          <Row className="m-8 spaces pe-0 align-items-center position-relative">
            <TextField
              className="flex-auto h-50"
              name="ketQuaCanLamSang"
              as="textarea"
              rows={2}
              value={values?.ketQuaCanLamSang || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              // disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
        </Row>
      </div>
      {!hideFooter && (
        <div className="flex flex-end gap-4 pt-3 pb-2 btn-luu">
          <Button className="btn-fill spaces min-w-150px">
            Đợt khám gần nhất
          </Button>
          <Button className="btn-fill spaces min-w-100px" onClick={() => setOpenModalTuyChonBaoCao(true)}>
            Tờ điều trị
          </Button>
          <Dropdown className="dropdown-btn menu-icon  ">
            <Dropdown.Toggle className="btn-fill spaces min-w-130px">
              Mẫu khám bệnh
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setFieldValue("tenMau", null);
                  setMauSelected({ ...values, id: null });
                  setOpenModalMauKhamBenh(true);
                }}
              >
                <div className="ps-5 spaces line-height-30">Lưu vào mẫu mới</div>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setOpenModalDanhSachMauKhamBenhHoiBenh(true)}>
                <div className="ps-5 spaces line-height-30">Danh sách các mẫu đã tạo</div>
              </Dropdown.Item>
              <Dropdown.Item className="bg-light spaces line-height-30">
                <b>Mẫu khám bệnh hỏi bệnh</b>
              </Dropdown.Item>
              {dataDanhSachMau?.map((item) => (
                <Dropdown.Item
                  onClick={() => {
                    setValues(item);
                  }}
                >
                  <div className="ps-5 spaces line-height-30">{item?.tenMau}</div>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button
            className="btn-fill spaces min-w-80px"
            type="submit"
            disabled={benhNhanInfo?.trangThai === trangThaiBenhNhan.ketThucKham.code || !benhNhanInfo?.isKhamBenh}
            // onClick={() => handleSubmit()}
          >
            <span>Lưu</span>
          </Button>
        </div>
      )}
      {openModalMauKhamBenh && (
        <ModalMauKhamBenhHoiBenh
          mauSelected={mauSelected as MauKhamBenh}
          setMauSelected={setMauSelected}
          dataDanhSachMau={dataDanhSachMau}
          setDataDanhSachMau={setDataDanhSachMau}
          handleClose={() => setOpenModalMauKhamBenh(false)}
        />
      )}
      {openModalTuyChonBaoCao && <ModalTuyChonBaoCao handleClose={() => setOpenModalTuyChonBaoCao(false)} />}
      {openModalDanhSachMauKhamBenhHoiBenh && (
        <ModalDanhSachMauKhamBenhHoiBenh
          setMauSelected={setMauSelected}
          handleClose={() => setOpenModalDanhSachMauKhamBenhHoiBenh(false)}
        />
      )}
      {openModalChonKetQuaDichVu && (
        <ModalChonKetQuaDichVu
          setKetQuaCLS={setKetQuaCLS}
          name={tenDichVuCLS}
          handleClose={() => setOpenModalChonKetQuaDichVu(false)}
        />
      )}
      {openModal.benhKemTheo && (
        <ModalBenhKemTheo
          type={constTypeBenhKemTheo.ICD10.code}
          setListBenhKemTheo={(item: string) => setFieldValue(constTypeBenhKemTheo.ICD10.code, item)}
          handleClose={() => setOpenModal({})}
        />
      )}
      {openModal.trieuChung && (
        <ModalTrieuChung
          setListTrieuChung={(item: string) => setFieldValue("trieuChung", item)}
          handleClose={() => setOpenModal({})}
        />
      )}
    </div>
  );
};

export default PhieuKhamBenh;
