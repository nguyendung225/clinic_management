import {FC} from 'react'
import {ButtonToolbar, OverlayTrigger, Pagination, Tooltip} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {useIntl} from 'react-intl'
import clsx from "clsx";

interface TablePaginationProps {
  handlePagesChange: (
    num: number,
    currentPage: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    totalPages: number
  ) => void
  handleRowsPerPageChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    setRowsPerPage: React.Dispatch<React.SetStateAction<number>>
  ) => void
  rowsPerPage: number
  rowsForPage: number[]
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
  totalElements: number
  className?: string
}
const TablePagination: FC<TablePaginationProps> = (props) => {
  const {
    handlePagesChange,
    handleRowsPerPageChange,
    rowsPerPage,
    rowsForPage,
    page,
    setPage,
    setRowsPerPage,
    totalPages,
    totalElements,
    className,
  } = props
  const intl = useIntl()
  let startIndex = (page - 1) * rowsPerPage + 1;
  let endIndex = Math.min(startIndex + rowsPerPage - 1, totalElements);
  return (
    <div className={clsx(className, "flex justify-content-between gap-2 border-top border-bottom px-4 align-items-center bg-white ")}>
      <div className='d-flex justify-content-centerr gap-2 align-items-center'>
        {intl.formatMessage({id: 'TABLE.ROWSPERPAGE'})}
        <Form.Select
          size='sm'
          value={rowsPerPage}
          onChange={(e) => {
            setPage(1)
            handleRowsPerPageChange(e, setRowsPerPage)
          }}
          className='footer-select'
        >
          {rowsForPage.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
        {startIndex} - {endIndex} {intl.formatMessage({id: 'AUTH.GENERAL.IN'}).toLowerCase()} {totalElements}
      </div>
      <Pagination className='pagination justify-content-center align-items-center'>
        <ButtonToolbar>
          <OverlayTrigger
            placement='top'
            delay={150}
            overlay={
              <Tooltip id='tooltip' className='in'>
                <b>{intl.formatMessage({id: 'TABLE.PAGINATION.FIRST'})}</b>
              </Tooltip>
            }
          >
            <Pagination.First
              disabled={page === 1}
              onClick={() => handlePagesChange(-2, page, setPage, totalPages)}
            />
          </OverlayTrigger>
          <OverlayTrigger
            placement='top'
            delay={150}
            overlay={
              <Tooltip id='tooltip' className='in'>
                <b>{intl.formatMessage({id: 'TABLE.PAGINATION.PREVIOUS'})}</b>
              </Tooltip>
            }
          >
            <Pagination.Prev
              disabled={page === 1}
              onClick={() => handlePagesChange(-1, page, setPage, totalPages)}
            />
          </OverlayTrigger>
          <div className='d-flex align-items-center ms-2 me-2 text-gray-600'>
            {page} / {totalPages}
          </div>
          <OverlayTrigger
            placement='top'
            delay={150}
            overlay={
              <Tooltip id='tooltip' className='in'>
                <b>{intl.formatMessage({id: 'TABLE.PAGINATION.NEXT'})}</b>
              </Tooltip>
            }
          >
            <Pagination.Next
              disabled={page === totalPages}
              onClick={() => handlePagesChange(1, page, setPage, totalPages)}
            />
          </OverlayTrigger>
          <OverlayTrigger
            placement='top'
            delay={150}
            overlay={
              <Tooltip id='tooltip' className='in'>
                <b>{intl.formatMessage({id: 'TABLE.PAGINATION.LAST'})}</b>
              </Tooltip>
            }
          >
            <Pagination.Last
              disabled={page === totalPages}
              onClick={() => handlePagesChange(2, page, setPage, totalPages)}
            />
          </OverlayTrigger>
        </ButtonToolbar>
      </Pagination>
    </div>
  )
}
export {TablePagination}
