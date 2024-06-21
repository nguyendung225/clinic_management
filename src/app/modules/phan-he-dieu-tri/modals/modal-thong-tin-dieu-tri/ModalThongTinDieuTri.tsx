import { useContext, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import InputSearch from "../../../component/InputSearch"
import SelectTree from "../../../component/SelectTree"
import CustomMenu from "../../../component/menu/Menu"
import InfoPatientRight from "../../../phan-he-kham-benh/components/InfoPatientRight"
import { PhanHeTiepDonContext } from "../../../phan-he-kham-benh/contexts/PhanHeTiepDonContext"
import HoSoBenhAn from "../../components/modal-thong-tin-dieu-tri/ho-so-benh-an/HoSoBenhAn"
import PhieuDieuTri from "../../components/modal-thong-tin-dieu-tri/phieu-dieu-tri/PhieuDieuTri"
import { CODE_TREE_DIEU_TRI, TreeThongTinDieuTri } from "../../constants/ConstantTree"
import TabXetNghiem from "../../../phan-he-kham-benh/tabs/tab-xet-nghiem/TabXetNghiem"
import TabCdhaTdcn from "../../../phan-he-kham-benh/tabs/tab-cdha-tdcn/TabCdhaTdcn"
import TabChuyenKhoa from "../../../phan-he-kham-benh/tabs/tab-chuyen-khoa/TabChuyenKhoa"
import TabThuoc from "../../../phan-he-kham-benh/tabs/tab-thuoc/TabThuoc"
import TabVatTu from "../../../phan-he-kham-benh/tabs/tab-vat-tu/TabVatTu"
import TabMau from "../../../phan-he-kham-benh/tabs/tab-mau/TabMau"

type Props = {}

const ModalThongTinDieuTri = (props: Props) => {
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");

  const renderContent = (code: string) => {
    const options = {
      [CODE_TREE_DIEU_TRI.HO_SO_BENH_AN]: <HoSoBenhAn />,
      [CODE_TREE_DIEU_TRI.PHIEU_DIEU_TRI]: <PhieuDieuTri />,
      [CODE_TREE_DIEU_TRI.XET_NGHIEM.DIEU_TRI_TRUYEN_NHIEM_1]: <TabXetNghiem danhSachPhieu={false} />,
      [CODE_TREE_DIEU_TRI.CDHA.DIEU_TRI_TRUYEN_NHIEM_1]: <TabCdhaTdcn danhSachPhieu={false} />,
      [CODE_TREE_DIEU_TRI.CHUYEN_KHOA.DIEU_TRI_TRUYEN_NHIEM_1]: <TabChuyenKhoa danhSachPhieu={false} />,
      [CODE_TREE_DIEU_TRI.DICH_VU_KHAC.DIEU_TRI_TRUYEN_NHIEM_1]: <TabChuyenKhoa danhSachPhieu={false} />,
      [CODE_TREE_DIEU_TRI.DON_THUOC.DIEU_TRI_TRUYEN_NHIEM_1]: <TabThuoc danhSachPhieu={false} />,
      [CODE_TREE_DIEU_TRI.VAT_TU.DIEU_TRI_TRUYEN_NHIEM_1]: <TabVatTu danhSachPhieu={false} />,
      [CODE_TREE_DIEU_TRI.MAU.DIEU_TRI_TRUYEN_NHIEM_1]: <TabMau danhSachPhieu={false} />,
    }

    return options[code];
  }

  return (
    <div>
      <Row className="border-bottom">
        <Col xs={9} className='d-flex align-items-center'>
          <CustomMenu
            className='ms-1'
            handleSelectOption={() => { }}
            listMenuItem={[]}
            menuLabel={
              <Button className="btn-outline spaces h-30">
                <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
              </Button>
            }
          />

          <CustomMenu
            className="me-2"
            handleSelectOption={() => { }}
            listMenuItem={[]}
            menuLabel={
              <Button className='btn-fill'>In<i className="fa-solid fa-caret-down ms-2 me-0"></i></Button>
            }
          />

          <Button className="btn-fill me-2">Dịch vụ</Button>
          <Button className="btn-fill me-2">Thuốc</Button>
          <Button className="btn-fill me-2">Máu</Button>
          <Button className="btn-fill me-2">Chi phí</Button>

          <CustomMenu
            className=' spaces min-w-110 me-2'
            handleSelectOption={() => { }}
            listMenuItem={[]}
            menuLabel={
              <Button className='btn-fill'>Phác đồ ĐT<i className="fa-solid fa-caret-down ms-2 me-0"></i></Button>
            }
          />

          <Button className="btn-fill me-2">Nhập giọng nói</Button>
          <Button className="btn-fill me-2">Tài liệu tùy biến</Button>
        </Col>

        <Col xs={3}>
          <InfoPatientRight benhNhanInfo={benhNhanInfo} />
        </Col>
      </Row>

      <Row>
        <Col xs={3} className="pe-0">
          <InputSearch
            handleChange={() => { }}
          />
          <SelectTree
            className="w-100 border border-top-0 spaces h-calc-vh-177 overflow-auto"
            codeCollapses={codeCollapses}
            handleChangeCollapsesCode={setCodeCollapses}
            idSelected={idSelected}
            handleChangeSelectId={setIdSelected}
            selectTree={TreeThongTinDieuTri}
          />
        </Col>

        <Col xs={9} className="ps-0">
          {renderContent(idSelected)}
        </Col>
      </Row>
    </div>
  )
}

export default ModalThongTinDieuTri