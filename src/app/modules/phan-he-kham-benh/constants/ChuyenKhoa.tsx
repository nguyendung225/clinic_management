import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";

export const DichVuColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên Dịch Vụ"}
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
        title={"SL"}
        className='text-center'
      />
    ),
    id: 'sl',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.sl}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Loại PTTT"}
        className='text-center'
      />
    ),
    id: 'loaiPTTT',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.loaiPTTT}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Ghi Chú (Chỉ định)"}
        className='text-center'
      />
    ),
    id: 'ghiChu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.ghiChu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Bắt Đầu"}
        className='text-center'
      />
    ),
    id: 'batDau',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.batDau}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Kết Thúc"}
        className='text-center'
      />
    ),
    id: 'ketThuc',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.ketThuc}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Kết Luận"}
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
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đối Tượng"}
        className='text-center'
      />
    ),
    id: 'doiTuong',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.doiTuong}
      />
    ),
  },
];

export const dataDichVu = [
  {
    tenDichVu: "Khám mắt",
    items: [
      {
        tenDichVu: "Khám mắt trái",
        sl: "1",
        loaiPTTT: "",
        ghiChu: "Không",
        batDau: "08:09 14/1/2024",
        ketThuc: "08:20 14/1/2024",
        ketLuan: "Không sao",
        doiTuong: "Dịch vụ"
      }
    ]
  }
]

export const CODE_LIST_CHUYEN_KHOA = {
  CHUYEN_PHONG_THUC_HIEN: "CPTH",
  THANH_TOAN: "TT",
  BO_DICH_VU_KHONG_LAM: "BDVKL",
  CHI_DINH_PTTT_DI_KEM: "CDPTTTDK",
  QUAN_LY_THUOC_VAT_TU_DI_KEM: "QLTVTDK",
  QUAN_LY_THUOC_VAT_TU_HAO_PHI: "QLTVTHP",
  SUA_NGAY_TRA_KET_QUA: "SNTKQ",
  SUA_GHI_CHU: "SGCCD",
  SUA_CHAN_DOAN_BENH: "SCDB",
  THAY_THE_DICH_VU_PTTT_KHAC: "TTDVPTTTK",
  QUY_TRINH_CHUYEN_MON: "QTCM"
}

export const listContextDichVu: IContextMenu[] = [
  {
    title: "Dịch vụ"
  },
  {
    code: "CPTH",
    name: "Chuyển phòng thực hiện",
  },
  {
    code: "TT",
    name: "Thanh toán",
  },
  {
    code: "BDVKL",
    name: "Bỏ dịch vụ không làm",
  },
  {
    title: "Dịch vụ PTTT"
  },
  {
    code: "CDPTTTDK",
    name: "Chỉ định PTTT đi kèm"
  },
  {
    code: "QLTVTDK",
    name: "Quản lý thuốc, vật tư đi kèm (Thanh toán riêng)"
  },
  {
    code: "QLTVTHP",
    name: "Quản lý thuốc, vật tư hao phí"
  },
  {
    title: "Công cụ"
  },
  {
    code: "SNTKQ",
    name: "Sửa ngày trả kết quả"
  },
  {
    code: "SGCCD",
    name: "Sửa ghi chú (Chỉ định)"
  },
  {
    code: "SCDB",
    name: "Sửa chẩn đoán bệnh"
  },
  {
   title: "Thay thế dịch vụ"
  },
  {
    code: "TTDVPTTTK",
    name: "Thay thế dịch vụ PTTT khác"
  },
  {
    title: "Quy trình chuyện môn kỹ thuật"
  },
  {
    code: "QTCM",
    name: "Quy trình chuyên môn"
  }
]