import React, { useState } from 'react';
import { useIntl } from 'react-intl';
type Props = {};

const MedicalInformation = (props: Props) => {
  const intl = useIntl();
  const [openField, setOpenField] = useState<boolean>(false);
  const handleOpenFiled = (): void => {
    setOpenField(!openField);
  };

  return (
    <>
      <div className="pt-9 ps-9">
        <span className='text-title open-field' onClick={handleOpenFiled}>
          {intl.formatMessage({ id: 'GENERAL.INFO.MEDICAL' })}
          {!openField ? <div className="bi bi-chevron-down text-title-icon"></div> : <div className="bi bi-chevron-up text-title-icon"></div>}
        </span>
        {openField &&
          <div className="block-content">
            <div className="content">
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MEDICAL.BLOODTYPE' })}
                </span>
                <select className="input form-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MEDICAL.DISEASES' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.MEDICAL.DISEASES' })} className='input form-control'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MEDICAL.HEIGHT' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.MEDICAL.HEIGHT' })} className='input form-control'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MEDICAL.NOTE' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.MEDICAL.NOTE' })} className='input form-control'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MEDICAL.WEIGHT' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.MEDICAL.WEIGHT' })} className='input form-control'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MEDICAL.DISABILITIES' })}
                </span>
                <select className="input form-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MEDICAL.HEALTHCONDITION' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.MEDICAL.HEALTHCONDITION' })} className='input form-control'>
                </input>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default MedicalInformation;