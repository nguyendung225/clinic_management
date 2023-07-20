import {FC, useContext} from 'react'
import {ButtonToolbar, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {useIntl} from 'react-intl'
import {ProjectType} from '../models/ProjectModels'
import { ProjectContext } from '../services/ProjectContext'

type Props = {
  data: ProjectType
}

const ProjectsActions: FC<Props> = ({data}) => {
  const intl = useIntl()
  const {handleEdit, handleOpenConfirmDialog} = useContext(ProjectContext)
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <ButtonToolbar>
        <OverlayTrigger
          placement='top'
          delay={150}
          overlay={
            <Tooltip id='tooltip' className='in'>
              <b>
                {intl.formatMessage({id: 'BTN.EDIT'}) +
                  ' ' +
                  intl.formatMessage({id: 'MENU.CATEGORY.PROJECT'}).toLowerCase()}
              </b>
            </Tooltip>
          }
        >
          <button
            className='button__icon d-flex justify-content-center align-items-center me-1'
            onClick={() => handleEdit(data)}
          >
            <i className='fa-solid fa-pen text-pri fs-4'></i>
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          placement='top'
          delay={150}
          overlay={
            <Tooltip id='tooltip' className='in'>
              <b>
                {intl.formatMessage({id: 'BTN.DELETE'}) +
                  ' ' +
                  intl.formatMessage({id: 'MENU.CATEGORY.PROJECT'}).toLowerCase()}
              </b>
            </Tooltip>
          }
        >
          <button
            className='button__icon d-flex justify-content-center align-items-center'
            onClick={() => handleOpenConfirmDialog(data)}
          >
            <i className='fa-solid fa-trash text-danger fs-4'></i>
          </button>
        </OverlayTrigger>
      </ButtonToolbar>
    </div>
  )
}

export {ProjectsActions}
