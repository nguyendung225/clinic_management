/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
import {Column} from 'react-table'
import {ProjectsActions} from '../../ProjectsActions'
import {useIntl} from 'react-intl'
import {ProjectsCustomHeader} from './ProjectsCustomHeader'
import {ProjectType} from '../../../models/ProjectModels'
import {PROJECT_STATUS} from '../../../const/ProjectConst'

const ProjectsColumns: ReadonlyArray<Column<ProjectType>> = [
  {
    Header: (props) => (
      <ProjectsCustomHeader
        tableProps={props}
        title={useIntl().formatMessage({id: 'CATEGORY.PROJECT.TABLE.NUMERICAL'})}
        className='col-1 text-center text-white px-3'
      />
    ),
    id: 'numerical',
    Cell: ({...props}) => <div className='text-center ps-3'>{props.row.index + 1}</div>,
  },
  {
    Header: (props) => (
      <ProjectsCustomHeader
        tableProps={props}
        title={useIntl().formatMessage({id: 'CATEGORY.PROJECT.TABLE.ACTION'})}
        className='col-1 text-center text-white px-3'
      />
    ),
    id: 'actions',
    Cell: ({...props}) => <ProjectsActions data={props.cell.row.original} />,
  },
  {
    Header: (props) => (
      <ProjectsCustomHeader
        tableProps={props}
        title={useIntl().formatMessage({id: 'CATEGORY.PROJECT.CODE'})}
        className='col-2 text-start text-white px-6'
      />
    ),
    id: 'code',
    Cell: ({...props}) => <div className='text-start px-3'>{props.data[props.row.index].code}</div>,
  },
  {
    Header: (props) => (
      <ProjectsCustomHeader
        tableProps={props}
        title={useIntl().formatMessage({id: 'CATEGORY.PROJECT.NAME'})}
        className='col-6 text-start text-white px-6'
      />
    ),
    id: 'name',
    Cell: ({...props}) => <div className='text-start px-3'>{props.data[props.row.index].name}</div>,
  },
  {
    Header: (props) => (
      <ProjectsCustomHeader
        tableProps={props}
        title={useIntl().formatMessage({id: 'CATEGORY.PROJECT.STATUS'})}
        className='col-2 text-start text-white px-6'
      />
    ),
    id: 'status',
    Cell: ({...props}) => {
      let status = props.data[props.row.index].status
      return (
      <div className='text-start px-3'>
        {PROJECT_STATUS.map((item) => {
          if(item.value === status){
            return useIntl().formatMessage({id: item.title})
          }
        })}
      </div>
      )
    },
  },
]

export {ProjectsColumns}
