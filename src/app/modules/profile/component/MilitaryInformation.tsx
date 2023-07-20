import React, { useState } from 'react';
import { useIntl } from 'react-intl';
type Props = {};

const MilitaryInformation = (props: Props) => {
  const intl = useIntl();
  const [openField, setOpenField] = useState<boolean>(false);
  const handleOpenFiled = (): void => {
    setOpenField(!openField);
  };

  return (
    <>
      <div className="pt-9 ps-9">
        <span className='text-title open-field' onClick={handleOpenFiled}>
          {intl.formatMessage({ id: 'GENERAL.INFO.MILITARY' })}
          {!openField ? <div className="bi bi-chevron-down text-title-icon"></div> : <div className="bi bi-chevron-up text-title-icon"></div>}
        </span>
        {openField &&
          <div className="block-content">
            <div className="content">
              <div className='item-content'>
                <span className='text-label pe-8'>
                  {intl.formatMessage({ id: 'INPUT.MILITARY' })}
                </span>
                <input className="form-check-input mt-0 checkbox-content" type="checkbox" value=""></input>
              </div>
              <div className='item-content'>
                <span className='text-label pe-8'>
                  {intl.formatMessage({ id: 'INPUT.SOLDIERS.WOUNDED' })}
                </span>
                <input className="form-check-input mt-0 checkbox-content" type="checkbox" value=""></input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MILITARY.JOIN.DATE' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.MILITARY.JOIN.DATE' })} type='date' className='input form-control py-3 ps-7'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.SOLDIERS.WOUNDED.DATE' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.SOLDIERS.WOUNDED.DATE' })} type='date' className='input form-control py-3 ps-7'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MILITARY.ARMY' })}
                </span>
                <select className="input form-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.SOLDIERS.WOUNDED.RANK' })}
                </span>
                <select className="input form-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MILITARY.UNIT' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.MILITARY.UNIT' })} className='input form-control'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.SOLDIERS.WOUNDED.RATE' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.SOLDIERS.WOUNDED.RATE' })} className='input form-control'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MILITARY.LEVEL' })}
                </span>
                <select className="input form-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='item-content'>
                <span className='text-label pe-8'>
                  {intl.formatMessage({ id: 'INPUT.SOLDIERS.WOUNDED.REMIGE' })}
                </span>
                <input className="form-check-input mt-0 checkbox-content" type="checkbox" value=""></input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MILITARY.LEVEL' })}
                </span>
                <select className="input form-select">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className='item-content'>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MILITARY.OUT.DATE' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.MILITARY.OUT.DATE' })} type='date' className='input form-control py-3 ps-7'>
                </input>
              </div>
              <div className='item-content'>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.MILITARY.OUT.REASON' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.MILITARY.OUT.REASON' })} className='input form-control'>
                </input>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default MilitaryInformation;