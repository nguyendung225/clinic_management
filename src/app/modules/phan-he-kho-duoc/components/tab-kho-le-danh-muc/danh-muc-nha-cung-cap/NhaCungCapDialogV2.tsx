import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import LabelRequired from "../../../../component/LabelRequired";
import TextValidator from "../../../../component/TextValidator";
import Autocomplete from "../../../../component/AutocompleteObject";
import { useFormik } from "formik";
import * as Yup from "yup";
import { INhaCungCap, IPayloadNhaCungCap } from "../../../models/NhaCungCapModel";
import { addNhaCungCap, getLoaiNhaCungCap, updateNhaCungCap } from "../../../services/NhaCungCapServices";
import { TYPE_MESSAGE } from "../../../consts/DanhMucConst";
import {
  CODE_SUCCESS,
  ERROR_MESSAGE,
  RESPONSE_MESSAGE,
  SEARCH_OBJECT_MAX_SIZE,
} from "../../../../utils/Constant";
import { getAllProvince } from "../../../../phan-he-tiep-nhan-thanh-toan/services/TiepNhanServices";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import { TYPE_SIMPLE_CATEGORIES } from "../../../consts/PhanHeKhoDuocConst";

type Props = {
  disabled: boolean;
  rowData: INhaCungCap;
  handleCloseDialog: () => void;
};

const NhaCungCapDialogV2 = (props: Props) => {
  const { handleCloseDialog, rowData, disabled } = props;

  const formik = useFormik({
    initialValues: {
      id: rowData?.id || "",
      code: rowData?.code || "",
      name: rowData?.name || "",
      address: rowData?.address || "",
      provinceId: rowData?.province || null,
      phone: rowData?.phone || "",
      taxCode: rowData?.taxCode || "",
      note: rowData?.note || "",
      unitId: rowData?.unit || null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng nhập tên").max(36, "Nhập tối đa 36 ký tự"),
      code: Yup.string().required("Vui lòng nhập mã").max(36, "Nhập tối đa 36 ký tự"),
    }),
    onSubmit: (values) => {
      const data = {
        ...values,
        provinceId: values.provinceId?.id,
        unitId: values.unitId?.id,
      };
      values?.id
        ? handleAddAndUpdateNCC(updateNhaCungCap, data, TYPE_MESSAGE.UPDATE)
        : handleAddAndUpdateNCC(addNhaCungCap, data, TYPE_MESSAGE.ADD);
    },
  });

  const handleSelectType = (selectOption: INhaCungCap, name: string) => {
    formik.setFieldValue(name, selectOption);
  };

  const handleAddAndUpdateNCC = async (
    api: (data: IPayloadNhaCungCap) => Promise<AxiosResponse<any, any>>,
    dataRequest: IPayloadNhaCungCap,
    messageSuccess: TYPE_MESSAGE
  ) => {
    try {
      const { data } = await api(dataRequest);
      if (data?.code === CODE_SUCCESS) {
        toast.success(
          messageSuccess === TYPE_MESSAGE.ADD
            ? RESPONSE_MESSAGE.ADD.SUCCESS
            : RESPONSE_MESSAGE.UPDATE.SUCCESS
        );
        handleCloseDialog();
      } else {
        toast.error(ERROR_MESSAGE);
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE);
    }
  };

  return (
    <Modal centered show={true} onHide={handleCloseDialog} size="lg">
      <Modal.Header className="header-modal" closeButton>
        <Modal.Title className="text-white">
          {disabled
            ? "Thông tin nhà cung cấp"
            : rowData?.id
            ? "Cập nhật nhà cung cấp"
            : "Thêm mới nhà cung cấp"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body className="py-4 pt-2">
          <Row className="g-2">
            <Col xs={6} className="d-flex">
              <LabelRequired className="min-w-100px" isRequired label="Mã NCC" />
              <TextValidator
                type="text"
                name="code"
                value={formik.values?.code}
                errors={formik.errors?.code}
                touched={formik.touched?.code}
                onChange={formik.handleChange}
                isReadOnly={disabled}
              />
            </Col>
            <Col xs={6} className="d-flex">
              <LabelRequired className="min-w-100px" label="Số điện thoại" />
              <TextValidator
                type="text"
                name="phone"
                value={formik.values?.phone}
                onChange={formik.handleChange}
                isReadOnly={disabled}
              />
            </Col>

            <Col xs={6} className="d-flex">
              <LabelRequired className="min-w-100px" isRequired label="Tên NCC" />
              <TextValidator
                type="text"
                name="name"
                value={formik.values?.name}
                errors={formik.errors?.name}
                touched={formik.touched?.name}
                onChange={formik.handleChange}
                isReadOnly={disabled}
              />
            </Col>

            <Col xs={6} className="d-flex">
              <LabelRequired className="min-w-100px" label="Tỉnh" />
              <Autocomplete
                options={[]}
                searchFunction={getAllProvince}
                searchObject={SEARCH_OBJECT_MAX_SIZE}
                value={formik.values?.provinceId}
                onChange={(selectedOption) => handleSelectType(selectedOption, "provinceId")}
                isReadOnly={disabled}
              />
            </Col>

            <Col xs={6} className="d-flex">
              <LabelRequired className="min-w-100px" label="Loại NCC" />
              <Autocomplete
                options={[]}
                searchFunction={() => getLoaiNhaCungCap(TYPE_SIMPLE_CATEGORIES.LOAI_NHA_CUNG_CAP)}
                searchObject={{}}
                value={formik.values?.unitId}
                onChange={(selectedOption) => handleSelectType(selectedOption, "unitId")}
                isReadOnly={disabled}
              />
            </Col>
            <Col xs={6} className="d-flex">
              <LabelRequired className="min-w-100px" label="Địa chỉ" />
              <TextValidator
                type="text"
                name="address"
                value={formik.values?.address}
                onChange={formik.handleChange}
                readOnly={disabled}
              />
            </Col>

            <Col xs={6} className="d-flex">
              <LabelRequired className="min-w-100px" label="Mã số thuế" />
              <TextValidator
                type="text"
                name="taxCode"
                value={formik.values?.taxCode}
                onChange={formik.handleChange}
                isReadOnly={disabled}
              />
            </Col>

            <Col xs={6} className="d-flex">
              <LabelRequired className="min-w-100px" label="Ghi chú" />
              <TextValidator
                type="text"
                name="note"
                value={formik.values?.note}
                onChange={formik.handleChange}
                isReadOnly={disabled}
              />
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer className="py-3 flex flex-center">
          <Button className="min-w-80px btn-navy-outlined" onClick={handleCloseDialog}>
            {disabled ? "Đóng" : "Hủy "}
          </Button>

          {!disabled && (
            <Button variant="primary" className="btn-navy min-w-80px" type="submit">
              Lưu
            </Button>
          )}
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NhaCungCapDialogV2;
