import { createContext } from 'react'
import { INhanVien } from '../models/ModelNhanVien'

export type NhanVienContextType = {
    handleOpenDMNVDialog: (data: INhanVien) => void,
    handleOpenConfirmDeleteDialog: (data: INhanVien) => void
}
export const NhanVienContext = createContext<NhanVienContextType>({
    handleOpenDMNVDialog: (data: INhanVien) => { },
    handleOpenConfirmDeleteDialog: (data: INhanVien) => { },
})