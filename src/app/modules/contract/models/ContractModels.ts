export interface ContractInfo {
  signingDate: string;
  number: string;
  workerFullName: string;
  jobPosition: string;
  signingUnit: string;
  type: string;
  duration: string;
  effectiveDate: string;
  expirationDate: string;
  baseSalary: string;
  insuranceContribution: string;
  signingStatus: string;
  status: string;
}
export interface AllowanceInfo {
  name: string;
  value: string;
  payroll: string;
  note: string;
}
export interface ContractAnnexInfo {
  number: string;
  name: string;
  effectiveDateAnnex: string;
  signingUnit: string;
  jobPosition: string;
  typeContract: string;
  effectiveDateContract: string;
  expirationDate: string;
  baseSalary: string;
  insuranceContribution: string;
  salaryRate: string;
  attachments: string;
}
export interface OptionsInfo {
  name: string;
  id: string;
}
