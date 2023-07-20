import { FC, useState } from "react";
import { useIntl } from "react-intl";
import { ContractInfo } from "./models/ContractModels";
import { contracts } from "./const/ContractConst";
import { TableCustom } from "../component/table-custom/TableCustom";
import { ContractColumn } from "./components/ContractColumn";
import { AddNewContract } from "./components/AddNewContract";
import "./contract.scss";
const Contract: FC = () => {
  const intl = useIntl();
  const [shouldOpenAddNewContract, setShouldOpenAddNewContract] = useState<boolean>(false);
  const [viewInfoContract, setViewInfoContract] = useState<boolean>(false);
  const [contractInfo, setContractInfo] = useState<ContractInfo>({} as ContractInfo);
  const handleCloseDialog = () => {
    setShouldOpenAddNewContract(false);
    setViewInfoContract(false);
    setContractInfo({} as ContractInfo);
  };
  const handleOpenInfoDialog = (row: any) => {
    setViewInfoContract(true);
    setShouldOpenAddNewContract(true);
    setContractInfo(row.original);
  };
  const handleOpenAddNewContract = () => {
    setShouldOpenAddNewContract(true);
  };
  const handleOpenUpdateDialog = () => {
    setViewInfoContract(false);
  };
  const handleCloseUpdateDialog = () => {
    setViewInfoContract(true);
  };

  return (
    <>
      {!shouldOpenAddNewContract && (
        <>
          <div className="profile-title">
            <span className="fs-3 fw-bold">
              {intl.formatMessage({ id: "CONTRACT.ALL" })}
              <i className="bi bi-three-dots-vertical"></i>
            </span>
            <button onClick={handleOpenAddNewContract} className="btn btn-primary btn-sm btn-sm">
              {intl.formatMessage({ id: "BTN.ADD" })}
            </button>
          </div>
          <TableCustom<ContractInfo>
            data={contracts}
            columns={ContractColumn}
            compact={false}
            handleOpenInfoDialog={handleOpenInfoDialog}
          />
        </>
      )}
      {shouldOpenAddNewContract && (
        <AddNewContract
          view={viewInfoContract}
          contractInfo={contractInfo}
          handleCloseDialog={handleCloseDialog}
          handleOpenUpdateDialog={handleOpenUpdateDialog}
          handleCloseUpdateDialog={handleCloseUpdateDialog}
        />
      )}
    </>
  );
};
export { Contract };
