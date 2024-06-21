import React, { useContext, useState } from 'react';
import { LichSuHoiChanInterface } from '../../models/DSBenhNhanKhamBenhModels';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ThuocLichSuHoiChanColumnColumns } from './LichSuHoiChanColumn';
import { PhanHeTiepDonContext } from '../../contexts/PhanHeTiepDonContext';
import { handleAgeCalculate } from '../../../utils/FormatUtils';
import Select from 'react-select';
import { TableCustom } from '../../../component/table/table-custom/TableCustom';
type Props = {
  shouldOpenHoiChanDialog: boolean,
  handleCloseHoiChan: () => void;
};
const options = [
  { value: '34apple', label: 'BS Lê đức thọ' },
  { value: 'bana1na', label: 'BS Lê lfgjhfgdff' },
  { value: 'or1ange', label: 'fghgdđsdfsfsfsdffsdfsdffghgdđsdfsfsfsdffsdfsdf' },
  { value: 'a34pple', label: 'Appfdsfsdfdsfsle14' },
  { value: 'ban34ana', label: 'Bsdgetrụtyganana2' },
  { value: 'ora34nge', label: 'Orthtytbfange3' },
  { value: 'ap65ple', label: 'Appdfbdvdvdvdle2' },
  { value: 'ba56ana', label: 'Bandthỷtgdvdrana4' },
  { value: 'ora56nge', label: 'drgdgvdgrgrgdfrhdr' },
  // Thêm các tùy chọn khác nếu cần
];

const BienBanHoiChanModal = (props: Props) => {
  const { shouldOpenHoiChanDialog, handleCloseHoiChan } = props;
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  const handleChange = (selectedOptions: any) => {
    setSelectedOptions(selectedOptions);
  };
  const fakeData = [
    {
      index: 1,
      ngayTao: "13/05/2001"
    },
    {
      index: 2,
      ngayTao: "13/05/2001"
    },
  ];
  return (
    <Modal
      show={shouldOpenHoiChanDialog}
      className='modal fade'
      role='dialog'
      dialogClassName='modal-md'
      aria-hidden='true'
      centered
      size='xl'
    >
      <Modal.Header closeButton className='header-modal' onHide={handleCloseHoiChan}>
        <Modal.Title className='text-pri'>Hội chẩn</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className='form-border p-2'>
            <Col sm="6">
              <Row>
                <Col sm="5">
                  <Form.Label>Mã bệnh nhân:</Form.Label>
                  <Form.Control
                    readOnly

                    className='customs-input'
                    type='text'
                    value={benhNhanInfo?.pin || ""}
                  />
                </Col>
                <Col sm="5">
                  <Form.Label>Họ tên:</Form.Label>
                  <Form.Control
                    readOnly
                    className='customs-input'
                    type='text'
                    value={benhNhanInfo?.hoTen || ""}
                  />
                </Col>
                <Col sm="2">
                  <Form.Label>Tuổi:</Form.Label>
                  <Form.Control
                    readOnly
                    className='customs-input'
                    type='text'
                    value={benhNhanInfo?.person?.birthDay && handleAgeCalculate(benhNhanInfo?.person?.birthDay) || ""}
                  />
                </Col>
                <Col sm="4">
                  <Form.Label>Giới tính:</Form.Label>
                  <Form.Control
                    readOnly
                    className='customs-input'
                    type='text'
                    value={benhNhanInfo?.gioiTinh || ""}
                  />
                </Col>
                <Col sm="8">
                  <Form.Label>Nghề nghiệp:</Form.Label>
                  <Form.Control
                    readOnly
                    className='customs-input'
                    type='text'
                    value={benhNhanInfo?.person?.jobName || ""}
                  />
                </Col>
                <Col sm="6">
                  <Form.Label>Số BHYT:</Form.Label>
                  <Form.Control
                    readOnly
                    className='customs-input'
                    type='text'
                    value={benhNhanInfo?.benhNhanBhyt?.soBhyt || ""}
                  />
                </Col>
                <Col sm="6">
                  <Form.Label>Vào viện lúc:</Form.Label>
                  <Form.Control
                    readOnly
                    className='customs-input'
                    type='text'
                    value={""}
                  />
                </Col>
                <Col sm="12">
                  <Form.Label>Địa chỉ:</Form.Label>
                  <Form.Control
                    readOnly
                    className='customs-input'
                    type='text'
                    value={benhNhanInfo?.person?.fullAddress || ''}
                  />
                </Col>
              </Row>
            </Col>
            <Col sm="6">
              <Row>
                <Form.Label>DS bác sĩ hội chẩn:</Form.Label>
                <Col sm="6">
                  <Select
                    className='mb-3 '
                    options={options}
                    value={selectedOptions}
                    isMulti
                    placeholder="DS bác sĩ hội chẩn"
                    onChange={handleChange}
                  />
                </Col>
                <Col sm="6">
                  <TableCustom<LichSuHoiChanInterface>
                    data={fakeData}
                    columns={ThuocLichSuHoiChanColumnColumns}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='form-border p-2 border-top-none'>
            <Col sm="6">
              <Form.Label>Lý do hội chẩn:</Form.Label>
              <Form.Control
                as="textarea"
                className='text-area-custom'
              />
            </Col>
            <Col sm="6">
              <Form.Label>Tóm tắt tiền sử bệnh:</Form.Label>
              <Form.Control
                as="textarea"
                className='text-area-custom'
              />
            </Col>
            <Col sm="6">
              <Form.Label>Tình trạng lúc vào viện:</Form.Label>
              <Form.Control
                as="textarea"
                className='text-area-custom'
              />
            </Col>
            <Col sm="6">
              <Form.Label>Chẩn đoán(Tuyến dưới, Khoa khám bệnh, Khoa điều trị):</Form.Label>
              <Form.Control
                as="textarea"
                className='text-area-custom'
              />
            </Col>
            <Col sm="6">
              <Form.Label>Quá trình tiến diễn bệnh, quá trình điều trị, chăm sóc người bệnh:</Form.Label>
              <Form.Control
                as="textarea"
                className='text-area-custom'
              />
            </Col>
            <Col sm="6">
              <Form.Label>Chẩn đoán, nguyên nhân, tiên lượng:</Form.Label>
              <Form.Control
                as="textarea"
                className='text-area-custom'
              />
            </Col>
            <Col sm="6">
              <Form.Label>Kết luận sau khi đã khám lại và hội chẩn:</Form.Label>
              <Form.Control
                as="textarea"
                className='text-area-custom'
              />
            </Col>
            <Col sm="6">
              <Form.Label>Hướng điều trị hội chẩn:</Form.Label>
              <Form.Control
                as="textarea"
                className='text-area-custom'
              />
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button
          className="btn-navy btn-w5 mr-5 "
        >
          Lưu & In
        </Button>
        <Button
          className="btn-navy-outlined btn-w5 "
        >
          Lưu
        </Button>
        <Button
          className="btn-navy btn-w5 mr-5 "
          onClick={handleCloseHoiChan}
        >
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default BienBanHoiChanModal;