import { createContext } from "react"
import { CSKhamChuaBenh } from "../models/ModelSoKhamChuaBenh"

export interface DanhMucCSKCBContextType {
  handleEdit: (data: CSKhamChuaBenh) => void
  handleOpenConfirmDialog: (data: CSKhamChuaBenh) => void
}

export const DanhMucCSKCBContext = createContext<DanhMucCSKCBContextType>({
  handleEdit: (data: CSKhamChuaBenh) => {},
  handleOpenConfirmDialog: (data: CSKhamChuaBenh) => {}
})