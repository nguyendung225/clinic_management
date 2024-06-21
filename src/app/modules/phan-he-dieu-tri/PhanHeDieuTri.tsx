import { useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import CustomTabMenu from "../component/CustomTabMenu"
import CustomMenu from "../component/menu/Menu"
import ModalTuyChonThoiGian from "../phan-he-hanh-chinh/components/phan-he-hanh-chinh/ModalTuyChonThoiGian"
import { CODE_MENU_HANH_CHINH, listMenuTimKiem } from "../phan-he-hanh-chinh/constants/ConstantMenu"
import ModalTimKiemBenhNhanNangCao from "../phan-he-hanh-chinh/modals/modal-tim-kiem-benh-nhan-nang-cao/ModalTimKiemBenhNhanNangCao"
import { PhanHeTiepDonContext } from "../phan-he-kham-benh/contexts/PhanHeTiepDonContext"
import { IBenhNhan } from "../phan-he-kham-benh/models/DSBenhNhanKhamBenhModels"
import { IItemMenu } from "../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel"
import DanhSachBenhNhan from "./components/phan-he-dieu-tri/DanhSachBenhNhan"
import { danhSachTabDieuTri } from "./constants/ConstantPhanHeDieuTri"
import PageChiDinhDichVu from "../phan-he-kham-benh/modals/modal-chi-dinh-dich-vu/PageChiDinhDichVu"
import { CODE_MENU_DIEU_TRI, listMenuPhacDoDieuTri, listMenuThuocVatTuSA } from "./constants/ContantMenu"
import ModalFullPage from "../component/modal-full-page/ModalFullPage"
import ModalChiDinhMau from "./modals/modal-chi-dinh-mau/ModalChiDinhMau"
import ModalChiDinhThucPhamChucNang from "./modals/modal-chi-dinh-thuc-pham-chuc-nang/ModalChiDinhThucPhamChucNang"
import ModalPhacDoDieuTri from "./modals/modal-phac-do-dieu-tri/ModalPhacDoDieuTri"

type Props = {}

const PhanHeDieuTri = (props: Props) => {
  const [benhNhanInfo, setBenhNhanInfo] = useState<IBenhNhan>();
  const [openModalTuyChonThoiGian, setOpenModalTuyChonThoiGian] = useState(false);
  const [openModalTimKiemBenhNhanNangCao, setOpenModalTimKiemBenhNhanNangCao] = useState(false);
  const [shouldOpenChiDinhDichVuModal, setShouldOpenChiDinhDichVuModal] = useState<boolean>(false);
  const [openModalChiDinh, setOpenModalChiDinh] = useState(false);
  const [openModalChiDinhMau, setOpenModalChiDinhMau] = useState(false);
  const [codeMenu, setCodeMenu] = useState("");

  const handleSelectOptionMenu = (value: IItemMenu) => {
    setCodeMenu(value?.code)

    const options = {
      [CODE_MENU_HANH_CHINH.TUY_CHON_THOI_GIAN]: () => setOpenModalTuyChonThoiGian(true),
      [CODE_MENU_HANH_CHINH.TIM_KIEM_NANG_CAO]: () => setOpenModalTimKiemBenhNhanNangCao(true),
      [CODE_MENU_DIEU_TRI.CHI_DINH_MAU]: () => setOpenModalChiDinhMau(true),
      [CODE_MENU_DIEU_TRI.CHI_DINH_THUC_PHAM_CHUC_NANG]: () => setOpenModalChiDinh(true),
      [CODE_MENU_DIEU_TRI.DANH_SACH_PHAC_DO]: () => setOpenModalChiDinh(true),
    }

    options[value?.code]();
  }

  const renderModal = (code: string) => {
    const options = {
      [CODE_MENU_DIEU_TRI.CHI_DINH_THUC_PHAM_CHUC_NANG]: {
        title: "Chỉ định thực phẩm chức năng",
        component: <ModalChiDinhThucPhamChucNang />
      },
      [CODE_MENU_DIEU_TRI.DANH_SACH_PHAC_DO]: {
        title: "Phác đồ điều trị",
        component: <ModalPhacDoDieuTri />
      },
    }

    return options[code];
  }

  const handleOpenChiDinhDichVu = () => {
    setShouldOpenChiDinhDichVuModal(true);
  };

  const handleCloseChiDinhDichVu = () => {
    setShouldOpenChiDinhDichVuModal(false);
  };

  return (
    <PhanHeTiepDonContext.Provider
      value={{
        setBenhNhanInfo,
        benhNhanInfo
      }}
    >
      <div className="receptiopn-list bg-gray">
        <div className="reception__header spaces p-3 h-100">
          <Row className='border-bottom bg-white'>
            <Col className='py-1 d-flex gap-2'>
              <CustomMenu
                className='ms-1'
                handleSelectOption={() => { }}
                listMenuItem={[]}
                menuLabel={
                  <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-50px">
                    <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                  </Button>
                }
              />

              <Button className='btn-fill min-w-50px '>In</Button>
              <CustomMenu
                className=' spaces min-w-96'
                handleSelectOption={handleSelectOptionMenu}
                listMenuItem={listMenuTimKiem}
                menuLabel={<Button className='btn-fill'>Tìm Kiếm <i className="fa-solid fa-caret-down ms-2 me-0"></i></Button>}
              />
              <Button className='btn-fill'>Bênh án</Button>
              <Button className='btn-fill' onClick={handleOpenChiDinhDichVu}>Dịch vụ</Button>
              <CustomMenu
                className='spaces min-w-123'
                handleSelectOption={handleSelectOptionMenu}
                listMenuItem={listMenuThuocVatTuSA}
                menuLabel={<Button className='btn-fill'>Thuốc/VT/SA <i className="fa-solid fa-caret-down ms-2 me-0"></i></Button>}
              />
              <CustomMenu
                className=' spaces min-w-110'
                handleSelectOption={handleSelectOptionMenu}
                listMenuItem={listMenuPhacDoDieuTri}
                menuLabel={<Button className='btn-fill'>Phác đồ ĐT <i className="fa-solid fa-caret-down ms-2 me-0"></i></Button>}
              />
              <Button className='btn-fill'>Thanh Toán</Button>
            </Col>
          </Row>

          <Row className="spaces h-calc-vh-90">
            <Col xs={3} className="pe-0 border-end bg-white">
              <DanhSachBenhNhan />
            </Col>

            <Col xs={9} className="">
              <CustomTabMenu
                danhsachTabs={danhSachTabDieuTri}
                childrenTab
              />
            </Col>
          </Row>
        </div>
        <ModalTuyChonThoiGian show={openModalTuyChonThoiGian} handleCloseDialog={() => setOpenModalTuyChonThoiGian(false)} />
        <ModalTimKiemBenhNhanNangCao show={openModalTimKiemBenhNhanNangCao} handleCloseDialog={() => setOpenModalTimKiemBenhNhanNangCao(false)} />
        {shouldOpenChiDinhDichVuModal && (
          <PageChiDinhDichVu
            handleClose={handleCloseChiDinhDichVu}
            dieuTri
          />
        )}
        <ModalFullPage
          show={openModalChiDinh}
          handleCloseDialog={() => setOpenModalChiDinh(false)}
          title={renderModal(codeMenu)?.title}
        >
          {renderModal(codeMenu)?.component}
        </ModalFullPage>

        {openModalChiDinhMau && (
          <PageChiDinhDichVu
            handleClose={setOpenModalChiDinhMau}
            dieuTri
          />
        )}
      </div>
    </PhanHeTiepDonContext.Provider>
  )
}

export default PhanHeDieuTri