import { useFormikContext } from "formik";
import { FC, useContext, useEffect, useState } from "react";
import { Button, Dropdown, FormCheck, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import { IconButtonSave } from "../../../component/IconSvg";
import LabelRequired from "../../../component/LabelRequired";
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
    <div className="modelKhamBenh">
      <div className={`thongTinKhamBenh ${hideFooter ? "ps-4" : "ps-0"}`}>
        <Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <FormCheck
              className="ms-3"
              type="checkbox"
              label="Bệnh nhân cấp sổ khám bệnh mới"
              name="benhNhanCapSoKhamBenhMoi"
              onChange={(e) => setFieldValue("benhNhanCapSoKhamBenhMoi", e.target.checked)}
            />
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              label="Lý do khám"
              labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2  d-flex flex-column align-items-start"
              name="lyDoKham"
              value={values?.lyDoKham || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <FormCheck
              className="ms-3 spaces left-125"
              type="checkbox"
              label="Dị ứng"
              name="diUng"
              onChange={(e) => setFieldValue("diUng", e.target.checked)}
            />
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              label="Tiền sử dị ứng"
              labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2  d-flex flex-column align-items-start h-50"
              name="tienSuDiUng"
              as="textarea"
              rows={2}
              value={values?.tienSuDiUng || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              disabled={!benhNhanInfo?.isKhamBenh || !values.diUng}
            />
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              label="Quá trình bệnh lý"
              labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2  d-flex flex-column align-items-start h-50"
              name="quaTrinhBenhLy"
              as="textarea"
              rows={2}
              value={values?.quaTrinhBenhLy || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <div className="d-flex gap-3">
              <TextField
                labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2"
                className="w-100 h-50"
                name="trieuChung"
                label="Triệu chứng"
                as="textarea"
                rows={2}
                value={values?.trieuChung || ""}
                // onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
              <Button className="bg-white spaces p-0 min-w-103" disabled={!benhNhanInfo?.isKhamBenh}>
                <u
                  className="text-pri fw-bold fs-13px pe-0 text-end"
                  onClick={() => {
                    setOpenModal({ trieuChung: true });
                  }}
                >
                  Triệu chứng
                </u>
              </Button>
            </div>
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              label="Tiền sử bản thân"
              labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2  d-flex flex-column align-items-start h-50"
              name="tienSuBanThan"
              as="textarea"
              rows={2}
              value={values?.tienSuBanThan || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              label="Tiền sử gia đình"
              labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2  d-flex flex-column align-items-start h-50"
              name="tienSuGiaDinh"
              as="textarea"
              rows={2}
              value={values?.tienSuGiaDinh || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="mt-2 m-8 spaces pe-0 align-items-center">
            <SinhHieu sinhHieu={sinhHieu} setSinhHieu={setSinhHieu} />
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              label="Khám bệnh"
              labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2  d-flex flex-column align-items-start"
              name="khamBenh"
              value={values?.khamBenh || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              label="Khám các bộ phận"
              labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2 align-items-start"
              name="khamBoPhan"
              as="textarea"
              rows={2}
              value={values?.khamBoPhan || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="my-2 pe-0 w-100">
            <div className="d-flex ps-8">
              <LabelRequired label="Chẩn đoán ban đầu" className="ms-0 min-w-140 spaces " />
              <div className="w-100">
                <AutocompleteV2
                  name="chanDoanBanDau"
                  options={[{ code: "viemGanB", name: "Viêm gan B" }]}
                  value={values?.chanDoanBanDau}
                  onChange={(selectedOption) => {
                    setFieldValue("chanDoanBanDau", selectedOption);
                  }}
                  getOptionLabel={(option) => (option?.name ? `${option?.code} - ${option?.name}` : "")}
                  className="autocomplete-custom spaces width-100 "
                  isDisabled={!benhNhanInfo?.isKhamBenh}
                />
              </div>
            </div>
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <div className="d-flex">
              <u className="text-primary cursor-pointer">
                <LabelRequired
                  label="Cập nhật chẩn đoán từ phiếu chỉ định"
                  className="ms-0 max-w-140 min-w-140 spaces "
                />
              </u>
              <TextField
                labelClassName="pe-2 min-w-140 spaces ms-0"
                className="w-100 d-flex flex-column align-items-start h-50"
                name="benhKemTheo"
                as="textarea"
                rows={2}
                value={values?.benhKemTheo || ""}
                // onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
              <Button
                className="bg-white spaces min-w-103 p-0"
                onClick={() => {
                  setOpenModal({ benhKemTheo: true });
                }}
                disabled={!benhNhanInfo?.isKhamBenh}
              >
                <u className="fw-bold text-pri fs-13px">Bệnh kèm theo</u>
              </Button>
            </div>
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center">
            <TextField
              label="Hướng xử lý"
              labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2 h-50"
              name="huongXuLy"
              as="textarea"
              rows={2}
              value={values?.huongXuLy || ""}
              // onChange={handleChangeKhamBenh}
              readOnlyText={benhNhanInfo?.isView}
              disabled={!benhNhanInfo?.isKhamBenh}
            />
          </Row>
          <Row className="m-8 spaces pe-0 align-items-center position-relative">
            <div className="d-flex">
              <TextField
                label="Tóm tắt kết quả cận lâm sàng"
                labelClassName="pe-2 min-w-140 max-w-140 spaces ms-0"
                className="flex-auto h-50"
                name="ketQuaCanLamSang"
                as="textarea"
                rows={2}
                value={values?.ketQuaCanLamSang || ""}
                // onChange={handleChangeKhamBenh}
                readOnlyText={benhNhanInfo?.isView}
                disabled={!benhNhanInfo?.isKhamBenh}
              />
              <Button
                className="bg-white"
                onClick={() => {
                  benhNhanInfo?.isKhamBenh && setOpenModalChonKetQuaDichVu(true);
                  setTenDichVuCLS(DICH_VU_CAN_LAM_SANG.KET_QUA_CAN_LAM_SANG.code);
                }}
                disabled={!benhNhanInfo?.isKhamBenh}
              >
                <u className="text-primary cursor-pointer pe-0 text-end">
                  <LabelRequired label="Chọn dịch vụ" className="ms-0 min-w-140 " />
                </u>
              </Button>
            </div>
          </Row>
        </Row>

        <div>
          <Row className="ps-7">
            <h5 className="mt-10 mb-n1 spaces fs-14px text-pri">Kết quả lâm sàng có giá trị chẩn đoán</h5>
          </Row>
          <Row className="mt-n1">
            <Row className="m-8 spaces pe-0 align-items-center d-flex flex-nowrap align-items-end">
              <div className="spaces flex-auto pe-0">
                <TextField
                  label="Xét nghiệm máu"
                  labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-1"
                  className="d-flex flex-column align-items-start"
                  name="xetNghiemMau"
                  value={values?.xetNghiemMau || ""}
                  // onChange={handleChangeKhamBenh}
                  readOnly={true}
                  disabled={!benhNhanInfo?.isKhamBenh}
                />
              </div>
              <div className="spaces h-48 d-flex align-items-end flex-1">
                <Button
                  className="btn-fill"
                  onClick={() => {
                    setOpenModalChonKetQuaDichVu(true);
                    setTenDichVuCLS(DICH_VU_CAN_LAM_SANG.XET_NGHIEM_MAU.code);
                  }}
                  disabled={!benhNhanInfo?.isKhamBenh}
                >
                  Chọn
                </Button>
              </div>
            </Row>
            <Row className="m-8 spaces pe-0 align-items-center d-flex flex-nowrap align-items-end">
              <div className="spaces flex-auto pe-0">
                <TextField
                  label="Xét nghiệm nước tiểu"
                  labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2"
                  className="d-flex flex-column align-items-start"
                  name="xetNghiemNuocTieu"
                  value={values?.xetNghiemNuocTieu || ""}
                  // onChange={handleChangeKhamBenh}
                  readOnly={true}
                  disabled={!benhNhanInfo?.isKhamBenh}
                />
              </div>
              <div className="spaces h-48 d-flex align-items-end flex-1">
                <Button
                  className="btn-fill"
                  onClick={() => {
                    setOpenModalChonKetQuaDichVu(true);
                    setTenDichVuCLS(DICH_VU_CAN_LAM_SANG.XET_NGHIEM_NUOC_TIEU.code);
                  }}
                  disabled={!benhNhanInfo?.isKhamBenh}
                >
                  Chọn
                </Button>
              </div>
            </Row>
            <Row className="m-8 spaces pe-0 align-items-center d-flex flex-nowrap align-items-end">
              <div className="spaces flex-auto pe-0">
                <TextField
                  label="X-Quang"
                  labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2"
                  className="d-flex flex-column align-items-start"
                  name="xquang"
                  value={values?.xquang || ""}
                  // onChange={handleChangeKhamBenh}
                  readOnly={true}
                  disabled={!benhNhanInfo?.isKhamBenh}
                />
              </div>
              <div className="spaces h-48 d-flex align-items-end flex-1">
                <Button
                  className="btn-fill"
                  onClick={() => {
                    setOpenModalChonKetQuaDichVu(true);
                    setTenDichVuCLS(DICH_VU_CAN_LAM_SANG.X_QUANG.code);
                  }}
                  disabled={!benhNhanInfo?.isKhamBenh}
                >
                  Chọn
                </Button>
              </div>
            </Row>
            <Row className="m-8 spaces pe-0 align-items-center d-flex flex-nowrap align-items-end">
              <div className="spaces flex-auto pe-0">
                <TextField
                  label="Siêu âm"
                  labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2"
                  className="d-flex flex-column align-items-start"
                  name="sieuAm"
                  value={values?.sieuAm || ""}
                  // onChange={handleChangeKhamBenh}
                  readOnly={true}
                  disabled={!benhNhanInfo?.isKhamBenh}
                />
              </div>
              <div className="spaces h-48 d-flex align-items-end flex-1">
                <Button
                  className="btn-fill"
                  onClick={() => {
                    setOpenModalChonKetQuaDichVu(true);
                    setTenDichVuCLS(DICH_VU_CAN_LAM_SANG.SIEU_AM.code);
                  }}
                  disabled={!benhNhanInfo?.isKhamBenh}
                >
                  Chọn
                </Button>
              </div>
            </Row>
            <Row className="m-8 spaces pe-0 align-items-center d-flex flex-nowrap align-items-end">
              <div className="spaces flex-auto pe-0">
                <TextField
                  label="Nội soi - TDCN"
                  labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2"
                  className="d-flex flex-column align-items-start"
                  name="noiSoiTDCN"
                  value={values?.noiSoiTDCN || ""}
                  // onChange={handleChangeKhamBenh}
                  readOnly={true}
                  disabled={!benhNhanInfo?.isKhamBenh}
                />
              </div>
              <div className="spaces h-48 d-flex align-items-end flex-1">
                <Button
                  className="btn-fill"
                  onClick={() => {
                    setOpenModalChonKetQuaDichVu(true);
                    setTenDichVuCLS(DICH_VU_CAN_LAM_SANG.NOI_SOI_TDCN.code);
                  }}
                  disabled={!benhNhanInfo?.isKhamBenh}
                >
                  Chọn
                </Button>
              </div>
            </Row>
            <Row className="m-8 spaces pe-0 align-items-center d-flex flex-nowrap align-items-end">
              <div className="spaces flex-auto pe-0">
                <TextField
                  label="Giải phẫu bệnh"
                  labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2"
                  className="d-flex flex-column align-items-start"
                  name="giaiPhauBenh"
                  value={values?.giaiPhauBenh || ""}
                  // onChange={handleChangeKhamBenh}
                  readOnly={true}
                  disabled={!benhNhanInfo?.isKhamBenh}
                />
              </div>
              <div className="spaces h-48 d-flex align-items-end flex-1">
                <Button
                  className="btn-fill"
                  onClick={() => {
                    setOpenModalChonKetQuaDichVu(true);
                    setTenDichVuCLS(DICH_VU_CAN_LAM_SANG.GIAI_PHAU_BENH.code);
                  }}
                  disabled={!benhNhanInfo?.isKhamBenh}
                >
                  Chọn
                </Button>
              </div>
            </Row>
            <Row className="m-8 spaces pe-0 align-items-center d-flex flex-nowrap align-items-end">
              <div className="spaces flex-auto pe-0">
                <TextField
                  label="Xét nghiệm tế bào"
                  labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2"
                  className="d-flex flex-column align-items-start"
                  name="xetNghiemTeBao"
                  value={values?.xetNghiemTeBao || ""}
                  // onChange={handleChangeKhamBenh}
                  readOnly={true}
                  disabled={!benhNhanInfo?.isKhamBenh}
                />
              </div>
              <div className="spaces h-48 d-flex align-items-end flex-1">
                <Button
                  className="btn-fill"
                  onClick={() => {
                    setOpenModalChonKetQuaDichVu(true);
                    setTenDichVuCLS(DICH_VU_CAN_LAM_SANG.XET_NGHIEM_TE_BAO.code);
                  }}
                  disabled={!benhNhanInfo?.isKhamBenh}
                >
                  Chọn
                </Button>
              </div>
            </Row>
            <Row className="m-8 spaces pe-0 align-items-center d-flex flex-nowrap align-items-end">
              <div className="spaces flex-auto pe-0">
                <TextField
                  label="Xét nghiệm khác"
                  labelClassName="pe-2 min-w-140 spaces w-100 text-start mb-1 mt-2"
                  className="d-flex flex-column align-items-start"
                  name="xetNghiemKhac"
                  value={values?.xetNghiemKhac || ""}
                  // onChange={handleChangeKhamBenh}
                  readOnly={true}
                  disabled={!benhNhanInfo?.isKhamBenh}
                />
              </div>
              <div className="spaces h-48 d-flex align-items-end flex-1">
                <Button
                  className="btn-fill"
                  onClick={() => {
                    setOpenModalChonKetQuaDichVu(true);
                    setTenDichVuCLS(DICH_VU_CAN_LAM_SANG.XET_NGHIEM_KHAC.code);
                  }}
                  disabled={!benhNhanInfo?.isKhamBenh}
                >
                  Chọn
                </Button>
              </div>
            </Row>
          </Row>
        </div>
      </div>
      {!hideFooter && (
        <div className="flex flex-end gap-4 pt-3 pb-2 btn-luu">
          {/* <Button className="btn-fill mr-5">
            <span
              onClick={() => {
                setBenhNhanInfo({ isKhamBenh: true });
              }}
            >
              Bắt đầu khám
            </span>
          </Button> */}
          <Button className="btn-fill">
            <i className="bi bi-check2"></i>
            Đợt khám gần nhất
          </Button>
          <Button className="btn-fill" onClick={() => setOpenModalTuyChonBaoCao(true)}>
            <i className="bi bi-printer"></i>
            Tờ điều trị
          </Button>
          <Dropdown className="dropdown-btn menu-icon  ">
            <Dropdown.Toggle className="btn-fill">
              <i className="bi bi-tag rotate-90 spaces mt-6"></i>
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
            className="btn-fill"
            type="submit"
            disabled={benhNhanInfo?.trangThai === trangThaiBenhNhan.ketThucKham.code || !benhNhanInfo?.isKhamBenh}
            // onClick={() => handleSubmit()}
          >
            <IconButtonSave />
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
