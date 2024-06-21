import { Button, Col, Modal, Row } from 'react-bootstrap';
import LabelRequired from '../../../component/LabelRequired';
import TextValidator from '../../../component/TextValidator';
import CustomMenu from '../../../component/menu/Menu';
import { useRef, useState } from 'react';
import SelectTree from '../../../component/SelectTree';
import { listContextDSVatTuTrongKho, treeLichSuNhapXuat } from '../../../phan-he-kho-vat-tu/const/constants';
import TableLichSuNhapXuat from '../../../phan-he-kho-vat-tu/components/modal-danh-sach-vat-tu-trong-kho/modal-lich-su-nhap-xuat/TableLichSuNhapXuat';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';
import InputSearch from '../../../component/InputSearch';
import { BenhNhanColumn } from '../../columns/ColumnBNTimKiemNangCao';
import { listContextDSBenhNhan, treeTimKiemBenhNhan } from '../../constants/ConstantPhanHeHanhChinh';
import { mangBenhNhan } from '../../constants/FakeData';
import ContextMenu from '../../../component/ContextMenuV2';
import { IContextMenu } from '../../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalTimKiemBenhNhanNangCao = ({ show, handleCloseDialog }: Props) => {
  const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
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
          Danh sách bệnh nhân điều trị
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
              listMenuItem={[]}
              menuLabel={
                <Button className='btn-fill'>Báo cáo</Button>
              }
            />
          </Col>

          <Col xs={9} className='d-flex justify-content-end align-items-center gap-4'>

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
                selectTree={treeTimKiemBenhNhan}
              />
            </Col>

            <Col xs={9} className='ps-0'>
              <InputSearch
                handleChange={() => { }}
                placeholder='Tìm kiếm'
              />

              <TableCustom columns={BenhNhanColumn} data={mangBenhNhan} handleContextMenu={handleContextMenu}/>
              {contextMenu && (
                <div ref={contextRef}>
                  <ContextMenu
                    contextClientX={contextClientX}
                    data={listContextDSBenhNhan}
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
    </Modal>
  )
}

export default ModalTimKiemBenhNhanNangCao