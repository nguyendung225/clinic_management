import React, { FC, useContext, useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import TabXetNghiem from "./TabXetNghiem";
import { CODE } from "../../../const/ChiDinhDVConst";
import { searchByPage } from "../../../service/ChiDinhDVService";
import { toast } from "react-toastify";
import { AppContext } from "../../../../appContext/AppContext";
import { RESPONSE_STATUS_CODE } from "../../../../auth/core/_consts";
import { PhanHeTiepDonContext } from "../../../PhanHeTiepDonContext";
import { iDSTabDichVu, iGroupDichVu } from "../../../models/ChiDinhDVModel";
import { ChiDinhDVContext } from "./ContextChiDinhDV";


const XetNghiem: FC = () => {
    const { benhNhanInfo } = useContext(PhanHeTiepDonContext);
    const [activeTab, setActiveTab] = useState<string>("0");
    const [concept, setConcept] = useState<iGroupDichVu>()
    const [item, setItem] = useState<iDSTabDichVu>()
    const { setIsLoading } = useContext(AppContext)
    let {
        dataMap,
        setDataDichVu,
        dataXetNghiem,
        dataCDHA,
        dataTDCN,
        dataPT,
        dataTT,
        setDataXetNghiem,
        setDataCDHA,
        setDataTDCN,
        setDataPT,
        setDataTT
    } = useContext(ChiDinhDVContext);

    const handleTabSelect: (eventKey: string | null) => void = (eventKey) => {
        if (eventKey) {
            setActiveTab(eventKey);
        }
    };

    const searchData = async () => {
        listTab.forEach(async (item: any) => {
            try {
                await callAPi(item)
            } catch (error) {
                setIsLoading(false);
                toast.error("Lỗi gọi API")
            }
        })
    }

    const callAPi = async (item: any) => {
        let searchObject = {
            pageIndex: 1,
            pageSize: 100,
            parentCode: item?.parentCode,
            conceptId: concept ? concept?.id : '',
        }
        setIsLoading(true);
        let { data } = await searchByPage(searchObject)

        if (RESPONSE_STATUS_CODE.SUCCESS === data.code) {
            setIsLoading(false);
            item.setData(data.data);
        } else {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if (concept !== undefined) {
            callAPi(item)
        }

    }, [concept])

    useEffect(() => {
        if (benhNhanInfo && !handleCheckLengthData()) {
            searchData();
        }
    }, [benhNhanInfo])

    const handleCheckLengthData = () => {
        let arrData = [dataXetNghiem, dataCDHA, dataTDCN, dataPT, dataTT];
        return arrData.some(item => item.length > 0);
    }

    const selectData = (listData: any, keyValue: string) => {
        let arr: any = []
        listData.forEach((data: any) => {
            data.parentCode = keyValue
            data.quantity = data.quantity ? data.quantity : 1
        });
        dataMap[keyValue] = listData;

        for (const index in dataMap) {
            if (dataMap.hasOwnProperty(index)) {
                const item = dataMap[index];
                arr.push(...item)
            }
        }
        setDataDichVu(arr)
    }

    const listTab = [
        {
            id: 166,
            eventKey: "0",
            title: "Xét nghiệm",
            parentCode: CODE.XET_NGHIEM,
            data: dataXetNghiem,
            setData: setDataXetNghiem,
        },
        {
            id: 8154,
            eventKey: "1",
            title: "CDHA",
            parentCode: CODE.CDHA,
            data: dataCDHA,
            setData: setDataCDHA,
        },
        {
            id: 4506,
            eventKey: "2",
            title: "TDCN",
            parentCode: CODE.TDCN,
            data: dataTDCN,
            setData: setDataTDCN,
        },
        {
            id: 4629,
            eventKey: "3",
            title: "Phẫu thuật",
            parentCode: CODE.PT,
            data: dataPT,
            setData: setDataPT,
        },
        {
            id: 1264,
            eventKey: "4",
            title: "Thủ thuật",
            parentCode: CODE.TT,
            data: dataTT,
            setData: setDataTT,
        },
    ]

    const handleChangeSelect = (option: iGroupDichVu, item: iDSTabDichVu) => {
        setConcept(option)
        setItem(item)
    }

    return (
        <div>
            <div >
                <Tabs className="customs-tabs tabXetNghiem" fill justify activeKey={activeTab} onSelect={handleTabSelect}>
                    {listTab.map((item: iDSTabDichVu) => {
                        return (
                            <Tab eventKey={item?.eventKey} title={item?.title}>
                                <TabXetNghiem
                                    item={item}
                                    selectData={(arr: any[]) => selectData(arr, item.parentCode)}
                                    handleChangeSelect={handleChangeSelect}
                                />
                            </Tab>
                        )
                    })}
                </Tabs>
            </div>
        </div>
    )
};


export default XetNghiem;
