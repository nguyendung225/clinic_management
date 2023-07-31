import { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'

interface Props {
  show: boolean
  onCloseClick?: () => void
  onYesClick?: () => void
  onCancelClick?: () => void
  title?: string
  message?: string
  yes?: string
  cancel?: string
  close?: string
}

const ConfirmDialog: FC<Props> = (props) => {
  const { show, onCloseClick, onYesClick, onCancelClick, title, message, yes, cancel, close } = props

  return (
    <Modal
      show={show}
      onHide={onCloseClick}
      centered
      animation
      className='background__modal'
    >
      <Modal.Header className='bg-pri p-4'>
        <Modal.Title className='text-white text-uppercase'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='p-4'>
        <h5 className='m-0'>{message}</h5>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-end p-4 pt-0  border-top-0'>
        {cancel && (
          <Button
            className="spaces btn-secondary px-16"
            onClick={onCancelClick}
          >
            {cancel}
          </Button>
        )}
        {close && (
          <Button
            className="btn-secondary"
            onClick={onCloseClick}
          >
            {close}
          </Button>
        )}
        {yes && (
          <Button className="btn-navy" onClick={onYesClick}>
            {yes}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export { ConfirmDialog }
