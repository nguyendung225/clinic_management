import { Column } from "react-table";
import { TableCustomHeader } from "../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../component/table/components/TableCustomCell";
import { CONSTANTS_HANH_CHINH } from "../constants/ConstantPhanHeHanhChinh";

export const PhieuColumn = (loaiQuanLy: string) => {
  console.log(loaiQuanLy)
  return [
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Trạng Thái"}
          className='text-center'
        />
      ),
      id: 'trangThai',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.original?.trangThai}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"STT"}
          className='text-center'
        />
      ),
      id: 'stt',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.index + 1}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={`Mã ${loaiQuanLy === CONSTANTS_HANH_CHINH.THUOC ? "thuốc" : "máu"}`}
          className='text-center'
        />
      ),
      id: 'ma',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.ma}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={`tên ${loaiQuanLy === CONSTANTS_HANH_CHINH.THUOC ? "thuốc" : "máu"}`}
          className='text-center'
        />
      ),
      id: 'ten',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.ten}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Đơn Vị"}
          className='text-center'
        />
      ),
      id: 'donVi',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.original?.donVi}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Tên Kho"}
          className='text-center'
        />
      ),
      id: 'tenKho',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          data={props?.row?.original?.tenKho}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Sl Yêu Cầu"}
          className='text-center'
        />
      ),
      id: 'slYeuCau',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-end"
          data={props?.row?.original?.slYeuCau}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Sl Phát"}
          className='text-center'
        />
      ),
      id: 'slPhat',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-end"
          data={props?.row?.original?.slPhat}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Đơn Giá"}
          className='text-center'
        />
      ),
      id: 'donGia',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-end"
          data={props?.row?.original?.donGia}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Thành Tiền"}
          className='text-center'
        />
      ),
      id: 'thanhTien',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-end"
          data={props?.row?.original?.thanhTien}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"SĐK"}
          className='text-center'
        />
      ),
      id: 'sdk',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.original?.sdk}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Số Lô"}
          className='text-center'
        />
      ),
      id: 'soLo',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.original?.soLo}
        />
      ),
    },
    {
      Header: (props: any) => (
        <TableCustomHeader
          tableProps={props}
          title={"Hạn Sử Dụng"}
          className='text-center'
        />
      ),
      id: 'hanSuDung',
      Cell: ({ ...props }) => (
        <TableCustomCell
          tableProps={props}
          className="text-center"
          data={props?.row?.original?.hanSuDung}
        />
      ),
    },
  ];
}

export const PhieuVatTuColumn: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"STT"}
        className='text-center'
      />
    ),
    id: 'stt',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.index + 1}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Mã vật tư"}
        className='text-center'
      />
    ),
    id: 'maVatTu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.maVatTu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Tên vật tư"}
        className='text-center'
      />
    ),
    id: 'tenVatTu',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        data={props?.row?.original?.tenVatTu}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số lượng"}
        className='text-center'
      />
    ),
    id: 'sl',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.sl}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Đơn Giá"}
        className='text-center'
      />
    ),
    id: 'donGia',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.donGia}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Thành Tiền"}
        className='text-center'
      />
    ),
    id: 'thanhTien',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-end"
        data={props?.row?.original?.thanhTien}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"SĐK"}
        className='text-center'
      />
    ),
    id: 'sdk',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.sdk}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Số Lô"}
        className='text-center'
      />
    ),
    id: 'soLo',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.soLo}
      />
    ),
  },
  {
    Header: (props) => (
      <TableCustomHeader
        tableProps={props}
        title={"Hạn Sử Dụng"}
        className='text-center'
      />
    ),
    id: 'hanSuDung',
    Cell: ({ ...props }) => (
      <TableCustomCell
        tableProps={props}
        className="text-center"
        data={props?.row?.original?.hanSuDung}
      />
    ),
  },
];