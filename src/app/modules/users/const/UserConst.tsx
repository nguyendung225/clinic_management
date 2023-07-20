import {RoleObject, GenderObject, User, Options} from '../models/UserModels'
export const SUCCESS_RESPONSE = 200
export const INITIAL_USER: User = {
  username: '',
  displayName: '',
  email: '',
  gender: 1,
  roles: [],
  password: '',
  active: true,
  justCreated: true,
  accountNonLocked: true,
  accountNonExpired: true,
  credentialsNonExpired: true,
}
export const PERMISSION = 'USER.CREATE'
export const LIST_GENDER: GenderObject[] = [
  {
    id: 1,
    name: 'OPTION.GENDER.MALE',
    description: 'null',
  },
  {
    id: 2,
    name: 'OPTION.GENDER.FEMALE',
    description: 'null',
  },
  {
    id: 3,
    name: 'OPTION.GENDER.LGBT',
    description: 'null',
  },
  {
    id: 4,
    name: 'OPTION.GENDER.ETC',
    description: 'null',
  },
]

export const LIST_ROLE: Options[] = [
  {
    label: 'ROLE ACCOUNTANT',
    value: 'ROLE_ACCOUNTANT',
  },
  {
    label: 'ROLE ADMIN',
    value: 'ROLE_ADMIN',
  },
  {
    label: 'ROLE MANAGER',
    value: 'ROLE_MANAGER',
    isDisabled: true,
  },
  {
    label: 'ROLE STAFF',
    value: 'ROLE_STAFF',
    isDisabled: true,
  },
]
export const ROW_FOR_PAGE: number[] = [2, 5, 10, 20]
