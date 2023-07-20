import {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {UsersDialog} from './components/UsersDialog'
import {User} from './models/UserModels'
import BreadcrumbsWidget from '../../../_metronic/partials/widgets/breadCrumbs/BreadCrumbsWidget'
import {UserContext} from './components/UserContext'
import {UserConfirmDeleteDialog} from './components/UserConfirmDeleteDialog'
import {INITIAL_USER} from './const/UserConst'
import clsx from 'clsx'
import {hasAuthority} from '../utils/Permission'
import '../component/style.scss'
import UserTable from './components/UserTable'
const Users: FC = () => {
  const intl = useIntl()
  const breakCrumb = [
    {text: intl.formatMessage({id: 'MENU.ADMINISTRATION'}), url: ''},
    {text: intl.formatMessage({id: 'MENU.ADMINISTRATION.USER'}), url: '/administration/user'},
  ]
  const [state, setState] = useState<boolean>(false)
  const [keyword, setKeyword] = useState('')
  const [shouldOpenUsersDialog, setShouldOpenUsersDialog] = useState<boolean>(false)
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false)
  const [user, setUser] = useState<User>(INITIAL_USER)
  const updateData = () => {
    setState(!state)
  }
  useEffect(() => {
    updateData()
  }, [])
  const handleAddNewUser = (): void => {
    setUser(INITIAL_USER)
    setShouldOpenUsersDialog(true)
  }
  const handleCloseUserDialog = (): void => {
    updateData()
    setShouldOpenUsersDialog(false)
  }
  const handleCloseConfirmDialog = (): void => {
    setShouldOpenConfirmDialog(false)
    updateData()
  }
  const handleEditUser = (obj: User): void => {
    setShouldOpenUsersDialog(true)
    setUser(obj)
  }
  const handleDeleteUser = (obj: User): void => {
    setUser(obj)
    setShouldOpenConfirmDialog(true)
  }
  return (
    <UserContext.Provider value={{handleEditUser, handleDeleteUser}}>
      <BreadcrumbsWidget items={breakCrumb}></BreadcrumbsWidget>
      <div className='d-flex align-items-center justify-content-between mt-4 mb-2'>
        <button
          onClick={handleAddNewUser}
          className={clsx('btn bg-pri noWrap')}
        >
          {intl.formatMessage({id: 'BTN.ADD'})}
        </button>
        <div className='d-flex input-group w-25'>
          <div className='input-group '>
            <span className='input-group-text'>
              <i className='bi bi-search'></i>
            </span>
            <input
              type='text'
              className='form-control'
              placeholder={intl.formatMessage({id: 'TIMEKEEPING.INPUT.SEARCH'})}
              value={keyword}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setKeyword(event.target.value)
              }}
            />
          </div>
        </div>
      </div>

      <UserTable state={state} keyword={keyword} />
      {shouldOpenUsersDialog && (
        <UsersDialog
          user={user}
          setUser={setUser}
          updateData={updateData}
          shouldOpenUsersDialog={shouldOpenUsersDialog}
          handleCloseUserDialog={handleCloseUserDialog}
        />
      )}
      {shouldOpenConfirmDialog && (
        <UserConfirmDeleteDialog
          user={user}
          shouldOpenConfirmDialog={shouldOpenConfirmDialog}
          handleCloseConfirmDialog={handleCloseConfirmDialog}
        />
      )}
    </UserContext.Provider>
  )
}
export {Users}
