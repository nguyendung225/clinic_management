import React, { FC, createContext, useState } from "react";
import { ChiDinhDVContextProps, iBangDichVu, iDichVuDaChiDinh } from "../../../models/ChiDinhDVModel";
import { WithChildren } from "../../../../../../_metronic/helpers";

const initChiDinhDVContextPropsState = {
    dataMap: {},
    dataDichVu: [],
    DVDaChiDinh: [],
    dataXetNghiem: [],
    dataCDHA: [],
    dataTDCN: [],
    dataPT: [],
    dataTT: [],
    setDataMap: () => { },
    setDataDichVu: () => { },
    setDVDaChiDinh: () => { },
    setDataXetNghiem: () => { },
    setDataCDHA: () => { },
    setDataTDCN: () => { },
    setDataPT: () => { },
    setDataTT: () => { },
}

export const ChiDinhDVContext = createContext<ChiDinhDVContextProps>(initChiDinhDVContextPropsState)

const ContextChiDinhDVProvider: FC<WithChildren> = ({ children }) => {
    const [dataMap, setDataMap] = useState<any>({})
    const [dataDichVu, setDataDichVu] = useState<any[]>([])
    const [DVDaChiDinh, setDVDaChiDinh] = useState<iDichVuDaChiDinh[]>([])
    const [dataXetNghiem, setDataXetNghiem] = useState<iBangDichVu[]>([])
    const [dataCDHA, setDataCDHA] = useState<iBangDichVu[]>([])
    const [dataTDCN, setDataTDCN] = useState<iBangDichVu[]>([])
    const [dataPT, setDataPT] = useState<iBangDichVu[]>([])
    const [dataTT, setDataTT] = useState<iBangDichVu[]>([])

    return (
        <ChiDinhDVContext.Provider
            value={{
                dataMap, setDataMap,
                dataDichVu, setDataDichVu,
                DVDaChiDinh, setDVDaChiDinh,
                dataXetNghiem, setDataXetNghiem,
                dataCDHA, setDataCDHA,
                dataTDCN, setDataTDCN,
                dataPT, setDataPT,
                dataTT, setDataTT,
            }}
        >
            {children}
        </ChiDinhDVContext.Provider>
    );
}

export default ContextChiDinhDVProvider;