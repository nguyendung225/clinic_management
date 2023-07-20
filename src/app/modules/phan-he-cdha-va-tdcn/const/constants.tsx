import { KEY_DS_TAB_CDHA_TDCN } from "../../utils/Constant";
import { TiepNhan } from "../components/TiepNhan";

export const danhsachTabCDHAVaTDCN = [
  {
    eventKey: "0",
    title: "Tiếp nhận",
    component: <TiepNhan/>,
  },
];

export const danhSachMenuCDHAVaTDCN = [
  {
    id: "0",
    title: "Tiếp nhận",
    to: "/cdha-tdcn",
    children: [
      {
        id: "0",
        key: KEY_DS_TAB_CDHA_TDCN,
        title: "Tiếp nhận",
        to: "/cdha-tdcn",
        fontIcon: "bi-file-earmark-person",
      },
    ],
  },
];