// @ts-nocheck
import { FC } from 'react'
import { ColumnInstance } from 'react-table'
import { bangLichSuKham } from '../../../models/PhanHeTiepNhanModel'

type Props = {
  column: ColumnInstance<bangLichSuKham>
}

const CustomHeaderColumn: FC<Props> = ({ column }) => (
  <>
    {column.Header && typeof column.Header === 'string' ? (
      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
    ) : (
      column.render('Header')
    )}
  </>
)

export { CustomHeaderColumn }
