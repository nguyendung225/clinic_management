import { Column } from "react-table";
import { KEY_DS_TAB_XET_NGHIEM } from "../../utils/Constant";
import LayMauBenhPham from "../tab-lay-mau-benh-pham/LayMauBenhPham";
import { ILichSuModel } from "../models/DanhSachBenhNhanModels";
import { formatTrangThaiBenhNhan } from "../../utils/FormatUtils";
import moment from "moment";
import TabXetNghiem from "../tab-xet-nghiem/TabXetNgiem";
import { templatePhieuHenTraKQ } from "../components/tab-lay-mau-benh-pham/phieu-hen-tra-ket-qua/TemplatePhieuHenTraKQ";
import { templatePhieuChiDinh } from "../components/tab-lay-mau-benh-pham/phieu-chi-dinh/TemplatePhieuChiDinh";
import { IContextMenu } from "../../phan-he-tiep-nhan-thanh-toan/models/ModelTabDSDangKy";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import ThuocTab from "../components/tab-xet-nghiem/menu-xet-nghiem/quan-ly-thuoc-va-vat-tu/ThuocTab";
import VatTuTab from "../components/tab-xet-nghiem/menu-xet-nghiem/quan-ly-thuoc-va-vat-tu/VatTuTab";
import { IconCabinet, IconHome } from "../../component/IconSvg";

export interface IDanhSachPhong {
  soPhong: number;
  tenPhong: string;
}

export const danhsachTabXetNghiem = [
  {
    eventKey: "0",
    title: "Lấy mẫu bệnh phẩm",
    component: <LayMauBenhPham />,
  },
  {
    eventKey: "1",
    title: "Xét nghiệm",
    component: <TabXetNghiem />,
  },
];

export const danhSachMenuXetNghiem = [
  {
    id: "0",
    title: "Xét nghiệm",
    to: "/test",
    children: [
      {
        id: "0",
        key: KEY_DS_TAB_XET_NGHIEM,
        title: "Tiếp nhận",
        to: "/test",
        fontIcon: "bi-file-earmark-person",
      },
    ],
  },
];

export const STATUS_DA_THANH_TOAN = "Đã thanh toán";

export const GIOI_TINH = [
  {
    value: "FEMALE",
    name: "Nữ",
  },
  {
    value: "MALE",
    name: "Nam",
  },
];

export const boLocXetNghiem = [
  { value: 0, name: "Chờ thực hiện" },
  { value: 1, name: "Đang thực hiện" },
  { value: 2, name: "Đã tiếp nhận BP" },
  { value: 3, name: "Từ chối BP" },
  { value: 4, name: "Đã trả kết quả" },
];


export const dsMayCLS = [
  {
    tentb: "Máy CSL1",
    matb: "CLS00001",
    khoaSuDung: "Khoa CDHA",
    model: "2011V6",
    serial: "SN20001"

  },
  {
    tentb: "Máy CSL2",
    matb: "CLS00002",
    khoaSuDung: "Khoa CDHA",
    model: "2011V68",
    serial: "SN20002"

  }
]

export const columnsLichSuKham: ReadonlyArray<Column<ILichSuModel>> = [
  {
    Header: (props) => (
      <TableCustomHeader<ILichSuModel>
        tableProps={props}
        title={"TT"}
        className=" text-center text-light min-w-30px  p-2 border-x"
      />
    ),
    id: "TT",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center spaces py-4"
        // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
        data={formatTrangThaiBenhNhan(props?.data[props?.row?.index]?.trangThaiXetNghiem)}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ILichSuModel>
        tableProps={props}
        title={"Bắt đầu"}
        className=" text-center text-light min-w-150px  p-2 border-x"
      />
    ),
    id: "Bắt đầu",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center  spaces py-4 h-100"
        // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
        data={(moment(props?.data[props?.row?.index]?.batDau).format("hh:ss DD/MM/YYYY"))}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ILichSuModel>
        tableProps={props}
        title={"Khoa"}
        className=" text-center text-light min-w-150px  p-2 border-x"
      />
    ),
    id: "Khoa",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center  spaces py-4 h-100"
        // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
        data={props?.data[props?.row?.index]?.khoa}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ILichSuModel>
        tableProps={props}
        title={"Phòng"}
        className=" text-center text-light min-w-150px  p-2 border-x"
      />
    ),
    id: "Phòng",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center  spaces py-4 h-100"
        // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
        data={props?.data[props?.row?.index]?.phong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ILichSuModel>
        tableProps={props}
        title={"Kết thúc"}
        className=" text-center text-light min-w-150px  p-2 border-x"
      />
    ),
    id: "Kết thúc",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center  spaces py-4 h-100"
        // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
        data={(moment(props?.data[props?.row?.index]?.ketThuc).format("hh:ss DD/MM/YYYY"))}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ILichSuModel>
        tableProps={props}
        title={"Xử trí"}
        className=" text-center text-light min-w-150px  p-2 border-x"
      />
    ),
    id: "Xử trí",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center  spaces py-4 h-100"
        // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
        data={props?.data[props?.row?.index]?.xuTri}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<ILichSuModel>
        tableProps={props}
        title={"Đích"}
        className=" text-center text-light min-w-150px  p-2 border-x"
      />
    ),
    id: "Đích",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center  spaces py-4 h-100"
        // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
        data={props?.data[props?.row?.index]?.dich}
      />
    ),
  },
];

export const dataPhongThucHien = [
  {
    soPhong: 0,
    tenPhong: "[XNNT] - Xét nghiệm nước tiểu, Trạng thái: Đang chờ, Số phiếu: 407"
  },
  {
    soPhong: 1,
    tenPhong: "[XNHH] - Xét nghiệm huyết học, Trạng thái: Đang chờ, Số phiếu: 405"
  }
]

export const columnsDsPhong: ReadonlyArray<Column<IDanhSachPhong>> = [
  {
    Header: (props) => (
      <TableCustomHeader<IDanhSachPhong>
        tableProps={props}
        title={"Số phòng"}
        className=" text-center text-light min-w-150px  p-2 border-x"
      />
    ),
    id: "Số phòng",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center  spaces py-4 h-100"
        // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
        data={props?.data[props?.row?.index]?.soPhong}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader<IDanhSachPhong>
        tableProps={props}
        title={"Tên phòng"}
        className=" text-center text-light min-w-150px  p-2 border-x"
      />
    ),
    id: "Tên phòng",
    Cell: ({ ...props }) => (
      <TableCustomCell
        className="text-center  spaces py-4 h-100"
        // data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
        data={props?.data[props?.row?.index]?.tenPhong}
      />
    ),
  },
];

export const LIST_PHIEU_IN = {
  PHIEU_HEN_TRA_KQ:
  {
    key: "phieuhentraketqua",
    title: "Phiếu hẹn trả kết quả",
    template: templatePhieuHenTraKQ
  },
  PHIEU_CHI_DINH: {
    key: "phieuchidinh",
    title: "Phiếu chỉ định",
    template: templatePhieuChiDinh
  },
}
export const contextMenuDichVu: IContextMenu[] = [
  {
    title: "Xét nghiệm",
  },
  {
    code: "CDV",
    name: "Chuyển dịch vụ sang phòng thực hiện khác"
  },
  {
    code: "BS",
    name: "Bổ sung kết quả theo số lượng chỉ định"
  },
  {
    code: "DVK",
    name: "Dịch vụ khác"
  },
]

export const CODE_DV_MENU = {
  CHUYEM_DV: "CDV",
  BO_SUNG_KQ: "BS",
  DV_KHAC: "DVK",
}
export const CODE_XN_MENU = {
  MAY_CLS: "MAY_CLS",
  SUA_SL: "SUA_SL",
  QUAN_LY_DV:"QUAN_LY_DV",
  QUAN_LY_THUOC_VT:"QUAN_LY_THUOC_VT",
  CHI_DINH_THUOC_DK:"CHI_DINH_THUOC_DK"
}
export const CODE_DSBP_LAY_MAU = {
  BARCODE_MOI: "0",
  LICH_SU_KHAM: "1",

}
export const contextMenuDV: IContextMenu[] = [
  {
    code: "0",
    name: "Trả kết quả",
  },
  {
    code: "1",
    name: "Hủy trả kết quả",
  },
  {
    code: "2",
    name: "Chạy lại xét nghiệm",
  },
  {
    code: "2",
    name: "Không thực hiện",
  },
  {
    code: "SUA_SL",
    name: "Sửa số lượng",
  },
  {
    code: "MAY_CLS",
    name: "Máy thực hiện cận lâm sàng",
  },
  {
    code: "SG",
    name: "In kết quả đang chọn"
  },
  {
    code: "BDV",
    name: "In các kết quả trong nhóm"
  },
  {
    code: "XDV",
    name: "In các kết quả theo loại dịch vụ"
  },
  {
    code: "xl",
    name: "Lịch sử cập nhật kết quả"
  },
  {
    code: "xl",
    name: "Cập nhật lại danh mục"
  },
  {
    code: "xl",
    name: "Làm lại xét nghiệm",
    children: [
      {
        code: "kocan",
        name: "(Không phải làm lại)"
      },
      {
        code: "lan1",
        name: "Lần 1"
      },
      {
        code: "lan2",
        name: "Lần 2"
      },
      {
        code: "lan3",
        name: "Lần 3"
      },
      {
        code: "lan4",
        name: "Lần 4"
      },
      {
        code: "lan5",
        name: "Lần 5"
      },

    ]

  },
  {
    code: "xl",
    name: "Dịch vụ đi kèm",
    children: [
      {
        code: "QUAN_LY_DV",
        name: "Quản lý dịch vụ"
      },
      {
        code: "1",
        name: "Chỉ đinh dịch vụ"
      },
    ]
  },
  {
    code: "xl",
    name: "Thuốc,vật tư đi kèm",
    children: [
      {
        code: "QUAN_LY_THUOC_VT",
        name: "Quản lý thuốc, Vật tư"
      },
      {
        code: "CHI_DINH_THUOC_DK",
        name: "Chỉ định thuốc"
      },
      {
        code: "0",
        name: "Chỉ định vật tư"
      },
      {
        code: "0",
        name: "Hoàn trả thuốc"
      },
      {
        code: "0",
        name: "Hoàn trả vật tư"
      },
    ]
  },
  {
    code: "xl",
    name: "Thuốc,vật tư hao phí",
    children: [
      {
        code: "0",
        name: "Quản lý thuốc, Vật tư"
      },
      {
        code: "CHI_DINH_THUOC",
        name: "Chỉ định thuốc"
      },
      {
        code: "0",
        name: "Chỉ định vật tư"
      },
      {
        code: "0",
        name: "Hoàn trả thuốc"
      },
      {
        code: "0",
        name: "Hoàn trả vật tư"
      },
    ]
  },
  {
    code: "xl",
    name: "Chức năng khác"
  },
]

export const QL_THUOC_VT_TAB = [
    {
        eventKey: "0",
        title: "Thuốc",
        component: <ThuocTab />,
    },
    {
        eventKey: "1",
        title: "Vật tư",
        component: <VatTuTab />,
    },
];

export const TreeChiDinhThuoc = {
    code:"all",
    name:"Tất cả thuốc",
    icon:<IconHome/>,
    filter: [
      {
        code: "thuoc",
        name: "Thuốc",
        icon:<IconCabinet/>,
        filter: [
            { code: "1", name: "Thuốc viên" },
            { code: "2", name: "Thuốc ống" },
            { code: "3", name: "Dịch truyền" },
            { code: "4", name: "Thuốc kháng sinh viên" },
            { code: "5", name: "Thuốc đông y" },
            { code: "6", name: "Thuốc sirô" },
            { code: "7", name: "Thuốc hỗn dịch" },
            { code: "8", name: "Thuốc dùng ngoài" },
            { code: "9", name: "Thuốc bột" },
            { code: "10", name: "Thuốc gây nghiện" },
            { code: "11", name: "Thuốc hướng tâm thần" },
            { code: "12", name: "Nhóm corticoid" },
          ],
      },
    ],
};