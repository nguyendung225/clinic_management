export type ILoaiDichVu = {
  name: string
  id: number
  hasGroupService: boolean
} | null

export type INhomDichVu = {
  id: number
  name: string
  services: any[]
} | null

export type IDichVu = {
  id?: number
  parent: ILoaiDichVu
  concept: INhomDichVu
  conceptAnswerName: string
  serviceCode: string
  servicePrice: number | string
  insurancePrice: number | string 
}

export type IDichVuItem = IDichVu & {
  id: number
  name: string
  services?: IDichVu[]
}

export type IPayloadDataItem = {
  index: number
  id: number
  name: string
  code: string
  datatype: string
  value: string | number
}

export type IPayloadData = {
  parent: ILoaiDichVu
  concept: INhomDichVu
  conceptAnswerName: string
  attributes: IPayloadDataItem[] | undefined
}
