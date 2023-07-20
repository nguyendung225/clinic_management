import {FC, useState} from 'react'
import {Button, Spinner} from 'react-bootstrap'
import {useIntl} from 'react-intl'
import BreadcrumbsWidget from '../../../_metronic/partials/widgets/breadCrumbs/BreadCrumbsWidget'
import {ProjectsDialog} from './components/ProjectsDialog'
import {ProjectsTable} from './components/table/ProjectsTable'
import {ProjectContext} from './services/ProjectContext'
import './projects.scss'
import {ConfirmDialog} from './components/ConfirmDialog'
import {ProjectType} from './models/ProjectModels'
import {deleteProject} from './services/ProjectServices'
import {toast} from 'react-toastify'
import { INIT_PROJECT } from './const/ProjectConst'
import { hasAuthority } from '../utils/Permission'
import { SUCCESS_RESPONSE } from '../users/const/UserConst'

const Projects: FC = () => {
  const intl = useIntl()
  const items = [
    {text: intl.formatMessage({id: 'MENU.CATEGORY'}), url: '/category/project'},
    {text: intl.formatMessage({id: 'MENU.CATEGORY.PROJECT'}), url: '/category/project'},
  ]

  const [shouldOpenEditorDialog, setShouldOpenEditorDialog] = useState<boolean>(false)
  const [shouldOpenConfirmDialog, setShouldOpenConfirmDialog] = useState<boolean>(false)
  const [project, setProject] = useState<ProjectType>({...INIT_PROJECT})
  const [state, setState] = useState<boolean>(true)
  const [loading, setLoading] = useState(false)

  const handleEdit = (data: ProjectType): void => {
    setShouldOpenEditorDialog(true)
    setProject(data)
  }

  const handleDelete = (data: ProjectType): void => {
    setLoading(true)
    deleteProject(project?.id)
      .then((res) => {
        handleCloseConfirmDialog()
        setState(!state)
        setLoading(false)
        if(res.data.code === SUCCESS_RESPONSE){
          toast.success(intl.formatMessage({id: 'TOAST.DELETE.SUCCESS'}))
        }else{
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        handleCloseConfirmDialog()
        setLoading(false)
        toast.error(intl.formatMessage({id: 'TOAST.DELETE.ERROR'}))
      })
  }

  const handleOpenEditorDialog = (): void => {
    setProject(INIT_PROJECT)
    setShouldOpenEditorDialog(true)
  }

  const handleCloseEditorDialog = (): void => {
    setShouldOpenEditorDialog(false)
  }

  const handleOpenConfirmDialog = (data: ProjectType): void => {
    setProject(data)
    setShouldOpenConfirmDialog(true)
  }

  const handleCloseConfirmDialog = (): void => {
    setShouldOpenConfirmDialog(false)
  }

  return (
    <ProjectContext.Provider value={{handleEdit, handleOpenConfirmDialog}}>
      {loading && (
        <div className='loading-full-screen'>
          <Spinner animation='border' variant='primary' className='spinner-lg' />
        </div>
      )}
      <BreadcrumbsWidget items={items}></BreadcrumbsWidget>

      {hasAuthority('PROJECT.CREATE') && (
        <Button className='mt-5 bg-pri' onClick={() => handleOpenEditorDialog()}>
          {intl.formatMessage({id: 'BTN.ADD'})}
        </Button>
      )}

      {shouldOpenEditorDialog && (
        <ProjectsDialog
          show={shouldOpenEditorDialog}
          handleClose={handleCloseEditorDialog}
          data={project}
          state={state}
          setState={setState}
        />
      )}

      {shouldOpenConfirmDialog && (
        <ConfirmDialog
          show={shouldOpenConfirmDialog}
          title={intl.formatMessage({id: 'DIALOG.CONFIRM.DELETE.TITLE'})}
          message={intl.formatMessage({id: 'DIALOG.CONFIRM.DELETE.MESSAGE'})}
          yes={intl.formatMessage({id: 'BTN.CONFIRM'})}
          onYesClick={() => handleDelete(project)}
          cancel={intl.formatMessage({id: 'BTN.CANCEL'})}
          onCancelClick={handleCloseConfirmDialog}
        />
      )}

      <ProjectsTable state={state} />
    </ProjectContext.Provider>
  )
}

export {Projects}
