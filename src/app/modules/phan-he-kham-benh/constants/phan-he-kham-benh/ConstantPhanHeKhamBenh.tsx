import { KEY_DS_TAB_TIEP_DON } from "../../../utils/Constant";
import TabBenhAnDienTu from "../../tabs/tab-benh-an-dien-tu/TabBenhAnDienTu";
import { BenhNhan } from "../../tabs/tab-benh-nhan/BenhNhan";
import TabCdhaTdcn from "../../tabs/tab-cdha-tdcn/TabCdhaTdcn";
import TabChuyenKhoa from "../../tabs/tab-chuyen-khoa/TabChuyenKhoa";
import TabCongKham from "../../tabs/tab-cong-kham/TabCongKham";
import TabKhamBenh from "../../tabs/tab-kham-benh/TabKhamBenh";
import TabTaiLieu from "../../tabs/tab-tai-lieu/TabTaiLieu";
import TabThuoc from "../../tabs/tab-thuoc/TabThuoc";
import TabXetNghiem from "../../tabs/tab-xet-nghiem/TabXetNghiem";
import TabXuTri from "../../tabs/tab-xu-tri/TabXuTri";

export const danhSachMenu = [
    {
        id: "0",
        title: "DS gọi khám",
        to: '/ds-tiep-don',
        children: [
            {
                id: "0",
                key: KEY_DS_TAB_TIEP_DON,
                title: "DS bệnh nhân",
                to: '/ds-tiep-don',
                fontIcon: "bi-file-earmark-person"
            },
            {
                id: "1",
                key: KEY_DS_TAB_TIEP_DON,
                title: "DS khám trái ngày",
                to: '/ds-tiep-don',
                fontIcon: "bi-list-ul"
            },
        ]
    },
    // {
    //     title: "Báo cáo",
    //     to: '/ds-tiep-don',
    // }
];

export const danhSachTabTiepDon = [
    // {
    //     eventKey: "0",
    //     title: "Bệnh nhân",
    //     component: <BenhNhan />
    // },
    {
        eventKey: "1",
        title: "Khám bệnh, hỏi bệnh",
        // component: <ThongTinKhamBenh />
        component: <TabKhamBenh />
    },
    {
        eventKey: "8",
        title: "Công khám",
        component: <TabCongKham />
    },
    {
        eventKey: "2",
        title: "Xét nghiệm",
        component: <TabXetNghiem />
    },
    {
        eventKey: "3",
        title: "CDHA-TDCN",
        component: <TabCdhaTdcn />
    },
    {
        eventKey: "10",
        title: "Chuyên khoa",
        component: <TabChuyenKhoa />
    },
    {
        eventKey: "4",
        title: "Thuốc",
        // component: <ChiDinhThuocModal />
        component: <TabThuoc />
    },
    {
        eventKey: "7",
        title: "Xử trí",
        component: <TabXuTri />
    },
    {
        eventKey: "9",
        title: "Tài liệu",
        component: <TabTaiLieu />
    },

]

export const danhSachTabCDHA = [
    {
        eventKey: "7",
        title: "Bệnh nhân",
        component: <BenhNhan />
    },
    {
        eventKey: "0",
        title: "Khám bệnh",
        component: <TabKhamBenh />
    },
    {
        eventKey: "9",
        title: "Công khám",
        component: <TabCongKham />
    },
    {
        eventKey: "3",
        title: "Xét nghiệm",
        component: <TabXetNghiem />
    },
    {
        eventKey: "4",
        title: "CDHA-TDCN",
        component: <TabCdhaTdcn />
    },
    {
        eventKey: "11",
        title: "Chuyên khoa",
        // component: <ChiDinhThuocModal />
        component: <TabThuoc />
    },
    {
        eventKey: "1",
        title: "Thuốc",
        // component: <ChiDinhThuocModal />
        component: <TabThuoc />
    },
    {
        eventKey: "8",
        title: "Chẩn đoán",
        component: <TabXuTri />
    },
    {
        eventKey: "10",
        title: "Tài liệu",
        component: <TabTaiLieu />
    },
    {
        eventKey: "12",
        title: "BA điện tử",
        component: <TabBenhAnDienTu />
    },

]

export const dsTabMauChiDinh = [
  {
    eventKey: "0",
    title: "Danh sách dịch vụ",
    component: <TabCongKham />,
  },
  {
    eventKey: "1",
    title: "Phiếu chỉ định",
    component: <TabTaiLieu />,
  },
];


export const trangThaiKhamOptions = [
  { value: '', name: 'Chọn trạng thái' },
  { value: 2, name: 'Đang khám' },
  { value: 1, name: 'Chờ khám' }
];

export const KEY_TAB_DS_TIEP_DON = {
    BENH_NHAN: "0",
    PHIEU_KHAM_BENH: "1",
    THUOC: "4",
    // CHI_DINH_DVKT: "2",
    XET_NGHIEM: "2",
    CDHA_TDCN: "3",
    BENH_AN: "5",
    TNTT: "6",
    XU_TRI: "7",
    CONG_KHAM: "8",
    TAI_LIEU: "9",
    PHIEU_KHAC: "11",
    BA_DIEN_TU: "10",
}

export const KEY_TAB_DS_MAU_CHI_DINH = {
    DANH_SACH_DICH_VU: "0",
    PHIEU_CHI_DINH: "1",
}
export const KEY_TAB_BA_DIEN_TU = {
    LOAI_TAI_LIEU: "0",
    TRANG_THAI: "1",
  };
export const CHON_KHO_THUOC = [
    {
        code: "1",
        name: "Chọn kho thuốc",
    },
    {
        code: "2",
        name: "Nhà thuốc",
    },
    {
        code: "1",
        name: "Kho thuốc nội trú BHYT",
    },]
export const CHON_VAT_TU = [
    {
        code: "1",
        name: "Chọn vật tư",
    },
    {
        code: "2",
        name: "Kho vật tư nội trú",
    },
    {
        code: "1",
        name: "Kho vật tư ngoại tổng hợp",
    },]

export const ThongTinKhamBenhTree = {
    filter: [
        {
            name: "Thông tin bệnh nhân",
            code: "thongTinBenhNhan",
            filter: [],
        },
        {
            name: "Thông tin khám bệnh",
            code: "thongTinKhamBenh",
            filter: [
                {
                    name: "Khám bệnh, hỏi bệnh",
                    code: "khamBenhHoiBenh",
                    filter: [],
                },
                {
                    name: "Tài liệu",
                    code: "taiLieu",
                    filter: [],
                },
                {
                    name: "Khám sức khỏe lái xe",
                    code: "kskLaiXe",
                    filter: [],
                },
                {
                    name: "Chẩn đoán - Xử trí",
                    code: "chanDoanXuTri",
                    filter: [],
                },
                {
                    name: "Thông tin tai nạn thương tích",
                    code: "thongTinTaiNanThuongTich",
                    filter: [],
                },
                {
                    name: "Sổ khám thai",
                    code: "soKhamThai",
                    filter: [],
                },
                {
                    name: "Sổ đặt vòng",
                    code: "soDatVong",
                    filter: [],
                },
                {
                    name: "Biên bản hội chẩn",
                    code: "bienBanHoiChan",
                    filter: [],
                },
                {
                    name: "Giấy nghỉ ốm",
                    code: "giayNghiOm",
                    filter: [],
                },
                {
                    name: "Phiếu chuyển tuyến",
                    code: "phieuChuyenTuyen",
                    filter: [],
                },
                {
                    name: "Phiếu cam kết sử dụng dịch vụ yêu cầu",
                    code: "phieuCamKetSuDungDichVuYeuCau",
                    filter: [],
                },
                {
                    name: "Phiếu truyền nhiễm",
                    code: "phieuTruyenNhiem",
                    filter: [],
                },
                {
                    name: "Phiếu chẩn đoán tử vong",
                    code: "phieuChanDoanTuVong",
                    filter: [],
                },
                {
                    name: "Giấy báo tử",
                    code: "giayBaoTu",
                    filter: [],
                },
                {
                    name: "Tổng kết bệnh án",
                    code: "tongKetBenhAn",
                    filter: [],
                },
            ],
        },
        {
            name: "Phiếu khám bệnh",
            code: "pkb",
            quantity: 1,
            filter: [],
        },
    ],
};
