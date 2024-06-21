import { FC, useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { useIntl } from "react-intl";
import { AddNewAllowanceDialog } from "./AddNewAllowanceDialog";
// import { TableCustom } from "../../component/table-custom/TableCustom";
import { AllowanceInfo, ContractAnnexInfo, ContractInfo, OptionsInfo } from "../models/ContractModels";
import { AllowanceColumn } from "./AllowanceColumn";
import { ContractAnnexColumn } from "./ContractAnnexColumn";
import { AddNewContractAnnex } from "./AddNewContractAnnex";
import { GroupButton } from "../../component/GroupButton";
import { contractAnnex ,allowances} from "../const/ContractConst";
interface IProps {
  view: boolean;
  handleOpenUpdateDialog: () => void;
  handleCloseDialog: () => void;
  handleCloseUpdateDialog: () => void;
  contractInfo: ContractInfo;
}
const AddNewContract: FC<IProps> = (props) => {
  const {
    handleCloseDialog,
    view,
    handleOpenUpdateDialog,
    contractInfo,
    handleCloseUpdateDialog,
  } = props;
  const [shouldOpenAllowanceDialog, setSHouldOpenAllowanceDialog] = useState<boolean>(false);
  const [shouldOpenAddContractAnnex, setShouldOpenAddContractAnnex] = useState<boolean>(false);

  const intl = useIntl();
  const handleCLoseAllowanceDialog = () => {
    setSHouldOpenAllowanceDialog(false);
  };
  const handleCLoseAddContractAnnex = () => {
    setShouldOpenAddContractAnnex(false);
  };

  return (
    <>
      {!shouldOpenAddContractAnnex && (
        <Col>
          <Row>
            <Col xs={12}>
              <div className="profile-title">
                {view && (
                  <>
                    <GroupButton type="btn-back" handleClose={handleCloseDialog} />
                    <GroupButton type="btn-edit" handleSaveEdit={handleOpenUpdateDialog} />
                  </>
                )}
                {!contractInfo.number && !view && (
                  <>
                    <span className="fs-3 fw-bold">
                      {intl.formatMessage({ id: "CONTRACT.ADD" })}
                      <i className="bi bi-three-dots-vertical"></i>
                    </span>
                    <GroupButton type="btn-save" handleClose={handleCloseDialog} />
                  </>
                )}
                {contractInfo.number && !view && (
                  <>
                    <GroupButton type="btn-back" handleClose={handleCloseUpdateDialog} />
                    <GroupButton type="btn-save" handleClose={handleCloseUpdateDialog} />
                  </>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-4 bg-light contract-info">
            <Col xs={12}>
              <span className="fs-3 fw-bold">{intl.formatMessage({ id: "INFO.MAIN" })}</span>
            </Col>
            <Col xs={12}>
              <Row className="ps-8 pt-8">
                <Col xs={6}>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="4">
                        {intl.formatMessage({ id: "CONTRACT.WORKERFULLNAME" })}
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
                        {intl.formatMessage({ id: "INPUT.CODE" })}
                        <span className="text-danger"> * </span>
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control type="text" />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row className="ps-8 pt-8">
                <Col xs={6}>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="4">
                        {intl.formatMessage({ id: "CONTRACT.SIGNINGUNIT" })}
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
              <Row className="ps-8 pt-8">
                <Col xs={6}>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="4">
                        {intl.formatMessage({ id: "CONTRACT.NUMBER" })}
                        <span className="text-danger"> * </span>
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
                <Col xs={6}>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="4">
                        {intl.formatMessage({ id: "CONTRACT.SIGNINGDATE" })}
                        <span className="text-danger"> * </span>
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control type="date" />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row className="ps-8 pt-8">
                <Col xs={6}>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="4">
                        {intl.formatMessage({ id: "CONTRACT.NAME" })}
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
                        {intl.formatMessage({ id: "CONTRACT.TYPE" })}
                        <span className="text-danger"> * </span>
                      </Form.Label>
                      <Col sm="6">
                        <Form.Select />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row className="ps-8 pt-8">
                <Col xs={6}>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="4">
                        {intl.formatMessage({ id: "CONTRACT.DURATION" })}
                      </Form.Label>
                      <Col sm="6">
                        <Form.Select></Form.Select>
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
                <Col xs={6}>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="4">
                        {intl.formatMessage({ id: "CONTRACT.WORKINGFORM" })}
                      </Form.Label>
                      <Col sm="6">
                        <Form.Select />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row className="ps-8 pt-8">
                <Col xs={6}>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="4">
                        {intl.formatMessage({ id: "CONTRACT.EFFECTIVEDATE" })}
                        <span className="text-danger"> * </span>
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
                        {intl.formatMessage({ id: "CONTRACT.EXPIRATIONDATE" })}
                        <span className="text-danger"> * </span>
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control type="date" />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row className="ps-8 pt-8">
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
              <Row className="ps-8 pt-8">
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
              <Row className="ps-8 pt-8">
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
                        {intl.formatMessage({ id: "CONTRACT.ATTACHMENTS" })}
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control type="file" />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row className="ps-8 pt-8">
                <Col xs={6}>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="4">
                        {intl.formatMessage({ id: "CONTRACT.NOTE" })}
                      </Form.Label>
                      <Col sm="6">
                        <Form.Control type="text" as="textarea" />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Col>
            <Col xs={12} className="py-8">
              <span className="fs-3 fw-bold">
                {intl.formatMessage({ id: "GENERAL.ALLOWANCE" })}
              </span>
            </Col>
            <Col xs={12}>
              <Row>
                {allowances.length > 0 && (
                  <Col xs={12}>
                    {/* <TableCustom<AllowanceInfo>
                      data={allowances}
                      columns={AllowanceColumn}
                      compact={true}
                    /> */}
                  </Col>
                )}
                {!view && (
                  <Col
                    className="cursor-pointer py-4"
                    onClick={() => setSHouldOpenAllowanceDialog(true)}
                  >
                    <i className="bi bi-plus-lg fs-4 px-3 text-primary"></i>
                    <span className="fs-6 fw-bold text-primary">
                      {intl.formatMessage({ id: "ADD" })}
                    </span>
                  </Col>
                )}
              </Row>
            </Col>
            <Row>
              <Col xs={12} className="py-8">
                <span className="fs-3 fw-bold">{intl.formatMessage({ id: "CONTRACT.ANNEX" })}</span>
              </Col>
              <Col xs={12}>
                <Row>
                  {contractAnnex.length > 0 && (
                    <Col xs={12}>
                      {/* <TableCustom<ContractAnnexInfo>
                        data={contractAnnex}
                        columns={ContractAnnexColumn}
                        compact={true}
                      /> */}
                    </Col>
                  )}
                  {!view && (
                    <Col
                      className="cursor-pointer py-4"
                      onClick={() => setShouldOpenAddContractAnnex(true)}
                    >
                      <i className="bi bi-plus-lg fs-4 px-3 text-primary"></i>
                      <span className="fs-6 fw-bold text-primary">
                        {intl.formatMessage({ id: "ADD" })}
                      </span>
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>
          </Row>
        </Col>
      )}
      {shouldOpenAllowanceDialog && (
        <AddNewAllowanceDialog handleCLoseAllowanceDialog={handleCLoseAllowanceDialog} />
      )}
      {shouldOpenAddContractAnnex && (
        <AddNewContractAnnex handleCLoseAddContractAnnex={handleCLoseAddContractAnnex} />
      )}
    </>
  );
};
export { AddNewContract };
