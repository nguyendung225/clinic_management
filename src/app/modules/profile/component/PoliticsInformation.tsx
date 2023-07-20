import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { roleParty,roleUnion } from '../const/DialogConstant';
type Props = {};
const PoliticsInformation = (props: Props) => {
  const intl = useIntl();
  const [openField, setOpenField] = useState<boolean>(false);
  const handleOpenFiled = (): void => {
    setOpenField(!openField);
  };

  return (
    <>
      <div className="pt-9 ps-9">
        <span className='text-title open-field' onClick={handleOpenFiled}>
          {intl.formatMessage({ id: 'GENERAL.INFO.POLITICS' })}
          {!openField ? <div className="bi bi-chevron-down text-title-icon"></div> : <div className="bi bi-chevron-up text-title-icon"></div>}
        </span>
        {openField &&
        <>
          <div className='block-content'>
            <div className="content">
              <div className='item-content'>
                <span className='text-label pe-8'>
                  {intl.formatMessage({ id: 'INPUT.UNION.MEMBER' })}
                </span>
                <input className="form-check-input mt-0 checkbox-content" type="checkbox" value=""></input>
              </div>
              <div className='item-content'>
                <span className='text-label pe-8'>
                  {intl.formatMessage({ id: 'INPUT.PARTY.MEMBER' })}
                </span>
                <input className="form-check-input mt-0 checkbox-content" type="checkbox" value=""></input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.UNION.JOIN.DATE' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.UNION.JOIN.DATE' })} type='date' className='input form-control py-3 ps-7'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.PARTY.JOIN.DATE' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.PARTY.JOIN.DATE' })} type='date' className='input form-control py-3 ps-7'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.UNION.ROLE' })}
                </span>
                <select className="input form-select">
                  {roleUnion.map(item => <option value={item.id}>{item.name}</option>)}
                </select>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.PARTY.ROLE' })}
                </span>
                <select className="input form-select">
                  {roleParty.map(item => <option value={item.id}>{item.name}</option>)}
                </select>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.UNION.JOIN.PLACE' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.UNION.JOIN.PLACE' })} className='input form-control'>
                </input>
              </div>
              <div className='item-content'>
                <span className='text-label'>
                  {intl.formatMessage({ id: 'INPUT.PARTY.JOIN.PLACE' })}
                </span>
                <input placeholder={intl.formatMessage({ id: 'INPUT.PARTY.JOIN.PLACE' })} className='input form-control'>
                </input>
              </div>
            </div>

          </div>
        </>
        }
      </div>
    </>
  );
};

export default PoliticsInformation;