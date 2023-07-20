import React, { useState } from 'react';
import { useIntl } from 'react-intl';
type Props = {};

const VaccinationInformation = (props: Props) => {
  const intl = useIntl();
  const [openField, setOpenField] = useState<boolean>(false);
  const handleOpenFiled = (): void => {
    setOpenField(!openField);
  };

  return (
    <>
      <div className="pt-9 ps-9">
        <span className='text-title open-field' onClick={handleOpenFiled}>
          {intl.formatMessage({ id: 'GENERAL.INFO.VACCINATION' })}
          {!openField ? <div className="bi bi-chevron-down text-title-icon"></div> : <div className="bi bi-chevron-up text-title-icon"></div>}
        </span>
      </div>
      {openField &&
        <>
          <div className='content-custom'>
            <span className='text-add-field item-content'>
              <div className="bi bi-plus-lg"></div>
              {intl.formatMessage({ id: 'INFO.ADD' })}
            </span>
          </div>
        </>}
    </>
  );
};

export default VaccinationInformation;