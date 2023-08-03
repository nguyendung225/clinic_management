import moment from "moment";
import { KEY_DS_TAB_TIEP_NHAN } from "../../utils/Constant";
export const yeuCauKhamOptions = [
    {
        id: 'rehrstcgjh',
        code: "RHTR011",
        name: "Khám sức khỏe tổng thể",
        noiThucHien: "Phòng khám tổng thể",
        donGia: "100000",
    },
    {
        id: 'fhjrearherh',
        code: "KAWD011",
        name: "Khám răng",
        noiThucHien: "Phòng khám răng hàm mặt",
        donGia: "500000",
    },
    {
        id: 'hetjsrtdr',
        code: "AERH011",
        name: "Khám mắt",
        noiThucHien: "Phòng khám mắt Hà Nội",
        donGia: "300000",
    },
];

export const options = [
    { code: 'opt', name: 'Option 1' },
    { code: 'opt2', name: 'Option 2' },
    { code: 'opn3', name: 'Option 3' }
];

export const GIOI_TINH = [
    { id: 'MALE', name: 'Nam' },
    { id: 'Female', name: 'Nữ' },
    { id: 'Ect', name: 'Không xác định' }
];
export const QUOC_TICH = [
    { code: '0', name: 'Viêt Nam' },
    { code: '1', name: 'Lào' },
    { code: '2', name: 'Thái Lan' }
];

export const XA = [
    { code: 'dinh cong', name: 'Định công' },
    { code: 'binh phu', name: 'Bình phú' },
    { code: 'huu bang', name: 'Hữu bằng' }
];

export const HUYEN = [
    { code: 'thach that', name: 'Thạch Thất' },
    { code: 'quoc oai', name: 'Quốc Oai' },
    { code: 'hoang mai', name: 'Hoàng Mai' }
];

export const TINH = [
    { code: 'ha noi', name: 'Hà Nội' },
    { code: 'ho chi minh', name: 'Hồ Chí Minh' },
];

export const DOI_TUONG = {
    BHYT: 'fd1503ed-0759-4ae0-8c71-85fb93127c30',
    DICH_VU: 'DICH VU'
};

export const LOAI_DOI_TUONG = [
    { code: 0, name: 'BHYT' },
    { code: 1, name: 'Dịch vụ' },
    { code: 2, name: 'Miễn giảm' },
    { code: 3, name: 'khác' },
];

export const NGHE_NGHIEP = [
    { code: 'ky su', name: 'Kỹ sư' },
    { code: 'IT', name: 'Công nghệ thông tin' },
];

export const MOI_QUAN_HE = [
    { code: 'bo', name: 'Bố' },
    { code: 'me', name: 'Mẹ' },
    { code: 'anh', name: 'Anh' },
];

export const LOAI_BENH_NHAN = [
    { code: 'benh moi', name: 'Bệnh mới' },
    { code: 'benh cu', name: 'Bệnh cũ' },
];

export const THONGTINTUYEN = [
    { code: '1', name: 'Đúng tuyến' },
    { code: '2', name: 'Trái tuyến' },
    { code: '3', name: 'Thông tuyến' },
    { code: '4', name: 'Giới thiệu' }
];

export const danhSachMenu = [
    {
        id: "0",
        title: "Tiếp nhận",
        to: '/phan-he-tiep-nhan',
        children: [
            {
                id: "0",
                key: KEY_DS_TAB_TIEP_NHAN,
                title: "Tiếp nhận",
                to: '/phan-he-tiep-nhan',
                fontIcon: "bi-file-earmark-person"
            },
            {
                id: "1",
                key: KEY_DS_TAB_TIEP_NHAN,
                title: "DS hẹn khám",
                to: '/phan-he-tiep-nhan',
                fontIcon: "bi-list-ul"
            },
            {
                id: "2",
                key: KEY_DS_TAB_TIEP_NHAN,
                title: "DS tiếp nhận",
                to: '/phan-he-tiep-nhan',
                fontIcon: "bi-list-stars"
            },
            {
                id: "3",
                key: KEY_DS_TAB_TIEP_NHAN,
                title: "DS gọi lại",
                to: '/phan-he-tiep-nhan',
                fontIcon: "bi-telephone"
            }
        ]
    },
];
