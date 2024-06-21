import { Col, Form, Image, Row } from 'react-bootstrap';
import TextGroup from '../../../component/TextGroup';
import { useContext } from 'react';
import { PhanHeNoiTruContext } from '../../PhanHeNoiTruContext';

export const ThongTinBenhNhan = () => {
  const { patientByRoom } = useContext(PhanHeNoiTruContext);
  
  return (
    <div className='phongkham__ttbenhnhan form-border border-top-0 p-2 position-relative'>
      <Form.Group as={Row} className='align-items-center py-1'>
        <Col sm='4'>
          <TextGroup
            label='Mã bệnh nhân'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.maBenhNhan}
            valueClass='m-0 text-pri'
          />
        </Col>
        <Col sm='5'>
          <TextGroup
            label='Tên bệnh nhân'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.tenBenhNhan}
            valueClass='m-0 text-pri'
          />
        </Col>
        <Col sm='3'></Col>
      </Form.Group>
      <Form.Group as={Row} className='align-items-center py-1'>
        <Col sm='4'>
          <TextGroup
            label='Ngày sinh'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.ngaySinh}
            valueClass='m-0 text-pri'
          />
        </Col>
        <Col sm='5'>
          <TextGroup
            label='Giới tính'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.gioiTinh}
            valueClass='m-0 text-pri'
          />
        </Col>
        <Col sm='3'></Col>
      </Form.Group>
      <Form.Group as={Row} className='align-items-center py-1'>
        <Col sm='4'>
          <TextGroup
            label='Đối tượng'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.doiTuong}
            valueClass='m-0 text-pri'
          />
        </Col>
        <Col sm='5'>
          <TextGroup
            label='Thẻ BHYT'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.soBHYT}
            valueClass='m-0 text-pri'
          />
        </Col>
        <Col sm='3'></Col>
      </Form.Group>
      <Form.Group as={Row} className='align-items-center py-1'>
        <Col sm='4'>
          <TextGroup
            label='Hạn thẻ'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.hanTheBHYT}
            valueClass='m-0 text-pri'
          />
        </Col>
        <Col sm='8'>
          <TextGroup
            label='Địa chỉ'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.diaChi}
            valueClass='m-0 text-pri'
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='align-items-center py-1'>
        <Col sm='12'>
          <TextGroup
            label='Bệnh chính'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.benhChinh}
            valueClass='m-0 text-pri'
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='align-items-center py-1'>
        <Col sm='12'>
          <TextGroup
            label='Bệnh phụ'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.benhPhu}
            valueClass='m-0 text-pri'
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='align-items-center py-1'>
        <Col sm='12'>
          <TextGroup
            label='Bác sĩ ĐT'
            labelClass='min-w-100px label-fw'
            value={patientByRoom?.bacSiDieuTri}
            valueClass='m-0 text-pri'
          />
        </Col>
      </Form.Group>
      <Image
        src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
        width={100}
        height={100}
        rounded
        className='position-absolute top-0 end-0 mt-2 mx-4'
      />
    </div>
  );
};
