import { Col, Image, Row } from 'react-bootstrap';
import { IGiuongBenh } from '../../models/IGiuongBenh';
import { toAbsoluteUrl } from '../../../../../_metronic/helpers';
import { loaiGiuong } from '../../const/PhanHeNoitruConst';

type IProps = {
  data: IGiuongBenh;
};

const Giuong: React.FunctionComponent<IProps> = ({ data }) => {
  return (
    <Col sm='4' md='6' lg='4' className='pb-10'>
      <Image
        src={toAbsoluteUrl(
          `/media/images/${loaiGiuong[data.dsBenhNhan.length]}`
        )}
        alt='giuong benh'
        width={60}
        className='mx-4'
      />
      <Row className='gap-2'>
        <Col sm='12' className='d-flex gap-2 align-items-end py-4'>
          <i className='bi bi-plus-circle fs-1 cursor-pointer text-primary text-stroke-1'></i>
          <i className='bi bi-x-circle fs-1 cursor-pointer text-danger text-stroke-1'></i>
          <i className='bi bi-check-circle fs-1 cursor-pointer text-success text-stroke-1'></i>
          <i
            className='bi bi-arrow-clockwise fs-1 cursor-pointer text-stroke-1'
            style={{ marginBottom: '-1px' }}
          ></i>
        </Col>
      </Row>
      <Row>
        <Col sm='12' className='fw-bolder d-flex pb-2 px-6'>
          <p className='w-100px m-0'>Mã giường</p>
          <span className='text-pri'>{data.maGiuong}</span>
        </Col>
        <Col sm='12' className='fw-bolder d-flex px-6'>
          <p className='w-100px m-0'>Tên BN</p>
          <div className='text-pri'>
            {data.dsBenhNhan.map((benhNhan, index) => (
              <p key={index} className='m-0'>
                {benhNhan?.tenBenhNhan}
              </p>
            ))}
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default Giuong;