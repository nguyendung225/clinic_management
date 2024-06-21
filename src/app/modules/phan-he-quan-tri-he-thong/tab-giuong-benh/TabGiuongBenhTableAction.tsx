import { useContext } from 'react';
import { IGiuongBenh } from '../models/ModelGiuongBenh';
import { GiuongBenhContext } from '../contexts/TabGiuongBenhContext';
import CustomIconButton from '../../component/custom-icon-button/CustomIconButton';
type Props = {
    data: IGiuongBenh
}
export const DanhMucGiuongBenhTableAction = ({ data }: Props) => {
    const { handleOpenDMGBDialog, handleOpenConfirmDeleteDialog } = useContext(GiuongBenhContext);
    return (
            <>
              <CustomIconButton
                variant="edit"
                onClick={() => handleOpenDMGBDialog(data)}
              >
                <i className="bi bi-pencil-square text-navy"></i>
              </CustomIconButton>

              <CustomIconButton
                variant="delete"
                onClick={() => handleOpenConfirmDeleteDialog(data)}
              >
                <i className="bi bi-trash3-fill text-danger"></i>
              </CustomIconButton>
            </>
    );
};
