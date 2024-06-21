import { FC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Autocomplete } from '../../../component/Autocomplete';
import { loaiPhongOptions, phongBenhOptions, trangThaiOptions } from '../../const/PhanHeNoitruConst';

const SearchPatientRoom: FC = () => {
  return (
    <div className='search__patient form-border border-top-0 p-2'>
        <Row className='pb-2'>
          <Col sm='4'>
            <div className='d-flex flex-column h-100 justify-content-between gap-2'>
              <p className='w-100px m-0 pr-5'>Phòng bệnh</p>
              <Autocomplete
                name='status'
                onChange={() => {}}
                className='customs-input'
                options={phongBenhOptions}
              />
            </div>
          </Col>
          <Col sm='4'>
            <div className='d-flex flex-column h-100 justify-content-between gap-2'>
              <p className='w-100px m-0 pr-5'>Loại phòng</p>
              <Autocomplete
                name='status'
                onChange={() => {}}
                className='customs-input'
                options={loaiPhongOptions}
              />
            </div>
          </Col>
          <Col sm='4'>
            <div className='d-flex flex-column h-100 justify-content-between gap-2'>
              <p className='w-100px m-0 pr-5'>Trạng thái</p>
              <Autocomplete
                name='status'
                onChange={() => {}}
                className='customs-input'
                options={trangThaiOptions}
              />
            </div>
          </Col>
        </Row>
        <Row className='pb-2'>
          <Col sm='4'>
            <div className='d-flex flex-column h-100 justify-content-between gap-2'>
              <p className='w-100px m-0 pr-5'>Tên bệnh nhân</p>
              <input
                className='form-control customs-input'
                name='pin'
                type='text'
              />
            </div>
          </Col>
          <Col sm='4'>
            <div className='d-flex flex-column h-100 justify-content-between gap-2'>
              <p className='w-100px m-0 pr-5'>Mã bệnh nhân</p>
              <input
                className='form-control customs-input'
                name='pin'
                type='text'
              />
            </div>
          </Col>
          <Col
            sm='4'
            className='d-flex flex-column justify-content-end w-100px'
          >
            <Button
              className='btn-navy btn-small min-w-100px'
              size='sm'
            >
              Tìm kiếm
            </Button>
          </Col>
        </Row>
      </div>
  );
};
export default SearchPatientRoom;
