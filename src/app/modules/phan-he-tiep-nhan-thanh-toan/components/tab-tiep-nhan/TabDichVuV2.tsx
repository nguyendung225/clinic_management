import { FormikErrors, FormikTouched } from "formik";
import { FC } from "react";
import {
  ObjectSelectAutocomplete,
  bangKhamBenh,
  benhNhan,
} from "../../models/PhanHeTiepNhanModel";
import DanhSachKhambenhTable from "../../modal-danh-sach-hen-kham/DanhSachKhambenhTable";

export type TabDichVu = {
  values?: benhNhan;
  handleChangeSelect?: (
    selectedObject: ObjectSelectAutocomplete,
    name: string,
    setFieldValue: (field: string, value: any) => void
  ) => void;
  errors?: FormikErrors<benhNhan>;
  touched?: FormikTouched<benhNhan>;
  handleAddDSDichVu?: (dichVu: any) => void;
  handleDeleteDichVu?: (data: string) => void;
  setFieldValue?: (field: string, value: any) => void;
  DSDichVu?: bangKhamBenh[];
};

const TabDichVuV2: FC<TabDichVu> = (props) => {
  let {
    values,
    handleChangeSelect,
    errors,
    touched,
    handleDeleteDichVu,
    handleAddDSDichVu,
    setFieldValue,
    DSDichVu,
  } = props;
  
  return (
    <div className="h-100">
      <div className="tableKhamBenh border">
        <DanhSachKhambenhTable data={DSDichVu} handleDelete={handleDeleteDichVu} />
      </div>
    </div>
  );
};

export default TabDichVuV2;
