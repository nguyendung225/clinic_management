import { useContext } from "react";
import { NhanVienContext } from "../contexts/TabNhanVienContext";
import { INhanVien } from "../models/ModelNhanVien";
import CustomIconButton from "../../component/custom-icon-button/CustomIconButton";
type Props = {
  data: INhanVien;
};
export const DanhMucNhanVienTableAction = ({ data }: Props) => {
  const { handleOpenDMNVDialog, handleOpenConfirmDeleteDialog } =
    useContext(NhanVienContext);
  return (
    <>
      <CustomIconButton
        variant="edit"
        onClick={() => handleOpenDMNVDialog(data)}
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
