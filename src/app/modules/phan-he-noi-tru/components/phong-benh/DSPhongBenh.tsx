import { FC } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import SearchPatientRoom from './SearchPatientRoom';
import { GridDSPhongBenh } from './GridDSPhongBenh';
import { dsPhongBenh } from '../../const/PhanHeNoitruConst';
import { ThongTinBenhNhan } from './ThongTinBenhNhan';
import { TabDichVu } from './TabDichVu';
import PhanHeNoiTruProvider from '../../PhanHeNoiTruContext';

const DSPhongBenh: FC = () => {
  return (
    <PhanHeNoiTruProvider>
      <div className='phongbenh__wrapper'>
        <div className='form-border border-top-0 border-left-0 border-right-0'></div>
        <Row>
          <Col sm='6' className='d-flex flex-column'>
            <SearchPatientRoom />
            <GridDSPhongBenh data={dsPhongBenh} />
          </Col>
          <Col sm='6' className='d-flex flex-column'>
            <ThongTinBenhNhan />
            <TabDichVu />
          </Col>
        </Row>
        <div className='flex flex-center py-4 form-border'>
          <Button className='btn-navy mr-5 '>Chỉ định CLS</Button>
          <Button className='btn-navy mr-5 '>Kê đơn dược</Button>
          <Button className='btn-navy mr-5 '>Kê đơn YHCT</Button>
          <Button className='btn-navy mr-5 '>Kê đơn máu</Button>
          <Button className='btn-navy mr-5 '>Tờ điều trị</Button>
          <Button className='btn-navy mr-5 '>Biên bản hội chẩn</Button>
          <Button className='btn-navy mr-5 '>DS y lệnh</Button>
          <Button className='btn-navy mr-5 '>Chuyển khoa</Button>
          <Button className='btn-navy mr-5 '>Lịch sử giường</Button>
          <Button className='btn-navy mr-5 '>Kết thúc ĐT</Button>
        </div>
      </div>
    </PhanHeNoiTruProvider>
  );
};
export default DSPhongBenh;
