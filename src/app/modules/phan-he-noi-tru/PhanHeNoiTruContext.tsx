import React, { FC, SetStateAction, createContext, useState } from "react";
import { IBenhNhan } from "./models/IPhongBenh";
import { WithChildren } from "../../../_metronic/helpers";
import { IDichVu } from "./models/IDichVu";

type PhanHeNoiTruContextProps = {
  patientByRoom: IBenhNhan;
  setPatientByRoom: React.Dispatch<SetStateAction<IBenhNhan>>;
  servicesByPatient: IDichVu[];
  setServicesByPatient: React.Dispatch<SetStateAction<IDichVu[]>>;
}

const initState = {
  patientByRoom: {},
  setPatientByRoom: () => {},
  servicesByPatient: [],
  setServicesByPatient: () => {}
}

export const PhanHeNoiTruContext = createContext<PhanHeNoiTruContextProps>(initState);

const PhanHeNoiTruProvider: FC<WithChildren> = ({children}) => {
  const [patientByRoom, setPatientByRoom] = useState<IBenhNhan>({});
  const [servicesByPatient, setServicesByPatient] = useState<IDichVu[]>([]);
  const value = { patientByRoom, setPatientByRoom, servicesByPatient, setServicesByPatient };
  return (
    <PhanHeNoiTruContext.Provider value={value}>
      {children}
    </PhanHeNoiTruContext.Provider>
  )
}
export default PhanHeNoiTruProvider;