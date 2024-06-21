import { ObjectSelectAutocomplete } from "../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel"
import { DSChiDinh } from "../../phan-he-xet-nghiem/models/DanhSachChiDinhModels"

export interface DanhSachBenhPhamInterface {
	soGoi: number
	trangThai: string
	soPhieu: string
	maBN: string
	tenBN: string
	gioiTinh: string
	ngaySinh: string
	BHYT: string
	khoa: string
	phongChiDinh: string
	TGChiDinh: string
	maBA: string
	doiTuong: string
	diaChi: string
	dsChiDinh: DSChiDinh[]
}

export interface IDanhSachDVCdhaTdcn {
	trangThai: number,
	tenDichVu: string,
	soLuong: string,
	// "#ACC": string,
	ketLuan: string,
	traKetQua: any,
	mayThucHien: string,
}

export interface IThongTinPhieuCDHA {
	soPhieu: string
	sttThucHien: string
	ngayYLenh: string
	nguoiChiDinh: string
	noiChiDinh: string
	ngayThucHien?: string
	nguoiThucHien?: string
	noiThucHien?: string
	ngayTraKetQua?: string
	nguoiTraKetQua?: string
	noiTraKetQua?: string
	chanDoan?: string
	dsDichVuCDHA: IDanhSachDVCdhaTdcn[]
}

export interface IBenhNhanV3CDHA {
	gioiTinh: string;
	maBn: string;
	cccd?: string;
	hoTen: string;
	soDinhDanh?: string;
	diaChi?: string;
	age?: number;
	loaiDoiTuong?: number;
	loaiTiepNhan?: number;
	trangThai?: number;
	uuTien: number;
	dsDichVu?: any[];
	thuoc?: any[];
	barCode?: string;
	maBenhPham?: string;
	xetNghiem?: any[];
	chanDoanHinhAnh?: IThongTinPhieuCDHA[];
}

export interface IEkip {
	vaiTro?: string;
	nhanVien?: ObjectSelectAutocomplete | null;
	chiTra?: string;
}