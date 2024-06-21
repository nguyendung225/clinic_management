export interface optionSelect {
  id?: string;
  code: string;
  name: string;
}
export interface MapJsonToAttributesValue {
  id: number | null;
  createDate: string | null;
  createdBy: string | null;
  modifyDate: string | null;
  modifiedBy: string | null;
  productId: number | null;
  code: string;
  name: string;
  valueText: string;
  valueNumber: number | null;
  valueDate: string | null;
  valueObject: optionSelect[] | null;
  valueComplex: any | null;
}
interface CommonAttributes {
  name: string;
  code: string;
  id: string;
  note: string;
  registrationNumber: string;
  inNetworkCoveragePercentage: string;
  outOfNetworkCoveragePercentage: string;
  unit: MapJsonToAttributesValue | null;
  unitId: string | null;
}

export interface VatTuHoaChat extends CommonAttributes {
  attributeValues: {
    manufacturingCountry: MapJsonToAttributesValue | null;
    manufacturer: MapJsonToAttributesValue | null;
    importer: MapJsonToAttributesValue | null;
    insuredPerson: MapJsonToAttributesValue | null;
    medicalInsuranceCostGroups: MapJsonToAttributesValue | null;
    accountCode: MapJsonToAttributesValue | null;
    numericalOrder: MapJsonToAttributesValue | null; //stt vật tự BYT
    materialCode: MapJsonToAttributesValue | null; //mã vật tư BYT
    materialName: MapJsonToAttributesValue | null; //tên vật tư BV
    materialType: MapJsonToAttributesValue | null; //loại vt
    numberOfUses: MapJsonToAttributesValue | null; //số lần sd
    registrationNumber: MapJsonToAttributesValue | null; //số đăng ký
  };
}
export interface VatTuHoaChatConvert extends CommonAttributes {
  attributeValues: {
    manufacturingCountry: MapJsonToAttributesValue | null;
    manufacturer: MapJsonToAttributesValue | null;
    importer: MapJsonToAttributesValue | null;
    insuredPerson: MapJsonToAttributesValue | null;
    medicalInsuranceCostGroups: MapJsonToAttributesValue | null;
    materialType: MapJsonToAttributesValue | null; //loại vt
    accountCode: string | null;
    numericalOrder: string | null; //stt vật tự BYT
    materialCode: string | null; //mã vật tư BYT
    materialName: string | null; //tên vật tư BV
    numberOfUses: string | null; //số lần sd
    registrationNumber: string | null; //số đăng ký
  };
}
