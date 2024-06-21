import { useContext, useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { AppContext } from '../appContext/AppContext';
import CustomTextarea from '../component/custom-textarea/CustomTextarea';
import InputSearch from '../component/InputSearch';
import LabelRequired from '../component/LabelRequired';
import { LOAI_DOI_TUONG_CONST } from '../phan-he-kham-benh/constants/BenhNhanConst';
import BangDsPhieuCDHA from './components/BangDsPhieuCdha';
import BangDsDichVuCDHA from './components/BangDsDichVuCdha';
import { IBenhNhanV3CDHA } from './models/ModelsPhanHeCDHAVaTDCN';
import ModalThucHienCDHA from './modals/ModalThucHienCDHA';
import { ConfirmDialog } from '../component/ConfirmDialog';
import { toast } from 'react-toastify';
import { CODE, RESPONSE_MESSAGE } from '../utils/Constant';
import { fakeListBNCdha } from './models/FakeData';
import moment from 'moment';
import { LIST_PHIEU_IN } from './constants/Constants';
import ComponentPrint from '../component/templateComponent/ComponentPrint';

const PhanHeCDHAVaTDCN = () => {
	const { setIsLoading } = useContext(AppContext);
	const [shouldOpenModalThucHienCDHA, setShouldOpenModalThucHienCDHA] = useState<boolean>(false);
	const [shouldOpenModalHuyThucHien, setShouldOpenModalHuyThucHien] = useState<boolean>(false);
	const [shouldOpenModalHuyKetQua, setShouldOpenModalHuyKetQua] = useState<boolean>(false);
	const [keyword, setKeyword] = useState<string>("");
	const [dataSearched, setDataSearched] = useState<IBenhNhanV3CDHA[]>(fakeListBNCdha);
	const [openModalInPhieu, setOpenModalInPhieu] = useState(false)
	const [templatePrint, setTemplatePrint] = useState<any>()

	const updatePageData = async () => {
		setIsLoading(true);

		try {
			setDataSearched(
				fakeListBNCdha.filter((item) =>
					item.hoTen.toLowerCase().includes(keyword.toLowerCase()) ||
					item.maBn.toLowerCase().includes(keyword.toLowerCase()) ||
					item.barCode?.toLowerCase().includes(keyword.toLowerCase()) ||
					item.chanDoanHinhAnh?.[0]?.soPhieu.toLowerCase().includes(keyword.toLowerCase())
				)
			);
			setIsLoading(false);
		} catch (e) {
			toast.error(RESPONSE_MESSAGE.ERROR);
			setIsLoading(false);
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
		const value = (event.target as HTMLInputElement).value;
		setKeyword(value);
	};
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			updatePageData();
		}
	};
	const [infoBnSelectedCdha, setInfoBnSelectedCDHA] = useState<IBenhNhanV3CDHA>();

	const handleThucHienCDHA = () => {
		setInfoBnSelectedCDHA({ ...infoBnSelectedCdha, chanDoanHinhAnh: [{ ...infoBnSelectedCdha?.chanDoanHinhAnh?.[0], nguoiThucHien: "Quản trị hệ thống", ngayThucHien: moment().format("HH:mm DD/MM/YYYY") }] } as IBenhNhanV3CDHA);
		toast.success("Bệnh nhân có số phiếu " + infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.soPhieu + " đang thực hiện CDHA");
	}

	const handleHuyThucHien = () => {
		setInfoBnSelectedCDHA({ ...infoBnSelectedCdha, chanDoanHinhAnh: [{ ...infoBnSelectedCdha?.chanDoanHinhAnh?.[0], nguoiThucHien: "", ngayThucHien: "" }] } as IBenhNhanV3CDHA);
		toast.warning("Bệnh nhân có số phiếu " + infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.soPhieu + " đã huỷ thực hiện CDHA");
		handleCloseHuyThucHien();
	}

	const handleTraKetQuaCDHA = () => {
		setInfoBnSelectedCDHA({ ...infoBnSelectedCdha, chanDoanHinhAnh: [{ ...infoBnSelectedCdha?.chanDoanHinhAnh?.[0], nguoiTraKetQua: "Quản trị hệ thống", ngayTraKetQua: moment().format("HH:mm DD/MM/YYYY"), noiTraKetQua: "Phòng khám đa khoa" }] } as IBenhNhanV3CDHA);
	}

	const handleHuyKetQua = () => {
		setInfoBnSelectedCDHA({ ...infoBnSelectedCdha, chanDoanHinhAnh: [{ ...infoBnSelectedCdha?.chanDoanHinhAnh?.[0], nguoiTraKetQua: "", ngayTraKetQua: "", noiTraKetQua: "" }] } as IBenhNhanV3CDHA);
		toast.warning("Bệnh nhân có số phiếu " + infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.soPhieu + " đã huỷ kết quả CDHA");
		handleCloseHuyKetQua();
	}

	const handleCloseHuyThucHien = () => {
		setShouldOpenModalHuyThucHien(false);
	}

	const handleCloseHuyKetQua = () => {
		setShouldOpenModalHuyKetQua(false);
	}

	const handlePrint = (key: string) => {
		setOpenModalInPhieu(true);
		switch (key) {
			case LIST_PHIEU_IN.PHIEU_CHI_DINH.key:
				setTemplatePrint(LIST_PHIEU_IN.PHIEU_CHI_DINH)
				break;
			default:
				break;
		}
	}

	const dataToPrint = (data: any) => {
		return {
			hoTen: data?.hoTen,
			gioiTinh: data?.gioiTinh,
			tuoi: data?.age,
			namSinh: data?.age ? moment().year() - data?.age : "",
			thoiGianLapPhieu: moment().format("HH:mm DD/MM/YYYY"),
		}
	}

	return (
		<>
			<div className="h-100 bg-white pb-5 tab-xet-nghiem">
				<Row className="h-100 w-100 m-0">
					<Col xs={3} className="p-0 dsBenhNhan h-100 d-flex flex-column">
						<div className="d-flex mt-3">
							<LabelRequired label="Tìm kiếm" className="mx-6" />
							<div className="flex-auto me-6">
								<InputSearch
									handleChange={handleChange}
									handleSearch={updatePageData}
									handleKeyDown={handleKeyDown}
									placeholder="Tìm kiếm"
									type="text"
									className="spaces w-100" />
							</div>
						</div>
						<div className="flex-1 flex flex-column">
							<BangDsPhieuCDHA setInfoPhieuCDHA={setInfoBnSelectedCDHA} dataSearched={dataSearched} />
						</div>
					</Col>
					<Col xs={9} className="flex flex-column border p-4">
						{infoBnSelectedCdha ? <div>
							<div className="text-break fw-500 p-1 info-patient-cdha text-end">
								<span className="text-uppercase fw-600 fs-7">
									{infoBnSelectedCdha?.hoTen}&nbsp;|&nbsp;{infoBnSelectedCdha?.maBn}&nbsp;|&nbsp;{infoBnSelectedCdha?.age}&nbsp;|&nbsp;{infoBnSelectedCdha?.gioiTinh}
								</span>
								<div className="text-truncate fs-7">
									Đối tượng: {infoBnSelectedCdha?.loaiDoiTuong === LOAI_DOI_TUONG_CONST.bhyt.code ? "BHYT" : "Dịch vụ"}
								</div>
								<div className="text-truncate fs-7">
									Địa chỉ: {infoBnSelectedCdha?.diaChi}
								</div>
							</div>
						</div> : <div className="info-patient-cdha spaces h-65"></div>}
						<div className="pt-5">
							<Row>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25"
								>
									<LabelRequired
										label="Số phiếu:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.soPhieu || ""} className=' text-blue' />
								</Col>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25"
								>
									<LabelRequired
										label="STT thực hiện:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.sttThucHien || ""} className=' text-blue' />
								</Col>
							</Row>
							<Row>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25"
								>
									<LabelRequired
										label="Ngày y lệnh:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.ngayYLenh || ""} className=' text-blue' />
								</Col>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25"
								>
									<LabelRequired
										label="Người chỉ định:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.nguoiChiDinh || ""} className=' text-blue' />
								</Col>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25"
								>
									<LabelRequired
										label="Nơi chỉ định:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.noiChiDinh || ""} className=' text-blue' />
								</Col>
							</Row>
							<Row>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25"
								>
									<LabelRequired
										label="Ngày thực hiện:  " className="spaces h-25 spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.ngayThucHien || ""} className=' text-blue' />
								</Col>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25 "
								>
									<LabelRequired
										label="Người thực hiện:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.nguoiThucHien || ""}
										className=' text-blue' />
								</Col>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25 "
								>
									<LabelRequired
										label="Nơi thực hiện:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.noiThucHien || ""} className=' text-blue' />
								</Col>
							</Row>
							<Row>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25 "
								>
									<LabelRequired
										label="Ngày trả kết quả:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.ngayTraKetQua || ""} className=' text-blue' />
								</Col>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25 "
								>
									<LabelRequired
										label="Người trả kết quả:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.nguoiTraKetQua || ""} className=' text-blue' />
								</Col>
								<Col
									xs={4}
									className="d-flex mb-1 align-items-center spaces h-25 "
								>
									<LabelRequired
										label="Nơi trả kết quả:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.noiTraKetQua || ""} className=' text-blue' />
								</Col>
							</Row>
							<Row>
								<Col
									xs={12}
									className="d-flex mb-1 align-items-center spaces h-25 "
								>
									<LabelRequired
										label="Chẩn đoán:  " className="spaces min-w-120"
									/>
									<CustomTextarea disabled marginUnderline={8} value={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.chanDoan || ""} className=' text-blue' />
								</Col>
							</Row>
						</div>

						<BangDsDichVuCDHA dataDanhSachDVCdha={infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.dsDichVuCDHA ?? []} />

						<div className="flex-item-end pt-4 pb-1 btn-luu">
							{infoBnSelectedCdha && 
								<div className="d-flex gap-2">
									<Button className="btn-fill" type="submit">
										<span>Cập nhật chỉ số</span>
									</Button>
									{
										infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.nguoiTraKetQua != "" ?
											<>
												<Button className="btn-fill"
													onClick={() => handlePrint(LIST_PHIEU_IN.PHIEU_CHI_DINH.key)}
												>
													<span>Phiếu thực hiện</span>
												</Button>
												<Button className="btn-fill" onClick={() => { setShouldOpenModalHuyKetQua(true) }}>
													<span>Huỷ kết quả</span>
												</Button>
												<Button className="btn-fill">
													<span>In kết quả</span>
												</Button>
											</>
											: infoBnSelectedCdha?.chanDoanHinhAnh?.[0]?.nguoiThucHien != "" ?
											<>
													<Button className="btn-fill"
														onClick={() => handlePrint(LIST_PHIEU_IN.PHIEU_CHI_DINH.key)}
													>
													<span>Phiếu thực hiện</span>
												</Button>
													<Button className="btn-fill" onClick={() => { setShouldOpenModalHuyThucHien(true) }}>
													<span>Huỷ thực hiện</span>
												</Button>
													<Button className="btn-fill" onClick={() => { handleTraKetQuaCDHA() }}>
													<span>Trả kết quả</span>
												</Button>
											</>
											:
											<>
													<Button className="btn-fill" onClick={() => { handleThucHienCDHA(); setShouldOpenModalThucHienCDHA(true) }}>
													<span>Thực hiện</span>
												</Button>
											</>
									}
								</div>
							}
							<ComponentPrint
								open={openModalInPhieu}
								title={templatePrint?.title}
								handleClose={() => setOpenModalInPhieu(false)}
								data={dataToPrint(infoBnSelectedCdha as any)}
								template={templatePrint?.template}
							/>
						</div>
					</Col>
				</Row>
			</div>
			{shouldOpenModalThucHienCDHA && <ModalThucHienCDHA
				handleClose={() => setShouldOpenModalThucHienCDHA(false)}
				handleTraKetQua={handleTraKetQuaCDHA}
				infoBenhNhan={infoBnSelectedCdha}
			/>}
			<ConfirmDialog
				show={shouldOpenModalHuyThucHien}
				title={"Thông báo"}
				message={"Bạn có chắc chắn muốn huỷ thực hiện phiếu này không?"}
				yes={"Có"}
				close={"Không"}
				onYesClick={handleHuyThucHien}
				onCloseClick={handleCloseHuyThucHien}
				className='confirm-dialog-cdha'
			/>
			<ConfirmDialog
				show={shouldOpenModalHuyKetQua}
				title={"Thông báo"}
				message={"Bạn có chắc chắn muốn huỷ kết quả thực hiện phiếu này không?"}
				yes={"Có"}
				close={"Không"}
				onYesClick={handleHuyKetQua}
				onCloseClick={handleCloseHuyKetQua}
				className='confirm-dialog-cdha'
			/>
		</>
	);
}

export { PhanHeCDHAVaTDCN }