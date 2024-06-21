export type IRoom = {
  index?: number | undefined
  id?: string
  departmentId?: string
  name: string
  code: string
  tenantId: number
  priceType: IPriceType | null
}

export type IDepartment = {
  id: string
  name: string
  code: string
  path: string
  rooms: IRoom[]
  tenantId: number
  place: string
}

export type IRowData = {
  index: number
  original: IRoom
}

export type IPriceType = {
  id?: string
  code: string
  name: string
  type: number
  attributeValues: [
    {
      simpleCategoryAttributeId: string
      value: string
    }
  ]
}
