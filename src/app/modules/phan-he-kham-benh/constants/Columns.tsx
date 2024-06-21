import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { CustomColumn } from "../../component/table/table-custom/tableCustomeModel";
import { ObjectSelectAutocomplete } from "../../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel";
import { constTypeBenhKemTheo } from "./KhamBenh";
import { DungMoi, KetQuaDichVu, MauKhamBenh, TrieuChung } from "../models/ThongTinKhamBenhModel";
import { TaiLieuModel } from "../models/TaiLieuModel";
import { Column } from "react-table";

export const KetQuaDichVuColumn: ReadonlyArray<CustomColumn<KetQuaDichVu>> = [
    {
        Header: (props) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Tên dịch vụ"}
                className="text-white text-center align-middle min-w-250px "
            />
        ),
        id: "Tên dịch vụ",
        name:'tenDichVu',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tenDichVu} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Kết quả"}
                className="text-white text-center align-middle min-w-300px "
            />
        ),
        id: "Kết quả",
        name:'ketQua',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.ketQua} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Khoa chỉ định"}
                className="text-white text-center align-middle min-w-200px "
            />
        ),
        id: "Khoa chỉ định",
        name:'khoaChiDinh',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.khoaChiDinh} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Ngày y lệnh"}
                className="text-white text-center align-middle min-w-200px "
            />
        ),
        id: "Ngày y lệnh",
        name:'ngayYLenh',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.ngayYLenh} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Ngày trả kết quả"}
                className="text-white text-center align-middle min-w-200px "
            />
        ),
        id: "Ngày trả kết quả",
        name:'ngayTraKetQua',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.ngayTraKetQua} className="text-center " />
        ),
    },
];

export const ColunmDanhSachMauKhamBenh: ReadonlyArray<CustomColumn<MauKhamBenh>> = [
    {
        Header: (props) => (
            <TableCustomHeader<MauKhamBenh>
                tableProps={props}
                title={"Tên mẫu khám bệnh hỏi bệnh"}
                className="text-white text-center align-middle min-w-300px "
            />
        ),
        id: "Tên mẫu khám bệnh hỏi bệnh",
        name:'tenMau',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tenMau} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<MauKhamBenh>
                tableProps={props}
                title={"Quá trình bệnh lý"}
                className="text-white text-center align-middle min-w-300px "
            />
        ),
        id: "Quá trình bệnh lý",
        name:'quaTrinhBenhLy',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.quaTrinhBenhLy} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<MauKhamBenh>
                tableProps={props}
                title={"Triệu chứng"}
                className="text-white text-center align-middle min-w-300px "
            />
        ),
        id: "Triệu chứng",
        name:'trieuChung',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.trieuChung} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<MauKhamBenh>
                tableProps={props}
                title={"Tiền sử bản thân"}
                className="text-white text-center align-middle min-w-200px "
            />
        ),
        id: "Tiền sử bản thân",
        name:'tienSuBanThan',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tienSuBanThan} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<MauKhamBenh>
                tableProps={props}
                title={"Tiền sử gia đình"}
                className="text-white text-center align-middle min-w-200px "
            />
        ),
        id: "Tiền sử gia đình",
        name:'tienSuGiaDinh',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tienSuGiaDinh} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<MauKhamBenh>
                tableProps={props}
                title={"Khám bộ phận"}
                className="text-white text-center align-middle min-w-200px "
            />
        ),
        id: "Khám bộ phận",
        name:'khamBoPhan',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.khamBoPhan} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<MauKhamBenh>
                tableProps={props}
                title={"Khám toàn thân"}
                className="text-white text-center align-middle min-w-200px "
            />
        ),
        id: "Khám toàn thân",
        name:'khamToanThan',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.khamToanThan} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<MauKhamBenh>
                tableProps={props}
                title={"Hướng xử lý"}
                className="text-white text-center align-middle min-w-200px "
            />
        ),
        id: "Hướng xử lý",
        name:'huongXuLy',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.huongXuLy} className="" />
        ),
    },
];

export const ColunmTrieuChung: ReadonlyArray<CustomColumn<TrieuChung>> = [
    {
        Header: (props) => (
            <TableCustomHeader<TrieuChung>
                tableProps={props}
                title={"Id"}
                className="text-white text-center align-middle spaces max-w-50 "
            />
        ),
        id: "Id",
        name:'id',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.id} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<TrieuChung>
                tableProps={props}
                title={"Triệu chứng bệnh"}
                className="text-white text-center align-middle min-w-600px "
            />
        ),
        id: "Triệu chứng bệnh",
        name:'trieuChung',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.trieuChung} className="" />
        ),
    },
]

export const ColumnDanhSachBenhKemTheo = (type: string) =>  {
    
   return [{
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center text-white max-w-50px '
            />
        ),
        id: 'stt',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center "
                data={+props.row.id + 1}
            />
        },
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<ObjectSelectAutocomplete>
                tableProps={props}
                title={`Mã bệnh - ${type === constTypeBenhKemTheo.ICD10.code ? "ICD10" : "YHCT"}`}
                className="text-white text-center align-middle min-w-100px "
            />
        ),
        id: `Mã bệnh - ${type === constTypeBenhKemTheo.ICD10.code ? "ICD10" : "YHCT"}`,
        name:'code',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.code} className=" text-center" />
        ),
    },
    {
        Header: (props: any) => (
            <TableCustomHeader<ObjectSelectAutocomplete>
                tableProps={props}
                title={`Tên bệnh - ${type === constTypeBenhKemTheo.ICD10.code ? "ICD10" : "YHCT"}`}
                className="text-white text-center align-middle min-w-200px "
            />
        ),
        id: `Tên bệnh - ${type === constTypeBenhKemTheo.ICD10.code ? "ICD10" : "YHCT"}`,
        name:'name',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.name} className="" />
        ),
    },]
}
export const ColunmDungMoiHoanNguyen: ReadonlyArray<CustomColumn<DungMoi>> = [
    {
        Header: (props) => (
            <TableCustomHeader<DungMoi>
                tableProps={props}
                title={"Id"}
                className="text-white text-center align-middle spaces max-w-50 "
            />
        ),
        id: "Id",
        name:'id',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.id} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DungMoi>
                tableProps={props}
                title={"Mã dung môi"}
                className="text-white text-center align-middle min-w-100px "
            />
        ),
        id: "Mã dung môi",
        name:'maDungMoi',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.maDungMoi} className=" text-center" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DungMoi>
                tableProps={props}
                title={"Tên dung môi"}
                className="text-white text-center align-middle min-w-500px "
            />
        ),
        id: "Tên dung môi",
        name:'tenDungMoi',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tenDungMoi} className="" />
        ),
    },
]


export const columnTaiLieu: ReadonlyArray<CustomColumn<TaiLieuModel>> = [
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center text-white max-w-50px '
            />
        ),
        id: 'stt',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center "
                data={+props.row.id + 1}
            />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<TaiLieuModel>
                tableProps={props}
                title={"Tên file"}
                className="text-white text-center align-middle min-w-300px "
            />
        ),
        id: "Tên file",
        name:'tenFile',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tenFile} className=" text-center" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<TaiLieuModel>
                tableProps={props}
                title={"Loại File"}
                className="text-white text-center align-middle min-w-100px "
            />
        ),
        id: "Loại File",
        name:'loaiFile',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.loaiFile} className="" />
        ),
    },
]

export interface DichVu {
    maDichVu: string;
    tenDichVu: string;
    soLuong: string | number;
}
export const columnDichVu: ReadonlyArray<CustomColumn<DichVu>> = [
    {
        Header: (props) => (
            <TableCustomHeader<DichVu>
                tableProps={props}
                title={"Mã dịch vụ"}
                className="text-white text-center align-middle width-10 "
            />
        ),
        id: "Mã dịch vụ",
        name:'maDichVu',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.maDichVu} className=" text-center" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DichVu>
                tableProps={props}
                title={"Tên dịch vụ"}
                className="text-white align-middle width-80 "
            />
        ),
        id: "Tên dịch vụ",
        name:'tenDichVu',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tenDichVu} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DichVu>
                tableProps={props}
                title={"Số lượng"}
                className="text-white text-center align-middle width-10 "
            />
        ),
        id: "Số lượng",
        name:'soLuong',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.soLuong} className="text-center " />
        ),
    },
]

export interface XetNghiem {
    ngayXetNghiem: string;
    tenXetNghiem: string;
    ketQua?: string;
    donVi?: string;
    chiSoBinhThuong?: string;
    ghiChu?: string
    items?: any
}
export const columnsXetNghiemThongTinKhamBenh: ReadonlyArray<CustomColumn<XetNghiem>> = [
    
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center text-white max-w-50px  p-2 border-x'
            />
        ),
        id: 'stt',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center "
                data={+props.row.id + 1}
            />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<XetNghiem>
                tableProps={props}
                title={"Ngày"}
                className="text-white text-center align-middle width-10  p-2 border-x"
            />
        ),
        id: "Ngày",
        name:'ngayXetNghiem',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.ngayXetNghiem} className=" text-center" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<XetNghiem>
                tableProps={props}
                title={"Tên xét nghiệm"}
                className="text-white align-middle width-80  p-2 border-x"
            />
        ),
        id: "Tên xét nghiệm",
        name:'tenXetNghiem',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tenXetNghiem} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<XetNghiem>
                tableProps={props}
                title={"Kết quả"}
                className="text-white text-center align-middle width-10  p-2 border-x"
            />
        ),
        id: "Kết quả",
        name:'ketQua',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.ketQua} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<XetNghiem>
                tableProps={props}
                title={"Đơn vị"}
                className="text-white text-center align-middle width-10  p-2 border-x"
            />
        ),
        id: "Đơn vị",
        name:'donVi',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.donVi} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<XetNghiem>
                tableProps={props}
                title={"Chỉ số bình thường"}
                className="text-white text-center align-middle width-10  p-2 border-x"
            />
        ),
        id: "Chỉ số bình thường",
        name:'chiSoBinhThuong',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.chiSoBinhThuong} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<XetNghiem>
                tableProps={props}
                title={"Ghi chú (Chỉ định)"}
                className="text-white text-center align-middle width-10  p-2 border-x"
            />
        ),
        id: "Ghi chú (Chỉ định)",
        name:'ghiChu',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.ghiChu} className="text-center " />
        ),
    },
]

export interface ChanDoanHinhAnh {
    tenDichVu: string;
    soLuong?: string;
    ketLuan?: string;
    ghiChu?: string
}
export const columnsChanDoanHinhAnhThongTinKhamBenh: ReadonlyArray<CustomColumn<ChanDoanHinhAnh>> = [
    
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center text-white max-w-50px '
            />
        ),
        id: 'stt',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center "
                data={+props.row.id + 1}
            />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<ChanDoanHinhAnh>
                tableProps={props}
                title={"Tên dịch vụ"}
                className="text-white text-center align-middle width-10 "
            />
        ),
        id: "Tên dịch vụ",
        name:'tenDichVu',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tenDichVu} className=" text-center" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<ChanDoanHinhAnh>
                tableProps={props}
                title={"Số lượng"}
                className="text-white align-middle width-80 "
            />
        ),
        id: "Số lượng",
        name:'soLuong',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.soLuong} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<ChanDoanHinhAnh>
                tableProps={props}
                title={"Ghi chú (Chỉ định)"}
                className="text-white text-center align-middle width-10 "
            />
        ),
        id: "Ghi chú (Chỉ định)",
        name:'ghiChu',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.ghiChu} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<ChanDoanHinhAnh>
                tableProps={props}
                title={"Kết luận"}
                className="text-white text-center align-middle width-10 "
            />
        ),
        id: "Kết luận",
        name:'ketLuan',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.ketLuan} className="text-center " />
        ),
    },
    
]

export interface DonThuoc {
    maThuoc: string;
    tenThuoc: string;
    donVi?: string;
    ngayDung?: string;
    duongDung?: string;
    lanDung?: string;
    luongDung?: string;
    huongDanSuDungThuoc?: string;
    soLuong?: string;
    ketLuan?: string;
    ghiChu?: string
}
export const columnDonThuocThongTinKhamBenh: ReadonlyArray<CustomColumn<DonThuoc>> = [
    
    {
        Header: (props: any) => (
            <TableCustomHeader
                tableProps={props}
                title={"STT"}
                className='text-center text-white max-w-50px '
            />
        ),
        id: 'stt',
        Cell: ({ ...props }: any) => {
            return <TableCustomCell
                className="text-center "
                data={+props.row.id + 1}
            />
        },
    },
    {
        Header: (props) => (
            <TableCustomHeader<DonThuoc>
                tableProps={props}
                title={"Mã thuốc"}
                className="text-white text-center align-middle width-10 "
            />
        ),
        id: "Mã thuốc",
        name:'maThuoc',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.maThuoc} className=" text-center" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DonThuoc>
                tableProps={props}
                title={"Tên thuốc"}
                className="text-white text-center align-middle min-w-125px "
            />
        ),
        id: "Tên thuốc",
        name:'tenThuoc',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tenThuoc} className="" />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DonThuoc>
                tableProps={props}
                title={"donVi"}
                className="text-white align-middle width-5 "
            />
        ),
        id: "donVi",
        name:'donVi',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.donVi} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DonThuoc>
                tableProps={props}
                title={"Số lượng"}
                className="text-white align-middle width-80 "
            />
        ),
        id: "Số lượng",
        name:'soLuong',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.soLuong} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DonThuoc>
                tableProps={props}
                title={"Ngày dùng"}
                className="text-white align-middle width-5 "
            />
        ),
        id: "Ngày dùng",
        name:'ngayDung',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.ngayDung} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DonThuoc>
                tableProps={props}
                title={"Lần dùng"}
                className="text-white align-middle width-5 "
            />
        ),
        id: "Lần dùng",
        name:'lanDung',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.lanDung} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DonThuoc>
                tableProps={props}
                title={"Lượng dùng"}
                className="text-white text-center align-middle width-10 "
            />
        ),
        id: "Lượng dùng",
        name:'luongDung',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.luongDung} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DonThuoc>
                tableProps={props}
                title={"Đường dùng"}
                className="text-white text-center align-middle width-10 "
            />
        ),
        id: "Đường dùng",
        name:'duongDung',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.duongDung} className="text-center " />
        ),
    },
    {
        Header: (props) => (
            <TableCustomHeader<DonThuoc>
                tableProps={props}
                title={"Hướng dẫn sử dụng"}
                className="text-white text-center align-middle width-10 "
            />
        ),
        id: "Hướng dẫn sử dụng",
        name:'huongDanSuDungThuoc',
        typeSorting: "text",
        sorting: true,
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.huongDanSuDungThuoc} className="" />
        ),
    },
    
]

export const vatTuColumn: ReadonlyArray<CustomColumn<any>> = [
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"STT"}
                className="text-center spaces W-40"
            />
        ),
        id: "stt",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.row?.index + 1} className="text-center" />
        ),
    },
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Mã vật tư"}
                className="text-center "
            />
        ),
        id: "maVatTu",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.maVatTu} className="" />
        ),
    },
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Tên vật tư"}
                className="text-white text-center align-middle min-w-250px "
            />
        ),
        id: "tenVatTu",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tenVatTu} className="" />
        ),
    },
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Đơn vị"}
                className="text-center"
            />
        ),
        id: "donVi",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.donVi} className="text-center" />
        ),
    },
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Số lượng"}
                className="text-center"
            />
        ),
        id: "soLuong",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.soLuong} className="text-center" />
        ),
    },
]

export const phieuVatTuColumn: ReadonlyArray<Column<any>> = [
    {
        Header: (props) => (<></>),
        id: "dv",
        Cell: ({ ...props }) => (
            <TableCustomCell
                tableProps={props}
                className='d-flex justify-content-between'
                data={
                    <div className='ms-2'>
                        <p className='my-1'>{props.data[props.row.index]?.date}</p>
                    </div>
                } />
        ),
    },
];

export const mauColumn: ReadonlyArray<CustomColumn<any>> = [
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"STT"}
                className="text-center spaces W-40"
            />
        ),
        id: "stt",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.row?.index + 1} className="text-center" />
        ),
    },
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Mã máu"}
                className="text-center "
            />
        ),
        id: "maMau",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.maMau} className="" />
        ),
    },
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Tên máu"}
                className="text-white text-center align-middle min-w-250px "
            />
        ),
        id: "tenMau",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.tenMau} className="" />
        ),
    },
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"Đơn vị"}
                className="text-center"
            />
        ),
        id: "donVi",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.donVi} className="text-center" />
        ),
    },
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"SL chỉ định"}
                className="text-center"
            />
        ),
        id: "slChiDinh",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.slChiDinh} className="text-center" />
        ),
    },
    {
        Header: (props : any) => (
            <TableCustomHeader<KetQuaDichVu>
                tableProps={props}
                title={"SL Phát"}
                className="text-center"
            />
        ),
        id: "slPhat",
        Cell: ({ ...props }) => (
            <TableCustomCell data={props?.data[props?.row?.index]?.slPhat} className="text-center" />
        ),
    },
]