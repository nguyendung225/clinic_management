import React, { FC, createContext, useState } from "react";
import { WithChildren } from "../../../../../_metronic/helpers";

export interface objectId {
  id: string;
  caseId: string;
}

export interface ThanhToanContextProps {
  dataDvDaChon: any[];
  setDataDvDaChon: (dataDvDaChon: any[]) => void;
  reRender: boolean;
  setReRender: (reRender: boolean) => void;
  dataBN: any;
  setDataBN: (dataBN: any) => void;
  dataThanhToan: {};
  setDataThanhToan: (dataThanhToan: {}) => void;
  voucherType: number | undefined;
  setVoucherType: (voucvoucherType: number | undefined) => void | undefined;
  inforBenhNhan: objectId;
  setInforBenhNhan: (inforBenhNhan: objectId) => void;
  updateDanhSachBenhNhan: boolean;
  setUpdateDanhSachBenhNhan: (updateDanhSachBenhNhan: boolean) => void;
  clearData: boolean;
  setClearData: (clearData: boolean) => void;
}

const initThanhToanContextPropsState = {
  dataDvDaChon: [],
  setDataDvDaChon: () => {},
  inforBenhNhan: { id: "", caseId: "" },
  setInforBenhNhan: () => {},
  reRender: false,
  setReRender: () => {},
  dataBN: {},
  setDataBN: () => {},
  dataThanhToan: {},
  setDataThanhToan: () => {},
  voucherType: 0,
  setVoucherType: () => {},
  updateDanhSachBenhNhan: false,
  setUpdateDanhSachBenhNhan: () => {},
  clearData: false,
  setClearData: () => {},
};

export const ThanhToanContext = createContext<ThanhToanContextProps>(
  initThanhToanContextPropsState
);

const ContextThanhToanProvider: FC<WithChildren> = ({ children }) => {
  const [dataDvDaChon, setDataDvDaChon] = useState<any[]>([]);
  const [reRender, setReRender] = useState<boolean>(false);
  const [clearData, setClearData] = useState<boolean>(false);
  const [dataBN, setDataBN] = useState<object>({});
  const [dataThanhToan, setDataThanhToan] = useState<object>({});
  const [voucherType, setVoucherType] = useState<number | undefined>(0);
  const [inforBenhNhan, setInforBenhNhan] = useState<
    objectId
  >({ id: "", caseId: "" });
  const [updateDanhSachBenhNhan, setUpdateDanhSachBenhNhan] =
    useState<boolean>(false);
  return (
    <ThanhToanContext.Provider
      value={{
        dataDvDaChon,
        setDataDvDaChon,
        inforBenhNhan,
        setInforBenhNhan,
        reRender,
        setReRender,
        dataBN,
        setDataBN,
        dataThanhToan,
        setDataThanhToan,
        voucherType,
        setVoucherType,
        updateDanhSachBenhNhan,
        setUpdateDanhSachBenhNhan,
        clearData,
        setClearData,
      }}
    >
      {children}
    </ThanhToanContext.Provider>
  );
};

export default ContextThanhToanProvider;
