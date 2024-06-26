import { FC } from "react";
import { TableCustom } from "../../component/table/table-custom/TableCustom";
import { benhNhan, danhSachChoKham } from "../models/datLichHenModels";
import { benhNhanData } from "../models/datLichHenModels";
import { fakeDataDsChoKham } from "../constants/fakeData";
import { ChoKhamColumns } from "../columns/ChoKhamColumns";
import TextField from "../../component/TextField";
import { useFormikContext } from "formik";

type IDSChoKham = {
  benhNhanData?: benhNhanData;
  updatePageData?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdate?: (row: any) => void;
  handlePay?: (row: any) => void;
  page?: number;
  rowsPerPage?: number;
  handleContextMenu?: (e: any, row: any) => void;
};

export const DanhSachChoKhamTable: FC<IDSChoKham> = (props) => {
  let { benhNhanData, updatePageData, handleContextMenu } =
    props;
  const { values, handleChange } = useFormikContext<benhNhan>();
  return (
    <>
      <div className="spaces w-30 bg-white">
        <div className="spaces w-100 h-100 ds-cho bg-white">
          <div className="d-flex bg-white border spaces p-4">
            <div className="spaces w-50">
              <div className="d-flex spaces w-100">
                <div className="text-info fs-4 spaces fw-bold">
                  Thông tin phòng khám
                </div>
              </div>
            </div>

            <div className="spaces w-50 d-flex pr-10">
              <div className="position-relative spaces w-100 ml-8">
                <TextField
                  name="soDienThoai"
                  labelClassName="min-w-40px"
                  className="ps-29px"
                  value={values?.soDienThoai}
                  placeholder={"Tìm kiếm"}
                />
                <i className="fa-solid fa-magnifying-glass position-absolute cursor-pointer search-icon"></i>
              </div>
            </div>
          </div>
          <div className="overflow-auto">
            <div className="border">
              <TableCustom<danhSachChoKham>
                hasToolbar={false}
                maxHeight={450}
                data={fakeDataDsChoKham || benhNhanData?.data}
                columns={ChoKhamColumns}
                handleSearchByPage={updatePageData}
                handleChangeValueInput={handleChange}
                verticalScroll={true}
                handleContextMenu={handleContextMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DanhSachChoKhamTable;
