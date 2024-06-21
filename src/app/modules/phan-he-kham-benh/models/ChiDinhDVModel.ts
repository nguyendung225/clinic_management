import { ChangeEvent } from "react";

export interface BangXetNghiemModel {
    maDV: string;
    tenDV: string;
    giaDV: number,
}

// export interface iDichVuChiDinh {
//     id?: number | string;
//     conceptAnswerName: string;
//     conceptId?: number | string | undefined;
//     conceptCode: string;
//     parentId?: number | string;
//     departmentName: string;
//     departmentId?: number | string | undefined;
//     orderTypeId?: number | string | undefined;
//     price: number;
//     quantity: number | string | undefined;
//     roomId?: number | string;
//     roomName?: string;
//     loaiMBP?: string | undefined;
//     hasServiceGroup?: boolean | null | undefined;
//     insurancePrice?: number | string
//     parentCode?: string;
//     serviceCode?: string;
//     servicePrice?: string;
//     isChecked?: boolean | undefined;
//     parent?: iGroupDichVu;
// }
export interface iDichVuChiDinh {
    id?: number | string;
    conceptAnswerName?: string;
    conceptId?: number | string | undefined;
    conceptCode: string;
    parentId?: number | string;
    departmentName: string;
    departmentId?: number | string | undefined;
    orderTypeId?: number | string | undefined;
    price: number;
    quantity: number | string | undefined;
    roomId?: number | string;
    roomName?: string;
    loaiMBP?: string | undefined;
    hasServiceGroup?: boolean | null | undefined;
    insurancePrice?: number | string
    parentCode?: string;
    serviceCode?: string;
    servicePrice?: string;
    isChecked?: boolean | undefined;
    parent?: iGroupDichVu;
    concept?: any;
    conceptName: string;
    promotionPercent?: string | number;
    promotionPrice?: string | number;
    totalPrice?: number | string;
    statusId?: string | number;
}

export interface ChiDinhDVContextProps {
    dataMap: any,
    benhNhan: any,
    dataDichVu: iDichVuChiDinh[];
    DVDaChiDinh: iDichVuChiDinh[];
    dataXetNghiem: iBangDichVu[];
    dataCDHA: iBangDichVu[];
    dataTDCN: iBangDichVu[];
    dataPT: iBangDichVu[];
    dataTT: iBangDichVu[];
    setDataMap: (dataMap: any) => void,
    setBenhNhan: (benhNhan: any) => void,
    setDataDichVu: (dataDichVu: iDichVuChiDinh[]) => void;
    setDVDaChiDinh: (DVDaChiDinh: iDichVuChiDinh[]) => void;
    setDataXetNghiem: (dataXetNghiem: iBangDichVu[]) => void;
    setDataCDHA: (dataCDHA: iBangDichVu[]) => void;
    setDataTDCN: (dataTDCN: iBangDichVu[]) => void;
    setDataPT: (dataPT: iBangDichVu[]) => void;
    setDataTT: (dataTT: iBangDichVu[]) => void;
}

export interface iDichVu {
    id?: number | string | undefined;
    conceptAnswerName: string;
    conceptId?: number | string | undefined;
    hasServiceGroup?: boolean | null | undefined;
    insurancePrice?: number | string
    parentId?: number | string;
    parentCode?: string;
    serviceCode?: string;
    servicePrice?: string;
    isChecked?: boolean | undefined;
    parent?: iGroupDichVu;
}

export interface iBangDichVu {
    id?: number | string;
    name: string;
    services?: iDichVu[];
}

export interface iDSTabDichVu {
    id: number | string | undefined,
    eventKey: string,
    title: string,
    parentCode: string,
    data: iBangDichVu[],
    setData: (data: iBangDichVu[]) => void;
}

export interface iGroupDichVu {
    id?: number | string | undefined;
    code: string;
    name: string;
    hasGroupService?: boolean | undefined;
}

export interface iDSDVChiDinhProps {
    data?: any;
    benhNhanInfo?: any;
    active?: boolean;
    columns: any;
    handleSum: (data: any) => string | number | undefined;
    updateData?: () => void;
}