import { FC, useContext, useState } from "react";
import { TablePagination } from "../../../component/table/components/TablePagination";
// import TableCollapseCustom from "../../../component/table-collapse-custom-v3/TableCollapseCustom";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { IBenhNhan, IPhongBenh } from "../../models/IPhongBenh";
import { PhanHeNoiTruContext } from "../../PhanHeNoiTruContext";
import { dsPhongBenhColumns } from "../../const/PhanHeNoitruConst";

interface Props {
  data: IPhongBenh[];
}

const GridDSPhongBenh: FC<Props> = (props) => {
  let { data } = props;
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const { setPatientByRoom, setServicesByPatient } = useContext(PhanHeNoiTruContext);

  const handleSelectData = (data: IBenhNhan) => {
    setPatientByRoom(data);
    setServicesByPatient(data?.dsDichVu || [])
  }

  return (
    <div className='phongbenh__dsbenhnhan p-2 form-border border-top-0 border-bottom-0 flex-1 d-flex flex-column justify-content-between'>
      {/* <TableCollapseCustom
          data={data}
          setData={() => {}}
          selectData={handleSelectData}
          nameParent="tenPhong"
          nameChildren="dsBenhNhan"
          selectionMode='single'
          columnNameList={dsPhongBenhColumns}
        /> */}
      <TablePagination
        className="border-0"
        page={page}
        setPage={setPage}
        handlePagesChange={handlePagesChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsForPage={rowsForPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={10}
        totalElements={100}
      />
    </div>
  );
};

export { GridDSPhongBenh };

