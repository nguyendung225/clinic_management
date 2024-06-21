import { useRef, useState } from 'react'
import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap'
import ContextMenu from '../../../component/ContextMenuV2'
import InputSearch from '../../../component/InputSearch'
import LabelRequired from '../../../component/LabelRequired'
import SelectTree from '../../../component/SelectTree'
import TextValidator from '../../../component/TextValidator'
import CustomMenu from '../../../component/menu/Menu'
import { TableCustom } from '../../../component/table/table-custom/TableCustom'
import { IContextMenu } from '../../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy'
import { IItemMenu } from '../../../phan-he-tiep-nhan-thanh-toan/models/ThanhToanModel'
import { PhieuColumn } from '../../columns/ColumnQuanLyThuoc'
import ModalHaoPhiThuoc from '../../components/modal-quan-ly-thuoc/ModalHaoPhiThuoc'
import ModalSuaNgayDieuTri from '../../components/modal-quan-ly-thuoc/ModalSuaNgayDieuTri'
import ModalTongHopYLenh from '../../components/modal-quan-ly-thuoc/ModalTongHopYLenh'
import { CODE_MENU_HANH_CHINH, listMenuBaoCaoMau, listMenuTaoPhieuMau, listMenuTaoPhieuThuoc, listMenuTaoPhieuVatTu } from '../../constants/ConstantMenu'
import { CONSTANTS_HANH_CHINH, treeQuanLyThuoc } from '../../constants/ConstantPhanHeHanhChinh'
import { CODE_CONTEXT_HANH_CHINH, listContextQuanLyThuoc } from '../../constants/Context'
import { mangPhieu } from '../../constants/FakeData'
import ModalFullPage from '../../../component/modal-full-page/ModalFullPage'
import ModalChiTietPhieu from '../modal-chi-tiet-phieu/ModalChiTietPhieu'

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  loaiQuanLy: string;
}

const ModalQuanLyThuoc = ({ show, handleCloseDialog, loaiQuanLy }: Props) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  const [openModalTongHopYLenh, setOpenModalTongHopYLenh] = useState(false);
  const [openModalHaoPhiThuoc, setOpenModalHaoPhiThuoc] = useState(false);
  const [openModalSuaDotThanhToan, setOpenModalSuaDotThanhToan] = useState(false);
  const [openModalChiTietPhieu, setOpenModalChiTietPhieu] = useState(false);
  const [loaiTraHaoPhiThuoc, setLoaiTraHaoPhiThuoc] = useState("");
  const contextRef = useRef<HTMLDivElement | null>(null);
  const [contextMenu, setContextMenu] = useState<null | {
    x: number;
    y: number;
  }>(null);
  const [contextClientX, setContextClientX] = useState<number>(0);

  const handleContextMenu = (e: any, row: any) => {
    e.preventDefault();
    setContextClientX(e.clientX);

    const heightDropList = document.getElementById("drop-list")?.clientHeight || 0;
    const isOnRight = (window.innerWidth - e.clientX) < 200;
    const newX = isOnRight ? e.clientX - 200 : e.clientX;
    const isBottom = (window.innerHeight - e.clientY) < 200;
    const newY = isBottom ? e.clientY - heightDropList : e.clientY;

    setContextMenu({ x: newX, y: newY });
  };

  const handleClickOptionContextMenu = (value: IContextMenu) => {
    const options = {
      [CODE_CONTEXT_HANH_CHINH.SUA_DOT_THANH_TOAN]: () => setOpenModalSuaDotThanhToan(true),
    }

    options[value?.code as string]();
  }

  const handleSelectOptionMenu = (value: IItemMenu) => {

    const openModalHaoPhiThuoc = (type: string) => {
      setOpenModalHaoPhiThuoc(true);
      setLoaiTraHaoPhiThuoc(type)
    }

    const options = {
      [CODE_MENU_HANH_CHINH.TONG_HOP_PHIEU_LINH_THUOC]: () => setOpenModalTongHopYLenh(true),
      [CODE_MENU_HANH_CHINH.TONG_HOP_PHIEU_HOAN_TRA_THUOC]: () => setOpenModalTongHopYLenh(true),
      [CODE_MENU_HANH_CHINH.LINH_HAO_PHI_THUOC]: () => openModalHaoPhiThuoc(CODE_MENU_HANH_CHINH.LINH_HAO_PHI_THUOC),
      [CODE_MENU_HANH_CHINH.TRA_HAO_PHI_THUOC]: () => openModalHaoPhiThuoc(CODE_MENU_HANH_CHINH.TRA_HAO_PHI_THUOC),
      [CODE_MENU_HANH_CHINH.TONG_HOP_PHIEU_LINH_VAT_TU]: () => setOpenModalTongHopYLenh(true),
      [CODE_MENU_HANH_CHINH.TONG_HOP_PHIEU_HOAN_TRA_VAT_TU]: () => setOpenModalTongHopYLenh(true),
      [CODE_MENU_HANH_CHINH.LINH_HAO_PHI_VAT_TU]: () => openModalHaoPhiThuoc(CODE_MENU_HANH_CHINH.LINH_HAO_PHI_THUOC),
      [CODE_MENU_HANH_CHINH.TRA_HAO_PHI_VAT_TU]: () => openModalHaoPhiThuoc(CODE_MENU_HANH_CHINH.TRA_HAO_PHI_THUOC),
    }

    options[value?.code]();
  }

  const handleDoubleClick = (row: any) => {
    setOpenModalChiTietPhieu(true);
  }

  const renderData = (loaiQuanLy: string) => {
    const options = {
      [CONSTANTS_HANH_CHINH.THUOC]: {
        title: "thuốc",
        menuTaoPhieu: listMenuTaoPhieuThuoc,
        menuBaoCao: []
      },
      [CONSTANTS_HANH_CHINH.VAT_TU]: {
        title: "vật tư",
        menuTaoPhieu: listMenuTaoPhieuVatTu,
        menuBaoCao: []
      },
      [CONSTANTS_HANH_CHINH.MAU]: {
        title: "máu",
        menuTaoPhieu: listMenuTaoPhieuMau,
        menuBaoCao: listMenuBaoCaoMau
      },
    }

    return options[loaiQuanLy];
  }

  return (
    <Modal
      className="modal-thuoc page-full"
      fullscreen
      show={show}
      animation={false}
      centered
      backdropClassName="spaces top-50"
      onHide={handleCloseDialog}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Quản lý {renderData(loaiQuanLy)?.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom py-1'>
          <Col xs={3} className='d-flex align-items-center'>
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

            <CustomMenu
              className='h-29 min-w-70px me-2'
              handleSelectOption={() => { }}
              listMenuItem={renderData(loaiQuanLy)?.menuBaoCao}
              menuLabel={
                <Button className='btn-fill'>Báo cáo</Button>
              }
            />

            <CustomMenu
              className='h-29 min-w-80px me-2'
              handleSelectOption={handleSelectOptionMenu}
              listMenuItem={renderData(loaiQuanLy)?.menuTaoPhieu}
              menuLabel={
                <Button className='btn-fill'>Tạo phiếu</Button>
              }
            />
          </Col>

          <Col xs={9} className='d-flex justify-content-end align-items-center gap-4'>
            <FormCheck type='checkbox' label='Theo ngày chỉ định' />
            <FormCheck type='checkbox' label='Theo ngày y lệnh' />

            <div className='d-flex'>
              <LabelRequired label='Từ ngày' className='min-w-60px' />
              <TextValidator type="datetime-local" />
            </div>

            <div className='d-flex'>
              <LabelRequired label='Đến ngày' className='min-w-60px' />
              <TextValidator type="datetime-local" />
            </div>

            <Button className='btn-fill me-1'>Tìm kiếm</Button>
          </Col>
        </Row>

        <div className='px-1'>
          <Row>
            <Col xs={3} className='pe-0'>
              <InputSearch
                handleChange={() => { }}
                placeholder='Tìm kiếm'
              />

              <SelectTree
                className="w-100 border border-top-0 spaces h-calc-vh-176"
                codeCollapses={codeCollapses}
                handleChangeCollapsesCode={setCodeCollapses}
                idSelected={idSelected}
                handleChangeSelectId={setIdSelected}
                selectTree={treeQuanLyThuoc}
              />
            </Col>

            <Col xs={9} className='ps-0'>
              <InputSearch
                handleChange={() => { }}
                placeholder='Tìm kiếm'
              />

              <TableCustom columns={PhieuColumn(loaiQuanLy)} data={mangPhieu} handleContextMenu={handleContextMenu} handleDoubleClick={handleDoubleClick} />
              {contextMenu && (
                <div ref={contextRef}>
                  <ContextMenu
                    contextClientX={contextClientX}
                    data={listContextQuanLyThuoc}
                    x={contextMenu.x}
                    y={contextMenu.y}
                    handleClickOptionContextMenu={handleClickOptionContextMenu}
                    contextRef={contextRef}
                    setContextMenu={setContextMenu}
                  />
                </div>
              )}
            </Col>
          </Row>
        </div>
      </Modal.Body>

      <ModalTongHopYLenh show={openModalTongHopYLenh} handleCloseDialog={() => setOpenModalTongHopYLenh(false)} />
      <ModalHaoPhiThuoc show={openModalHaoPhiThuoc} handleCloseDialog={() => setOpenModalHaoPhiThuoc(false)} loaiTraHaoPhiThuoc={loaiTraHaoPhiThuoc} loaiQuanLy={loaiQuanLy} />
      <ModalSuaNgayDieuTri show={openModalSuaDotThanhToan} handleCloseDialog={() => setOpenModalSuaDotThanhToan(false)} />

      <ModalFullPage title='Chi tiết phiếu' show={openModalChiTietPhieu} handleCloseDialog={() => setOpenModalChiTietPhieu(false)}>
        <ModalChiTietPhieu handleCloseDialog={() => setOpenModalChiTietPhieu(false)} loaiQuanLy={loaiQuanLy} />
      </ModalFullPage>
    </Modal>
  )
}

export default ModalQuanLyThuoc