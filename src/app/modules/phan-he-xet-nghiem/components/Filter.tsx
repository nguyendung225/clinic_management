import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import { Autocomplete } from "../../component/Autocomplete";

const Filter = () => {
  return (
    <>
      <Form className="flex justify-content-between">
        <div className="flex align-items-center">
          <Form.Check label="Đang thực hiện" name="group1" type={"radio"} className="m-0 customs-form-check__radio" checked/>
        </div>
        <div className="flex align-items-center">
          <Form.Check label="Đã trả kết quả" name="group1" type={"radio"} className="m-0 customs-form-check__radio"/>
        </div>
        <div className="flex align-items-center">
          <label className="text-nowrap m-0 me-3">
            Phòng thực hiện
          </label>
          <Autocomplete className="customs-input w-250px" options={[]}/>
        </div>
        <div className="flex align-items-center">
          <label className="text-nowrap m-0 me-3">
            Từ ngày
          </label>
          <input className="form-control customs-input" type="date"/>
        </div>
        <div className="flex align-items-center">
          <label className="text-nowrap m-0 me-3">
            Đến ngày
          </label>
          <input className="form-control customs-input" type="date"/>
        </div>
        <Button className="btn-navy" size="sm">
          Xem
        </Button>
      </Form>
    </>
  );
};

export { Filter };
