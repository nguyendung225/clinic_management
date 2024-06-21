export interface ITaiKhoan {
    id: string
    userName: string
    staffName: string | null
    staffId: string | null
    staffCode: string | null
    tenantId: number
    locationId: string | null
    roles: {
        id: string,
        display: string
    }[],
    emails: {
        value: string,
        type: string
        primary: boolean
    }[]
}
