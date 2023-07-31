import { createContext } from 'react';
import { IBenhNhan } from './models/DSBenhNhanKhamBenhModels';

type ContextType = {
  benhNhanInfo: IBenhNhan | undefined
  setBenhNhanInfo: React.Dispatch<React.SetStateAction<IBenhNhan | undefined>>;
  benhNhanList: IBenhNhan[];
  setBenhNhanList: React.Dispatch<React.SetStateAction<IBenhNhan[]>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  totalElements: number;
  setTotalElements: React.Dispatch<React.SetStateAction<number>>;
}

const initValue: ContextType = {
  benhNhanInfo: undefined,
  setBenhNhanInfo: () => {},
  benhNhanList: [],
  setBenhNhanList: () => {},
  totalPages: 1,
  setTotalPages: () => {},
  totalElements: 1,
  setTotalElements: () => {}
}

export const PhanHeTiepDonContext = createContext<ContextType>(initValue)