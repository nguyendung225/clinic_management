import { KEY_DS_TAB_XET_NGHIEM } from "../../utils/Constant";
import { TiepNhan } from "../components/TiepNhan";

export const danhsachTabXetNghiem = [
  {
    eventKey: "0",
    title: "Tiếp nhận",
    component: <TiepNhan />,
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
