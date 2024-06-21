import { Form, Formik, useFormikContext } from "formik";
import { useContext } from "react";
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
import * as Yup from "yup";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import { IconButtonSave } from "../../../component/IconSvg";
import LabelRequired from "../../../component/LabelRequired";
import { LIST_DICH_VU } from "../../../phan-he-tiep-nhan-thanh-toan/components/fakeData";
import { ObjectSelectAutocomplete } from "../../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import InfoPatient from "../../components/InfoPatient";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import TextField from "../../../component/TextField";
type Props = {
  open: boolean;
  handleCloseModal: () => void;
};
interface IChuyenPhongKham {
  lyDoChuyen?: string;
  yeuCauKham?: ObjectSelectAutocomplete | null;
  tenPhongKham?: ObjectSelectAutocomplete | null;
}
const ChuyenPhongKhamModal = ({ open, handleCloseModal }: Props) => {
  const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
  const intl = useIntl()
  let { setFieldValue } = useFormikContext<any>();  
  let infoBenhNhan: any = benhNhanInfo;
  const handleSubmit = (values: IChuyenPhongKham) => {
    setFieldValue("tenPhongKham",values.tenPhongKham)
    handleCloseModal()
  };

  const validationSchema = Yup.object({
      tenPhongKham: Yup.object().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })).nullable(),
      yeuCauKham: Yup.object().required(intl.formatMessage({ id: "VALIDATION.REQUIRE" })).nullable(),
  });
  return (
    <Modal centered className="modal fade" role="dialog" show={open} dialogClassName="modal-md" aria-hidden="true">
      <Formik<IChuyenPhongKham>
        initialValues={{ lyDoChuyen: "", yeuCauKham: null, tenPhongKham: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="h-100">
            <ModalHeader closeButton onHide={handleCloseModal} className="header-modal">
              <Modal.Title>Chuyển phòng khám</Modal.Title>
            </ModalHeader>

            <ModalBody className="px-2">
              <InfoPatient infoBenhNhan={infoBenhNhan} />
              <Row className="mb-2 mt-2">
                <em className="text-primary">Chú ý: </em>
                <Col xs={12} className="d-flex mb-3 flex-column text-primary">
                  <em>- Sau khi chuyển phòng, hồ sơ bệnh án tại phòng khám này sẽ kết thúc</em>
                  <em>- Toàn bộ quyền kê đơn, xử trí sẽ thuộc về phòng khám tiếp theo</em>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col xs={12}>
                  <LabelRequired label="Lý do chuyển phòng" />
                  <TextField
                    className="w-100 d-flex flex-column align-items-start flex-auto spaces  pre-line"
                    name="lyDoChuyenPhong"
                    labelClassName="ms-0 min-w-145px"
                    as="textarea"
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <LabelRequired label="Yêu cầu khám" />
                <AutocompleteV2
                  options={LIST_DICH_VU}
                  onChange={(option) => setFieldValue("yeuCauKham", option)}
                  className="spaces "
                  name="yeuCauKham"
                  value={values.yeuCauKham}
                />
              </Row>
              <Row className="mb-4">
                <LabelRequired label="Phòng khám" />
                <AutocompleteV2
                  options={LIST_DICH_VU}
                  menuPlacement="top"
                  className="spaces "
                  name="tenPhongKham"
                  onChange={(option) => setFieldValue("tenPhongKham", option)}
                  getOptionLabel={(option) => `${option.code} - ${option.name}`}
                  value={values.tenPhongKham}
                />
              </Row>
            </ModalBody>

            <ModalFooter className="d-flex justify-content-end py-2">
              <Button className="btn-fill" type="submit">
                <IconButtonSave /> Lưu
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ChuyenPhongKhamModal;
