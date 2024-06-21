import { KEY_DS_TAB_PHAU_THUAT_THU_THUAT } from "../../utils/Constant";
import TraKetQuaPTTT from "../component/tra-ket-qua-pttt/TraKetQuaPTTT";
import DanhSachTiepNhanGayMe from "../component/danh-sach-gay-me/DanhSachGayMe";
import { DanhSachKhamTienMe } from "../component/danh-sach-kham-tien-me/DanhSachKhamTienMe";


export const danhSachMenu = [
  {
    id: "0",
    title: "Tiếp nhận",
    to: '/dasboard',
    children: [
      {
        id: "0",
        key: KEY_DS_TAB_PHAU_THUAT_THU_THUAT,
        title: "DS Tiếp nhận gây mê",
        to: '/phau-thuat-thu-thuat/',
        fontIcon: "bi-file-earmark-person"
      },
      {
        id: "1",
        key: KEY_DS_TAB_PHAU_THUAT_THU_THUAT,
        title: "DS Tiếp nhận PTTT",
        to: '/phau-thuat-thu-thuat',
        fontIcon: "bi-list-ul"
      },
    ]
  },
];

export const danhSachTabPTTT = [
  {
    eventKey: "0",
    title: "DS Tiếp nhận gây mê",
    component: <DanhSachTiepNhanGayMe />
  },
  {
    eventKey: "1",
    title: "DS Tiếp nhận PTTT",
    component: <TraKetQuaPTTT />
  },
  // {
  //   eventKey: "2",
  //   title: "DS khám tiền mê",
  //   component: <DanhSachKhamTienMe />
  // },
]

export const phongThucHien = [
  {
    id: "1",
    name: "Phòng Gây mê - Hồi sức cấp cứu số 1"
  }
]

export const phuMoData = [
  { name: "aaaaaaaa" },
  { name: "bbbbbbbb" },
  { name: "cccccccc" },
];

export const phuMeData = [
  { name: "dddddddd" },
  { name: "eeeeeeee" },
  { name: "ffffffff" },
];

export const loaiPTTT = [
  {
    value: "1",
    name: "Phẫu thuật loại I",
  },
  {
    value: "2",
    name: "Phẫu thuật loại II",
  },
  {
    value: "3",
    name: "Phẫu thuật loại III",
  },
  {
    value: "4",
    name: "Phẫu thuật loại đặc biệt",
  },
];

export const loaiPPVoCam = [
  { value: "1", name: "Gây mê mask" },
  { value: "2", name: "Gây mê mask thanh quản" },
  { value: "3", name: "Gây mê tĩnh mạch" },
  { value: "4", name: "Gây mê nội khí quản" },
  { value: "5", name: "Gây mê phối hợp" },
  { value: "6", name: "Gây tê ngoài da và niêm mạc" },
  { value: "7", name: "Gây tê tại chỗ, tê thấm lớp" },
  { value: "8", name: "Gây tê đám rối thần kinh" },
  { value: "9", name: "Gây tê tủy sống" },
  { value: "10", name: "Gây tê ngoài màng cứng" },
];

export const nhomMau = [
  { value: "AB", name: "AB" },
  { value: "A", name: "A" },
  { value: "B", name: "B" },
  { value: "O", name: "O" },
];

export const RH = [
  { value: "+", name: "+" },
  { value: "-", name: "-" },
];