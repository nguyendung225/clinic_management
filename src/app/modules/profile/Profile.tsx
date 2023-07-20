import { FC, createContext, useEffect, useState } from "react";
import React from "react";
import { TableCustom } from "../component/table-custom/TableCustom";
import { ProfileInfo } from "./models/ProfileModels";
import { ProfileColumn } from "./component/ProfileColumn";
import { SearchObject } from "./models/ProfileModels";
import { ProfileAddAndUpdate } from "./ProfileAddAndUpdate";
import "./profile.scss";
import "../styles/index.scss";
import { useIntl } from "react-intl";
import { searchByPage } from "./services/ProfileServices";
export const ProfileContext = React.createContext(()=> {})
const Profile: FC = () => {
  const [shouldOpenDialog, setShouldOpenDialog] = useState<boolean>(false);
  const [profiles, setProfiles] = useState<ProfileInfo[]>([]);
  const [searchObject, setSearchObject] = useState({});
  const handleOpenDialog = (): void => {
    setShouldOpenDialog(true);
  };
  const handleCloseDialog = (): void => {
    setShouldOpenDialog(false);
  };

  useEffect(() => {
    handleSearchByPage();
  }, []);
  const handleSearchByPage = (): any => {
    let object: SearchObject = {
      ...searchObject,
      keyword: "",
      pageIndex: 1,
      pageSize: 10,
    };
    searchByPage(object).then(({ data }) => {
      setProfiles(data.data.content);
    });
  };
  const handleChangeValueInput = (event: React.ChangeEvent<HTMLInputElement>): any => {
    const value = (event.target as HTMLInputElement).value;
    setSearchObject({ ...searchObject, [event.target.name]: value });
  };

  const intl = useIntl();

  return (
    <ProfileContext.Provider value={handleSearchByPage}>
      {!shouldOpenDialog && (
        <>
          <div className="profile-title">
            <span className="fs-3 fw-bold">
              {intl.formatMessage({ id: "PROFILE.WORKING" })}
              <i className="bi bi-three-dots-vertical"></i>
            </span>
            <button className="btn btn-primary btn-sm btn-sm" onClick={handleOpenDialog}>
              {intl.formatMessage({ id: "BTN.ADD" })}
            </button>
          </div>
          <TableCustom<ProfileInfo>
            compact={false}
            data={profiles}
            columns={ProfileColumn}
            handleSearchByPage={handleSearchByPage}
            handleChangeValueInput={handleChangeValueInput}
          />
        </>
      )}
      {shouldOpenDialog && <ProfileAddAndUpdate handleCloseDialog={handleCloseDialog} />}
    </ProfileContext.Provider>
  );
};
export { Profile };
