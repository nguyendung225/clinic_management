import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { AppContext } from "../../../../appContext/AppContext";
import Autocomplete from "../../../../component/AutocompleteObject";
import TextValidator from "../../../../component/TextValidator";
import { CODE_SUCCESS } from "../../../../utils/Constant";
import { TYPE_PRODUCT, TYPE_SIMPLE_CATEGORIES } from "../../../consts/PhanHeKhoDuocConst";
import { convertObjectToArray } from "../../../utils/Utils";
import { optionSelect } from "../../../models/ThuocModel";
import { initFormVTHC } from "../../../consts/VatTuHoaChatConst";
import {
  createProduct,
  getProductType,
  getSimpleCategories,
  updateProduct,
} from "../../../services/VatTuVaHoaChatServices";
import LabelRequired from "../../../../component/LabelRequired";
import { VatTuHoaChatConvert } from "../../../models/VatTuHoaChatModel";

interface IProps {
  handleCloseModal: () => void;
  dataVatTuHoaChat: VatTuHoaChatConvert;
  titleDialog: string;
  isView: boolean;
  updateTaleData: () => void;
}

export default function VatTuHoaChatDialogV2(props: IProps) {
  const { handleCloseModal, dataVatTuHoaChat, titleDialog, isView, updateTaleData } = props;
  const { setIsLoading } = useContext(AppContext);
  const initialValues: VatTuHoaChatConvert = dataVatTuHoaChat || initFormVTHC;
  const [typeId, setTypeId] = useState<string>();

  useEffect(() => {
    getTypeVatTu();
  }, []);

  const getTypeVatTu = async () => {
    try {
      const { data } = await getProductType({ code: TYPE_PRODUCT.VAT_TU });
      if (data?.code === CODE_SUCCESS) {
        setTypeId(data?.data?.content[0]?.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Trường này là bắt buộc"),
    code: Yup.string().required("Trường này là bắt buộc"),
    unit: Yup.object().required("Trường này là bắt buộc"),
  });

  const handleSubmit = async (values: VatTuHoaChatConvert) => {
    setIsLoading(true);
    try {
      const submitData = {
        ...values,
        attributeValues: convertObjectToArray(values?.attributeValues),
        typeId: typeId,
        unitId: values?.unit?.id,
      };
      const { data } = dataVatTuHoaChat?.id
        ? await updateProduct(submitData)
        : await createProduct(submitData);

      if (data?.code === CODE_SUCCESS) {
        toast.success("Thành công");
        updateTaleData();
        handleCloseModal();
      } else {
        toast.error("Có lỗi xảy ra!");
      }
    } catch (err) {
      toast.error("Có lỗi xảy ra!");
    } finally {
      setIsLoading(false);
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  const handleChangeSelect = (name: string, value: optionSelect) => {
    if (Array.isArray(value) || name === "unit") {
      formik.setFieldValue(name, value);
    } else {
      formik.setFieldValue(name, [value]);
    }
  };

  return (
    <Modal centered className="modal fade" role="dialog" show={true} size="xl" aria-hidden="true">
      <Modal.Header closeButton onHide={handleCloseModal} className="header-modal">
        <Modal.Title className="fs-2">{titleDialog}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body className="modal-scroll">
          <Row>
            <h3 className="m-0">Thông tin cơ bản</h3>
            <Row className="pb-4 pt-1">
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" isRequired label="Tên vật tư" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  type="text"
                  name="name"
                  touched={formik.touched?.name}
                  value={formik.values?.name}
                  errors={formik.errors?.name}
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" isRequired label="Đơn vị tính" />
                <Autocomplete
                  options={[]}
                  value={formik.values?.unit}
                  name="unit"
                  searchFunction={getSimpleCategories}
                  searchObject={{ type: TYPE_SIMPLE_CATEGORIES.UNIT }}
                  isDisabled={isView}
                  onChange={(data) => handleChangeSelect("unit", data)}
                  className={formik.errors?.unit && formik.touched?.unit ? "ac-is-invalid" : ""}
                />
                {formik.touched?.unit && formik.errors?.unit && (
                  <div className="invalid-feedback">{formik.errors?.unit}</div>
                )}
              </Col>

              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label="Mã vật tư BYT" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  type="text"
                  name="attributeValues.materialCode"
                  value={formik.values?.attributeValues?.materialCode}
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" isRequired label="Mã vật tư" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  type="text"
                  name="code"
                  touched={formik.touched?.code}
                  value={formik.values?.code}
                  errors={formik.errors?.code}
                />
              </Col>

              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label="STT vật tư BYT" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  type="text"
                  name="attributeValues.numericalOrder"
                  value={formik.values?.attributeValues?.numericalOrder}
                />
              </Col>

              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label="Tên vật tư BV" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  name="attributeValues.materialName"
                  value={formik.values?.attributeValues?.materialName}
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label=" Nước SX" />
                <Autocomplete
                  options={[]}
                  name="attributeValues.manufacturingCountry"
                  value={formik.values?.attributeValues?.manufacturingCountry}
                  searchFunction={getSimpleCategories}
                  searchObject={{ type: TYPE_SIMPLE_CATEGORIES.NUOC_SAN_XUAT }}
                  isDisabled={isView}
                  onChange={(data) =>
                    handleChangeSelect("attributeValues.manufacturingCountry", data)
                  }
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label="Hãng SX" />
                <Autocomplete
                  options={[]}
                  value={formik.values?.attributeValues?.manufacturer}
                  name="attributeValues.manufacturer"
                  searchFunction={getSimpleCategories}
                  searchObject={{ type: TYPE_SIMPLE_CATEGORIES.HANG_SAN_XUAT }}
                  isDisabled={isView}
                  onChange={(data) => handleChangeSelect("attributeValues.manufacturer", data)}
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label="Số đăng kí" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  type="text"
                  name="registrationNumber"
                  value={formik.values?.registrationNumber}
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label=" Nhà cung cấp" />
                <Autocomplete
                  options={[]}
                  value={formik.values?.attributeValues?.importer}
                  name="attributeValues.importer"
                  searchFunction={getSimpleCategories}
                  searchObject={{ type: TYPE_SIMPLE_CATEGORIES.LOAI_NHA_CUNG_CAP }}
                  isDisabled={isView}
                  onChange={(data) => handleChangeSelect("attributeValues.importer", data)}
                />
              </Col>

              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label="Số lần SD" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  name="attributeValues.numberOfUses"
                  value={formik.values?.attributeValues?.numberOfUses}
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label=" Ghi chú" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  name="note"
                  as="textarea"
                  rows="2"
                  value={formik.values?.note}
                />
              </Col>
            </Row>
            <h3 className="m-0">Thông tin phân loại và chi phí</h3>
            <Row className="pb-4 pt-1">
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label="Loại vật tư" />
                <Autocomplete
                  options={[]}
                  value={formik.values?.attributeValues?.materialType}
                  name="attributeValues.materialType"
                  searchFunction={getSimpleCategories}
                  searchObject={{ type: TYPE_SIMPLE_CATEGORIES.LOAI_VAT_TU }}
                  isDisabled={isView}
                  onChange={(data) => handleChangeSelect("attributeValues.materialType", data)}
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-125px" label="TT trái tuyến (%)" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  type="text"
                  value={formik.values?.outOfNetworkCoveragePercentage}
                  name="outOfNetworkCoveragePercentage"
                />
              </Col>

              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-150px" label=" Nhóm chi phí BHYT" />
                <Autocomplete
                  options={[]}
                  value={formik.values?.attributeValues?.medicalInsuranceCostGroups}
                  name="attributeValues.medicalInsuranceCostGroups"
                  searchFunction={getSimpleCategories}
                  searchObject={{ type: TYPE_SIMPLE_CATEGORIES.NHOM_CHI_PHI_BHYT }}
                  isDisabled={isView}
                  onChange={(data) =>
                    handleChangeSelect("attributeValues.medicalInsuranceCostGroups", data)
                  }
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-100px" label="Mã kế toán" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  type="text"
                  name="attributeValues.accountCode"
                  value={formik.values?.attributeValues?.accountCode}
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-125px" label="TT đúng tuyến (%)" />
                <TextValidator
                  onChange={formik.handleChange}
                  readOnly={isView}
                  type="text"
                  value={formik.values?.inNetworkCoveragePercentage}
                  name="inNetworkCoveragePercentage"
                />
              </Col>
              <Col xs={4} className="py-1 pe-0 d-flex">
                <LabelRequired className="min-w-150px" label=" Đối tượng được BHTT" />
                <Autocomplete
                  options={[]}
                  value={formik.values?.attributeValues?.insuredPerson}
                  name="attributeValues.insuredPerson"
                  searchFunction={getSimpleCategories}
                  searchObject={{ type: TYPE_SIMPLE_CATEGORIES.DOI_TUONG_BHYT }}
                  isDisabled={isView}
                  onChange={(data) => handleChangeSelect("attributeValues.insuredPerson", data)}
                />
              </Col>
            </Row>
          </Row>
        </Modal.Body>
        <Modal.Footer className="flex flex-center pt-3 pb-3">
          <Button className="btn-navy-outlined mr-5 w-80px" onClick={handleCloseModal}>
            Hủy
          </Button>
          {!isView && (
            <Button className="btn-navy mr-5 w-80px" type="submit">
              Lưu
            </Button>
          )}
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
