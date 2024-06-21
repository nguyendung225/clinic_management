import React from 'react'
import { Button, Col, FormCheck, Modal, Row } from 'react-bootstrap'
import CustomMenu from '../../../../component/menu/Menu';
import LabelRequired from '../../../../component/LabelRequired';
import TextValidator from '../../../../component/TextValidator';
import Autocomplete from '../../../../component/AutocompleteObject';
import InputSearch from '../../../../component/InputSearch';
import { TableCustom } from '../../../../component/table/table-custom/TableCustom';
import { LichSuThayDoiDauKyColumn } from '../modal-lich-thay-doi-dau-ky/LichSuThayDoiDauKyColumn';
import { TheKhoColumn } from './TheKhoColumn';
import { theKho } from '../../../const/FakeData';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
}

const ModalTheKho = ({ show, handleCloseDialog }: Props) => {
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
          Thẻ kho
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0 spaces bg-white overflow-hidden">
        <Row className='border-bottom py-1'>
          <Col xl={1} className='d-flex align-items-center gap-4'>
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
              className='h-29 me-2'
              handleSelectOption={() => { }}
              listMenuItem={[]}
              menuLabel={
                <Button className='btn-fill'>In</Button>
              }
            />
          </Col>

          <Col xl className='d-flex align-items-center gap-2'>
            <div className='d-flex w-100'>
              <LabelRequired label='Kho' className='min-w-30px' />
              <Autocomplete options={[]} className='h-25 w-100' />
            </div>

            <div className='d-flex w-100 spaces min-w-255'>
              <LabelRequired label='Thuốc/Vật tư' className='min-w-100px' />
              <Autocomplete options={[]} className='h-25 w-100' />
            </div>

            <FormCheck type='checkbox' label="Hiển thị tổng hợp" className='spaces min-w-130' />
          </Col>

          <Col xl className='d-flex align-items-center justify-content-end gap-2'>
            <div className='d-flex mb-1'>
              <LabelRequired label='Từ ngày' className='min-w-60px' />
              <TextValidator type="datetime-local" className="spaces W-190" />
            </div>

            <div className='d-flex'>
              <LabelRequired label='Đến ngày' className='min-w-60px' />
              <TextValidator type="datetime-local" className="spaces W-190" />
            </div>

            <Button className='btn-fill me-1 min-w-80px'>Tìm kiếm</Button>
          </Col>
        </Row>

        <div className="px-1">
          <InputSearch
            handleChange={() => { }}
            placeholder='Tìm kiếm'
          />

          <TableCustom className='h-table-lich-su-nhap-xuat' columns={TheKhoColumn} data={theKho} />
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalTheKho