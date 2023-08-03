export interface BangXetNghiemModel {
    maDV: string;
    tenDV: string;
    giaDV: number,
}

export interface iDichVuDaChiDinh {
    id?: number | string;
    conceptAnswerName: string;
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
}

export interface ChiDinhDVContextProps {
    dataMap: any,
    dataDichVu: any;
    DVDaChiDinh: iDichVuDaChiDinh[];
    dataXetNghiem: iBangDichVu[];
    dataCDHA: iBangDichVu[];
    dataTDCN: iBangDichVu[];
    dataPT: iBangDichVu[];
    dataTT: iBangDichVu[];
    setDataMap: (dataMap: any) => void,
    setDataDichVu: (dataDichVu: any) => void;
    setDVDaChiDinh: (DVDaChiDinh: iDichVuDaChiDinh[]) => void;
    setDataXetNghiem: (dataXetNghiem: iBangDichVu[]) => void;
    setDataCDHA: (dataCDHA: iBangDichVu[]) => void;
    setDataTDCN: (dataTDCN: iBangDichVu[]) => void;
    setDataPT: (dataPT: iBangDichVu[]) => void;
    setDataTT: (dataTT: iBangDichVu[]) => void;
}

export interface iDichVu {
    id?: number | string;
    conceptAnswerName: string;
    conceptId?: number | string | undefined;
    hasServiceGroup?: boolean | null | undefined;
    insurancePrice?: number | string
    parentId?: number | string;
    serviceCode?: string;
    servicePrice?: string;
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
}