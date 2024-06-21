import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ConfirmDialog } from "../../component/ConfirmDialog";
// import TableCustom from "../../component/table-custom-v3/TableCustom";
import { TRANG_THAI, VARIABLE_STRING } from "../../utils/Constant";
import { convertNumberPrice } from "../../utils/FormatUtils";
import { bangKhamBenh } from "../models/PhanHeTiepNhanModel";

type DSKhamBenh = {
  data: any;
  handleDelete?: (data: any) => void;
};

const DanhSachKhambenhTable: FC<DSKhamBenh> = (props) => {
  let { data, handleDelete } = props;
  let [dataDV, setDataDV] = useState<bangKhamBenh[]>([]);
  const [openDialogConfirmDelete, setOpenDialogConfirmDelete] =
    useState<boolean>(false);
  const [idDelete, setIdDelete] = useState<string>("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      let newData: any = [...dataDV];
      let item = newData[index];
      if (e.target.name === VARIABLE_STRING.QUANTITY) {
        let quantity = Number(e.target.value) > 0 ? Number(e.target.value) : 1;
        item = sumPrice(item, quantity, Number(item?.promotionPercent));
        item[e.target.name] = quantity;
      }

      if (e.target.name === VARIABLE_STRING.PROMOTION_PERCENT) {
        let promotionPercent = Number(e.target.value);
        if (promotionPercent >= 0 && promotionPercent <= 100) {
          item = sumPrice(item, Number(item?.quantity), promotionPercent);
          item[e.target.name] = promotionPercent;
        }
      }
      setDataDV(newData);
    },
    [dataDV]
  );

  const sumPrice = (
    item: bangKhamBenh,
    quantity: number,
    promotionPercent: number
  ) => {
    item.totalPrice =
      (item.price - (Number(promotionPercent) * Number(item.price)) / 100) *
      quantity;
    item.promotionPrice =
      ((Number(promotionPercent) * item.price) / 100) * quantity;
    return item;
  };

  const handleConfirmDelete = () => {
    handleDelete && handleDelete(idDelete);
    setOpenDialogConfirmDelete(false);
  };

  useEffect(() => {
    setDataDV(data);
  }, [data]);

  const KhamBenhColumns = [
    {
      name: "Mã DV",
      field: "code",
      headerStyle: {
        maxHeight: "21px",
        fontSize: "14px",
        minWidth: "80px",
        textAlign: "center",
      },
      cellStyle: {
        fontSize: "14px",
        textAlign: "center",
      },
      render: (rowData: bangKhamBenh, index: number) => rowData?.conceptCode,
    },
    {
      name: "Tên dịch vụ",
      field: "conceptName",
      sorting: true,
      headerStyle: {
        maxHeight: "21px",
        fontSize: "14px",
        minWidth: "200px",
        textAlign: "center",
      },
    },
    {
      name: "Phòng khám",
      field: "roomName",
      sorting: true,
      headerStyle: {
        maxHeight: "21px",
        fontSize: "14px",
        minWidth: "150px",
        textAlign: "center",
      },
    },
    {
      name: "Giá dịch vụ",
      field: "price",
      sorting: true,
      headerStyle: {
        maxHeight: "21px",
        fontSize: "14px",
        textAlign: "center",
        minWidth: "100px",
        maxWidth: "100px",
      },
      cellStyle: {
        fontSize: "14px",
        textAlign: "right",
      },
      render: (rowData: bangKhamBenh, index: number) =>
        convertNumberPrice(rowData.price),
    },
    // {
    //   name: 'SL',
    //   field: 'quantity',
    //   headerStyle: {
    // maxHeight:"21px",
    // fontSize:"14px",
    //     width: "60px",
    //   },
    //   cellStyle: {
    // fontSize:"14px",
    //     textAlign: "left",
    //     padding: "6px"
    //   },
    //   render: (rowData: bangKhamBenh, index: number) => (
    //     <input
    //       className={"form-control customs-input w-100 px-1 text-left no-spinners"}
    //       value={rowData?.quantity}
    //       type='number'
    //       onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
    //       name="quantity"
    //     />
    //   ),
    // },
    // {
    //   name: 'MG (%)',
    //   field: 'promotionPercent',
    //   headerStyle: {
    // maxHeight:"21px",
    // fontSize:"14px",
    //     width: "60px",
    //   },
    //   cellStyle: {
    // fontSize:"14px",
    //     padding: "6px"
    //   },
    //   render: (rowData: bangKhamBenh, index: number) => (
    //     <input
    //       className={"form-control customs-input w-100 px-2 text-left no-spinners"}
    //       value={rowData?.promotionPercent || ""}
    //       onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
    //       name="promotionPercent"
    //     />
    //   ),
    // },
    {
      name: "Thành tiền",
      field: "totalPrice",
      sorting: true,
      headerStyle: {
        maxHeight: "21px",
        fontSize: "14px",
        textAlign: "center",
        minWidth: "100px",
        maxWidth: "100px",
      },
      cellStyle: {
        fontSize: "14px",
        textAlign: "right",
      },
      render: (rowData: bangKhamBenh, index: number) =>
        convertNumberPrice(rowData.totalPrice),
    },
    {
      name: "Thao tác",
      field: "",
      headerStyle: {
        maxHeight: "21px",
        fontSize: "14px",
        textAlign: "center",
        minWidth: "80px",
        maxWidth: "80px",
      },
      cellStyle: {
        fontSize: "14px",
        textAlign: "center",
      },
      render: (rowData: bangKhamBenh, index: number) => {
        let checkDelete = rowData?.statusId === TRANG_THAI.CHUA_THANH_TOAN;
        return checkDelete ? (
          <ButtonToolbar className="justify-content-center">
            <OverlayTrigger
              placement="left"
              delay={150}
              overlay={
                <Tooltip id="tooltip">
                  <b className="fs-7">Xóa</b>
                </Tooltip>
              }
            >
              <div
                onClick={() => {
                  setOpenDialogConfirmDelete(true);
                  setIdDelete(
                    rowData?.orderId ? rowData?.orderId : rowData?.id
                  );
                }}
              >
                <i className="bi bi-trash3-fill text-danger text-danger cursor-pointer" />
              </div>
            </OverlayTrigger>
          </ButtonToolbar>
        ) : (
          <></>
        );
      },
    },
  ];

  return (
    <div className="h-100">
      {/* <TableCustom data={data} columns={KhamBenhColumns} /> */}

      {openDialogConfirmDelete && (
        <ConfirmDialog
          show={true}
          title="Xác nhận xóa"
          message="Bạn có chắc chắn muốn xóa không?"
          yes="Xác nhận"
          close="Đóng"
          onCloseClick={() => setOpenDialogConfirmDelete(false)}
          onYesClick={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default DanhSachKhambenhTable;
