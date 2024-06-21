import {Button, Col, Form, Modal, Row} from "react-bootstrap"
import {useFormik} from "formik"
import * as Yup from "yup"
import {IDichVu, ILoaiDichVu, INhomDichVu, IPayloadData} from "../../models/ModelDichVuGia"
import {useEffect, useState} from "react"
import {toast} from "react-toastify"
import {
  addDichVuGia,
  getAttributeType,
  getDanhSachNhomDichVu,
  updateDichVuGia,
} from "../../services/TabDichVuGiaServices"
import {MESSAGE_SUCCESS} from "../../constants/TabDichVuGiaConstant"
import { CODE_SUCCESS, ERROR_MESSAGE } from "../../../utils/Constant"
import AutocompleteField from "../../../component/AutocompleteField"

type Props = {
  handleCloseDMDVGDialog: () => void
  danhSachLoaiDichVu: ILoaiDichVu[]
  rowData: Partial<IDichVu>
}

const DanhMucDichVuGiaDialog = (props: Props) => {
  const {handleCloseDMDVGDialog, danhSachLoaiDichVu, rowData} = props
  const [danhSachNhomDichVu, setDanhSachNhomDichVu] = useState<INhomDichVu[]>([])

  const handleChangeAutocomplete = (name: string, e: ILoaiDichVu | INhomDichVu) => {
    formik.setFieldValue(name, e)
  }

  const formik = useFormik<IDichVu>({
    initialValues: {
      ...rowData,
      id: rowData?.id || 0,
      parent: rowData.parent || null,
      concept: rowData.concept || null,
      conceptAnswerName: rowData?.conceptAnswerName || "",
      serviceCode: rowData?.serviceCode || "",
      servicePrice: rowData?.servicePrice || "",
      insurancePrice: rowData?.insurancePrice || "",
    },
    validationSchema: Yup.object({
      conceptAnswerName: Yup.string().required("Vui lòng nhập tên").max(36, "Nhập tối đa 36 ký tự"),
      serviceCode: Yup.string().required("Vui lòng nhập mã").max(36, "Nhập tối đa 36 ký tự"),
      servicePrice: Yup.number().integer().min(0, "Giá không phải số âm").required("Vui lòng nhập giá dịch vụ"),
      insurancePrice: Yup.number().integer().min(0, "Giá không phải số âm").required("Vui lòng nhập giá bảo hiểm"),
      parent: Yup.object().nullable().required("Vui lòng chọn loại dịch vụ"),
      concept: Yup.object()
        .nullable()
        .when("parent", {
          is: (value: ILoaiDichVu) => value?.hasGroupService === true,
          then: Yup.object().required("Vui lòng chọn nhóm dịch vụ"),
        }),
    }),
    onSubmit: async (values) => {
      let arrayAttributes
      const result = await getAttributeType()

      if (result?.attributes?.length > 0) {
        arrayAttributes = result?.attributes?.filter((item: any) => {
          return Object.entries(values).map(
            ([key, value]) => key === item?.code && (item.value = value || "")
          )
        })
      }

      const data = {
        parent: values?.parent,
        concept: values?.concept ? values?.concept : null,
        conceptAnswerName: values?.conceptAnswerName,
        attributes: arrayAttributes,
      }

      values?.id ? handleUpdateDichVuGia(values?.id, data) : handleAddDichVuGia(data)
    },
  })

  const handleGetDanhSachNhomDichVu = async (id: number | string) => {
    try {
      const result = await getDanhSachNhomDichVu(id)
      setDanhSachNhomDichVu(result?.data?.data)
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  useEffect(() => {
    formik.values.parent?.id && handleGetDanhSachNhomDichVu(formik.values.parent?.id)
  }, [formik.values.parent?.id])

  const handleAddDichVuGia = async (data: IPayloadData) => {
    try {
      const result = await addDichVuGia(data)
      if (result?.data?.code === CODE_SUCCESS) {
        toast.success(MESSAGE_SUCCESS.addService)
        handleCloseDMDVGDialog()
      } else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleUpdateDichVuGia = async (id: number | string, data: IPayloadData) => {
    try {
      const result = await updateDichVuGia(id, data)
      if (result?.data?.code === CODE_SUCCESS) {
        toast.success(MESSAGE_SUCCESS.updateService)
        handleCloseDMDVGDialog()
      } else {
        toast.error(ERROR_MESSAGE)
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  return (
    <Modal
      centered
      show={true}
      dialogClassName="modal-90w"
      size="lg"
      onHide={handleCloseDMDVGDialog}
    >
      <Modal.Header className="py-4 header-modal" closeButton>
        <Modal.Title>
          <h2 className="text-white">Thông tin dịch vụ</h2>
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body className="py-4">
          <Row className="mb-4">
            <Col>
              <Form.Label>Loại dịch vụ</Form.Label>
              <AutocompleteField
                name="parent"
                value={formik.values.parent?.name}
                options={danhSachLoaiDichVu}
                onChange={(e) => handleChangeAutocomplete("parent", e)}
                touched={formik.touched.parent}
                errors={formik.errors.parent}
              />
            </Col>

            <Col>
              <Form.Label>Nhóm dịch vụ</Form.Label>
              <AutocompleteField
                dependencies={[formik.values.parent]}
                value={formik.values.concept?.name}
                name="concept"
                options={danhSachNhomDichVu}
                onChange={(e) => handleChangeAutocomplete("concept", e)}
                touched={formik.touched.concept}
                errors={formik.errors.concept}
                disabled={formik.values.parent?.hasGroupService === false}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Label>Tên dịch vụ</Form.Label>
              <Form.Control
                name="conceptAnswerName"
                type="text"
                size="sm"
                value={formik.values.conceptAnswerName}
                onChange={formik.handleChange}
                isInvalid={Boolean(
                  formik.touched.conceptAnswerName && formik.errors.conceptAnswerName
                )}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.conceptAnswerName}
              </Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label>Mã dịch vụ</Form.Label>
              <Form.Control
                name="serviceCode"
                type="text"
                size="sm"
                value={formik.values.serviceCode}
                onChange={formik.handleChange}
                isInvalid={Boolean(formik.touched.serviceCode && formik.errors.serviceCode)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.serviceCode}
              </Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label>Giá dịch vụ</Form.Label>
              <Form.Control
                name="servicePrice"
                type="number"
                size="sm"
                value={formik.values.servicePrice || ""}
                onChange={formik.handleChange}
                isInvalid={Boolean(formik.touched.servicePrice && formik.errors.servicePrice)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.servicePrice}
              </Form.Control.Feedback>
            </Col>

            <Col>
              <Form.Label>Giá bảo hiểm</Form.Label>
              <Form.Control
                name="insurancePrice"
                type="number"
                size="sm"
                value={formik.values.insurancePrice || ""}
                onChange={formik.handleChange}
                isInvalid={Boolean(formik.touched.insurancePrice && formik.errors.insurancePrice)}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.insurancePrice}
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer className="flex flex-middle flex-center py-1">
        <Button className="btn-navy min-w-50px" type="submit">
          Lưu
        </Button>
        <Button className="btn-navy-outlined" onClick={handleCloseDMDVGDialog}>
          Đóng
        </Button>
      </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default DanhMucDichVuGiaDialog
