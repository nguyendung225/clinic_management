import { Form, Formik, FormikErrors } from "formik";
import {
	FC,
	useEffect,
	useState,
} from "react";
import {
	Button,
	Col,
	Modal,
	Row,
} from "react-bootstrap";
import * as Yup from "yup";
import TextField from "../../../component/TextField";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../component/LabelRequired";
import {
	DEFAULT_PAGE_INDEX,
	SELECTION_MODE,
} from "../../../utils/Constant";
import {
	columnsDSMauChiDinhVatTu,
	columnsPhieuChiDinhVatTu,
} from "../../columns/modal-ke-vat-tu/ColumnModalKeVatTu";
import { CHON_VAT_TU } from "../../constants/phan-he-kham-benh/ConstantPhanHeKhamBenh";
import ModalLuuMauVatTuMoi from "../../components/modal-ke-vat-tu/ModalLuuMauVatTuMoi";
import ModalDSMauChiDinhVatTu from "../../components/modal-ke-vat-tu/ModalDSMauChiDinhVatTu";
import SelectTree from "../../../component/SelectTree";
import { TreeDsVatTu } from "../../constants/modal-ke-vat-tu/ModalKeVatTuConstant";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";


interface Props {
	open: boolean;
	handleClose: () => void;
}

const ModalKeVatTu: FC<Props> = (props) => {
	let { open, handleClose } = props;
	const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
	const [rowsPerPage, setRowsPerPage] = useState<number>(15);
	const [selectedRow, setSelectedRow] = useState<any>();
	let [objectSearch, setObjectSearch] = useState<any>();
	let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
		useState<boolean>(false);

	const [openLuuMauVatTuMoiDialog, setOpenLuuMaVatTuMoiDialog] = useState<boolean>(false);
	const [openDanhSachMauVatTuDialog, setOpenDanhSachMauVatTuDialog] = useState<boolean>(false);
	const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
  const [idSelected, setIdSelected] = useState<string>("");
  useEffect(() => {
    setCodeCollapses([...TreeDsVatTu.filter.map((item) => item.code)]);
  }, []);

	const getListBenhNhan = async () => { };

	useEffect(() => {
		if (!shouldOpenFilterSearch) {
			setObjectSearch({});
		}
		getListBenhNhan();
	}, [page, rowsPerPage, shouldOpenFilterSearch]);

	const handleSubmit = async (values: any) => {
		// handleClose(false);
	};

	const validationSchema = Yup.object().shape({});

	return (
		<Modal className="modal-ke-vat-tu" size="xl" show={open} onHide={handleClose} animation centered>
			<Formik<any>
				initialValues={{}}
				validationSchema={validationSchema}
				validateOnChange={true}
				validate={(values) => {
					const errors: FormikErrors<any> = {};
					return errors;
				}}
				onSubmit={handleSubmit}
			>
				{({ touched, errors, setFieldValue, values }) => (
					<Form id="form-vat-tu">
						<div className="vat-tu-dialog">
							<Modal.Header className="py-3 header-modal">
								<Modal.Title className="text-pri">
									Cập nhật mẫu chỉ định vật tư
								</Modal.Title>
								<button
									className="btn-close"
									onClick={() => handleClose()}
								></button>
							</Modal.Header>
							<Modal.Body className="py-16 px-24 spaces overflow-hidden">
								<Row>
									<Col xs={3} >
										<TextField
											className=" w-100"
											label="Ngày y lệnh"
											name="ngayYLenh"
											type="date"
											labelClassName="ms-0 min-w-80px"
										/>
									</Col>
									<Col xs={9} className="d-flex gap-2">
										<TextField
											
											label="Người y lệnh"
											name="nguoiYLenh"
											type="text spaces width-40"
											labelClassName="ms-0 min-w-90px"
										/>
										<div className="spaces w-60 d-flex gap-4">
											<TextField
												
												label="Chẩn đoán"
												name="chanDoan"
												className="spaces width-40"
												labelClassName="ms-0 min-w-100px"
											/>
											<TextField
												
												name="chanDoanChiTiet"
												className="spaces width-60"
												labelClassName="ms-0 min-w-80px"
											/>
										</div>
									</Col>
								</Row>
								<Row>
								</Row>
								<Row className="spaces mt-4">
									<Col xs={3}>
										<div className="table-left h-100 border">
											<AutocompleteV2
												options={CHON_VAT_TU}
												name="tenVatTu"
												isClearable={false}
												className="autocomplete-custom-tiep-nhan radius spaces h-26"
											/>
											<div>
												<SelectTree
													className="w-100 h-100 border-0"
													codeCollapses={codeCollapses}
													handleChangeCollapsesCode={setCodeCollapses}
													idSelected={idSelected}
													handleChangeSelectId={setIdSelected}
													selectTree={TreeDsVatTu}
												/>
											</div>
										</div>
									</Col>
									<Col xs="9">
										<div className="d-flex mb-4px gap-2">
											<div className="spaces width-40 d-flex">
												<LabelRequired
													className="ms-0 min-w-90px"
													label="Tên vật tư"
												/>
												<TextField
													
													name="tenVatTu"
													className="spaces width-100"
													labelClassName="ms-0 min-w-100px"
												/>
											</div>
											<div className="d-flex spaces width-60 gap-4">
												<TextField
													
													label="Bệnh kèm theo"
													name="benhKemTheo"
													className="spaces width-40"
													labelClassName="ms-0 min-w-100px"
												/>
												<TextField
													
													name="benhKemTheoChiTiet"
													className="spaces width-60"
													labelClassName="ms-0 min-w-80px"
												/>
											</div>
										</div>
										<div className="d-flex mb-4px gap-2">
											<div className="spaces width-40 d-flex">
											</div>
											<div className="spaces width-60 d-flex">
												<TextField
													
													label="Số lượng"
													name="soLuong"
													className="spaces width-40 me-2"
													labelClassName="ms-0 min-w-100px"
												/>
												<Button className="btn-fill spaces h-26">Thêm</Button>
											</div>
										</div>
										<div className="table-right">
											<TableCustom<any>
												verticalScroll
												columns={columnsDSMauChiDinhVatTu}
												data={[]}
												selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
												getSelectedRowsData={setSelectedRow}
												className="mt-3"
												minHeight={240}
											/>
										</div>
										<div className="fw-500 fs-5">Phiếu chỉ định</div>
										<div className="table-right">
											<TableCustom<any>
												verticalScroll
												columns={columnsPhieuChiDinhVatTu}
												data={[]}
												selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
												getSelectedRowsData={setSelectedRow}
												className="mt-3"
												minHeight={250}
											/>
										</div>
									</Col>
								</Row>
							</Modal.Body>
							<Modal.Footer className="d-flex justify-content-between">
								<div>
									<div>
										<div className="d-flex mb-4px ">
											<div className="spaces d-flex width-50 align-items-center">
												<LabelRequired
													label="Tổng chi phí"
													className="ms-0 min-w-125px"
												/>
												<span className="text-cyan me-3">18090</span>
											</div>
											<div className="spaces d-flex width-50 align-items-center">
												<LabelRequired
													label="BHYT"
													className="ms-0 min-w-125px"
												/>
												<span className="text-cyan me-3">1890</span>
											</div>
											<div className="spaces d-flex width-50 align-items-center">
												<LabelRequired
													label="Nguồn khác"
													className="ms-0 min-w-125px"
												/>
												<span className="text-cyan me-3">10</span>
											</div>
											<div className="spaces d-flex width-50 align-items-center">
												<LabelRequired
													label="Còn nợ"
													className="ms-0 min-w-125px"
												/>
												<span className="text-cyan me-3">10</span>
											</div>
										</div>
									</div>
									<div>
										<div className="d-flex mb-4px ">
											<div className="spaces d-flex width-50 align-items-center">
												<LabelRequired
													label="Tạm ứng"
													className="ms-0 min-w-125px"
												/>
												<span className="text-cyan me-3">18090</span>
											</div>
											<div className="spaces d-flex width-50 align-items-center">
												<LabelRequired
													label="Tổng chi phí"
													className="ms-0 min-w-125px"
												/>
												<span className="text-cyan me-3">1890</span>
											</div>
											<div className="spaces d-flex width-50 align-items-center">
												<LabelRequired
													label="Miễn giảm"
													className="ms-0 min-w-125px"
												/>
												<span className="text-cyan me-3">10</span>
											</div>
											<div className="spaces d-flex width-50 align-items-center" />
										</div>
									</div>
								</div>
								<div className="d-flex gap-3">
									<Button
										className="btn-fill mr-5"
										onClick={() => setOpenDanhSachMauVatTuDialog(true)}
									>
										Danh sách vật tư mẫu/Đơn vật tư cũ
									</Button>
									<Button
										className="btn-fill mr-5"
									>
										Lưu
									</Button>
									<Button
										className="btn-fill mr-5"
										onClick={() => setOpenLuuMaVatTuMoiDialog(true)}
									>
										Lưu mẫu chỉ định mới
									</Button>
								</div>
							</Modal.Footer>
						</div>
					</Form>
				)}
			</Formik>
			{openLuuMauVatTuMoiDialog && (
				<ModalLuuMauVatTuMoi
					open={openLuuMauVatTuMoiDialog}
					handleClose={() => {
						setOpenLuuMaVatTuMoiDialog(false);
					}}
				/>
			)}
			{openDanhSachMauVatTuDialog && (
				<ModalDSMauChiDinhVatTu
					open={openDanhSachMauVatTuDialog}
					handleClose={() => {
						setOpenDanhSachMauVatTuDialog(false);
					}}
				/>
			)}
		</Modal>
	);
};

export default ModalKeVatTu;
