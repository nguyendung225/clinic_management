import { User } from '../models/UserModels';
import React, { useState,FC } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useIntl } from 'react-intl';
import { deleteUser } from '../services/userService';
import { toast } from 'react-toastify';
import '../components/user.scss'
type Props = {
  user?: User,
  handleCloseConfirmDialog: () => void,
  shouldOpenConfirmDialog:boolean
};
const UserConfirmDeleteDialog: FC<Props> = (props) => {
  const intl = useIntl();
  const { user, handleCloseConfirmDialog, shouldOpenConfirmDialog } = props
  const handleDeleteUser = () => {
    user?.id && deleteUser(user.id).then(response => {
      if (response.status === 200) {
        toast.success(intl.formatMessage({ id: 'TOAST.DELETE.SUCCESS' }))
        handleCloseConfirmDialog();
      }
      else {
        toast.error(intl.formatMessage({ id: 'TOAST.DELETE.FALSE' }))
      }
    })
  };
  return (
    <Modal  show={shouldOpenConfirmDialog} onHide={handleCloseConfirmDialog}  size='sm' centered>
    <Modal.Header className='bg-danger pt-4 pb-4' closeButton>
      <Modal.Title className='text-light '>{intl.formatMessage({ id: 'USER.DIALOG.TITLE.DELETE' })}</Modal.Title>
    </Modal.Header>
      <Modal.Body>{intl.formatMessage({ id: 'CONFIRM.CONFIRM' })}</Modal.Body>
    <Modal.Footer className=' pt-2 pb-2'>
      <Button variant="secondary" onClick={handleCloseConfirmDialog}>
      {intl.formatMessage({ id: 'CONFIRM.NO' })}
      </Button>
      <Button variant="secondary" onClick={handleDeleteUser}>
      {intl.formatMessage({ id: 'CONFIRM.YES' })}
      </Button>
    </Modal.Footer>
  </Modal>
  )
};
export {UserConfirmDeleteDialog}