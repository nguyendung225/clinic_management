import {DS_NOI_TRU_PHONG_BENH, DS_NOI_TRU_TIEP_DON } from "../../utils/Constant";
import DSTiepDon from "../components/tiep-don/DSTiepDon";

export const fakeData = [
    { 
        maBA: "BA0000065",
        maBN: "BN202300006",
        vaoKhoa: "24/06/2023 10:34:25",
        tenBN: "Nguyễn Văn A",
        maBHYT: "DA9329349939",
        gioiTinh: "Nam",
        tuoi: "46",
        trangThai: "Chờ nhập khoa",
    }
];

export const danhSachMenu = [
    {
        id: "0",
        title: "Tiếp đón",
        to: '/2123',
        children: [
            {
                id: "0",
                key: DS_NOI_TRU_TIEP_DON,
                title: "DS tiếp đón",
                to: '/reception-list',
                fontIcon: "bi-file-earmark-person"
            }, 
        ]
    },
    {
        id: "1",
        title: "Phòng bệnh",
        to: '/123',
        children: [
            {
                id: "0",
                key: DS_NOI_TRU_PHONG_BENH,
                title: "Quản lý phòng bệnh  ",
                to: '/reception-list',
                fontIcon: "bi-file-earmark-person"
            }, 
            {
                id: "1",
                key: DS_NOI_TRU_PHONG_BENH,
                title: "Quản lý giường bệnh",
                to: '/reception-list',
                fontIcon: "bi-file-earmark-person"
            }, 
        ]
    },
    {
        id: "2",
        title: "Dược",
        to: '/123',
        children: [
            {
                id: "0",
                key: DS_NOI_TRU_TIEP_DON,
                title: "DS tiếp đón",
                to: '/reception-list',
                fontIcon: "bi-file-earmark-person"
            }, 
        ]
    },
    {
        id: "0",
        title: "Tiếp đón",
        to: '/dasboard',
    },
];

export const danhSachTabTiepDon = [
    {
        eventKey: "0",
        title: "DS tiếp đón",
        component: <DSTiepDon />
    },
]