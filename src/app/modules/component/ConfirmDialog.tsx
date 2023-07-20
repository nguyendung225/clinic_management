import {FC} from 'react'
import {Button, Modal} from 'react-bootstrap'

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
  const {show, onCloseClick, onYesClick, onCancelClick, title, message, yes, cancel, close} = props

  return (
    <Modal
      size='sm'
      show={show}
      onHide={onCloseClick}
      centered
      animation
      className='background__modal'
    >
      <Modal.Header className='bg-danger'>
        <Modal.Title className='text-white text-uppercase'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{message}</h5>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-end'>
        {yes && (
          <Button variant='secondary' onClick={onYesClick}>
            {yes}
          </Button>
        )}
        {cancel && (
          <Button
            variant='secondary'
            onClick={onCancelClick}
          >
            {cancel}
          </Button>
        )}
        {close && (
          <Button
            variant='secondary'
            onClick={onCloseClick}
          >
            {close}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export {ConfirmDialog}
