import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useIntl } from 'react-intl';
import '../../../styles/index.scss';
import { Button } from 'react-bootstrap';
import { Relatives } from '../../const/DialogChildConstants';

interface Props {
  shouldOpenRelativesDialog: boolean,
  handleOpenRelativesDialog: () => void,
  handleCloseRelativesDialog: () => void;
}

export const RelativesDialog = (props: Props) => {
  const intl = useIntl();
  const { shouldOpenRelativesDialog, handleOpenRelativesDialog, handleCloseRelativesDialog } = props;
  return (
    <Modal
      show={shouldOpenRelativesDialog}
      size='xl'
      aria-labelledby="example-custom-modal-styling-title"
      onHide={handleCloseRelativesDialog}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title"
          className='heading-5'
        >
          {intl.formatMessage({ id: 'INPUT.RELATIVE' })}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="block-content">
          <div className="content">
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.RELATIONSHIP' })}
              </span>
              <select className="input form-select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.FULLNAME' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.RELATIVE.FULLNAME' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.GENDER' })}
              </span>
              <select className="input form-select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.DATE' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.RELATIVE.DATE' })} type='date' className='input form-control py-3 ps-7'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.NATION' })}
              </span>
              <select className="input form-select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.REGION' })}
              </span>
              <select className="input form-select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.EMAIL' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.RELATIVE.EMAIL' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.PHONE' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.RELATIVE.PHONE' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.JOB' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.RELATIVE.JOB' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.JOB.PLACE' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.RELATIVE.JOB.PLACE' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label pe-8'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.SAMEBLOOD' })}
              </span>
              <input className="form-check-input mt-0 checkbox-content" type="checkbox" value=""></input>
            </div>
            <div className='item-content'>
              <span className='text-label pe-8'>
                {intl.formatMessage({ id: 'INPUT.RELATIVE.EMERGENCYCONTACT' })}
              </span>
              <input className="form-check-input mt-0 checkbox-content" type="checkbox" value=""></input>
            </div>
         </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex-center">
        <Button variant="outline-secondary" className='button-secondary' onClick={() => handleCloseRelativesDialog()} > {intl.formatMessage({ id: 'BTN.CANCEL' })}</Button>
        <Button variant="outline-primary" className='button-low-primary'> {intl.formatMessage({ id: 'BTN.ADDANDSAVE' })}</Button>
        <Button variant="primary" className='button-primary'> {intl.formatMessage({ id: 'BTN.SAVE' })}</Button>
      </Modal.Footer>
    </Modal>
  );
};