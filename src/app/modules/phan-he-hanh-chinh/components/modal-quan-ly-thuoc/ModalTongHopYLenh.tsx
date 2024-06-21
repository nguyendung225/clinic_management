import React from 'react'
import { Button, Modal, Row } from 'react-bootstrap';
import LabelRequired from '../../../component/LabelRequired';
import TextValidator from '../../../component/TextValidator';
import Autocomplete from '../../../component/AutocompleteObject';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';
import { BuongColumn } from '../../columns/ColumnQuanLyThuoc';
import { toast } from 'react-toastify';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalTongHopYLenh = ({ show, handleCloseDialog }: Props) => {

  const handleSave = () => {
    toast.warning("Không có phiếu y lệnh!");
  }

  return (
    <Modal centered show={show} onHide={handleCloseDialog} contentClassName='min-w-600px'>
      <Modal.Header closeButton>
        <Modal.Title>
          Tổng hợp y lệnh
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className='d-flex mb-1'>
          <div className='d-flex w-100'>
            <LabelRequired label='Ngày y lệnh từ' className='min-w-125px' />
            <TextValidator type="datetime-local" />
          </div>

          <div className='d-flex ps-2 w-100'>
            <LabelRequired label='Đến' className='min-w-30px' />
            <TextValidator type="datetime-local" />
          </div>
        </div>

        <div className='d-flex mb-1'>
          <LabelRequired label='Khoa phòng' className='min-w-125px' />
          <Autocomplete options={[]} />
        </div>

        <div className='d-flex mb-1'>
          <LabelRequired label='Phòng điều trị' className='min-w-125px' />
          <Autocomplete options={[]} />
        </div>

        <div className='d-flex justify-content-between'>
          <LabelRequired label='Buồng điều trị' />

          <div className='d-flex gap-2'>
            <a href="/" onClick={(e) => { e.preventDefault() }}><u>Bỏ chọn tất cả</u></a>
            <a href="/" onClick={(e) => { e.preventDefault() }}><u>Chọn tất cả</u></a>
          </div>
        </div>

        <div>
          <TableCustom minHeight={300} columns={BuongColumn} data={[]} />
        </div>

        <div className='d-flex'>
          <LabelRequired label='Kho thuốc, vật tư' className='min-w-125px' />
          <Autocomplete options={[]} />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button className='btn-fill' onClick={handleSave}>Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalTongHopYLenh