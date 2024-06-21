import { Form, Formik, FormikErrors } from "formik";
import {
	Dispatch,
	FC,
	SetStateAction,
	useContext,
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
import { AppContext } from "../../../appContext/AppContext";
import {
	DEFAULT_PAGE_INDEX,
	DEFAULT_TOTAL_ELEMENTS,
	DEFAULT_TOTAL_PAGES,
	SELECTION_MODE,
} from "../../../utils/Constant";
import {
	columnsDSMauChiDinhChiTiet,
	columnsPhieuChiDinhCu,
	columnsPhieuChiDinhCuVatTu,
} from "../../columns/modal-ke-vat-tu/ColumnModalKeVatTu";
import InputSearch from "../../../component/InputSearch";
import LabelRequired from "../../../component/LabelRequired";
import SelectTree from "../../../component/SelectTree";
import { DsMauChiDinhTree } from "../FakeData";
import ModalKeVatTu from "../../modals/modal-ke-vat-tu/ModalKeVatTu";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

interface Props {
	open: boolean;
	handleClose: Dispatch<SetStateAction<boolean>>;
}

interface IDataMauDsChiDinhChiTiet {
	maChiDinh: string,
	tenChiDinh: string,
	nhomDichVu: string,
	loaiDichVu: string,
	mauRiengCuaBacSi: string,
}

interface IDataMauPhieuChiDinhCu {
	ngayYLenh: string,
	nguoiKeKhai: string,
	phongKham: string,
	chanDoan: string,
}


const ModalDSMauChiDinhVatTu: FC<Props> = (props) => {
	let { open, handleClose } = props;
	const [page, setPage] = useState<number>(DEFAULT_PAGE_INDEX);
	const [rowsPerPage, setRowsPerPage] = useState<number>(15);
	const [selectedRow, setSelectedRow] = useState<any>();
	let [objectSearch, setObjectSearch] = useState<any>();
	let [shouldOpenFilterSearch, setShouldOpenFilterSearch] =
		useState<boolean>(false);
	let [openCapNhatMauChiDinhVatTuDialog, setOpenCapNhatMauChiDinhVatTuDialog] =
		useState<boolean>(false);
	const { setIsLoading } = useContext(AppContext);
	const [bacSiData, setBacSiData] = useState({
		data: [],
		totalElements: DEFAULT_TOTAL_ELEMENTS,
		totalPages: DEFAULT_TOTAL_PAGES,
	});

	const getListBenhNhan = async () => { };

	useEffect(() => {
		if (!shouldOpenFilterSearch) {
			setObjectSearch({});
		}
		getListBenhNhan();
	}, [page, rowsPerPage, shouldOpenFilterSearch]);
	const updatePageData = async () => { };
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => { };
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => { };
	const handleSubmit = async (values: any) => {
		// handleClose(false);
	};

	const validationSchema = Yup.object().shape({});
	const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
	const [idSelected, setIdSelected] = useState<string>("");
	useEffect(() => {
		setCodeCollapses([...DsMauChiDinhTree.filter.map((item) => item.code)]);
	}, []);

	const dataMauDsChiDinhChiTiet: IDataMauDsChiDinhChiTiet[] = [
		{
			maChiDinh: '01',
			tenChiDinh: 'Mẫu 1',
			nhomDichVu: 'Vật tư',
			loaiDichVu: 'Tổng hợp',
			mauRiengCuaBacSi: 'Quản trị hệ thống',
		}
	]

	const dataMauPhieuChiDinhCu: IDataMauPhieuChiDinhCu[] = [
		{
			ngayYLenh: '16/11/2023',
			nguoiKeKhai: 'Quản trị hệ thống',
			phongKham: 'Khoa Khám Bệnh',
			chanDoan: 'Bị ngã xe',
		}
	]

	return (
		<>
			<Modal className="modal-ke-vat-tu dialog-background" size="xl" show={open} animation centered>
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
										Danh sách các mẫu vật tư đã tạo
									</Modal.Title>
									<button
										className="btn-close"
										onClick={() => handleClose(false)}
									></button>
								</Modal.Header>
								<Modal.Body className="pt-16 pb-10 px-24 spaces">
									<Row>
										<Col xs="3" className="pe-0">
											<SelectTree
												codeCollapses={codeCollapses}
												handleChangeCollapsesCode={setCodeCollapses}
												idSelected={idSelected}
												handleChangeSelectId={setIdSelected}
												selectTree={DsMauChiDinhTree as any}
												className='spaces width-100 h-100 overflow-auto'
											/>
										</Col>
										<Col xs="9">
											<InputSearch
												handleChange={handleChange}
												handleSearch={updatePageData}
												handleKeyDown={handleKeyDown}
												placeholder="Tìm kiếm"
												type="text"
											/>
											<div className="table-ds-right">
												<TableCustom<any>
													verticalScroll
													columns={columnsDSMauChiDinhChiTiet}
													data={dataMauDsChiDinhChiTiet}
													selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
													getSelectedRowsData={setSelectedRow}
													className="mt-3 mb-0"
													minHeight={250}
												/>
											</div>
										</Col>
									</Row>
									<Row>
										<Col xs={12} className="fw-500 fs-5 pb-2 mt-5">Phiếu chỉ định cũ</Col>
										<Col xs={12}>
											<InputSearch
												handleChange={handleChange}
												handleSearch={updatePageData}
												handleKeyDown={handleKeyDown}
												placeholder="Tìm kiếm"
												type="text"
											/>
										</Col>
										<Col xs={6} className="pe-0">
											<TableCustom<any>
												verticalScroll
												columns={columnsPhieuChiDinhCu}
												data={dataMauPhieuChiDinhCu}
												selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
												getSelectedRowsData={setSelectedRow}
												className="mt-3"
												minHeight={300}
											/>
										</Col>
										<Col xs={6} className="ps-0">
											<TableCustom<any>
												verticalScroll
												columns={columnsPhieuChiDinhCuVatTu}
												data={[]}
												selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
												getSelectedRowsData={setSelectedRow}
												className="mt-3"
												minHeight={300}
											/>
										</Col>
									</Row>
								</Modal.Body>
								<Modal.Footer className="d-flex justify-content-between py-3">
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
														label="Đã thu"
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
									<div className="d-flex gap-2">
										<Button className="btn-fill mr-5" onClick={() => handleClose(false)}>Sử dụng phiếu + chẩn đoán</Button>
										<Button className="btn-fill mr-5" onClick={() => handleClose(false)}>Sử dụng phiếu</Button>
									</div>
								</Modal.Footer>
							</div>
						</Form>
					)}
				</Formik>
			</Modal>
			{openCapNhatMauChiDinhVatTuDialog && <ModalKeVatTu open={openCapNhatMauChiDinhVatTuDialog} handleClose={() => { setOpenCapNhatMauChiDinhVatTuDialog(false) }} />}
		</>
	);
};

export default ModalDSMauChiDinhVatTu;
