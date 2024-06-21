import DanhSachThuoc from "../components/tab-kho-le-danh-muc/danh-muc-thuoc/DanhSachThuoc";
import DSVatTuHoaChat from "../components/tab-kho-le-danh-muc/danh-muc-vat-tu-hoa-chat/DSVatTuHoaChat";
import Mau from "../components/tab-kho-le-danh-muc/danh-muc-mau/Mau";
import DSNhaCungCap from "../components/tab-kho-le-danh-muc/danh-muc-nha-cung-cap/DSNhaCungCap";
import { INhaCungCap } from "../models/NhaCungCapModel";

export const KEY_TAB_DS_DANH_MUC = {
    DM_NCC: "0",
    DM_VAT_TU_HOA_CHAT: "1",
    DM_THUOC: "2",
    DM_MAU: "3",
}

export const DS_TAB_DANH_MUC = [
  {
    eventKey: KEY_TAB_DS_DANH_MUC.DM_NCC,
    title: "DS nhà cung cấp",
    component: <DSNhaCungCap />,
  },
  {
    eventKey: KEY_TAB_DS_DANH_MUC.DM_VAT_TU_HOA_CHAT,
    title: "DS vật tư hóa chất",
    component: <DSVatTuHoaChat eventKey={KEY_TAB_DS_DANH_MUC.DM_VAT_TU_HOA_CHAT} />,
  },
  {
    eventKey: KEY_TAB_DS_DANH_MUC.DM_THUOC,
    title: "DS thuốc",
    component: <DanhSachThuoc eventKey={KEY_TAB_DS_DANH_MUC.DM_THUOC} />,
  },
  {
    eventKey: KEY_TAB_DS_DANH_MUC.DM_MAU,
    title: "DS máu",
    component: <Mau eventKey={KEY_TAB_DS_DANH_MUC.DM_MAU} />,
  },
];

export const INITIAL_NCC: INhaCungCap = {
    code: "",
    name: "",
    address: "",
    province: null,
    phone: "",
    taxCode: "",
    unit: null,
    note: "",
}

export enum TYPE_MESSAGE {
    ADD = "add",
    UPDATE = "update",
}
