import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useIntl } from "react-intl";
import * as Yup from "yup";
import Autocomplete from "../../../../component/AutocompleteObject";
import { ConfirmDialog } from "../../../../component/ConfirmDialog";
import LabelRequired from "../../../../component/LabelRequired";
import TextValidator from "../../../../component/TextValidator";
import { CODE_SUCCESS, DEFAULT_PAGE_INDEX, ERROR_MESSAGE, MAX_PAGE_SIZE, RESPONSE_MESSAGE, SEARCH_OBJECT_MAX_SIZE, STATUS_ACTION, VARIABLE_STRING } from "../../../../utils/Constant";
import { formatDateAdvanceToString, formatDateDTO } from "../../../../utils/FormatUtils";
import { INIT_QDTT, KhoThuocData, NhaCungCapData, STATUS } from "../../../consts/QuanLyKhoConst";
import { IQuyetDinhTT } from "../../../models/QuanLyKhoModels";
import { getListNhaCungCap } from "../../../services/NhaCungCapServices";
import { searchWarehouse } from "../../../services/DSKhoServices";
import QuyetDinhTTDialog from "./QuyetDinhTTDialog";
import TableHangHoa from "../ds-hang-trong-kho/TableHangHoa";
import { IHangHoa, IPhieuNhapKho, IPhieuNhapKhoPayload } from "../../../models/NhapKhoModels";
import { addPhieuNhapKho, getListProduct, getLotId, updatePhieuNhapKho } from "../../../services/NhapKhoServices";
import { toast } from "react-toastify";
import moment from "moment";
import { AxiosResponse } from "axios";
import { TYPE_MESSAGE } from "../../../consts/DanhMucConst";

type Props = {
  data: IPhieuNhapKho,
  show: boolean
  handleClose: () => void,
}

const NhapKhoDialog = (props: Props) => {
  const { show, data, handleClose } = props;
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const intl = useIntl()
  const [listHangHoa, setListHangHoa] = useState<any[]>(data?.items || [{}]);
  const [selectedHangHoa, setSelectedHangHoa] = useState<any>({} as any)
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  const [commonSoLo, setCommonSoLo] = useState("");
  const [openQDTTDialog, setOpenQDTTDialog] = useState(false);
  const [itemQDTT, setItemQDTT] = useState<IQuyetDinhTT>(INIT_QDTT)
  const [listProductType, setListProductType] = useState([]);
  const [listProduct, setListProduct] = useState([]);

  const handleOpenQuyetDinhTTDialog = (index: number, rowData: any) => {
    const data = {
      winningBidDecisionCode: rowData?.winningBidDecisionCode ? rowData?.winningBidDecisionCode : "",
      numbersBidWinning: rowData?.numbersBidWinning ? rowData?.numbersBidWinning : "",
      bidWinningDecisionGroup: rowData?.bidWinningDecisionGroup ? rowData?.bidWinningDecisionGroup : "",
      yearOfWinBidDecision: rowData?.yearOfWinBidDecision ? rowData?.yearOfWinBidDecision : "",
      bidQuantity: rowData?.bidQuantity ? rowData?.bidQuantity : "",
    }
    setItemQDTT({ ...data, index: index });
    setOpenQDTTDialog(true);
  };

  const handleCloseQuyetDinhTTDialog = () => {
    setOpenQDTTDialog(false);
  };

  const formik = useFormik<IPhieuNhapKho>({
    initialValues: {
      id: data?.id || "",
      warehouseReceiptId: data?.warehouseReceipt || null,
      code: data?.code || "",
      inputDate: data?.inputDate || formatDateAdvanceToString((new Date()).toString()),
      status: STATUS[data?.status as number] || null,
      productTypeId: data?.productType || null,
      supplierId: data?.supplier || null,
      consignment: data?.attribute?.consignment || "",
      contractName: data?.attribute?.contractName || "",
      contractNumber: data?.attribute?.contractNumber || "",
      sender: data?.sender || "",
      receiver: data?.receiver || "",
      items: [],
    },
    validationSchema: Yup.object({
      warehouseReceiptId: Yup.object().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })).nullable(),
      supplierId: Yup.object().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })).nullable(),
      inputDate: Yup.string().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })).nullable(),
      code: Yup.string().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })).nullable(),
      consignment: Yup.string().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })).nullable(),
      status: Yup.object().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })).nullable(),
      productTypeId: Yup.object().required(intl.formatMessage({ id: "VALIDATE.REQUIRED" })).nullable(),
    }),
    onSubmit: async (values) => {
      let lotId = "";
      try {
        const { data } = await getLotId(values?.warehouseReceiptId?.id as string);
        if (data?.code === CODE_SUCCESS) {
          lotId = data?.data?.content?.[0]?.id;
        }
      } catch (error) {
        toast.error(ERROR_MESSAGE)
      }

      const itemDetails = listHangHoa?.slice(0, -1)?.map((item: any) => {
        return {
          ...item,
          productId: item?.itemDetails?.id,
          itemDetails: [
            {
              lotId: lotId,
              quantity: item?.totalQuantity,
            }
          ],
        }
      })
      const request: IPhieuNhapKhoPayload = {
        id: values?.id ? values?.id : undefined,
        attribute: {
          consignment: values?.consignment,
          contractName: values?.contractName,
          contractNumber: values?.contractNumber,
        },
        supplierId: values?.supplierId?.id,
        warehouseReceiptId: values?.warehouseReceiptId?.id,
        productTypeId: values?.productTypeId?.id,
        status: values?.status?.id,
        code: values?.code,
        inputDate: moment(values?.inputDate, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD[T]HH:mm:ss'),
        receiver: values?.receiver,
        sender: values?.sender,
        items: itemDetails
      }
      data?.id ? handleAddAndUpdatePNK(updatePhieuNhapKho, request, TYPE_MESSAGE.UPDATE) :
        handleAddAndUpdatePNK(addPhieuNhapKho, request, TYPE_MESSAGE.ADD)
    }
  })

  useEffect(() => {
    setListHangHoa(data?.items?.length > 0 ? data?.items : [{}]);
    !formik?.values?.id && formik.setFieldValue(VARIABLE_STRING.TRANG_THAI, STATUS[0])
    formik?.values?.productTypeId?.code && handleGetListProduct()

    formik.values?.consignment && setListHangHoa(listHangHoa?.map(item => {
      return {
        ...item,
        consignment: formik.values.consignment
      }
    }))
  }, [formik.values.consignment, formik?.values?.productTypeId?.code]);

  const handleGetListProduct = async () => {
    try {
      const searchObject = {
        pageSize: MAX_PAGE_SIZE,
        pageIndex: DEFAULT_PAGE_INDEX,
        productType: formik?.values?.productTypeId?.code
      }
      const { data } = await getListProduct(searchObject)
      data?.code === CODE_SUCCESS && setListProduct(data?.data?.content)
    } catch (error) {
      toast.error(ERROR_MESSAGE)
    }
  }

  const handleSelectAutocomplete = (selectedOption: any, name: string) => {
    formik.setFieldValue(name, selectedOption)
    if (name === "warehouseReceiptId") {
      setListProductType(selectedOption?.productTypes)
      formik.setFieldValue("productTypeId", null)
    }
    if (name === "productTypeId") {
      setListHangHoa([{}])
    }
  }

  const handleAddAndUpdatePNK = async (
    api: (data: IPhieuNhapKhoPayload) => Promise<AxiosResponse<any, any>>,
    dataRequest: IPhieuNhapKhoPayload,
    messageSuccess: TYPE_MESSAGE,
  ) => {
    try {
      const { data } = await api(dataRequest);
      if (data?.code === CODE_SUCCESS) {
        toast.success(
          messageSuccess === TYPE_MESSAGE.ADD
            ? RESPONSE_MESSAGE.ADD.SUCCESS
            : RESPONSE_MESSAGE.UPDATE.SUCCESS
        );
        handleClose();
      }
      else {
        toast.error(ERROR_MESSAGE);
      }
    } catch (error) {
      toast.error(ERROR_MESSAGE);
    }
  }

  const handleSelectName = (selecetedData: any, index: number, name: string) => {
    let newListHangHoa = [...listHangHoa]
    newListHangHoa[index][name] = selecetedData
    if (newListHangHoa?.length === (index + 1)) {
      newListHangHoa.push({ consignment: formik.values.consignment })
    }
    setListHangHoa(newListHangHoa);
  };

  const handleRowsChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, name: string) => {
    let newListHangHoa = [...listHangHoa]
    newListHangHoa[index][name] = event.target.value;
    setListHangHoa(newListHangHoa);
  };

  const handleRowsSelectChange = (selecetedData: any, index: number, name: string) => {
    let newListHangHoa = [...listHangHoa]
    if (name === "winningBidDecisionCode") {
      newListHangHoa[index] = { ...newListHangHoa[index], ...selecetedData }
    } else {
      newListHangHoa[index][name] = selecetedData
    }
    setListHangHoa(newListHangHoa);
  }

  const handleOpenConfirmDialog = (rowData: any) => {
    setOpenConfirmDialog(true);
    setSelectedHangHoa(rowData)
  }

  const handleConfirmDelete = () => {
    const updatedListHangHoa = listHangHoa.filter((hangHoa) => hangHoa !== selectedHangHoa);
    setListHangHoa(updatedListHangHoa);
    setOpenConfirmDialog(false);
  }

  const handleSelectAction = (data: any, method: string) => {
    switch (method) {
      case STATUS_ACTION.VIEW:
        // handelView(data);
        break;
      case STATUS_ACTION.DELETE:
        handleOpenConfirmDialog(data);
        break;
      case STATUS_ACTION.EDIT:
        // handelEdit(data);
        break;
    }
  };

  return (
    <>
      <Modal centered show={show} onHide={handleClose} size="xl">
        <Modal.Header className="header-modal" closeButton>
          <Modal.Title className="text-white">
            {data?.id ? "Cập nhật" : "Thêm mới"} phiếu nhập kho
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body className="py-4 pt-2">
            <Row>
              <Col md={3} className="z-index-12">
                <LabelRequired
                  isRequired
                  label="Tên kho nhập"
                />
                <Autocomplete
                  menuPlacement="bottom"
                  options={KhoThuocData}
                  searchFunction={() => searchWarehouse(SEARCH_OBJECT_MAX_SIZE)}
                  searchObject={{}}
                  value={formik.values?.warehouseReceiptId || null}
                  name="warehouseReceiptId"
                  onChange={(selectedOption) => handleSelectAutocomplete(selectedOption, "warehouseReceiptId")}
                  touched={formik.touched?.warehouseReceiptId}
                  errors={formik.errors?.warehouseReceiptId}
                />
              </Col>
              <Col md={2}>
                <LabelRequired
                  isRequired
                  label="Mã phiếu"
                />
                <TextValidator
                  type="text"
                  name="code"
                  value={formik.values?.code}
                  errors={formik.errors?.code}
                  touched={formik.touched?.code}
                  onChange={formik.handleChange}
                />
              </Col>
              <Col md={2}>
                <LabelRequired
                  isRequired
                  label="Ngày lập"
                />
                <TextValidator
                  type="text"
                  name="inputDate"
                  value={formik.values?.inputDate}
                  errors={formik.errors?.inputDate}
                  touched={formik.touched?.inputDate}
                  onChange={formik.handleChange}
                  readOnly={true}
                />
              </Col>
              <Col md={2}>
                <LabelRequired
                  isRequired
                  label="Trạng thái"
                />
                <Autocomplete
                  name="status"
                  menuPlacement="bottom"
                  options={STATUS}
                  getOptionLabel={(option) => option.name}
                  value={formik.values?.status}
                  onChange={(selectedOption) => handleSelectAutocomplete(selectedOption, "status")}
                  touched={formik.touched?.status}
                  errors={formik.errors?.status}
                />
              </Col>
              <Col md={3}>
                <LabelRequired
                  isRequired
                  label="Loại hàng hóa"
                />
                <Autocomplete
                  name="productTypeId"
                  menuPlacement="bottom"
                  dependencies={[formik.values?.warehouseReceiptId]}
                  options={listProductType}
                  value={formik.values?.productTypeId || null}
                  onChange={(selectedOption) => handleSelectAutocomplete(selectedOption, "productTypeId")}
                  touched={formik.touched?.productTypeId}
                  errors={formik.errors?.productTypeId}
                />
              </Col>

              <Col md={3} className="z-index-11">
                <LabelRequired
                  isRequired
                  label="Nhà cung cấp"
                />
                <Autocomplete
                  menuPlacement="bottom"
                  options={NhaCungCapData}
                  searchFunction={() => getListNhaCungCap({ pageSize: MAX_PAGE_SIZE, pageIndex: DEFAULT_PAGE_INDEX })}
                  searchObject={{}}
                  value={formik.values?.supplierId}
                  name="supplierId"
                  onChange={(selectedOption) => handleSelectAutocomplete(selectedOption, "supplierId")}
                  touched={formik.touched?.supplierId}
                  errors={formik.errors?.supplierId}
                />
              </Col>
              <Col md={2}>
                <LabelRequired
                  isRequired
                  label="Số lô"
                />
                <TextValidator
                  className="no-spinners"
                  type="number"
                  name="consignment"
                  value={formik.values?.consignment}
                  errors={formik.errors?.consignment}
                  touched={formik.touched?.consignment}
                  onChange={formik.handleChange}
                />
              </Col>
              <Col md={2}>
                <LabelRequired
                  label="Mã số thuế"
                />
                <TextValidator
                  type="text"
                  name="maSoThue"
                  value={formik.values?.supplierId?.taxCode}
                  readOnly={true}
                />
              </Col>
              <Col md={2}>
                <LabelRequired
                  label="Hợp đồng"
                />
                <TextValidator
                  type="text"
                  name="contractName"
                  value={formik.values?.contractName}
                  onChange={formik.handleChange}
                />
              </Col>
              <Col md={3}>
                <LabelRequired
                  label="Số hợp đồng"
                />
                <TextValidator
                  type="text"
                  name="contractNumber"
                  value={formik.values?.contractNumber}
                  onChange={formik.handleChange}
                />
              </Col>

              <Col md={3}>
                <LabelRequired
                  label="Người giao"
                />
                <TextValidator
                  type="text"
                  name="sender"
                  value={formik.values?.sender}
                  onChange={formik.handleChange}
                />
              </Col>
              <Col md={3} className="mb-3">
                <LabelRequired
                  label="Người nhận"
                />
                <TextValidator
                  type="text"
                  name="receiver"
                  value={formik.values?.receiver}
                  onChange={formik.handleChange}
                />
              </Col>
              <Col md={12}>
                <label className="form-label fs-4 fw-bold">Danh sách hàng hóa</label>
                <TableHangHoa
                  data={listHangHoa}
                  listProduct={listProduct}
                  nhapKhoValue={formik.values}
                  commonSoLo={commonSoLo}
                  handleOpenConfirmDialog={handleOpenConfirmDialog}
                  handleRowsChange={handleRowsChange}
                  handleRowsSelectChange={handleRowsSelectChange}
                  handleSelectName={handleSelectName}
                  handleSelectAction={handleSelectAction}
                  handleOpenQuyetDinhTTDialog={handleOpenQuyetDinhTTDialog}
                />

                {
                  openQDTTDialog &&
                  <QuyetDinhTTDialog
                    setItemQDTT={setItemQDTT}
                    handleCloseDialog={handleCloseQuyetDinhTTDialog}
                    item={itemQDTT}
                    handleRowsSelectChange={handleRowsSelectChange}
                  />
                }
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="py-3 flex flex-center">
            <Button variant="primary" className="btn-navy min-w-80px btn btn-primary btn-sm" type="submit">
              Lưu
            </Button>
            <Button variant="secondary" className="min-w-80px btn btn-primary btn-sm" onClick={handleClose}>
              Đóng
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {openConfirmDialog &&
        <ConfirmDialog
          show={true}
          title="Xác nhận xóa"
          message="Bạn có chắc chắn muốn xóa không?"
          yes="Xác nhận"
          close="Hủy"
          onCloseClick={() => setOpenConfirmDialog(false)}
          onYesClick={handleConfirmDelete}
        />
      }
    </>
  )
}

export default NhapKhoDialog