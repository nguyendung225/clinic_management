import { useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import CustomTabMenu from "../component/CustomTabMenu"
import CustomMenu from "../component/menu/Menu"
import { IItemMenu } from "../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel"
import DanhSachBenhNhan from "./components/phan-he-hanh-chinh/DanhSachBenhNhan"
import ModalTuyChonThoiGian from "./components/phan-he-hanh-chinh/ModalTuyChonThoiGian"
import { CODE_MENU_HANH_CHINH, listMenuTimKiem } from "./constants/ConstantMenu"
import { CONSTANTS_HANH_CHINH, danhSachTabHanhChinh } from "./constants/ConstantPhanHeHanhChinh"
import ModalQuanLyThuoc from "./modals/modal-quan-ly-thuoc/ModalQuanLyThuoc"
import ModalTimKiemBenhNhanNangCao from "./modals/modal-tim-kiem-benh-nhan-nang-cao/ModalTimKiemBenhNhanNangCao"
import ModalChuyenPhong from "./modals/modal-chuyen-phong/ModalChuyenPhong"
import { PhanHeTiepDonContext } from "../phan-he-kham-benh/contexts/PhanHeTiepDonContext"
import { IBenhNhan } from "../phan-he-kham-benh/models/DSBenhNhanKhamBenhModels"

type Props = {}

const PhanHeHanhChinh = (props: Props) => {
  const [openModalTuyChonThoiGian, setOpenModalTuyChonThoiGian] = useState(false);
  const [openModalTimKiemBenhNhanNangCao, setOpenModalTimKiemBenhNhanNangCao] = useState(false);
  const [openModalQuanLyThuoc, setOpenModalQuanLyThuoc] = useState(false);
  const [loaiQuanLy, setLoaiQuanLy] = useState("");
  const [openModalChuyenPhong, setOpenModalChuyenPhong] = useState(false);
  const [benhNhanInfo, setBenhNhanInfo] = useState<IBenhNhan>();

  const handleSelectOptionMenu = (value: IItemMenu) => {
    const options = {
      [CODE_MENU_HANH_CHINH.TUY_CHON_THOI_GIAN]: () => setOpenModalTuyChonThoiGian(true),
      [CODE_MENU_HANH_CHINH.TIM_KIEM_NANG_CAO]: () => setOpenModalTimKiemBenhNhanNangCao(true),
    }

    options[value?.code]();
  }

  const handleOpenModalQuanLyThuoc = (loaiQuanLy: string) => {
    setOpenModalQuanLyThuoc(true);
    setLoaiQuanLy(loaiQuanLy);
  }

  const handleOpenModalChuyenPhong = () => {
    setOpenModalChuyenPhong(true);
  }

  return (
    <PhanHeTiepDonContext.Provider
      value={{
        setBenhNhanInfo,
        benhNhanInfo
      }}
    >
      <div className="reception-list bg-gray">
        <div className="reception__header spaces p-3 h-100">
          <Row className='border-bottom'>
            <Col className='py-1 d-flex'>
              <CustomMenu
                className='ms-1'
                handleSelectOption={() => { }}
                listMenuItem={[]}
                menuLabel={
                  <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                    <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                  </Button>
                }
              />

              <Button className='btn-fill min-w-50px me-2'>In</Button>
              <CustomMenu
                className='ms-1 me-1 min-w-80px'
                handleSelectOption={handleSelectOptionMenu}
                listMenuItem={listMenuTimKiem}
                menuLabel={<Button className='btn-fill spaces h-29'>Tìm Kiếm</Button>}
              />
              <Link to="/phan-he-tiep-nhan" className='btn-fill me-2'>Thêm BN</Link>
              <Button className='btn-fill me-2' onClick={() => handleOpenModalQuanLyThuoc(CONSTANTS_HANH_CHINH.THUOC)}>QL Thuốc</Button>
              <Button className='btn-fill me-2' onClick={() => handleOpenModalQuanLyThuoc(CONSTANTS_HANH_CHINH.VAT_TU)}>QL Vật tư</Button>
              <Button className='btn-fill me-2' onClick={() => handleOpenModalQuanLyThuoc(CONSTANTS_HANH_CHINH.MAU)}>QL Máu</Button>
              <Button className='btn-fill me-2' onClick={handleOpenModalChuyenPhong}>Chuyển Phòng</Button>
              <Button className='btn-fill me-2'>Bệnh Án</Button>
              <Button className='btn-fill'>Thanh Toán</Button>
            </Col>
          </Row>

          <Row className="spaces h-calc-vh-90">
            <Col xs={3} className="pe-0 border-end bg-white">
              <DanhSachBenhNhan />
            </Col>

            <Col xs={9} className="">
              <CustomTabMenu
                danhsachTabs={danhSachTabHanhChinh}
                childrenTab
              />
            </Col>
          </Row>
        </div>

        <ModalTuyChonThoiGian show={openModalTuyChonThoiGian} handleCloseDialog={() => setOpenModalTuyChonThoiGian(false)} />
        <ModalTimKiemBenhNhanNangCao show={openModalTimKiemBenhNhanNangCao} handleCloseDialog={() => setOpenModalTimKiemBenhNhanNangCao(false)} />
        <ModalQuanLyThuoc show={openModalQuanLyThuoc} handleCloseDialog={() => setOpenModalQuanLyThuoc(false)} loaiQuanLy={loaiQuanLy} />
        <ModalChuyenPhong show={openModalChuyenPhong} handleCloseDialog={() => setOpenModalChuyenPhong(false)} />
      </div>
    </PhanHeTiepDonContext.Provider>
  )
}

export default PhanHeHanhChinh