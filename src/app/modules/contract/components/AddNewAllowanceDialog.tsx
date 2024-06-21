import { FC } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { useIntl } from "react-intl";
interface IProps {
  handleCLoseAllowanceDialog: () => void;
}

const AddNewAllowanceDialog: FC<IProps> = (props) => {
  const { handleCLoseAllowanceDialog } = props;
  const intl = useIntl();
  return (
    <>
      <Modal show={true} onHide={handleCLoseAllowanceDialog} size="lg" centered>
        <Modal.Header closeButton className='header-modal'>
          <Modal.Title>{intl.formatMessage({ id: "GENERAL.ALLOWANCE.ADD" })}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="ps-4 pt-8">
            <Col xs={6}>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm="4">
                    {intl.formatMessage({ id: "ALLOWANCE.NAME" })}
                    <span className="text-danger"> * </span>
                  </Form.Label>
                  <Col sm="6">
                    <Form.Select />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col xs={6}>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm="3">
                    {intl.formatMessage({ id: "ALLOWANCE.VALUE" })}
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control type="text" />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="ps-4 pt-8">
            <Col xs={6}>
              <Form>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm="8">
                    {intl.formatMessage({ id: "ALLOWANCE.PAYROLL" })}
                  </Form.Label>
                  <Col sm="4">
                    <Form.Check />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col xs={6}>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm="3">
                    {intl.formatMessage({ id: "ALLOWANCE.NOTE" })}
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="btn btn-secondary  btn-sm" onClick={handleCLoseAllowanceDialog}>
            {intl.formatMessage({ id: "BTN.CANCEL" })}
          </Button>
          <Button className="btn-sm btn-outline-secondary">
            {intl.formatMessage({ id: "BTN.ADDANDSAVE" })}
          </Button>
          <Button className="btn btn-primary btn-sm">
            {intl.formatMessage({ id: "BTN.SAVE" })}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export { AddNewAllowanceDialog };
