import { Dispatch, FC, SetStateAction } from "react";
import { TableCustomCell } from "../table/components/TableCustomCell";
import { TableCustomHeader } from "../table/components/TableCustomHeader";
import { CustomColumn } from "../table/table-custom/tableCustomeModel";
import { trangThaiHenKham } from "../../phan-he-dat-lich-hen/constants/constDatLichHen";
import { TimKiemBenhNhanModel } from "./ModelsTimKiemBenhNhan";
import { TableCustom } from "../table/table-custom/TableCustom";

type DSTiepNhan = {
  getSelectedRowsData: Dispatch<SetStateAction<any>>;
  handleSearchByPage: () => void;
  handleChangeValueInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setShouldOpenFilterSearch: React.Dispatch<React.SetStateAction<boolean>>;
  shouldOpenFilterSearch: boolean;
  benhNhanData: any;
  rowsPerPage: number;
  page: number;
};

const TimKiemBenhNhanTable: FC<DSTiepNhan> = (props) => {
  let {
    getSelectedRowsData,
    handleSearchByPage,
    handleChangeValueInput,
    setShouldOpenFilterSearch,
    shouldOpenFilterSearch,
    benhNhanData,
    rowsPerPage,
    page,
  } = props;
  const formatTrangThai = (trangThai: number | undefined) => {
    switch (trangThai) {
      case 1:
        return (
          <div className="min-w-100px text-start">
            <i className="bi bi-circle-fill pe-2 text-success"></i>&nbsp;
            <span>{trangThaiHenKham.choXacNhan.name}</span>
          </div>
        );
      case 2:
        return (
          <div className="min-w-100px text-start">
            <i className="bi bi-circle-fill pe-2 text-yellow"></i>&nbsp;
            <span>{trangThaiHenKham.daXacNhan.name}</span>
          </div>
        );
      case 3:
        return (
          <div className="min-w-100px text-start">
            <i className="bi bi-circle-fill pe-2 text-pink"></i>&nbsp;
            <span>{trangThaiHenKham.daTiepNhan.name}</span>
          </div>
        );
      case 4:
        return (
          <div className="min-w-100px text-start">
            <i className="bi bi-circle-fill pe-2 text-primary"></i>&nbsp;
            <span>{trangThaiHenKham.chuaToi.name}</span>
          </div>
        );
      case 5:
        return (
          <div className="min-w-100px text-start">
            <i className="bi bi-circle-fill pe-2 text-danger"></i>&nbsp;
            <span>{trangThaiHenKham.khHuy.name}</span>
          </div>
        );
      case 6:
        return (
          <div className="min-w-100px text-start">
            <i className="bi bi-circle-fill pe-2 text-dark"></i>&nbsp;
            <span>{trangThaiHenKham.heThongHuy.name}</span>
          </div>
        );

      default:
        break;
    }
  };
  const TimKiemBenhNhanColumns: ReadonlyArray<
    CustomColumn<TimKiemBenhNhanModel>
  > = [
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"STT"}
          className="text-center text-white align-middle min-w-50px "
        />
      ),
      typeSorting: "text",
      sorting: false,
      id: "Số thứ tự",
      name: "stt",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
          className="text-center "
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"Mã BN"}
          className=" text-start min-w-175px"
        />
      ),
      id: "Mã BN",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className=" text-start text-uppercase"
          data={props?.data[props?.row?.index]?.maBN || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"Họ tên"}
          className=" text-start min-w-175px"
        />
      ),
      id: "Họ tên",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className=" text-align-left text-uppercase"
          data={props?.data[props?.row?.index]?.hoTen || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"Ngày sinh"}
          className=" text-center text-white align-middle min-w-100px"
        />
      ),
      id: "ngaySinh",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.data[props?.row?.index]?.ngaySinh || ""}
          className=" text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<TimKiemBenhNhanModel>
          tableProps={props}
          title={"Giới tính"}
          className=" text-center text-white align-middle min-w-100px"
        />
      ),
      id: "Giới tính",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.data[props?.row?.index]?.gioiTinh || ""}
          className=" text-center"
        />
      ),
    },
      {
        Header: (props) => (
          <TableCustomHeader<TimKiemBenhNhanModel>
            tableProps={props}
            title={"Địa chỉ"}
            className=" text-center min-w-150px"
          />
        ),
        id: "Địa chỉ",
        Cell: ({ ...props }) => (
          <TableCustomCell
            className=" text-center"
            data={
              <div>
                {props?.data[props?.row?.index]?.diaChi}
              </div>
            }
          />
        ),
      },
      {
        Header: (props) => (
          <TableCustomHeader<TimKiemBenhNhanModel>
            tableProps={props}
            title={"Nghề nghiệp"}
            className=" text-center min-w-150px"
          />
        ),
        id: "ngheNgiep",
        Cell: ({ ...props }) => (
          <TableCustomCell
            className=" text-center"
            data={
              <div>
                {props?.data[props?.row?.index]?.ngheNghiep}
              </div>
            }
          />
        ),
      },
  ];

  return (
    <TableCustom<TimKiemBenhNhanModel>
      columns={TimKiemBenhNhanColumns}
      data={benhNhanData || benhNhanData?.data}
      getSelectedRowsData={getSelectedRowsData}
      handleSearchByPage={handleSearchByPage}
      handleChangeValueInput={handleChangeValueInput}
      setShouldOpenFilterSearch={setShouldOpenFilterSearch}
      shouldOpenFilterSearch={shouldOpenFilterSearch}
      selectionMode="single"
      minHeight={400}
    />
  );
};

export default TimKiemBenhNhanTable;
