// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import { taskType } from '../../../models/TaskModels'


type Props = {
  row: Row<taskType>
  isDayOff: boolean
}

const CustomRow: FC<Props> = ({row, isDayOff}) => (
  <tr {...row.getRowProps()}>
    {row.cells.map((cell, index) => {
      const cellClasses = [
        isDayOff ? 'bg-dayoff' : 'bg-white',
        'position-sticky',
        'p-0',
        'z-index-5',
        'table-cell-outline',
        index === 0 ? 'start-0' : index === 1 ? 'start-120' : index === 2 ? 'start-270' : 'z-index-1',
      ];
      return (
        <td
          key={index}
          className={cellClasses.filter(cls => cls !== '').join(' ')}
        >
          {cell.render('Cell')}
        </td>
      )
    })}
  </tr>
)

export {CustomRow}
