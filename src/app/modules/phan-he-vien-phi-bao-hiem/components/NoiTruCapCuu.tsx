import { Col, Form, Row } from "react-bootstrap";
import { BangNoiTruCapCuu } from "./bang-noi-tru-cap-cuu/BangNoiTruCapCuu";

const NoiTruCapCuu = () => {
  return (
    <div className="p-5">
      <Row className="d-flex justify-content-between mb-5">
        <Col xs={3}>
          <input type="text" placeholder="Tìm kiếm" className="form-control customs-input"/>
        </Col>
        <Col xs={2}>
          <Form>
            <Form.Select size="sm" className="form-select customs-input">
              <option>Tất cả</option>
              <option>Chờ tiếp nhận</option>
              <option>Đã tiếp nhận</option>
              <option>Hủy tiếp nhận</option>
            </Form.Select>
          </Form>
        </Col>
      </Row>
      <BangNoiTruCapCuu />
    </div>
  );
};

export { NoiTruCapCuu };
