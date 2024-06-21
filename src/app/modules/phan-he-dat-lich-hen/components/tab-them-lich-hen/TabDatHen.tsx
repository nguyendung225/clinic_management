import { FC } from "react";
import { Col, Form, FormCheck, Row } from "react-bootstrap";
import TextField from "../../../component/TextField";
import { benhNhanProps } from "../../tab-them-lich-hen/ThemLichHen";

const TabDatHen: FC<benhNhanProps> = ({ values, setFieldValue, errors, touched, handleChangeSelect }) => {
  return (
    <div className="tableHenKham over-flow">
      <Row className="ms-4">
        <Col xs="4">
          <Form>
            <div className="spaces d-flex flex-column mt-5">
                <FormCheck
                  type="radio"
                  label="Giấy hẹn có giá trị hưởng BHYT"
                  className="min-w-150px d-flex align-items-end gap-2"
                  name="giayHen"
                  id="giayHenCoGiaTri"
                />
                <FormCheck
                  type="radio"
                  label="Giấy hẹn không có giá trị hưởng BHYT"
                  className="min-w-150px d-flex align-items-end gap-2 mt-2"
                  name="giayHen"
                  id="giayHenKhongCoGiaTri"
                />
            </div>
          </Form>
          <TextField
            className=" min-height-100px"
            label="Lời dặn của bác sĩ"
            name="loiDanCuaBacSi"
            as="textarea"
            labelClassName="ms-0 min-w-125px spaces mt-4 align-items-start flex-column"
          />
        </Col>
      </Row>
    </div>
  );
};
export default TabDatHen;
