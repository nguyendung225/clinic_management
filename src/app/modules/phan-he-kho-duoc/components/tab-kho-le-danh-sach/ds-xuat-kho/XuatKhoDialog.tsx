import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import Autocomplete from "../../../../component/AutocompleteObject"
import LabelRequired from "../../../../component/LabelRequired";
import TextValidator from "../../../../component/TextValidator";
import { useFormik } from "formik";
import { CODE_XUAT_KHO_DE, LABEL, LOAI_HANG_HOA, STATUS, XUAT_KHO_DE, XUAT_KHO_DE_CONST } from "../../../consts/QuanLyKhoConst";
import { ILoaiHangHoa, IXuatKho } from "../../../models/QuanLyKhoModels";
import { SEARCH_OBJECT_MAX_SIZE } from "../../../../utils/Constant";
import { useEffect, useState } from "react";
import { ConfirmDialog } from "../../../../component/ConfirmDialog";
import * as Yup from "yup";
import LoaiHangHoaTable from "../ds-hang-trong-kho/LoaiHangHoaTable";
import moment from "moment";
import { searchWarehouse } from "../../../services/DSKhoServices";

type Props = {
  rowData: any,
  handleCloseDialog: () => void,
}

const XuatKhoDialog = (props: Props) => {
  const { rowData, handleCloseDialog } = props;
  const [deliverLabel, setDeliverLabel] = useState<string>("Nguời nhận");
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false);

  const formik = useFormik<IXuatKho>({
    initialValues: {
      wareHouse: "",
      receiver: "",
      deliver: "",
      createDate: "",
      creator: "",
      code: "",
      status: "",
      typeGoods: null,
      wareHouseFor: null,
      someContract: "",
      supplier: "",
      patientCode: "",
      reason: "",
    },
    validationSchema: Yup.object({
      wareHouse: Yup.string().required("Trường này không được để trống"),
      receiver: Yup.string().required("Trường này không được để trống"),
      deliver: Yup.string().required("Trường này không được để trống"),
      creator: Yup.string().required("Trường này không được để trống"),
      code: Yup.string().required("Trường này không được để trống"),
      status: Yup.string().required("Trường này không được để trống"),
      typeGoods: Yup.object().nullable().required("Trường này không được để trống"),
      wareHouseFor: Yup.object().nullable().required("Trường này không được để trống"),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  })


  const handleSelectAction = (data: any) => {
    setShouldOpenConfirmDialog(true);
  }

  const handleSelectAutocomplete = (selectedOption: ILoaiHangHoa, name: string) => {
    formik.setFieldValue(name, selectedOption)

    if (name === XUAT_KHO_DE_CONST) {
      handleSetDeliverLabel(selectedOption?.name, setDeliverLabel)
    }
  }

  const handleSetDeliverLabel = (name: string | undefined,
    setDeliverLabel: React.Dispatch<React.SetStateAction<string>>) => {
    switch (name) {
      case CODE_XUAT_KHO_DE.BAN_HANG:
        setDeliverLabel(LABEL.NGUOI_MUA);
        break;
      case CODE_XUAT_KHO_DE.PHONG:
        setDeliverLabel(LABEL.PHONG_NHAN);
        break;

      default:
        setDeliverLabel(LABEL.NGUOI_NHAN);
        break
    }
  }

  const handleChangSLXuat = (event: any, index: number, name: string) => {
    console.log(event.target.value, index, name);
  }

  const handleCloseConfirmDialog = () => {
    setShouldOpenConfirmDialog(false);
  }

  const handleConfirmDelete = () => {
    setShouldOpenConfirmDialog(false);
  }

  return (
    <Modal centered show={true} onHide={handleCloseDialog} size="xl">
      <Modal.Header className="header-modal" closeButton>
        <Modal.Title className="text-white">
          {rowData?.id ? "Cập nhật phiếu xuất kho" : "Thêm mới phiếu xuất kho"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body className="py-4 pt-2">
          <Row>
            <Col>
              <LabelRequired isRequired label="Kho xuất" />
              <Autocomplete
                options={[]}
                valueField="id"
                name="attributeValues.manufacturer"
                getOptionLabel={(option) => `${option?.name}`}           
                searchFunction={searchWarehouse}
                searchObject={SEARCH_OBJECT_MAX_SIZE}
                value={formik.values?.wareHouse}
                errors={formik.errors?.wareHouse}
                touched={formik.touched?.wareHouse}
                onChange={formik.handleChange}
              />
            </Col>

            <Col>
              <LabelRequired isRequired label="Loại hàng hóa" />
              <Autocomplete
                menuPlacement="bottom"
                options={LOAI_HANG_HOA}
                value={formik.values?.typeGoods}
                name="typeGoods"
                onChange={(selectedOption) => handleSelectAutocomplete(selectedOption, "typeGoods")}
                touched={formik.touched?.typeGoods}
                errors={formik.errors?.typeGoods}
              />
            </Col>

            <Col>
              <LabelRequired isRequired label="Xuất kho để" />
              <Autocomplete
                menuPlacement="bottom"
                options={XUAT_KHO_DE}
                value={formik.values?.wareHouseFor}
                name="wareHouseFor"
                onChange={(selectedOption) =>
                  handleSelectAutocomplete(selectedOption, "wareHouseFor")
                }
                touched={formik.touched?.wareHouseFor}
                errors={formik.errors?.wareHouseFor}
              />
            </Col>

            <Col>
              <LabelRequired isRequired label="Mã phiếu" />
              <TextValidator
                type="text"
                name="code"
                value={formik.values?.code}
                errors={formik.errors?.code}
                touched={formik.touched?.code}
                onChange={formik.handleChange}
              />
            </Col>

            {formik?.values?.wareHouseFor?.name === CODE_XUAT_KHO_DE.BAN_HANG && (
              <Col>
                <LabelRequired isRequired label="Mã bệnh nhân" />
                <TextValidator
                  type="text"
                  name="patientCode"
                  value={formik.values?.patientCode}
                  errors={formik.errors?.patientCode}
                  touched={formik.touched?.patientCode}
                  onChange={formik.handleChange}
                />
              </Col>
            )}

            {formik?.values?.wareHouseFor?.name === CODE_XUAT_KHO_DE.TRA_HANG && (
              <>
                <Col>
                  <LabelRequired isRequired label="Số hợp đồng" />
                  <TextValidator
                    type="text"
                    name="someContract"
                    value={formik.values?.someContract}
                    errors={formik.errors?.someContract}
                    touched={formik.touched?.someContract}
                    onChange={formik.handleChange}
                  />
                </Col>

                <Col>
                  <LabelRequired isRequired label="Nhà cung cấp" />
                  <TextValidator
                    type="text"
                    name="supplier"
                    value={formik.values?.supplier}
                    errors={formik.errors?.supplier}
                    touched={formik.touched?.supplier}
                    onChange={formik.handleChange}
                  />
                </Col>
              </>
            )}
          </Row>

          <Row>
            <Col>
              <LabelRequired isRequired label="Người lập" />
              <TextValidator
                type="text"
                name="creator"
                value={formik.values?.creator}
                errors={formik.errors?.creator}
                touched={formik.touched?.creator}
                onChange={formik.handleChange}
              />
            </Col>

            <Col>
              <LabelRequired isRequired label="Ngày lập" />
              <TextValidator
                type="date"
                name="createDate"
                value={moment(new Date()).format("YYYY-MM-DD")}
                errors={formik.errors?.createDate}
                touched={formik.touched?.createDate}
                onChange={formik.handleChange}
                disabled={true}
              />
            </Col>

            <Col>
              <LabelRequired isRequired label="Người giao" />
              <TextValidator
                type="text"
                name="receiver"
                value={formik.values?.receiver}
                errors={formik.errors?.receiver}
                touched={formik.touched?.receiver}
                onChange={formik.handleChange}
              />
            </Col>

            <Col>
              <LabelRequired isRequired label={deliverLabel} />
              <TextValidator
                type="text"
                name="deliver"
                value={formik.values?.deliver}
                errors={formik.errors?.deliver}
                touched={formik.touched?.deliver}
                onChange={formik.handleChange}
              />
            </Col>

            <Col>
              <LabelRequired isRequired label="Trạng thái" />
              <Autocomplete
                menuPlacement="bottom"
                options={STATUS}
                value={formik.values?.status}
                name="status"
                onChange={(selectedOption) => handleSelectAutocomplete(selectedOption, "status")}
                touched={formik.touched?.status}
                errors={formik.errors?.status}
              />
            </Col>
          </Row>

          {(formik?.values?.wareHouseFor?.name === CODE_XUAT_KHO_DE.HUY ||
            formik?.values?.wareHouseFor?.name === CODE_XUAT_KHO_DE.THANH_LY) && (
            <Row>
              <Col>
                <LabelRequired isRequired label="Lý do" />
                <TextValidator
                  type="text"
                  name="reason"
                  as="textarea"
                  rows="1"
                  value={formik.values?.reason}
                  errors={formik.errors?.reason}
                  touched={formik.touched?.reason}
                  onChange={formik.handleChange}
                />
              </Col>
            </Row>
          )}

            <Row className="pt-4">
              <LoaiHangHoaTable
                formikValuesXuatKhoDialog={formik.values}
                handleSelectAction={handleSelectAction}
                handleChangSLXuat={handleChangSLXuat}
              />
            </Row>
        </Modal.Body>

        <Modal.Footer className="py-3 flex flex-center">
          <Button
            variant="secondary min-w-80px btn btn-primary btn-sm"
            onClick={handleCloseDialog}
          >
            Hủy
          </Button>

          <Button
            variant="primary btn-navy min-w-80px btn btn-primary btn-sm"
            type="submit"
          >
            Lưu
          </Button>
        </Modal.Footer>
      </Form>

      {shouldOpenConfirmDialog && (
        <ConfirmDialog
          show={true}
          title="Xác nhận xóa"
          message="Bạn có chắc chắn muốn xóa không?"
          yes="Xác nhận"
          close="Hủy"
          onCloseClick={handleCloseConfirmDialog}
          onYesClick={handleConfirmDelete}
        />
      )}
    </Modal>
  );
}

export default XuatKhoDialog