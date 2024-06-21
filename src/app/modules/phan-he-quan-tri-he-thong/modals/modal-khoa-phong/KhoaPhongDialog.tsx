import { useState } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import { useFormik } from "formik"
import * as Yup from "yup"
import { getDanhSachKhoa, getDanhSachPhong } from "../../services/TabKhoaPhongServices"
import LabelRequired from "../../../component/LabelRequired"
import AutocompleteObject from "../../../component/AutocompleteObject";
import { useIntl } from "react-intl"
import { IKhoa, IPhong } from "../../models/ModelNhanVien"
import { localStorageItem } from "../../../utils/LocalStorage"
import { KEY_LOCALSTORAGE } from "../../../auth/core/_consts"
import { VARIABLE_STRING } from "../../../utils/Constant"
import { toast } from "react-toastify"

type Props = {
  open: boolean,
  handleCloseDialog: () => void
}

const KhoaPhongDialog = (props: Props) => {
  const { handleCloseDialog, open } = props;
  const intl = useIntl();
  let department = localStorageItem.get(KEY_LOCALSTORAGE.DEPARTMENT)
  let room = localStorageItem.get(KEY_LOCALSTORAGE.ROOM)

  const [initialValues, setInitialValues] = useState({
    department: department ? department : null,
    room: room ? room : null,
  })

  const validationSchema = Yup.object().shape({
    department: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable(),
    room: Yup.object().required(intl.formatMessage({ id: 'VALIDATION.REQUIRE' })).nullable()
  })

  const handleSubmit = (values: any) => {
    if (values?.department && values?.room) {
      localStorageItem.set(KEY_LOCALSTORAGE.DEPARTMENT, values?.department)
      localStorageItem.set(KEY_LOCALSTORAGE.ROOM, values?.room)
      handleCloseDialog()
    }
  }

  const formik = useFormik({
    initialValues: initialValues as any,
    validationSchema,
    onSubmit: handleSubmit
  })

  const handleChangeAutocomplete = <TOption extends unknown>(name: string, selectedOption: TOption) => {
    formik.setFieldValue(name, selectedOption);
    switch (name) {
      case VARIABLE_STRING.DEPARTMENT:
        formik.setFieldValue(name, selectedOption);
        formik.setFieldValue(VARIABLE_STRING.ROOM, null);
        break;
      default:
        formik.setFieldValue(name, selectedOption);
        break;
    }
  };

  const handleClose = () => {
    // if (!department || !room) {
    //   toast.warn("Chưa chọn khoa và phòng");
    //   return;
    // }

    handleCloseDialog();
  }

  return (
    <Modal centered show={open}>
      <Modal.Header className='p-4 header-modal modal-header'>
        <Modal.Title className='text-cyan text-uppercase'>Chọn khoa phòng</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body className="py-4">
          <Row className="mb-3">
            <Col xs={12}>
              <LabelRequired
                label="Tên khoa"
              />
              <AutocompleteObject
                name="department"
                options={[]}
                searchFunction={getDanhSachKhoa}
                searchObject={{}}
                value={formik.values.department}
                onChange={(value) => handleChangeAutocomplete<IKhoa>("department", value)}
                errors={formik.errors?.department}
                touched={formik.touched?.department}
              />
            </Col>
            <Col xs={12}>
              <LabelRequired
                label="Tên phòng"
              />
              <AutocompleteObject
                name="room"
                options={[]}
                searchFunction={formik.values.department?.id ? getDanhSachPhong : undefined}
                searchObject={{ departmentId: formik.values.department?.id ? formik.values.department?.id : null }}
                value={formik.values.room}
                onChange={(value) => handleChangeAutocomplete<IPhong>("room", value)}
                errors={formik.errors?.room}
                touched={formik.touched?.room}
                dependencies={[formik.values.department]}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className='pt-2 pb-2 justify-content-center'>
          <Button
            type='submit'
            className='btn-fill min-w-60px'
          >
            Lưu
          </Button>
          <Button
            className='btn-outline min-w-60px'
            onClick={handleClose}
          >
            Hủy
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default KhoaPhongDialog
