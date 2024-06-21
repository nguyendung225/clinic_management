import moment from "moment";
import { FC, useEffect, useState } from "react";
import { KEY_TAB_KHAM_BENH } from "../../../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import { BenhNhan, bangLichSuKham } from "../../models/BenhNhanModel";
import { LichSuKhamColumn } from "./LichSuKhamColumn";
import { TablePagination } from "../../../component/table/components/TablePagination";
import { handlePagesChange, handleRowsPerPageChange, rowsForPage } from "../../../utils/PageUtils";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

export type lichSu = {
  values: BenhNhan;
  activeKey: string;
};

const fakeData: bangLichSuKham[] = [
  {
    lan: "1",
    bacSi: "Nguyễn Thị Hằng",
    ngayVao: moment().format("DD/MM/YYYY"),
    ngayRa: moment().format("DD/MM/YYYY"),
    ngaySinh: moment().format("DD/MM/YYYY"),
    hinhThuc: 1,
    bhyt: "HS 4 01 98555390",
    khoa: "Hồi sức cấp cứu",
    phong: " 11",
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    lan: "1",
    bacSi: "Trần Văn Nam",
    ngayVao: moment().format("DD/MM/YYYY"),
    ngayRa: moment().format("DD/MM/YYYY"),
    ngaySinh: moment().format("DD/MM/YYYY"),
    hinhThuc: 1,
    bhyt: "HS 4 01 98555390",
    khoa: "Y học cổ truyền",
    phong: "12",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    lan: "2",
    bacSi: "Lê Thị Hoa",
    ngayVao: moment().format("DD/MM/YYYY"),
    ngayRa: moment().format("DD/MM/YYYY"),
    ngaySinh: moment().format("DD/MM/YYYY"),
    hinhThuc: 2,
    bhyt: "HS 4 01 98555390",
    khoa: "X-quang",
    phong: "13",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    lan: "2",
    bacSi: "Phạm Văn Bình",
    ngayVao: moment().format("DD/MM/YYYY"),
    ngayRa: moment().format("DD/MM/YYYY"),
    ngaySinh: moment().format("DD/MM/YYYY"),
    hinhThuc: 1,
    bhyt: "HS 4 01 98555390",
    khoa: "Siêu âm",
    phong: "14",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    lan: "2",
    bacSi: "Nguyễn Văn An",
    ngayVao: moment().format("DD/MM/YYYY"),
    ngayRa: moment().format("DD/MM/YYYY"),
    ngaySinh: moment().format("DD/MM/YYYY"),
    hinhThuc: 2,
    bhyt: "HS 4 01 98555390",
    khoa: "Cấp cứu",
    phong: "15",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    lan: "2",
    bacSi: "Lê Thị Lan",
    ngayVao: moment().format("DD/MM/YYYY"),
    ngayRa: moment().format("DD/MM/YYYY"),
    ngaySinh: moment().format("DD/MM/YYYY"),
    hinhThuc: 1,
    bhyt: "HS 4 01 98555390",
    khoa: "Tai mũi họng",
    phong: "16",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    lan: "2",
    bacSi: "Phan Văn Đức",
    ngayVao: moment().format("DD/MM/YYYY"),
    ngayRa: moment().format("DD/MM/YYYY"),
    ngaySinh: moment().format("DD/MM/YYYY"),
    hinhThuc: 2,
    bhyt: "HS 4 01 98555390",
    khoa: "Chấn thương chỉnh hình",
    phong: "17",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    lan: "2",
    bacSi: "Hoàng Thị Mai",
    ngayVao: moment().format("DD/MM/YYYY"),
    ngayRa: moment().format("DD/MM/YYYY"),
    ngaySinh: moment().format("DD/MM/YYYY"),
    hinhThuc: 2,
    bhyt: "HS 4 01 98555390",
    khoa: "Nhi",
    phong: "18",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    lan: "2",
    bacSi: "Trần Văn Tèo",
    ngayVao: moment().format("DD/MM/YYYY"),
    ngayRa: moment().format("DD/MM/YYYY"),
    ngaySinh: moment().format("DD/MM/YYYY"),
    hinhThuc: 1,
    bhyt: "HS 4 01 98555390",
    khoa: "Nội tiết",
    phong: "19",
  },
  {
    xuTri: "Ăn ít mỡ",
    chuanDoan: "Tiểu đường, mỡ máu",
    lan: "2",
    bacSi: "Nguyễn Văn Tùng",
    ngayVao: moment().format("DD/MM/YYYY"),
    ngayRa: moment().format("DD/MM/YYYY"),
    ngaySinh: moment().format("DD/MM/YYYY"),
    hinhThuc: 1,
    bhyt: "HS 4 01 98555390",
    khoa: "Sản",
    phong: "20",
  },
];

const LichSuKham: FC<lichSu> = (props) => {
  let { values, activeKey } = props;
  const [DSLichSu, setDSLichSu] = useState<bangLichSuKham[]>([]);
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  useEffect(() => {
    if (values?.id && KEY_TAB_KHAM_BENH.LICH_SU === activeKey) {
      getListLichSu(values?.id);
    }
  }, [activeKey]);

  const getListLichSu = async (patientId: string) => {};
  return (
    <div className="mt-4">
      <TableCustom<bangLichSuKham>
        className="h-table-lich-su-kham"
        verticalScroll
        columns={LichSuKhamColumn}
        data={fakeData || DSLichSu}
      />
      <TablePagination
        handlePagesChange={handlePagesChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPage={rowsPerPage}
        rowsForPage={rowsForPage}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        totalPages={10}
        totalElements={20}
      />
    </div>
  );
};

export default LichSuKham;
