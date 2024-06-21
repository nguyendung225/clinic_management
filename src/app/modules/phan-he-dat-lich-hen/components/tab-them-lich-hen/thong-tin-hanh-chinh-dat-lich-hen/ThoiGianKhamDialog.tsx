import { Dispatch, FC, SetStateAction, useState } from "react";
import { Column } from "react-table";
import { TableCustomHeader } from "../../../../component/table/components/TableCustomHeader";
import { TableCustomCell } from "../../../../component/table/components/TableCustomCell";
import { SELECTION_MODE } from "../../../../utils/Constant";
import { Button, Modal } from "react-bootstrap";
import { DanhMucChonThoiGianKhamModel } from "../../../../phan-he-quan-tri-he-thong/models/ModelDatHen";
import { TableCustom } from "../../../../component/table/table-custom/TableCustom";

type Props = {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  data?: any;
  setDataTGKham?: any;
};

const ThoiGianKhamDialog: FC<Props> = (props) => {
  let { open, handleClose, data, setDataTGKham } = props;
  const [selectedRow, setSelectedRow] = useState<
    DanhMucChonThoiGianKhamModel[]
  >([]);
  const danhSachChonThoiGianKhamColumn: ReadonlyArray<
    Column<DanhMucChonThoiGianKhamModel>
  > = [
    {
      Header: (props) => (
        <TableCustomHeader<DanhMucChonThoiGianKhamModel>
          tableProps={props}
          title={"STT"}
          className="d-flex justify-content-center text-center max-w-30px "
        />
      ),
      id: "STT",
      Cell: ({ ...props }) => (
        <TableCustomCell
          data={props?.data[props?.row?.index]?.stt || ""}
          className="text-center "
        />
      ),
    },
    {
      Header: (props) => (
        <TableCustomHeader<DanhMucChonThoiGianKhamModel>
          tableProps={props}
          title={"Thời gian khám"}
          className="text-center min-w-100px "
        />
      ),
      id: "Thời gian khám",
      Cell: ({ ...props }) => (
        <TableCustomCell
          className=""
          data={
            `${props?.data[props?.row?.index]?.tu} - ${
              props?.data[props?.row?.index]?.den
            }` || ""
          }
        />
      ),
    },
  ];
  const handleSubmit = () => {
    setDataTGKham(selectedRow);
    handleClose(false);
  };
  return (
    <Modal centered show={open} size="lg" contentClassName="w-75 m-auto">
      <Modal.Header className="py-5 bg-white ">
        <Modal.Title>
          <h2 className="text-cyan">Thời gian khám</h2>
        </Modal.Title>
        <button
          className="btn-close"
          onClick={() => handleClose(false)}
        ></button>
      </Modal.Header>
      <Modal.Body className="p-8">
        <TableCustom<DanhMucChonThoiGianKhamModel>
          hasToolbar={false}
          minHeight={350}
          data={data}
          columns={danhSachChonThoiGianKhamColumn}
          verticalScroll={true}
          selectionMode={SELECTION_MODE.SINGLE_NO_RADIO_BUTTON}
          getSelectedRowsData={setSelectedRow}
        />
      </Modal.Body>
      <Modal.Footer className="flex flex-middle flex-center py-1">
        <Button
          className="btn-fill"
          type="submit"
          onClick={() => handleSubmit()}
        >
          <i className="fs-6 me-1 bi bi-floppy"></i> Lưu
        </Button>
        <Button className="btn-outline" onClick={() => handleClose(false)}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ThoiGianKhamDialog;
