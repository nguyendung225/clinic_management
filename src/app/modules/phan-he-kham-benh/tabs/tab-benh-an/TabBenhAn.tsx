import { Form, Formik, useFormikContext } from "formik";
import { useContext, useState } from "react";
import { Button, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { AppContext } from "../../../appContext/AppContext";
import { CODE } from "../../../utils/Constant";
import "../../PhanHeKhamBenh.scss";
import { PhanHeTiepDonContext } from "../../contexts/PhanHeTiepDonContext";
import { createKhamBenh, updateKhamBenh } from "../../services/KhamBenhService";
import { convertDataKhamBenhDto } from "../../utils/Utils";
import TextField from "../../../component/TextField";
import ModalKetQuaDichVu from "../../modals/modal-tab-benh-an/ModalKetQuaDichVu";
import ModalLuuMauBenhAn from "../../modals/modal-tab-benh-an/ModalLuuMauBenhAn";
import ModalDSMauBenhAn from "../../modals/modal-tab-benh-an/ModalDSMauBenhAn";
import { IconButtonSave } from "../../../component/IconSvg";

export type KhamBenh = {
	thongTinKhamBenh?: any;
	setThongTinKhamBenh: ((data: any) => void) | undefined;
};

export const TabPhieuKhac = () => {
	const { benhNhanInfo, thongTinKhamBenh } = useContext(PhanHeTiepDonContext);
	const { setIsLoading, thongTinBenhNhan } = useContext(AppContext);

	const initialValues: any = {
		quaTrinhBenhLy: "",
		tomTatKQCLS: "",
		phuongPhapDieuTri: "",
		tinhTrangRaVien: "",
		huongDieuTri: "",
	}

	const validationSchema = Yup.object({});

	const [shouldOpenLuuMauPopup, setShouldOpenLuuMauPopup] = useState<boolean>(false);
	const [shouldOpenDSMau, setShouldOpenDSMau] = useState<boolean>(false);
	const [shouldOpenKetQuaDichVuModal, setShouldOpenKetQuaDichVuModal] = useState<boolean>(false);

	const handleSubmit = async (values: any) => {
		try {
			const concepts: any =
				convertDataKhamBenhDto({
					...values,
					khamBoPhan: thongTinKhamBenh?.khamBoPhan,
				}) || {};
			let obs = {
				concepts: concepts,
				patientId: benhNhanInfo?.patientId,
				encounterId: benhNhanInfo?.encounterId,
				personId: benhNhanInfo?.personId,
			};
			setIsLoading(true);
			if (benhNhanInfo?.encounterId) {
				let { data } = await updateKhamBenh(obs);
				if (CODE.SUCCESS === data.code) {
					toast.success("Thành Công");
				} else {
					toast.error("Xảy ra lỗi, vui lòng thử lại!");
				}
			} else {
				let { data } = await createKhamBenh(obs);
				if (CODE.SUCCESS === data.code) {
					toast.success("Thành Công");
				} else {
					toast.error("Xảy ra lỗi, vui lòng thử lại!");
				}
			}
		} catch (error) {
			setIsLoading(false);
			toast.error("Xảy ra lỗi, vui lòng thử lại!");
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
			<Form className="ps-1 pt-7 pe-2 tab-kham-benh">
				<Row>
					<Col xs={12} className="d-flex flex-column justify-content-between pe-5">
						<>
							<div>
								<Row className="mb-2">
									<TextField
										label="Quá trình bệnh lý và diễn biến lâm sàng"
										labelClassName="pe-2 text-break text-start mb-1 text-uppercase d-flex align-items-start flex-column h-54"
										name="quaTrinhBenhLy"
										as="textarea"
										rows={2}
										readOnlyText={benhNhanInfo?.isView}
									/>
								</Row>
								<Row className="mb-2">
									<div className="position-relative mt-2">
										<TextField
											label={
												<>
													Tóm tắt kết quả CLS có giá trị chẩn đoán
													<div className="text-underline text-cyan ms-10 cursor-pointer" onClick={(e) => {
														setShouldOpenKetQuaDichVuModal(true);
													}}>
														<u>Chọn dịch vụ</u>
													</div>
												</>
											}
											labelClassName="pe-2 text-break text-start mb-1 text-uppercase d-flex align-items-start flex-column h-54"
											name="tomTatKQCLS"
											as="textarea"
											rows={2}
											readOnlyText={benhNhanInfo?.isView}
										/>
										{shouldOpenKetQuaDichVuModal && <ModalKetQuaDichVu handleClose={() => setShouldOpenKetQuaDichVuModal(false)} />}
									</div>
								</Row>
								<Row className="mb-2">
									<TextField
										label="Phương pháp điều trị"
										labelClassName="pe-2 text-break text-start mb-1 text-uppercase d-flex align-items-start flex-column h-54"
										name="phuongPhapDieuTri"
										as="textarea"
										rows={2}
										readOnlyText={benhNhanInfo?.isView}
									/>
								</Row>
								<Row className="mb-2">
									<TextField
										label="Tình trạng người bệnh ra viện"
										labelClassName="pe-2 text-break text-start mb-1 text-uppercase d-flex align-items-start flex-column h-54"
										name="tinhTrangRaVien"
										as="textarea"
										rows={2}
										readOnlyText={benhNhanInfo?.isView}
									/>
								</Row>
								<Row className="mb-2">
									<TextField
										label="Hướng điều trị và các chế độ tiếp theo"
										labelClassName="pe-2 text-break text-start mb-1 text-uppercase d-flex align-items-start flex-column h-54"
										name="huongDieuTri"
										as="textarea"
										rows={2}
										readOnlyText={benhNhanInfo?.isView}
									/>
								</Row>
							</div>

							<div className="flex flex-center justify-content-end pt-3 mt-16 pb-2 btn-luu">
								<div className="d-flex gap-2">
									<DropdownButton
										id="dropdown-basic-button"
										title={
											<div>
												Mẫu tổng kết
												<i className="ps-1 bi bi-chevron-down m-0"></i>
											</div>
										}
										className="dropdown-btn"
									>
										<Dropdown.Item
											onClick={() => setShouldOpenDSMau(true)}
										>
											Danh sách các mẫu đã tạo
										</Dropdown.Item>
										<Dropdown.Item
											onClick={() => setShouldOpenLuuMauPopup(true)}
										>
											Lưu vào mẫu mới
										</Dropdown.Item>
										{shouldOpenLuuMauPopup && <ModalLuuMauBenhAn handleClose={() => setShouldOpenLuuMauPopup(false)} />}
										{shouldOpenDSMau && <ModalDSMauBenhAn handleClose={() => setShouldOpenDSMau(false)} />}
									</DropdownButton>
									<Button className="btn-fill" type="submit">
										<IconButtonSave/>
										<span>Lưu</span>
									</Button>
									<Button className="btn-fill">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="14"
											height="14"
											fill="currentColor bi bi-floppy me-2"
											viewBox="0 0 16 16"
										>
											<path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
											<path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
										</svg>
										<span>In bệnh án</span>
									</Button>
								</div>
							</div>
						</>
					</Col>
				</Row>
			</Form>
		</Formik>
	);
};

export default TabPhieuKhac;