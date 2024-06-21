import { Column } from "react-table";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { IBangCheckIn, IXML2, IXML3, IXML4, IXML5 } from "../../../models/XMLModel";

export const bangCheckInColumn: ReadonlyArray<Column<IBangCheckIn>> = [
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"mã thẻ"}
        className='text-center spaces W-200'
      />
    ),
    id: 'maThe',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maThe}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Giá trị"}
        className='text-center spaces W-400'
      />
    ),
    id: 'giaTri',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.giaTri}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"Lỗi"}
        className='text-center'
      />
    ),
    id: 'loi',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.loi}
      />
    ),
  },
]

export const XML2Column: ReadonlyArray<Column<IXML2>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_LK"}
        className='text-center min-w-60px'
      />
    ),
    id: 'maLk',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maLk}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"STT"}
        className='text-center'
      />
    ),
    id: 'stt',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        className="text-center"
        tableProps={props}
        data={props?.row?.index + 1}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ma_thuoc"}
        className='text-center'
      />
    ),
    id: 'maThuoc',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maThuoc}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ma_pp_chebien"}
        className='text-center'
      />
    ),
    id: 'maCheBien',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maCheBien}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ma_cskb_thuoc"}
        className='text-center'
      />
    ),
    id: 'maCskcbThuoc',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maCskcbThuoc}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ma_nhom"}
        className='text-center'
      />
    ),
    id: 'maNhom',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maNhom}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ten_Thuoc"}
        className='text-center'
      />
    ),
    id: 'tenThuoc',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenThuoc}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"don_vi_tinh"}
        className='text-center'
      />
    ),
    id: 'donViTinh',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.donViTinh}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ham_luong"}
        className='text-center'
      />
    ),
    id: 'hamLuong',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.hamLuong}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"duong_dung"}
        className='text-center'
      />
    ),
    id: 'duongDung',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.duongDung}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"dang_bao_che"}
        className='text-center'
      />
    ),
    id: 'dangBaoChe',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.dangBaoChe}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"lieu_dung"}
        className='text-center min-w-150px'
      />
    ),
    id: 'lieuDung',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.lieuDung}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"cach_dung"}
        className='text-center'
      />
    ),
    id: 'cachDung',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.cachDung}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"so_dang_ky"}
        className='text-center'
      />
    ),
    id: 'soDangKy',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.soDangKy}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"tt_thau"}
        className='text-center min-w-150px'
      />
    ),
    id: 'ttThau',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.ttThau}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"pham_vi"}
        className='text-center min-w-100px'
      />
    ),
    id: 'phamVi',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.phamVi}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"tyle_tt_bh"}
        className='text-center'
      />
    ),
    id: 'tyLeTTBH',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.tyLeTTBH}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"so_luong"}
        className='text-center'
      />
    ),
    id: 'soLuong',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.soLuong}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"don_gia"}
        className='text-center'
      />
    ),
    id: 'donGia',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.donGia}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"thanh_tien_bv"}
        className='text-center'
      />
    ),
    id: 'thanhTienBV',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.thanhTienBV}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"thanh_tien_bh"}
        className='text-center'
      />
    ),
    id: 'thanhTienBH',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.thanhTienBH}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"T_nguonkhac_nsnn"}
        className='text-center'
      />
    ),
    id: 'nguonKhacNSNN',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.nguonKhacNSNN}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"t_nguonkhac_vtnn"}
        className='text-center'
      />
    ),
    id: 'nguonKhacVTNN',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.nguonKhacVTNN}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"t_nguonkhac_vttn"}
        className='text-center'
      />
    ),
    id: 'nguonKhacVTTN',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.nguonKhacVTTN}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"t_nguonKhac_cl"}
        className='text-center'
      />
    ),
    id: 'nguonKhacCL',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.nguonKhacCL}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"t_nguonkhac"}
        className='text-center'
      />
    ),
    id: 'nguonKhac',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.nguonKhac}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"muc_huong"}
        className='text-center'
      />
    ),
    id: 'mucHuong',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.mucHuong}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"t_bntt"}
        className='text-center'
      />
    ),
    id: 'BNTT',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.BNTT}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"t_bncct"}
        className='text-center'
      />
    ),
    id: 'BNCCT',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.BNCCT}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"t_bhtt"}
        className='text-center'
      />
    ),
    id: 'bhtt',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.bhtt}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ma_khoa"}
        className='text-center'
      />
    ),
    id: 'maKhoa',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maKhoa}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ma_bac_si"}
        className='text-center'
      />
    ),
    id: 'maBacSi',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maBacSi}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ma_dich_vu"}
        className='text-center'
      />
    ),
    id: 'maDichVu',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maDichVu}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ngay_yl"}
        className='text-center'
      />
    ),
    id: 'ngayYLenh',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.ngayYLenh}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"ma_pttt"}
        className='text-center'
      />
    ),
    id: 'maPTTT',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maPTTT}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"nguon_ctra"}
        className='text-center'
      />
    ),
    id: 'nguonCTRA',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.nguonCTRA}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"vet_thuong_tp"}
        className='text-center'
      />
    ),
    id: 'vetThuong',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.vetThuong}
      />
    ),
  },
  {
    Header: (props: any) => (
      <TableCustomHeader
        tableProps={props}
        title={"du_phong"}
        className='text-center'
      />
    ),
    id: 'duPhong',
    Cell: ({ ...props }: any) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.duPhong}
      />
    ),
  },
]

export const XML3Column: ReadonlyArray<Column<IXML3>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_LK"}
        className='text-center min-w-60px'
      />
    ),
    id: 'maLk',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maLk}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"STT"}
        className='text-center'
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.index + 1}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"ma_dich_vu"}
        className='text-center'
      />
    ),
    id: 'maDichVu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maDichVu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"ma_pttt_qt"}
        className='text-center'
      />
    ),
    id: 'maPTTTQT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maPTTTQT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_VAT_TU"}
        className='text-center'
      />
    ),
    id: 'maVatTu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maVatTu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_NHOM"}
        className='text-center'
      />
    ),
    id: 'maNhom',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maNhom}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"GOI_VTYT"}
        className='text-center'
      />
    ),
    id: 'goiVTYT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.goiVTYT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"TEN_VAT_TU"}
        className='text-center'
      />
    ),
    id: 'tenVatTu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenVatTu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"TEN_DICH_VU"}
        className='text-center'
      />
    ),
    id: 'tenDichVu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenDichVu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_XANG_DAU"}
        className='text-center'
      />
    ),
    id: 'maXangDau',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maXangDau}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"DON_VI_TINH"}
        className='text-center'
      />
    ),
    id: 'donViTinh',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.donViTinh}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"PHAM_VI"}
        className='text-center'
      />
    ),
    id: 'phamVi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.phamVi}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"SO_LUONG"}
        className='text-center'
      />
    ),
    id: 'soLuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.soLuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"DON_GIA_BV"}
        className='text-center'
      />
    ),
    id: 'donGiaBV',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.donGiaBV}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"DON_GIA_BH"}
        className='text-center'
      />
    ),
    id: 'donGiaBH',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.donGiaBH}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"TT_THAU"}
        className='text-center'
      />
    ),
    id: 'ttThau',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.ttThau}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"TYLE_TT_DV"}
        className='text-center'
      />
    ),
    id: 'tyLeTTDV',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.tyLeTTDV}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"TY_LE_BH"}
        className='text-center'
      />
    ),
    id: 'tyLeBH',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.tyLeBH}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"THANH_TIEN_BV"}
        className='text-center'
      />
    ),
    id: 'thanhTienBV',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.thanhTienBV}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"THANH_TIEN_BH"}
        className='text-center'
      />
    ),
    id: 'thanhTienBH',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.thanhTienBH}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"T_TRANTT"}
        className='text-center'
      />
    ),
    id: 'tranTT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tranTT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MUC_HUONG"}
        className='text-center'
      />
    ),
    id: 'mucHuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center min-w-125px"
        data={props?.row?.original?.mucHuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"T_NGUOIKHAC_NSNN"}
        className='text-center'
      />
    ),
    id: 'nguoiKhacNSNN',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.nguoiKhacNSNN}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"T_NGUOIKHAC_VTNN"}
        className='text-center'
      />
    ),
    id: 'nguoiKhacVTNN',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.nguoiKhacVTNN}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"T_NGUOIKHAC_VTTN"}
        className='text-center'
      />
    ),
    id: 'nguoiKhacVTTN',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.nguoiKhacVTTN}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"T_NGUOI_KHAC_CL"}
        className='text-center'
      />
    ),
    id: 'nguoiKhacCL',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.nguoiKhacCL}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"T_BNTT"}
        className='text-center min-w-100px'
      />
    ),
    id: 'BNTT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.BNTT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"T_BNCCT"}
        className='text-center min-w-100px'
      />
    ),
    id: 'BNCCT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.BNCCT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"T_BHTT"}
        className='text-center min-w-100px'
      />
    ),
    id: 'BHTT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.BHTT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_KHOA"}
        className='text-center'
      />
    ),
    id: 'maKhoa',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maKhoa}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_GIUONG"}
        className='text-center'
      />
    ),
    id: 'maGiuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maGiuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_BAC_SI"}
        className='text-center'
      />
    ),
    id: 'maBacSi',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maBacSi}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"NGUOI_THUC_HIEN"}
        className='text-center min-w-150px'
      />
    ),
    id: 'nguoiThucHien',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.nguoiThucHien}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_BENH"}
        className='text-center'
      />
    ),
    id: 'maBenh',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maBenh}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_BENH_YHCT"}
        className='text-center'
      />
    ),
    id: 'maBenhYHCT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maBenhYHCT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"NGAY_YL"}
        className='text-center min-w-100px'
      />
    ),
    id: 'ngayYLenh',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.ngayYLenh}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"NGAY_TH_YL"}
        className='text-center min-w-100px'
      />
    ),
    id: 'ngayTHYL',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.ngayTHYL}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"NGAY_KQ"}
        className='text-center min-w-100px'
      />
    ),
    id: 'ngayKQ',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.ngayKQ}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_PTTT"}
        className='text-center'
      />
    ),
    id: 'maPTTT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maPTTT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"VET_THUONG_TP"}
        className='text-center'
      />
    ),
    id: 'vetThuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.vetThuong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"PP_VO_CAM"}
        className='text-center'
      />
    ),
    id: 'voCam',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.voCam}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"VI_TRI_TH_DVKT"}
        className='text-center min-w-150px'
      />
    ),
    id: 'viTriTHDVKT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.viTriTHDVKT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_MAY"}
        className='text-center'
      />
    ),
    id: 'maMay',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maMay}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_HIEU_SP"}
        className='text-center'
      />
    ),
    id: 'maHieuSP',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maHieuSP}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"TAI_SU_DUNG"}
        className='text-center'
      />
    ),
    id: 'taiSuDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.taiSuDung}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"du_phong"}
        className='text-center'
      />
    ),
    id: 'duPhong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.duPhong}
      />
    ),
  },
]

export const XML4Column: ReadonlyArray<Column<IXML4>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_LK"}
        className='text-center'
      />
    ),
    id: 'maLk',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maLk}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"STT"}
        className='text-center'
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.index + 1}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Ma_Dich_Vu"}
        className='text-center'
      />
    ),
    id: 'maDichVu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.maDichVu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Ma_Chi_So"}
        className='text-center'
      />
    ),
    id: 'maChiSo',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maChiSo}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Ten_Chi_So"}
        className='text-center'
      />
    ),
    id: 'tenChiSo',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenChiSo}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Gia_Tri"}
        className='text-center'
      />
    ),
    id: 'giaTri',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.giaTri}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Don_Vi_Do"}
        className='text-center'
      />
    ),
    id: 'donViDo',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.donViDo}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mo_Ta"}
        className='text-center'
      />
    ),
    id: 'moTa',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.moTa}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Ket_Luan"}
        className='text-center'
      />
    ),
    id: 'ketLuan',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.ketLuan}
      />
    ),
  },
];

export const XML5Column: ReadonlyArray<Column<IXML5>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"MA_LK"}
        className='text-center'
      />
    ),
    id: 'maLk',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maLk}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"STT"}
        className='text-center'
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.index + 1}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"DIEN_BIEN_LS"}
        className='text-center'
      />
    ),
    id: 'dienBienLS',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.dienBienLS}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"GIAI_DOAN_BENH"}
        className='text-center'
      />
    ),
    id: 'giaiDoanBenh',
    Cell: ({...props}) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.giaiDoanBenh}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"HOI_CHAN"}
        className='text-center'
      />
    ),  
    id: 'hoiChan',
    Cell: ({...props}) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.hoiChan}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"PHAU_THUAT"}
        className='text-center'
      />
    ),
    id: 'phauThuat',
    Cell: ({...props}) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.phauThuat}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"THOI_DIEM_DBLS"}
        className='text-center'
      />
    ),
    id: 'thoiDiemDBLS',
    Cell: ({...props}) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.thoiDiemDBLS}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"NGUOI_THUC_HIEN"}
        className='text-center'
      />
    ),
    id: 'nguoiThucHien',
    Cell: ({...props}) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.nguoiThucHien}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"DU_PHONG"}
        className='text-center'
      />
    ),
    id: 'duPhong',
    Cell: ({...props}) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.duPhong}
      />
    ),
  },
];