import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { 
    getAllCommune, 
    getAllDistrict, 
    getAllNation, 
    getAllProvince, 
    getCommuneByDistrict, 
    getDistrictByProvince 
} from '../services/ProfileServices';
import { ItemListAPI } from '../models/ProfileModels';
export const ContactInformation = (props: any) => {
    let {handleGetDataFromChildren} = props
    const intl = useIntl()
    const [openField, setOpenField] = useState<boolean>(false);
    const handleOpenFiled = (): void => {
        setOpenField(!openField);
    }
    const [contactInfo, setContactInfo] = useState({})
    const [listNation, setListNation] = useState([])
    const [listProvince, setListProvince] = useState([])
    const [listDistrictHK, setListDistrictHK] = useState([])
    const [listCommuneHK, setListCommuneHK] = useState([])
    const [listDistrictTT, setListDistrictTT] = useState([])
    const [listCommuneTT, setListCommuneTT] = useState([])
    const [listDistrictHN, setListDistrictHN] = useState([])
    const [listCommuneHN, setListCommuneHN] = useState([])
    const handleChangeProvince = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setContactInfo({ ...contactInfo, [event?.target.name]: event?.target.value })
        getDistrictByProvince(event.target.value)
            .then(({ data }) => {
                if (event.target.name === 'hkTinh') {
                    setListDistrictHK(data.data)
                } else if (event.target.name === 'ttTinh') {
                    setListDistrictTT(data.data)
                } else if (event.target.name === 'hnTinh') {
                    setListDistrictHN(data.data)
                }
            })
            handleGetDataFromChildren(contactInfo)
    }
    const handleChangeDistrict = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setContactInfo({ ...contactInfo, [event?.target.name]: event?.target.value })
        getCommuneByDistrict(event.target.value)
            .then(({ data }) => {
                if (event.target.name === 'hkTinh') {
                    setListCommuneHK(data.data)
                } else if (event.target.name === 'ttTinh') {
                    setListCommuneTT(data.data)
                } else if (event.target.name === 'hnTinh') {
                    setListCommuneHN(data.data)
                }
            })
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.name === 'hkLaChuHo' || event.target.name === 'hnGiongHoKhau') {
            const inputElement = event.target as HTMLInputElement;
            setContactInfo({ ...contactInfo, [event.target.name]: inputElement.checked })
        } else {

            setContactInfo({ ...contactInfo, [event?.target.name]: event?.target.value })
        }
    }

    useEffect(()=> {
        handleGetDataFromChildren(contactInfo)
    }, [contactInfo])

    useEffect(() => {
        getAllNation()
            .then(({ data }) => {
                setListNation(data.data)
            })

        getAllProvince()
            .then(({ data }) => {
                setListProvince(data.data)
            })

        getAllDistrict()
            .then(({ data }) => {
                setListDistrictHK(data.data)
                setListDistrictHN(data.data)
                setListDistrictTT(data.data)
            })

        getAllCommune()
            .then(({ data }) => {
                setListCommuneHK(data.data)
                setListCommuneHN(data.data)
                setListCommuneTT(data.data)
            }
            )
    }, [])
    return (
        <div className='pt-9 ps-9'>
            <span className='text-title open-field' onClick={handleOpenFiled}>
                {intl.formatMessage({ id: 'GENERAL.INFO.CONTACT' })}
                {!openField ? <div className="bi bi-chevron-down text-title-icon"></div> : <div className="bi bi-chevron-up text-title-icon"></div>}
            </span>
            {openField &&
                <>
                    <div className='block-content'>
                        <span className='text-header'>
                            SĐT / EMAIL / Khác
                        </span>
                        <div className='content'>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.PHONE' })}
                                </span>
                                <input
                                    onChange={(event) => handleChange(event)}
                                    name="phone"
                                    placeholder={intl.formatMessage({ id: 'GENERAL.PHONE' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.OTHER_PHONE' })}
                                </span>
                                <input
                                    placeholder={intl.formatMessage({ id: 'GENERAL.OTHER_PHONE' })}
                                    name='otherPhone'
                                    onChange={(event) => handleChange(event)}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.PERSONAL_EMAIL' })}
                                </span>
                                <input
                                    placeholder={intl.formatMessage({ id: 'GENERAL.PERSONAL_EMAIL' })}
                                    onChange={(event) => handleChange(event)}
                                    name='emailCaNhan'
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.ORGAN_EMAIL' })}
                                </span>
                                <input
                                    placeholder={intl.formatMessage({ id: 'GENERAL.ORGAN_EMAIL' })}
                                    onChange={(event) => handleChange(event)}
                                    name='emailCoQuan'
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='block-content'>
                        <span className='text-header'>
                            {intl.formatMessage({ id: 'GENERAL.PERMANENT_RESIDENCE' })}
                        </span>
                        <div className='content'>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.NATIONAL' })}
                                </span>
                                <select
                                    onChange={(e) => handleChange(e)}
                                    className="input form-select"
                                    name='hkQuocGia'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.NATIONAL' })}
                                >
                                    <option selected>Quốc gia...</option>
                                    {listNation?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.PROVINCE' })}
                                </span>
                                <select
                                    onChange={(e) => { handleChangeProvince(e) }}
                                    className="input form-select"
                                    name='hkTinh'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.PROVINCE' })}
                                >
                                    <option selected>{intl.formatMessage({ id: 'GENERAL.PROVINCE' })}</option>
                                    {listProvince?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.DISTRICT' })}
                                </span>
                                <select
                                    onChange={(e) => handleChangeDistrict(e)}
                                    className="input form-select"
                                    name='hkHuyen'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.DISTRICT' })}
                                >
                                    <option selected>Quận / Huyện</option>
                                    {listDistrictHK?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.COMMUNE' })}
                                </span>
                                <select
                                    onChange={(e) => handleChange(e)}
                                    className="input form-select"
                                    name='hkXa'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.COMMUNE' })}
                                >
                                    <option selected>Phường / Xã</option>
                                    {listCommuneHK?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.ADDRESS.SPECIFIC' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    placeholder={intl.formatMessage({ id: 'GENERAL.ADDRESS.SPECIFIC' })}
                                    name='hkSoNha'
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.NUMBER_OF_HABITANTS' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    placeholder={intl.formatMessage({ id: 'GENERAL.NUMBER_OF_HABITANTS' })}
                                    name='hkSoHoKhau'
                                    className='input form-control py-3 ps-7' >
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.HOUSEHOLD_CODE' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    name='hkMaSoHoGiaDinh'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.HOUSEHOLD_CODE' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.ISHOUSEHOLDER' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    name='hkLaChuHo'
                                    className="form-check-input mt-0 checkblock-content"
                                    type="checkbox"
                                    value="">
                                </input>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.ADDRESS.PERMANENT_RESIDENCE' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    name='hkDiaChi'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.ADDRESS.PERMANENT_RESIDENCE' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='block-content'>
                        <span className='text-header'>
                            {intl.formatMessage({ id: 'GENERAL.ADDRESS.CURRENT' })}
                        </span>
                        <div className='content'>
                            <div className='w-50 ps-10 pe-12  mb-10'>
                                <span className='text-label pe-8'>
                                    Giống {intl.formatMessage({ id: 'GENERAL.PERMANENT_RESIDENCE' })}
                                </span>
                                <input
                                    className="form-check-input checkblock-content mt-0"
                                    type="checkbox"
                                    name='hnGiongHoKhau'
                                    onChange={e=> handleChange(e)}
                                    value="">
                                </input>
                            </div>
                            <div className='item-content'>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.NATIONAL' })}
                                </span>
                                <select
                                    onChange={(e) => handleChange(e)}
                                    name='hnQuocGia'
                                    className="input form-select"
                                    placeholder={intl.formatMessage({ id: 'GENERAL.NATIONAL' })}
                                >
                                    <option selected>Quốc Gia</option>
                                    {listNation?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.PROVINCE' })}
                                </span>
                                <select
                                    onChange={(e) => handleChangeProvince(e)}
                                    name='hnTinh'
                                    className="input form-select"
                                    placeholder={intl.formatMessage({ id: 'GENERAL.PROVINCE' })}
                                >
                                    <option selected>Tỉnh / TP</option>
                                    {listProvince?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.DISTRICT' })}
                                </span>
                                <select
                                    onChange={(e) => handleChangeDistrict(e)}
                                    name='hnHuyen'
                                    className="input form-select"
                                    placeholder={intl.formatMessage({ id: 'GENERAL.DISTRICT' })}
                                >
                                    <option selected>Quận / Huyện</option>
                                    {listDistrictHN?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.COMMUNE' })}
                                </span>
                                <select
                                    onChange={(e) => handleChange(e)}
                                    name='hnXa'
                                    className="input form-select"
                                    placeholder={intl.formatMessage({ id: 'GENERAL.COMMUNE' })}
                                >
                                    <option selected>Phường / Xã</option>
                                    {listCommuneHN?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.ADDRESS.SPECIFIC' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    name='hnSoNha'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.ADDRESS.SPECIFIC' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.NUMBER_OF_HABITANTS' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    name='hnSoHoKhau'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.NUMBER_OF_HABITANTS' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.HOUSEHOLD_CODE' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    name='hnMaSoHoGiaDinh'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.HOUSEHOLD_CODE' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.ADDRESS.PERMANENT_RESIDENCE' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    name='hnDiaChi'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.ADDRESS.PERMANENT_RESIDENCE' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='block-content'>
                        <span className='text-header'>
                            {intl.formatMessage({ id: 'GENERAL.ADDRESS.TEMPORARY' })}
                        </span>
                        <div className='content'>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.PROVINCE' })}
                                </span>
                                <select
                                    onChange={(e) => { handleChangeProvince(e) }}
                                    name='ttTinh'
                                    className="input form-select"
                                    placeholder={intl.formatMessage({ id: 'GENERAL.PROVINCE' })}
                                >
                                    <option selected>Tỉnh / TP</option>
                                    {listProvince?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>
                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.DISTRICT' })}
                                </span>
                                <select
                                    onChange={(e) => handleChangeDistrict(e)}
                                    name='ttHuyen'
                                    className="input form-select"
                                    placeholder={intl.formatMessage({ id: 'GENERAL.DISTRICT' })}
                                >
                                    <option selected>Quận / Huyện</option>
                                    {listDistrictTT?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.COMMUNE' })}
                                </span>
                                <select
                                    onChange={(e) => handleChange(e)}
                                    name='ttXa'
                                    className="input form-select"
                                    placeholder={intl.formatMessage({ id: 'GENERAL.COMMUNE' })}>
                                    <option selected>Phường / Xã</option>
                                    {listCommuneTT?.map((item: ItemListAPI) => <option value={item.id}>{item.name}</option>)}
                                </select>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.ADDRESS.SPECIFIC' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    name='ttSoNha'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.ADDRESS.SPECIFIC' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>


                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.ADDRESS.TEMPORARY' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    name='ttDiaChi'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.ADDRESS.TEMPORARY' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='block-content'>
                        <span className='text-header'>
                            {intl.formatMessage({ id: 'GENERAL.URGENT_CONTACT' })}
                        </span>
                        <div className='content'>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.FULLNAME' })}
                                </span>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    name='nameLhkc'
                                    placeholder={intl.formatMessage({ id: 'GENERAL.FULLNAME' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.RELATIVE' })}
                                </span>
                                <input
                                    name='quanheLhkc'
                                    onChange={e=> handleChange(e)}
                                    placeholder={intl.formatMessage({ id: 'GENERAL.RELATIVE' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.PHONE' })}
                                </span>
                                <input
                                    name='phoneLhkc'
                                    onChange={(e) => handleChange(e)}
                                    placeholder={intl.formatMessage({ id: 'GENERAL.PHONE' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>

                            <div className='item-content'>
                                <span className='text-label'>
                                    {intl.formatMessage({ id: 'GENERAL.ADDRESS' })}
                                </span>
                                <input
                                    name='diachiLhkc'
                                    onChange={(e) => handleChange(e)}
                                    placeholder={intl.formatMessage({ id: 'GENERAL.ADDRESS' })}
                                    className='input form-control py-3 ps-7'>
                                </input>
                            </div>
                        </div>
                    </div>
                </>}
        </div>
    )
}