import React from 'react';
import { Column } from 'react-table';
import { TableCustomHeader } from '../../../component/table-custom/columns/TableCustomHeader';
import { TableCustomCell } from '../../../component/table-custom/columns/TableCustomCell';
import { TiepDonBenhNhanInfo } from '../../models/TiepDonModels';

const DsTiepDonBenhNhanColumn: ReadonlyArray<Column<TiepDonBenhNhanInfo>> = [
  {
      Header: (props) => (
          <TableCustomHeader<TiepDonBenhNhanInfo>
              tableProps={props}
              title={"STT"}
              className="text-center text-light min-w-20px "
          />
      ),
      id: "INDEX",
      Cell: ({ ...props }) => <TableCustomCell data={(props.row.index + 1).toString()} />,
  },
  {
      Header: (props) => (
          <TableCustomHeader<TiepDonBenhNhanInfo>
              tableProps={props}
              title={"Mã BA"}
              className="text-center text-light min-w-40px "
          />
      ),
      id: "SOKHAM",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].maBA} />,
  },
  {
      Header: (props) => (
          <TableCustomHeader<TiepDonBenhNhanInfo>
              tableProps={props}
              title={"Mã BN"}
              className="text-center text-light min-w-125px "
          />
      ),
      id: "HOTEN",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].maBN} />,
  },
  {
      Header: (props) => (
          <TableCustomHeader<TiepDonBenhNhanInfo>
              tableProps={props}
              title={"Vào khoa"}
              className="text-center text-light min-w-50px "
          />
      ),
      id: "GIOITINH",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].vaoKhoa} />,
  },
  {
      Header: (props) => (
          <TableCustomHeader<TiepDonBenhNhanInfo>
              tableProps={props}
              title={"Tên BN"}
              className="text-center text-light min-w-30px "
          />
      ),
      id: "TUOI",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].tenBN} />,
  },
  {
      Header: (props) => (
          <TableCustomHeader<TiepDonBenhNhanInfo>
              tableProps={props}
              title={"Mã BHYT"}
              className="text-center text-light min-w-50px "
          />
      ),
      id: "MABENHNHAN",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].maBHYT} />,
  },
  {
      Header: (props) => (
          <TableCustomHeader<TiepDonBenhNhanInfo>
              tableProps={props}
              title={"Giới tính"}
              className="text-center text-light min-w-50px "
          />
      ),
      id: "MABENHAN",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].gioiTinh} />,
  },
  {
      Header: (props) => (
          <TableCustomHeader<TiepDonBenhNhanInfo>
              tableProps={props}
              title={"Tuổi"}
              className="text-center text-light min-w-30px "
          />
      ),
      id: "SOBHYT",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].tuoi} />,
  },
  {
      Header: (props) => (
          <TableCustomHeader<TiepDonBenhNhanInfo>
              tableProps={props}
              title={"Trạng thái"}
              className="text-center text-light min-w-50px "
          />
      ),
      id: "SOLANGOI",
      Cell: ({ ...props }) => <TableCustomCell data={props.data[props.row.index].trangThai} />,
  },
]

export default DsTiepDonBenhNhanColumn;