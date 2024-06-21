import { useState } from 'react';
import { Button, Modal, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { danhSachTabCapNhatChuyenTuyen, danhSachTabCapNhatThongTin } from '../../constants/KhamBenh';
import { VARIABLE_STRING } from '../../../utils/Constant';

type Props = {
  show: boolean;
  handleCloseDialog: () => void;
  codeHinhThucXuTri: string;
}

const ModalCapNhatThongTinRaVien = ({ show, handleCloseDialog, codeHinhThucXuTri }: Props) => {
  const [activeKey, setActiveKey] = useState<string>("0");
  const checkTabs = codeHinhThucXuTri === VARIABLE_STRING.CHUYEN_TUYEN ? danhSachTabCapNhatChuyenTuyen : danhSachTabCapNhatThongTin;

  const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
    eventKey && setActiveKey(eventKey);
  };

  return (
    <Modal centered show={show} onHide={handleCloseDialog} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>
          Cập nhật thông tin
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className='spaces p-5'>
        <div>
          <Tabs className="customs-tabs" activeKey={activeKey} onSelect={handleTabSelect}>
            {checkTabs?.map((item, index) => {
              return <Tab
                eventKey={index}
                title={
                  <div className="label">
                    <span>{item?.title}</span>
                  </div>
                }
              >
                <div className="p-2">
                  {item?.component}
                </div>
              </Tab>
            })}
          </Tabs>
        </div>
      </Modal.Body>

      <Modal.Footer>
        {
          codeHinhThucXuTri === VARIABLE_STRING.CHUYEN_TUYEN
            ? <Button className="btn-fill">Mẫu</Button>
            : <Link to="/phan-he-tiep-nhan" className="btn-fill">Đặt lịch hẹn</Link>
        }
        <Button className="btn-fill">Cập nhật từ bệnh án</Button>
        <Button className="btn-fill">Lưu</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCapNhatThongTinRaVien