import { createContext } from 'react'
import { IGiuongBenh } from '../models/ModelGiuongBenh'

export type GiuongBenhContextType = {
    handleOpenDMGBDialog: (data: IGiuongBenh) => void,
    handleOpenConfirmDeleteDialog: (data: IGiuongBenh) => void
}
export const GiuongBenhContext = createContext<GiuongBenhContextType>({
    handleOpenDMGBDialog: (data: IGiuongBenh) => { },
    handleOpenConfirmDeleteDialog: (data: IGiuongBenh) => { },
})