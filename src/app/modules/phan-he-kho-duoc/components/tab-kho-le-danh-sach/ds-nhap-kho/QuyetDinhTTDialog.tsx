import { Button, Col, Form, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap'
import { useFormik } from 'formik';
import { INIT_QDTT } from '../../../consts/QuanLyKhoConst';
import { IQuyetDinhTT } from '../../../models/QuanLyKhoModels';
import { useIntl } from 'react-intl';
import * as Yup from "yup";
import LabelRequired from '../../../../component/LabelRequired';
import TextValidator from '../../../../component/TextValidator';

type Props = {
  data?: any,
  item: IQuyetDinhTT,
  handleRowsSelectChange: (selecetedData: any, index: number, name: string) => void;
  handleCloseDialog: () => void;
  setItemQDTT: React.Dispatch<React.SetStateAction<IQuyetDinhTT>>
}

const QuyetDinhTTDialog = (props: Props) => {
  const { data, handleCloseDialog, item, setItemQDTT, handleRowsSelectChange } = props;
  const intl = useIntl()
  const isAddNew = data === INIT_QDTT

  const formik = useFormik<IQuyetDinhTT>({
    initialValues: {
      index: item?.index,
      winningBidDecisionCode: item?.winningBidDecisionCode || "",
      numbersBidWinning: item?.numbersBidWinning || "",
      bidWinningDecisionGroup: item?.bidWinningDecisionGroup || "",
      yearOfWinBidDecision: item?.yearOfWinBidDecision || null,
      bidQuantity: item?.bidQuantity || null,
    },
    validationSchema: Yup.object({
      winningBidDecisionCode: Yup.string().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })),
      numbersBidWinning: Yup.string().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })),
      bidWinningDecisionGroup: Yup.string().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })),
      yearOfWinBidDecision: Yup.number().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })).nullable(),
      bidQuantity: Yup.number().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })).nullable(),
    }),
    onSubmit: (values) => {
      handleRowsSelectChange(values, values?.index as number, "winningBidDecisionCode")
      handleCloseDialog()
    }
  })

  return (
    <Modal centered show={true} onHide={handleCloseDialog} className="background-blur" size='lg'>
      <ModalHeader className="header-modal" closeButton>
        <ModalTitle>
          {data?.id ? "Sửa" : "Thêm"} Quyết Định TT
        </ModalTitle>
      </ModalHeader>
      <Form onSubmit={formik.handleSubmit}>
        <ModalBody className="py-4 pt-2">
          <Row className="my-3">
            <Col md={4}>
              <div className="mb-3">
                <LabelRequired
                  isRequired
                  label="Số quyết định"
                />
                <TextValidator
                  type="text"
                  name="winningBidDecisionCode"
                  value={formik.values?.winningBidDecisionCode}
                  errors={formik.errors?.winningBidDecisionCode}
                  touched={formik.touched?.winningBidDecisionCode}
                  onChange={formik.handleChange}
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="mb-3">
                <LabelRequired
                  isRequired
                  label="Số gói thầu"
                />
                <TextValidator
                  type="text"
                  name="numbersBidWinning"
                  value={formik.values?.numbersBidWinning}
                  errors={formik.errors?.numbersBidWinning}
                  touched={formik.touched?.numbersBidWinning}
                  onChange={formik.handleChange}
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="mb-3">
                <LabelRequired
                  isRequired
                  label="Nhóm thầu"
                />
                <TextValidator
                  type="text"
                  name="bidWinningDecisionGroup"
                  value={formik.values?.bidWinningDecisionGroup}
                  errors={formik.errors?.bidWinningDecisionGroup}
                  touched={formik.touched?.bidWinningDecisionGroup}
                  onChange={formik.handleChange}
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="mb-3">
                <LabelRequired
                  isRequired
                  label="Năm thầu"
                />
                <TextValidator
                  type="number"
                  name="yearOfWinBidDecision"
                  value={formik.values?.yearOfWinBidDecision}
                  errors={formik.errors?.yearOfWinBidDecision}
                  touched={formik.touched?.yearOfWinBidDecision}
                  onChange={formik.handleChange}
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="mb-3">
                <LabelRequired
                  isRequired
                  label="Số lượng thầu"
                />
                <TextValidator
                  type="number"
                  name="bidQuantity"
                  value={formik.values?.bidQuantity}
                  errors={formik.errors?.bidQuantity}
                  touched={formik.touched?.bidQuantity}
                  onChange={formik.handleChange}
                />
              </div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="py-3 flex flex-center">
          <Button variant="secondary" className="min-w-80px btn btn-primary btn-sm" onClick={handleCloseDialog}>
            Hủy
          </Button>
          <Button variant="primary" className="btn-navy min-w-80px btn btn-primary btn-sm" type="submit">
            Lưu
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default QuyetDinhTTDialog