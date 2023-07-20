// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import { bangKhamBenh } from '../../../models/PhanHeTiepNhanModel'

type Props = {
  row: Row<bangKhamBenh>
}

const CustomRow: FC<Props> = ({row}) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell) => {
      return (
        <td
          {...cell.getCellProps()}
          className={clsx({
            'text-end min-w-100px': cell.column.id === 'actions',
            'text-system': true,
          })}
        >
          {cell.render('Cell')}
        </td>
      )
    })}
  </tr>
)

export {CustomRow}
