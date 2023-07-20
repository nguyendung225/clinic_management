// @ts-nocheck
import {FC} from 'react'
import {ColumnInstance} from 'react-table'
import { taskType } from '../../../models/TaskModels'


type Props = {
  column: ColumnInstance<taskType>
}

const CustomHeaderColumn: FC<Props> = ({column}) => (
  <>
    {column.Header && typeof column.Header === 'string' ? (
      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
    ) : (
      column.render('Header')
    )}
  </>
)

export {CustomHeaderColumn}
