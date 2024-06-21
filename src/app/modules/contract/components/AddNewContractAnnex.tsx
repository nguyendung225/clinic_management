import { FC } from "react";
import { Col, Row ,Form} from "react-bootstrap";
import { useIntl } from "react-intl";
import { GroupButton } from "../../component/GroupButton";
interface IProps {
  handleCLoseAddContractAnnex:()=>void
}
const AddNewContractAnnex: FC<IProps> = (props) => {
  const { handleCLoseAddContractAnnex } = props;
  const intl = useIntl();
  return (
    <>
      <Row>
        <Col>
          <div className="profile-title">
            <GroupButton type="btn-back" handleClose={handleCLoseAddContractAnnex} />
            <GroupButton type="btn-save" handleClose={handleCLoseAddContractAnnex} />
          </div>
        </Col>
        <Row className="mt-4 bg-light contract-info">
          <Col xs={12}>
            <span className="fs-2 fw-bold text-pri">
              {intl.formatMessage({ id: "CONTRACT.ANNEX.ADD" })}
            </span>
          </Col>
          <Col xs={12} className="mt-8 mx-4">
            <span className="fs-3 fw-bold ">{intl.formatMessage({ id: "INFO.MAIN" })}</span>
          </Col>
          <Col xs={12}>
            <Row className="ms-8 mt-8">
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "ANNEX.NUMBER" })}
                      <span className="text-danger"> * </span>
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "ANNEX.NAME" })}
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="ms-8 mt-8">
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "ANNEX.SIGNINGDATE" })}
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="date" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "ANNEX.EFFECTIVEDATE" })}
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="date" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="ms-8 mt-8">
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.ORIGINAL" })}
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.SIGNINGSTATUS" })}
                      <span className="text-danger"> * </span>
                    </Form.Label>
                    <Col sm="6">
                      <Form.Select />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="mt-16 mx-4">
            <span className="fs-3 fw-bold ">{intl.formatMessage({ id: "INFO.CHANGE" })}</span>
          </Col>
          <Col xs={12}>
            <Row className="ms-8 mt-8">
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.SIGNINGUNIT" })}
                      <span className="text-danger"> * </span>
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.JOBPOSITION" })}
                    </Form.Label>
                    <Col sm="6">
                      <Form.Select />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="ms-8 mt-8">
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.TYPE" })}
                      <span className="text-danger"> * </span>
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.DURATION" })}
                    </Form.Label>
                    <Col sm="6">
                      <Form.Select />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="ms-8 mt-8">
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.EFFECTIVEDATE" })}
                      <span className="text-danger"> * </span>
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.EXPIRATIONDATE" })}
                      <span className="text-danger"> * </span>
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="ms-8 mt-8">
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.BASESALARY" })}
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.INSURANCECONTRIBUTION" })}
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="ms-8 mt-8">
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.SALARYRATE" })}
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.SIGNEDCOMPANYREPRESENTATIVE" })}
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="ms-8 mt-8">
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.REPRESENTATIVETITLE" })}
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
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "GENERAL.INFO.ATTACHMENTS" })}
                      <span className="text-danger"> * </span>
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control type="file" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className="ms-8 mt-8">
              <Col xs={6}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm="4">
                      {intl.formatMessage({ id: "CONTRACT.NOTE" })}
                      <span className="text-danger"> * </span>
                    </Form.Label>
                    <Col sm="6">
                      <Form.Control as="textarea" />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
};
export { AddNewContractAnnex };
