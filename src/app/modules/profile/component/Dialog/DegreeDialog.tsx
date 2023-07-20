import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useIntl } from 'react-intl';
import '../../../styles/index.scss'
import { Button } from 'react-bootstrap';
import { levelTraining,rankOfEducation } from '../../const/DialogChildConstants';
interface Props {
  shouldOpenDegreeDialog: boolean,
  handleOpenDegreeDialog: () => void,
  handleCloseDegreeDialog: () => void;
}

export const DegreeDialog = (props: Props) => {
  const intl = useIntl();
  const { shouldOpenDegreeDialog, handleOpenDegreeDialog, handleCloseDegreeDialog } = props;
  return (
    <Modal
      show={shouldOpenDegreeDialog}
      size='xl'
      aria-labelledby="example-custom-modal-styling-title"
      onHide={handleCloseDegreeDialog}
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title"
        className='heading-5'
        >
          {intl.formatMessage({ id: 'INFO.DEGREE' })}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="block-content">
          <div className="content">
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.PLACETRAINING' })}
              </span>
              <select className="input form-select">
                <option value="1">Các drop down này gọi api</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.YEAR.START' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.DEGREE.YEAR.START' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.YEAR.END' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.DEGREE.YEAR.END' })} className='input form-control'>
              </input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.FACULTY' })}
              </span>
              <select className="input form-select">
                <option value="1">Các drop down này gọi api</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.SPECIALIZED' })}
              </span>
              <select className="input form-select">
                <option value="1">Các drop down này gọi api</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.LEVEL' })}
              </span>
              <select className="input form-select">
                {levelTraining.map(item => <option value={item.id}>{item.name}</option>)}
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.FORM' })}
              </span>
              <select className="input form-select">
                <option value="1">Các drop down này gọi api</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.RANK' })}
              </span>
              <select className="input form-select">
                {rankOfEducation.map(item => <option value={item.id}>{item.name}</option>)}
              </select>
            </div>
            <div className='item-content'>
              <span className='text-label pe-8'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.GRADUATE' })}
              </span>
              <input className="form-check-input mt-0 checkbox-content" type="checkbox" value=""></input>
            </div>
            <div className='item-content'>
              <span className='text-label'>
                {intl.formatMessage({ id: 'INPUT.DEGREE.GRADUATE.DATE' })}
              </span>
              <input placeholder={intl.formatMessage({ id: 'INPUT.DEGREE.GRADUATE.DATE' })} type='date' className='input form-control py-3 ps-7'>
              </input>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex-center">
        <Button variant="outline-secondary" className='button-secondary' onClick={() => handleCloseDegreeDialog()} > {intl.formatMessage({ id: 'BTN.CANCEL' })}</Button>
        <Button variant="outline-primary" className='button-low-primary'> {intl.formatMessage({ id: 'BTN.ADDANDSAVE' })}</Button>
        <Button variant="primary" className='button-primary'> {intl.formatMessage({ id: 'BTN.SAVE' })}</Button>
      </Modal.Footer>
    </Modal>
  );
};