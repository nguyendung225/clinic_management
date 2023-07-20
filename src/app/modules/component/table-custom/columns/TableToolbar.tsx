import { Col, Row } from "react-bootstrap";
import { ChangeColumnDialog } from "./ChangeColumnDialog";
import { useState } from "react";
import { useIntl } from "react-intl";
import clsx from "clsx";
import React from "react";
import { ReceptionContext } from "../../../phan-he-tiep-nhan/components/DSTiepNhan/DSTiepNhan";
import { ConfirmDialog } from "../../ConfirmDialog";
interface TableCustomToolbarProps {
  selectedRows: any;
  allColumns: any;
  data?: {};
  handleUnSelectedRows: () => void;
  setShouldOpenFilterSearch: React.Dispatch<React.SetStateAction<boolean>>;
  shouldOpenFilterSearch: boolean;
  isReceptionList?: boolean | false;
}
const TableCustomToolbar = (props: TableCustomToolbarProps) => {
  const handleSearchByPage: any = React.useContext(
    props.isReceptionList ? ReceptionContext : ReceptionContext
  )
  const intl = useIntl();
  const {
    selectedRows,
    allColumns,
    data,
    handleUnSelectedRows,
    setShouldOpenFilterSearch,
    shouldOpenFilterSearch,
  } = props;
  const [shouldOpenConfirmDeleteDialog, setShouldOpenConfirmDeleteDialog] = useState(false)
  const [shouldOpenChangeColumnDialog, setShouldOpenChangeColumnDialog] = useState<boolean>(false);
  const handleDelete = async () => {

  }
  return (
    <div className="table-toolbar rounded-top">
      <Row>
        <Col xs={10} className="d-flex gap-4 align-items-center">
          <span>
            {intl.formatMessage({ id: "SELECTED" })}: <strong>{selectedRows.length}</strong>
          </span>
          {selectedRows.length > 0 && (
            <>
              <span className="fw-bold text-warning cursor-pointer" onClick={handleUnSelectedRows}>
                {intl.formatMessage({ id: "UNSELECTED" })}
              </span>
              <div className="delete-box cursor-pointer">
                <i className="bi bi-trash fs-4 text-danger px-4"></i>
                <span className="fw-bold text-danger" onClick={(e)=> setShouldOpenConfirmDeleteDialog(true)}>
                  {" "}
                  {intl.formatMessage({ id: "DELETE" })}
                </span>
              </div>
            </>
          )}
        </Col>
        <Col xs={2} className="flex-end d-flex gap-4">
          <i
            className={clsx("bi bi-funnel toolbar-icon fs-4", {
              "filter-open": shouldOpenFilterSearch,
            })}
            onClick={() => {
              setShouldOpenFilterSearch((prevState: boolean) => !prevState);
            }}
          ></i>
          <i
            className={clsx("bi bi-gear toolbar-icon fs-4", {
              "filter-open": shouldOpenChangeColumnDialog,
            })}
            onClick={() => {
              setShouldOpenChangeColumnDialog(true);
            }}
          ></i>
        </Col>
      </Row>
      {shouldOpenChangeColumnDialog && (
        <ChangeColumnDialog
          allColumns={allColumns}
          handleClose={() => {
            setShouldOpenChangeColumnDialog(false);
          }}
        />
      )}

      <ConfirmDialog
        show={shouldOpenConfirmDeleteDialog}
        title={intl.formatMessage({ id: 'DIALOG.CONFIRM.DELETE.TITLE' })}
        message={intl.formatMessage({ id: 'DIALOG.CONFIRM.DELETE.MESSAGE' })}
        yes={intl.formatMessage({ id: 'BTN.CONFIRM' })}
        onYesClick={() => handleDelete()}
        cancel={intl.formatMessage({ id: 'BTN.CANCEL' })}
        onCancelClick={()=> setShouldOpenConfirmDeleteDialog(false)}
      />
    </div>
  );
};

export { TableCustomToolbar };
