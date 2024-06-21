export enum gender {
    MALE = "MALE",
    FEMALE="FEMALE",
}

export interface IGeneralData {
    id?: string | number
    code?: string | null
    name?: string | null

    createDate?: string | null
    createdBy?: string | null
    modifyDate?: string | null
    modifiedBy?: string | null

    parentId?: string | null
    path?: string | null
    uuidKey?: string | null
    description?: string | null
    type?: number | null
    tenantId?: number | null
    attributeValues?: [] | null
}

export interface IGioiTinh {
    value: gender
    name: string
}

interface IPerson extends IGeneralData {
    name: string | null
    birthDay: string | null
    gender: gender | IGioiTinh | null 
    ethnicCode: string | null
    nationalityCode: string | null
    apartmentNumber: string | null
    wardCode: string | null
    districtCode: string | null
    provinceCode: string | null
    address: string | null
    phoneNumber: string | null
    citizenId: string | null
    jobCode: string | null
    tenantId: number
    userId: string | null
    orgId: string | null
    attributes: [] | null
}

export interface IUser {
    userName: any,
    password: string,
    roles: {
        display: string,
        id: string
    }[],
}

export interface INhanVien extends IGeneralData {
    person: Partial<IPerson>
    totalWorkingYears: number // số năm công tác
    email: string
    academicLevel: string //học hàm
    academicDegree: string // học vị
    educationalQualification: string //bằng cấp
    certification: string // chứng chỉ
    title: IChucDanh | null //chức danh
    position: IChucVu | null //chức vụ
    status: ITrangThai | null 
    department: IKhoa | null //khoa
    room: IPhong | null //phòng
    location: any //cơ sở
    user: Partial<IUser> | null
}

export interface IChucDanh extends IGeneralData { }
export interface IChucVu extends IGeneralData { }
export interface ITrangThai extends IGeneralData { }
export interface IKhoa extends IGeneralData {
    rooms?: IPhong[]
 }
export interface IPhong extends IGeneralData {
    departmentId?: string | null;
 }

export type IPhanCa = {
    room: string
    fromTime: string
    toTime: string
    doctor: string
    nursing: string
}