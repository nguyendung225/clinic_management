import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { DegreeDialog } from './Dialog/DegreeDialog';
import { CertificateDialog } from './Dialog/CertificateDialog';
import { getAllEthnics, getAllNation, getAllReligion, getAllSimpleValue } from '../services/ProfileServices';
import { ItemListAPI } from '../models/ProfileModels';
import { toast } from 'react-toastify';
import { familyElements, listGender, selfElement, statusMarry, typeBasicValue } from '../../projects/const/BasicConstant';
export const BasicInformation = (props: any) => {
    const intl = useIntl();
    const [openField, setOpenField] = useState<boolean>(true);
    const [shouldOpenDegreeDialog, setShouldOpenDegreeDialog] = useState<boolean>(false)
    const [shouldOpenCertificateDialog, setShouldOpenCertificateDialog] = useState<boolean>(false)
    let { handleGetDataFromChildren } = props
    const [listEthnics, setListEthnic] = useState([])
    const [listReligion, setListReligion] = useState([])
    const [listNation, setListNation] = useState([])
    const [dataProfile, setDataProfile]: any = useState({
    })
    const handleOpenCertificateDialog = (): void => {
        setShouldOpenCertificateDialog(true);
    };
    const handleCloseCertificateDialog = (): void => {
        setShouldOpenCertificateDialog(false);
    };
    const handleOpenFiled = (): void => {
        setOpenField(!openField);
    }
    const getSimpleValue = (type: number) => {
        getAllSimpleValue(type)
            .then(({ data }) => {
                if (type === typeBasicValue.tonGiao) {
                    setListReligion(data.data.content)
                }
            })
    }
    const handleOpenDegreeDialog = (): void => {
        setShouldOpenDegreeDialog(true)
    }
    const handleCloseDegreeDialog = (): void => {
        setShouldOpenDegreeDialog(false)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.name === 'etpGiaDinh') {
            setDataProfile({ ...dataProfile, [event?.target.name]: { ...dataProfile[event.target.name], id: event?.target.value } })
        } else if (event.target.name === 'etinhTrangHonNhan' || event.target.name === "tonGiao") {
            setDataProfile({ ...dataProfile, [event?.target.name]: { ...dataProfile[event.target.name], value: event?.target.value } })
        } else if (event.target.name === 'danToc' || event.target.name === 'quocTich') {
            setDataProfile({ ...dataProfile, [event?.target.name]: { ...dataProfile[event.target.name], code: event?.target.value } })
        } else {
            setDataProfile({ ...dataProfile, [event?.target.name]: event?.target.value })
        }
    }

    useEffect(() => {
        handleGetDataFromChildren(dataProfile)
    }, [dataProfile])

    useEffect(() => {
        getAllEthnics()
            .then(({ data }) => {
                setListEthnic(data.data)
            })
            .catch((err) => toast.error(err))

        getAllNation()
            .then(({ data }) => {
                setListNation(data.data)
            })
            .catch((err) => toast.error(err))
        getSimpleValue(typeBasicValue.tonGiao)
    }, [])
    return (<>
        <div className='pt-9 ps-9'>
            <span className='text-title open-field' onClick={handleOpenFiled}>
                {intl.formatMessage({ id: 'GENERAL.INFO.BASIC' })}
                {!openField ? <div className="bi bi-chevron-down text-title-icon"></div> : <div className="bi bi-chevron-up text-title-icon"></div>}
            </span>
            {openField &&
                <>
                    <div className='block-content'>
                        <span className='text-header'>
                            {intl.formatMessage({ id: 'INFO.MAIN' })}
                        </span>
                        <div className='content'>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.CODE' })}
                                </span>
                                <input onChange={e => handleChange(e)} name='code' placeholder={intl.formatMessage({ id: 'INPUT.CODE' })}
                                    className='input form-control'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.MARRY.STATUS' })}
                                </span>
                                <select onChange={(event) => handleChange(event)} name="etinhTrangHonNhan" className="input form-select" >
                                    {statusMarry?.map((item) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.FULLNAME' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='name'
                                    placeholder={intl.formatMessage({ id: 'INPUT.FULLNAME' })}
                                    className='input form-control'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.TAXCODE' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='mstCaNhan'
                                    placeholder={intl.formatMessage({ id: 'INPUT.TAXCODE' })}
                                    className='input form-control'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.GENDER' })}
                                </span>
                                <select onChange={(event) => handleChange(event)} className="input form-select" name="gender">
                                    <option className="input" selected>{intl.formatMessage({ id: 'INPUT.GENDER' })}</option>
                                    {listGender?.map((item) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.ELEMENT.FAMILY' })}
                                </span>
                                <select onChange={(event) => handleChange(event)} className="input form-select" name='etpGiaDinh'>
                                    <option selected>{intl.formatMessage({ id: 'INPUT.ELEMENT.FAMILY' })}</option>
                                    {familyElements?.map((item) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.BIRTHDAY' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='birthdate'
                                    placeholder={intl.formatMessage({ id: 'INPUT.BIRTHDAY' })}
                                    className='input form-control' type='date'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.ELEMENT.SELF' })}
                                </span>
                                <select onChange={(event) => handleChange(event)} className="input form-select" name='tpBanThan'>
                                    <option selected>{intl.formatMessage({ id: 'INPUT.ELEMENT.SELF' })}</option>
                                    {selfElement?.map((item) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.NATION' })}
                                </span>
                                <select onChange={(event) => handleChange(event)} className="input form-select" name='danToc'>
                                    <option selected>{intl.formatMessage({ id: 'INPUT.NATION' })}</option>
                                    {
                                        listEthnics?.map((item: ItemListAPI) => {
                                            return (
                                                <option value={item.code}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.RELIGION' })}
                                </span>
                                <select onChange={(event) => handleChange(event)} className="input form-select" name='tonGiao'>
                                    <option>Chọn {intl.formatMessage({ id: 'INPUT.RELIGION' })}</option>
                                    {
                                        listReligion?.map((item: ItemListAPI) => {
                                            return (
                                                <option value={item.id}>{item.value}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.PLACEOFBIRTH' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='noiSinh'
                                    placeholder={intl.formatMessage({ id: 'INPUT.PLACEOFBIRTH' })}
                                    className='input form-control'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.DOMICILE' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='nguyenQuan'
                                    placeholder={intl.formatMessage({ id: 'INPUT.DOMICILE' })}
                                    className='input form-control'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.NATIONALITY' })}
                                </span>
                                <select onChange={(event) => handleChange(event)} className="input form-select" name='quocTich'>
                                    <option selected>{intl.formatMessage({ id: 'INPUT.NATIONALITY' })}</option>
                                    {
                                        listNation?.map((item: ItemListAPI) => {
                                            return (
                                                <option value={item.code}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='block-content'>
                        <span className='text-header'>
                            {intl.formatMessage({ id: 'INFO.IDENTIFICATION' })}
                        </span>
                        <div className='content'>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.KINDOFPAPERS' })}
                                </span>
                                <select onChange={(e) => handleChange(e)} className="input form-select" name='loaiGiayTo'>
                                    <option selected>{intl.formatMessage({ id: 'INPUT.KINDOFPAPERS' })}</option>
                                    <option value='CMND'>CMND</option>
                                    <option value='CCCD'>CCCD</option>
                                </select>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.IDENTIFICATION' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='soCMNDOrCCCD'
                                    placeholder={intl.formatMessage({ id: 'INPUT.IDENTIFICATION' })}
                                    className='input form-control'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.DATERANGE' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='ngayCapCMNDOrCCCD'
                                    placeholder={intl.formatMessage({ id: 'INPUT.DATERANGE' })}
                                    className='input form-control'
                                    type='date'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.PLACERANGE' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='noiCapCMNDOrCCCD'
                                    placeholder={intl.formatMessage({ id: 'INPUT.PLACERANGE' })}
                                    className='input form-control'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.EXPIRATIONDATE' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='ngayHetHanCMNDOrCCCD'
                                    placeholder={intl.formatMessage({ id: 'INPUT.EXPIRATIONDATE' })}
                                    className='input form-control'
                                    type='date'>
                                </input>
                            </div>
                            <div className='item-content'>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.PASSPORT' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='soHoChieu'
                                    placeholder={intl.formatMessage({ id: 'INPUT.PASSPORT' })}
                                    className='input form-control'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.PASSPORT.DATE' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='ngayCapHoChieu'
                                    placeholder={intl.formatMessage({ id: 'INPUT.PASSPORT.DATE' })}
                                    className='input form-control' type='date'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.PASSPORT.PLACE' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='noiCapHoChieu'
                                    placeholder={intl.formatMessage({ id: 'INPUT.PASSPORT.PLACE' })}
                                    className='input form-control'>
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'INPUT.PASSPORT.DATE.EXPIRATION' })}
                                </span>
                                <input
                                    onChange={e => handleChange(e)}
                                    name='ngayHetHanHoChieu'
                                    placeholder={intl.formatMessage({ id: 'INPUT.PASSPORT.DATE.EXPIRATION' })}
                                    className='input form-control'
                                    type='date'>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='block-content'>
                        <span className='text-header'>
                            {intl.formatMessage({ id: 'INFO.DEGREE' })}
                        </span>
                        <div className='content'>
                            <span className='text-add-field item-content' onClick={handleOpenDegreeDialog}>
                                <div className="bi bi-plus-lg"></div>
                                {intl.formatMessage({ id: 'INFO.DEGREE.ADD' })}
                            </span>
                        </div>
                    </div>
                    <div className='block-content'>
                        <span className='text-header'>
                            {intl.formatMessage({ id: 'INFO.CERTIFICATE' })}
                        </span>
                        <div className='content'>
                            <span className='text-add-field item-content' onClick={handleOpenCertificateDialog}>
                                <div className="bi bi-plus-lg"></div>
                                {intl.formatMessage({ id: 'INFO.CERTIFICATE.ADD' })}
                            </span>
                        </div>
                    </div>
                </>
            }
            <DegreeDialog
                shouldOpenDegreeDialog={shouldOpenDegreeDialog}
                handleOpenDegreeDialog={handleOpenDegreeDialog}
                handleCloseDegreeDialog={handleCloseDegreeDialog}
            />
            <CertificateDialog
                shouldOpenCertificateDialog={shouldOpenCertificateDialog}
                handleOpenCertificateDialog={handleOpenCertificateDialog}
                handleCloseCertificateDialog={handleCloseCertificateDialog}
            />
        </div >
    </>)
}