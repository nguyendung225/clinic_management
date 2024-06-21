import { useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ContextMenu from '../../../component/ContextMenuV2'
import InputSearch from '../../../component/InputSearch'
import { TableCustom } from '../../../component/table/table-custom/TableCustom'
import { IContextMenu } from '../../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy'
import { listContextBangThanhToan } from '../../constants/PhanHeChuyenKhoaConstants'
import { fakeDataThanhToan } from '../fakeData'
import { columnThanhToan } from './ColumnThanhToan'

type Props = {}

const TableThanhToan = (props: Props) => {
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
    <>
      <InputSearch
        handleChange={() => { }}
        placeholder='Tìm kiếm'
      />

      <TableCustom className='h-table-thanh-toan' columns={columnThanhToan} data={fakeDataThanhToan} handleContextMenu={handleContextMenu} />

      <div className='bg-light p-1'>
        <Row className='mb-1'>
          <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>Tổng chi phí:</div> <div className='w-100 text-end'>0</div></Col>
          <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>BHYT:</div> <div className='w-100 text-end'>0</div></Col>
          <Col xs={2} className='d-flex spaces w-20'><div className='spaces min-w-120'>Miễn giảm dịch vụ:</div> <div className='w-100 text-end'>0</div></Col>
          <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>Nguồn khác:</div> <div className='w-100 text-end'>0</div></Col>
          <Col className='d-flex spaces w-20'><div className='min-w-85px'>Bệnh nhân:</div> <div className='w-100 text-end'>0</div></Col>
        </Row>

        <Row>
          <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>Tạm ứng:</div> <div className='w-100 text-end'>0</div></Col>
          <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>Đã thu:</div> <div className='w-100 text-end'>0</div></Col>
          <Col xs={2} className='d-flex spaces w-20'><div className='min-w-125px'>Miễn giảm hóa đơn:</div> <div className='w-100 text-end'>0</div></Col>
          <Col xs={2} className='d-flex spaces w-20'><div className='min-w-85px'>Còn nợ:</div> <div className='w-100 text-end'>0</div></Col>
        </Row>
      </div>

      {contextMenu && (
        <div ref={contextRef}>
          <ContextMenu
            contextClientX={contextClientX}
            data={listContextBangThanhToan}
            x={contextMenu.x}
            y={contextMenu.y - 120}
            handleClickOptionContextMenu={handleClickOptionContextMenu}
            contextRef={contextRef}
            setContextMenu={setContextMenu}
          />
        </div>
      )}
    </>
  )
}

export default TableThanhToan