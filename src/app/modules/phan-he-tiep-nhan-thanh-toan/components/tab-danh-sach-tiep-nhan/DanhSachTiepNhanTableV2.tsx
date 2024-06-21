import { FC } from "react";
import { useIntl } from "react-intl";
import { Column } from "react-table";
import { TableCustomCell } from "../../../component/table/components/TableCustomCell";
import { TableCustomHeader } from "../../../component/table/components/TableCustomHeader";
import { formatDateToString } from "../../../utils/FormatUtils";
import { danhSachTiepNhan } from "../../models/DSTiepNhanModel";
import { benhNhanData } from "../../tab-danh-sach-tiep-nhan/DanhSachTiepNhan";
import { TableCustom } from "../../../component/table/table-custom/TableCustom";

function useCustomIntl(messageId: string) {
  const intl = useIntl();
  return intl.formatMessage({ id: messageId });
}
type DSTiepNhan = {
  benhNhanData: benhNhanData;
  updatePageData: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdate: (row: any) => void;
  handlePay: (row: any) => void;
  page: number;
  rowsPerPage: number;
  handleContextMenu: (e: any, row: any) => void;
};

const DanhSachTiepNhanTableV2: FC<DSTiepNhan> = (props) => {
  let {
    benhNhanData,
    updatePageData,
    handleChange,
    page,
    rowsPerPage,
    handleContextMenu,
  } = props;

  const danhSachTiepNhanColumn: ReadonlyArray<Column<danhSachTiepNhan>> = [
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("TABLE.INDEX")}
          className="p-table text-center min-w-30px "
        />
      ),
      id: "STT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={String((page - 1) * rowsPerPage + props?.row?.index + 1)}
          className="p-table cell-first-child text-center ps-0"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("RECEPTION.RECEPTIONDATE")}
          className="p-table text-center min-w-150px"
        />
      ),
      id: "Ngày TN",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-center"
          data={formatDateToString(
            props?.data[props?.row?.index]?.thoiGianTiepNhan
          )}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("RECEPTION.CODE")}
          className="p-table text-center min-w-150px"
        />
      ),
      id: "Mã BN",
      Cell: ({ ...props }) => (
        <TableCustomCell
          // data={props?.data[props?.row?.index]?.mpt || ""}
          data={`${
            props?.data[props?.row?.index]?.id
              ? "BN00" + props?.data[props?.row?.index]?.id
              : ""
          }`}
          className="text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("RECEPTION.NAME")}
          className="p-table text-center min-w-250px"
        />
      ),
      id: "Tên bệnh nhân",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left text-uppercase"
          data={props?.data[props?.row?.index]?.hoTen || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={"Giới tính"}
          className="p-table text-center text-white align-middle min-w-100px"
        />
      ),
      id: "gender",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.data[props?.row?.index]?.gioiTinh==="MALE"?"Nam":"Nữ" || ""}
          className="p-table text-center"
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("RECEPTION.AGE")}
          className="p-table text-center min-w-100px"
        />
      ),
      id: "Tuổi",
      Cell: ({ ...props }) => (
        <TableCustomCell className="p-table text-center" data={props?.data[props?.row?.index]?.tuoi || ""} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("RECEPTION.ADDRESS")}
          className="p-table text-center min-w-250px"
        />
      ),
      id: "Địa chỉ",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left"
          data={props?.data[props?.row?.index]?.diaChi || ""}
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("RECEPTION.CLINIC")}
          className="p-table text-center min-w-300px"
        />
      ),
      id: "Phòng khám",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left"
          // data={props?.data[props?.row?.index]?.phongKham || ""}
          data={
            <div >
              {props?.data[props?.row?.index]?.encounter?.orders?.map(
                (item: any) => (
                  <div>{item?.roomName}</div>
                )
              )}
            </div>
          }
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("RECEPTION.SERVICES")}
          className="p-table text-center min-w-300px"
        />
      ),
      id: "Dịch vụ khám",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className="p-table text-align-left"
          // data={ ""}
          data={
            <div >
              {props?.data[props?.row?.index]?.encounter?.orders?.map(
                (item: any) => (
                  <div>{item?.conceptName}</div>
                )
              )}
            </div>
          }
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("RECEPTION.DOCTOR")}
          className="p-table text-center min-w-250px"
        />
      ),
      id: "Bác sĩ khám",
      Cell: ({ ...props }) => (
        <TableCustomCell className="p-table text-align-left" data={""} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("RECEPTION.INDEX")}
          className="p-table text-center min-w-150px"
        />
      ),
      id: "STT khám",
      Cell: ({ ...props }) => (
        <TableCustomCell className="p-table text-center" data={""} />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<danhSachTiepNhan>
          tableProps={props}
          title={useCustomIntl("RECEPTION.PRIORITIZE")}
          className="p-table text-center min-w-100px "
        />
      ),
      id: "Ưu tiên",
      Cell: ({ ...props }) => (
        <div className="p-table text-center flex-start cell-last-child min-w-100px pe-0">
          {/* <input
          id="flexCheckDefault"
          className="form-check-input customs-input-check"
          type="checkbox"
          disabled
          value=""
          checked={props?.data[props?.row?.index]?.isUuTien}
        /> */}
          {props?.data[props?.row?.index]?.isUuTien ? "Có" : "Không"}
        </div>
      ),
    },
  ];

  return (
    <TableCustom<danhSachTiepNhan>
      hasToolbar={false}
      className={"h-ds-tiep-nhan-table"}
      minHeight={300}
      data={benhNhanData?.data}
      columns={danhSachTiepNhanColumn}
      handleSearchByPage={updatePageData}
      handleChangeValueInput={handleChange}
      verticalScroll={true}
      handleContextMenu={handleContextMenu}
    />
  );
};

export default DanhSachTiepNhanTableV2;
