import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import LabelRequired from '../../../../component/LabelRequired'
import AutocompleteObject from "../../../../component/AutocompleteObject";
import TextValidator from '../../../../component/TextValidator';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { IKho } from '../../../models/QuanLyKhoModels';
import { CODE, SEARCH_OBJECT_MAX_SIZE } from '../../../../utils/Constant';
import { addWarehouse, searchProductType, updateWarehouse } from '../../../services/DSKhoServices';
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../../appContext/AppContext';

type Props = {
  rowData: IKho
  handleCloseDialog: () => void
  handleCloseAllDialog: () => void
}

const DSKhoDialog = (props: Props) => {
  let { setIsLoading } = useContext(AppContext);
  const { rowData, handleCloseDialog, handleCloseAllDialog } = props;
  const [productTypeNames, setProductTypeNames] = useState<string>("");

  let initialValues: IKho = {
    id: rowData?.id || "",
    name: rowData?.name || "",
    code: rowData?.code || "",
    address: rowData?.address || "",
    areaQuantity: rowData?.areaQuantity || 1,
    floorQuantity: rowData?.floorQuantity || 1,
    areas: rowData?.areas || [],
    floors: rowData?.floors || [],
    productTypes: rowData?.productTypes || [],
    isView: rowData?.isView,
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Vui lòng nhập tên").max(36, "Nhập tối đa 36 ký tự"),
    code: Yup.string().required("Vui lòng nhập mã").max(36, "Nhập tối đa 36 ký tự"),
    address: Yup.string().required("Vui lòng nhập địa điểm").max(255, "Nhập tối đa 255 ký tự"),
    productTypes: Yup.array().min(1, "Vui lòng chọn loại")
  })

  const handelSubmit = async (values: any) => {
    try {
      let dataWarehouse = convertData(values)
      setIsLoading(true);
      let { data }: any = await (dataWarehouse?.id ? updateWarehouse(dataWarehouse.id, dataWarehouse) : addWarehouse(dataWarehouse))
      setIsLoading(false);

      if (CODE.SUCCESS === data?.code) {
        toast.success(data?.message);
        handleCloseAllDialog();
        return;
      }

      toast.error(data?.message)
    } catch (error) {
      setIsLoading(false)
      toast.error("Xảy ra lỗi, vui lòng thử lại!")
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handelSubmit
  })

  const convertData = (values: any) => {
    let productTypeIds: string[] = []
    values?.productTypes.forEach((item: any) => {
      productTypeIds.push(item?.id)
    });

    const dataWarehouse: IKho = {
      name: values?.name || "",
      code: values?.code || "",
      address: values?.address || "",
      areaQuantity: 1,
      floorQuantity: 1,
      areas: values?.areas?.length > 0 ? values?.areas : [{ name: 'Khu vực 1', floorQuantity: 1, lotQuantity: 1 }],
      floors: values?.floors?.length > 0 ? values?.floors : [{ name: 'Tầng 1' }],
      productTypeIds: productTypeIds
    };

    if (values?.id) {
      dataWarehouse.id = values?.id
    }

    return dataWarehouse;
  }

  const handleSelectType = (selectedOption: any, name: string) => {
    formik.setFieldValue(name, selectedOption)
  }

  useEffect(() => {
    if (formik?.values?.isView) {
      let productTypesToString: string[] = []
      rowData?.productTypes?.forEach(((item: any) => {
        productTypesToString.push(item?.name)
      }))

      setProductTypeNames(productTypesToString.join(", "))
    }
  }, [rowData])

  return (
    <Modal centered show={true} onHide={handleCloseDialog} size="lg">
      <Modal.Header className="header-modal" closeButton>
        <Modal.Title className="text-white">
          {formik?.values?.isView ? "Thông tin kho" : rowData?.id ? "Cập nhật kho" : "Thêm mới kho"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body className="py-4 pt-2">
          <Row>
            <Col>
              <LabelRequired
                isRequired
                label="Mã kho"
              />
              <TextValidator
                type="text"
                name="code"
                value={formik.values?.code}
                errors={formik.errors?.code}
                touched={formik.touched?.code}
                onChange={formik.handleChange}
                readOnly={formik?.values?.isView}
              />
            </Col>

            <Col>
              <LabelRequired
                isRequired
                label="Tên kho"
              />
              <TextValidator
                type="text"
                name="name"
                value={formik.values?.name}
                errors={formik.errors?.name}
                touched={formik.touched?.name}
                onChange={formik.handleChange}
                readOnly={formik?.values?.isView}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <LabelRequired
                isRequired
                label="Địa điểm"
              />
              <TextValidator
                type="text"
                name="address"
                value={formik.values?.address}
                errors={formik.errors?.address}
                touched={formik.touched?.address}
                onChange={formik.handleChange}
                readOnly={formik?.values?.isView}
              />
            </Col>

            <Col>
              <LabelRequired
                isRequired
                label="Loại kho"
              />
              {
                formik?.values?.isView ?
                  <TextValidator
                    type="text"
                    value={productTypeNames}
                    readOnly={formik?.values?.isView}
                  /> : <AutocompleteObject
                    closeMenuOnSelect={true}
                    options={[]}
                    searchFunction={searchProductType}
                    searchObject={{ ...SEARCH_OBJECT_MAX_SIZE }}
                    isMulti={true}
                    value={formik.values?.productTypes}
                    name="productTypes"
                    onChange={(selectedOption) => handleSelectType(selectedOption, "productTypes")}
                    getOptionValue={(option) => option?.code}
                    touched={formik.touched?.productTypes}
                    errors={formik.errors?.productTypes}
                  />
              }
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer className="py-3 flex flex-center">
          <Button className="min-w-80px btn-navy-outlined" onClick={handleCloseDialog}>
            {formik?.values?.isView ? "Đóng" : "Hủy "}
          </Button>

          {
            !formik?.values?.isView &&
            <Button variant="primary" className="btn-navy min-w-80px btn btn-primary btn-sm" type="submit">
              Lưu
            </Button>
          }
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default DSKhoDialog