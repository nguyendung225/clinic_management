import { FC } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { toAbsoluteUrl } from '../../../../../_metronic/helpers';
import { Autocomplete } from '../../../component/Autocomplete';
import {
  GIUONG_IMG,
  loaiPhongOptions,
  phongBenhOptions,
  trangThaiGiuongOptions
} from '../../const/PhanHeNoitruConst';

const SearchBed: FC = () => {
  return (
    <div className='search__bed form-border border-bottom-0 p-2'>
      <Form.Group as={Row} className='py-1 my-0 mx-auto'>
        <Col sm='12' md='4' lg='2'>
          <Row className='d-flex flex-column gap-2 px-2'>
            <Form.Label className='m-0 p-0'>Tên bệnh nhân</Form.Label>
            <Form.Control
              disabled
              className='form-control customs-input'
              name='tenBenhNhan'
              type='text'
              value={'Nguyễn Văn A'}
            />
          </Row>
        </Col>
        <Col sm='12' md='4' lg='2'>
          <Row className='d-flex flex-column gap-2 px-2'>
            <Form.Label className='m-0 p-0'>Mã bệnh nhân</Form.Label>
            <Form.Control
              disabled
              className='form-control customs-input'
              name='maBenhNhan'
              type='text'
              value={'BN2023000078'}
            />
          </Row>
        </Col>
        <Col sm='12' md='4' lg='2'>
          <Row className='d-flex flex-column gap-2 px-2'>
            <Form.Label className='m-0 p-0'>Giới tính</Form.Label>
            <Form.Control
              disabled
              className='form-control customs-input'
              name='gioiTinh'
              type='text'
              value={'Nam'}
            />
          </Row>
        </Col>
        <Col sm='12' md='4' lg='2'>
          <Row className='d-flex flex-column gap-2 px-2'>
            <Form.Label className='m-0 p-0'>Loại phòng</Form.Label>
            <Autocomplete
              name='loaiPhong'
              onChange={() => {}}
              className='customs-input p-0'
              options={loaiPhongOptions}
            />
          </Row>
        </Col>
        <Col sm='12' md='4' lg='2'>
          <Row className='d-flex flex-column gap-2 px-2'>
            <Form.Label className='m-0 p-0'>Phòng</Form.Label>
            <Autocomplete
              name='phongBenh'
              onChange={() => {}}
              className='customs-input p-0'
              options={phongBenhOptions}
            />
          </Row>
        </Col>
        <Col sm='12' md='4' lg='2'>
          <Row className='d-flex flex-column gap-2 px-2'>
            <Form.Label className='m-0 p-0'>Giường</Form.Label>
            <Form.Control
              disabled
              className='form-control customs-input'
              name='giuong'
              type='text'
              value={''}
            />
          </Row>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='py-1 my-0 mx-auto'>
        <Col sm='12' md='4' lg='2'>
          <Row className='d-flex flex-column gap-2 px-2'>
            <Form.Label className='m-0 p-0'>Trạng thái</Form.Label>
            <Autocomplete
              name='trangThaiGiuong'
              onChange={() => {}}
              className='customs-input p-0'
              options={trangThaiGiuongOptions}
            />
          </Row>
        </Col>
        <Col sm='2' className='d-flex flex-column justify-content-end pt-4'>
          <Button className='btn-navy btn-small w-100px' size='sm'>
            Tìm kiếm
          </Button>
        </Col>
        <Col sm='1'></Col>
        <Col sm='7' md='12' lg='7' className='pt-4'>
          <Row className='h-100'>
            <Col
              sm='4'
              className='d-flex align-items-end justify-content-end gap-2'
            >
              <Image
                src={toAbsoluteUrl(`/media/images/${GIUONG_IMG.GIUONG_TRONG}`)}
                alt='Giường trống'
                width={40}
              />
              Giường trống
            </Col>
            <Col
              sm='4'
              className='d-flex align-items-end justify-content-end gap-2'
            >
              <Image
                src={toAbsoluteUrl(`/media/images/${GIUONG_IMG.GIUONG_CO_1BN}`)}
                alt='Giường có 1 bệnh nhân'
                width={40}
              />
              Có 1 bệnh nhân
            </Col>
            <Col
              sm='4'
              className='d-flex align-items-end justify-content-end gap-2'
            >
              <Image
                src={toAbsoluteUrl(`/media/images/${GIUONG_IMG.GIUONG_CO_2BN}`)}
                alt='Giường có 2 bệnh nhân'
                width={40}
              />
              Có 2 bệnh nhân
            </Col>
          </Row>
        </Col>
      </Form.Group>
    </div>
  );
};
export default SearchBed;