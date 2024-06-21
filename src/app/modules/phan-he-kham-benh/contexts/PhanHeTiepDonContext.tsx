import { createContext } from 'react';
import { IBenhNhan, iBangKhamBenh } from '../models/DSBenhNhanKhamBenhModels';

type ContextType = {
  benhNhanInfo: IBenhNhan | undefined
  setBenhNhanInfo: React.Dispatch<React.SetStateAction<IBenhNhan | undefined>>;
  thongTinKhamBenh?: any
  setThongTinKhamBenh?: React.Dispatch<React.SetStateAction<any>>;
  benhNhanList?: iBangKhamBenh[];
  setBenhNhanList?: React.Dispatch<React.SetStateAction<iBangKhamBenh[]>>;
}

const initValue: ContextType = {
  benhNhanInfo: undefined,
  setBenhNhanInfo: () => {},
  thongTinKhamBenh: undefined,
  setThongTinKhamBenh: () => {},
  benhNhanList: [],
  setBenhNhanList: () => {},
}

export const PhanHeTiepDonContext = createContext<ContextType>(initValue)