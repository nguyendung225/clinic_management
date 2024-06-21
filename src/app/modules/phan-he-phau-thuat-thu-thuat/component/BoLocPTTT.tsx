import React, { FC } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Autocomplete } from "../../component/Autocomplete";

export interface BoLocPTTTProps {
  firstLabel?: string;
  secondLabel?: string;
  departmentList?: any;
  onCheck?: (id: string) => void;
  onSelect?: (value: object) => void;
  onDateChange?: (event: React.BaseSyntheticEvent) => void;
}

const BoLocPTTT: FC<BoLocPTTTProps> = (props) => {
  const {
    firstLabel,
    secondLabel,
    departmentList,
    onCheck,
    onSelect,
    onDateChange,
  } = props;

  const handleCheck = (event: any) => {
    if (onCheck) {
      onCheck(event.target.id); //Trả ra string 1 | 2 tương ứng radio 1 hoặc 2
    }
  }

  const handleSelectChange = (event: any) => {
    if (onSelect) {
      onSelect(event.target.value); // Trả ra 1 object value
    }
  }

  const handleDateChange = (event: React.BaseSyntheticEvent) => {
    if (onDateChange) {
      onDateChange(event); //Hàm trả ra 1 event
    }
  }

  return (
    <div >
      <Row  className="spaces px-10 pt-10 pb-5">
        <Col xs={6}>
          <Row>
            <Col xs={4} className="flex align-items-center">
              <Form.Check
                className="customs-form-check__radio"
                radioGroup="boLocPTTT"
                name="check"
                inline
                id="1"
                type="radio"
                onClick={handleCheck}
                label={firstLabel ? firstLabel : "Chỉ định"}
              />
              <Form.Check
                className="customs-form-check__radio"
                inline
                radioGroup="boLocPTTT"
                name="check"
                id="2"
                type="radio"
                onClick={handleCheck}
                label={secondLabel ? secondLabel : "Đã thực hiện"}
              />
            </Col>
            <Col xs={8} className="flex">
              <span className='spaces mr-8 fs-5 flex align-items-center text-nowrap opacity-75'>
                Phòng thực hiện
              </span>
              <Autocomplete
                options={departmentList}
                name="phongThucHien"
                onChange={handleSelectChange}
                placeholder="Phòng thực hiện..."
              />
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={5} className="flex">
              <span className='spaces mr-8 fs-5 flex align-items-center text-nowrap opacity-75'>
                Từ Ngày:
              </span>
              <input
                className="form-control customs-input"
                name="startDate"
                onChange={handleDateChange}
                type="date"
              />
            </Col>
            <Col xs={5} className="flex">
              <span className='spaces mr-8 fs-5 flex align-items-center text-nowrap opacity-75'>
                Đến ngày:
              </span>
              <input
                className="form-control customs-input"
                name="endDate"
                onChange={handleDateChange}
                type="date"
              />
            </Col>
            <Col xs={2}>
              <Button variant="primary" size="sm">
                Xem
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

    </div>
  );
};
export default BoLocPTTT;
