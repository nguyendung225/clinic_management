import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useIntl } from 'react-intl';
import '../../../styles/index.scss';
import { Button } from 'react-bootstrap';
import { groupOfCertificate } from '../../const/DialogChildConstants';
interface Props {
  shouldOpenCertificateDialog: boolean,
  handleOpenCertificateDialog: () => void,
  handleCloseCertificateDialog: () => void;
}

export const CertificateDialog = (props: Props) => {
  const intl = useIntl();
  const { shouldOpenCertificateDialog, handleOpenCertificateDialog, handleCloseCertificateDialog } = props;
  return (
    <Modal
      show={shouldOpenCertificateDialog}
      size='xl'
      aria-labelledby="example-custom-modal-styling-title"
      onHide={handleCloseCertificateDialog}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title"
          className='heading-5'
        >
          {intl.formatMessage({ id: 'INFO.CERTIFICATE' })}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="block-content">
          <div className="content">
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.CERTIFICATE.GROUP' })}
              </span>
              <select className="input form-select">
                {groupOfCertificate.map(item => <option value={item.id}>{item.name}</option>)}
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.CERTIFICATE.NAME' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.CERTIFICATE.NAME' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.CERTIFICATE.NUMBER' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.CERTIFICATE.NUMBER' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.CERTIFICATE.LEVEL' })}
              </span>
              <select className="input form-select">
                <option value="1">Các drop down này gọi api</option>
                <option value="2">Two</option>
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.GRADUATE.DATE' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.CERTIFICATE.DATE.PROVIDE' })} type='date' className='input form-control py-3 ps-7'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.CERTIFICATE.DATE.PROVIDE' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.CERTIFICATE.PLACE' })} type='date' className='input form-control py-3 ps-7'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.CERTIFICATE.POINT' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.CERTIFICATE.PLACE' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.CERTIFICATE.POINT' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.CERTIFICATE.POINT' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.CERTIFICATE.RANK' })}
              </span>
              <select className="input form-select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.CERTIFICATE.NOTE' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.CERTIFICATE.NOTE' })} className='input form-control'>
              </input>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex-center">
        <Button variant="outline-secondary" className='button-secondary' onClick={() => handleCloseCertificateDialog()} > {intl.formatMessage({ id: 'BTN.CANCEL' })}</Button>
        <Button variant="outline-primary" className='button-low-primary'> {intl.formatMessage({ id: 'BTN.ADDANDSAVE' })}</Button>
        <Button variant="primary" className='button-primary'> {intl.formatMessage({ id: 'BTN.SAVE' })}</Button>
      </Modal.Footer>
    </Modal>
  );
};