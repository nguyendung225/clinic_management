import React, { useState } from 'react'
import { useIntl } from 'react-intl';
import '../profile.scss'
import { RelativesDialog } from './Dialog/RelativesDialog';
type Props = {}

const FamilyInformation = (props: Props) => {
  const intl = useIntl();
  const [shouldOpenRelativesDialog, setShouldOpenRelativesDialog] = useState<boolean>(false);
  const [openField, setOpenField] = useState<boolean>(false);
  const handleOpenFiled = (): void => {
    setOpenField(!openField);
  }
  const handleOpenRelativesDialog = (): void => {
    setShouldOpenRelativesDialog(true);
  };
  const handleCloseRelativesDialog = (): void => {
    setShouldOpenRelativesDialog(false);
  };
  return (
    <>
      <div className="pt-9 ps-9">
        <span className='text-title open-field' onClick={handleOpenFiled}>
          {intl.formatMessage({ id: 'GENERAL.INFO.FAMILY' })}
          {!openField ? <div className="bi bi-chevron-down text-title-icon"></div> : <div className="bi bi-chevron-up text-title-icon"></div>}
        </span>
        {openField &&
          <>
          <div className='content-custom'>
            <span className='text-add-field item-content' onClick={handleOpenRelativesDialog}>
              <div className="bi bi-plus-lg"></div>
              {intl.formatMessage({ id: 'INFO.FAMILY.ADD' })}
            </span>
          </div>
          </>
        }
      </div>
      <RelativesDialog
        shouldOpenRelativesDialog={shouldOpenRelativesDialog}
        handleOpenRelativesDialog={handleOpenRelativesDialog}
        handleCloseRelativesDialog={handleCloseRelativesDialog}
      />
    </>
  )
}

export default FamilyInformation