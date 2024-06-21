export interface optionSelect {
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
  attribute: null;
  groups: null;
  note: string;
  targetUnits: null;
  registrationNumber: string;
  inNetworkCoveragePercentage: string;
  outOfNetworkCoveragePercentage: string;
  unit: MapJsonToAttributesValue | null;
  unitId: string | null;
  images: null;
}
export interface Thuoc extends CommonAttributes {
  attributeValues: {
    unitOfMeasurement: MapJsonToAttributesValue | null;
    manufacturingCountry: MapJsonToAttributesValue | null;
    manufacturer: MapJsonToAttributesValue | null;
    importer: MapJsonToAttributesValue | null;
    solvent: MapJsonToAttributesValue | null;
    activeGradient: MapJsonToAttributesValue | null;
    associateActiveGradient: MapJsonToAttributesValue | null;
    routeOfUse: MapJsonToAttributesValue | null;
    characteristics: MapJsonToAttributesValue | null;
    abcVenGroup: MapJsonToAttributesValue | null;
    pharmacologicalGroup: MapJsonToAttributesValue | null;
    drugClass: MapJsonToAttributesValue | null;
    drugType: MapJsonToAttributesValue | null;
    insuredPerson: MapJsonToAttributesValue | null;
    medicalInsuranceCostGroups: MapJsonToAttributesValue | null;
    accountCode: MapJsonToAttributesValue | null;
    volume: MapJsonToAttributesValue | null;
    intensity: MapJsonToAttributesValue | null;
    usageInstructions: MapJsonToAttributesValue | null;
    concentration: MapJsonToAttributesValue | null;
    specialtyDrug: MapJsonToAttributesValue | null;
    storageCondition: MapJsonToAttributesValue | null;
    healthInsuranceCode: MapJsonToAttributesValue | null;
    healthInsuranceMedicineName: MapJsonToAttributesValue | null;
    nationalDrugCode: MapJsonToAttributesValue | null;
  };
}
export interface ThuocConvert extends CommonAttributes {
  attributeValues: {
    unitOfMeasurement: optionSelect[] | null;
    manufacturingCountry: optionSelect[] | null;
    manufacturer: optionSelect[] | null;
    importer: optionSelect[] | null;
    solvent: optionSelect[] | null;
    activeGradient: optionSelect[] | null;
    associateActiveGradient: optionSelect[] | null;
    routeOfUse: optionSelect[] | null;
    characteristics: optionSelect[] | null;
    abcVenGroup: optionSelect[] | null;
    pharmacologicalGroup: optionSelect[] | null;
    drugClass: optionSelect[] | null;
    drugType: optionSelect[] | null;
    insuredPerson: optionSelect[] | null;
    medicalInsuranceCostGroups: optionSelect[] | null;
    accountCode: string | null;
    volume: string | null;
    intensity: string | null;
    usageInstructions: string | null;
    concentration: string | null;
    specialtyDrug: string | null;
    storageCondition: string | null;
    healthInsuranceCode: string | null;
    healthInsuranceMedicineName: string | null;
    nationalDrugCode: string | null;
  };
}
