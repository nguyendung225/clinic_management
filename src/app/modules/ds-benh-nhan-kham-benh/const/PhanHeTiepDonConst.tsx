import { KEY_DS_TAB_TIEP_DON } from "../../utils/Constant";
import DsKhamTraiNgay from "../component/ds-kham-trai-ngay/DsKhamTraiNgay";
import { KetQuaCLS } from "../component/ket-qua-cls/KetQuaCLS";
import ThongTinKhamBenh from "../component/model-kham-benh/ThongTinKhamBenh";
import DSBenhNhanKhamBenh from "../component/tab-ds-benh-nhan/DSBenhNhanKhamBenh";

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
    {
        eventKey: "0",
        title: "DS Bệnh nhân",
        component: <DSBenhNhanKhamBenh />
    },
    {
        eventKey: "1",
        title: "DS khám trái ngày",
        component: <DsKhamTraiNgay />
    },
    {
        eventKey: "2",
        title: "Khám bệnh",
        component: <DSBenhNhanKhamBenh />
    },
    {
        eventKey: "3",
        title: "Xem kết quả CLS",
        component: <KetQuaCLS />
    },
    {
        eventKey: "4",
        title: "Thông tin khám bệnh",
        component: <ThongTinKhamBenh />
    }
]

export const trangThaiKhamOptions = [
  { value: '', name: 'Chọn trạng thái' },
  { value: 2, name: 'Đang khám' },
  { value: 1, name: 'Chờ khám' }
];