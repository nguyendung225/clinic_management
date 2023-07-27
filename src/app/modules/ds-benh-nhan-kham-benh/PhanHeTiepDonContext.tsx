import { createContext } from 'react';
import { BenhNhanKhamBenhInfo } from './models/DSBenhNhanKhamBenhModels';

type ContextType = {
  benhNhanInfo: BenhNhanKhamBenhInfo
  setBenhNhanInfo: React.Dispatch<React.SetStateAction<BenhNhanKhamBenhInfo>>;
  benhNhanList: BenhNhanKhamBenhInfo[];
  setBenhNhanList: React.Dispatch<React.SetStateAction<BenhNhanKhamBenhInfo[]>>;
}

const initValue: ContextType = {
  benhNhanInfo: {},
  setBenhNhanInfo: () => {},
  benhNhanList: [],
  setBenhNhanList: () => {}
}

export const PhanHeTiepDonContext = createContext<ContextType>(initValue)