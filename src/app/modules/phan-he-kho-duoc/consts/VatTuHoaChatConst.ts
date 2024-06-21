const initialMapJsonToAttributes: any = {
  manufacturingCountry: null,
  manufacturer: null,
  importer: null,
  insuredPerson: null,
  medicalInsuranceCostGroups: null,
  materialType: null,
  accountCode: "",
  numericalOrder: "",
  materialCode: "",
  materialName: "",
  numberOfUses: "",
  registrationNumber: "",
};

export const initFormVTHC: any = {
  name: "",
  code: "",
  id: "",
  note: "",
  registrationNumber: "",
  inNetworkCoveragePercentage: "",
  outOfNetworkCoveragePercentage: "",
  unit: "",
  unitId: "",
  attributeValues: initialMapJsonToAttributes,
};
