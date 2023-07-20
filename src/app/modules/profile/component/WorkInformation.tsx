import { useIntl } from 'react-intl';
import { useEffect, useState } from 'react';
import '../profile.scss'
import { getAllDepartment, getAllDonVi, getAllSimpleValue } from '../services/ProfileServices';
import { ItemListAPI } from '../models/ProfileModels';
import { listContractType, natureOfWork, typeBasicValue } from '../../projects/const/BasicConstant';
export const WorkInformation = (props: any) => {
    let {handleGetDataFromChildren} = props
    const intl = useIntl()
    const [openField, setOpenField] = useState<boolean>(false)
    const handleOpenField = (): void => {
        setOpenField(!openField)
    }
    const [listDonVi, setListDonVi] = useState([])
    const [listDepartment, setListDepartment] = useState([])
    const [workInfo, setWorkInfo]: any = useState({})
    const [listPosition, setListPosition] = useState([])
    const [listLevel, setListLevel] = useState([])
    const [listRank, setListRank] = useState([])
    const [listPositionTitle, setListPositionTitle] = useState([])
    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement> ) => {
        setWorkInfo({...workInfo, [event.target.name]: {...workInfo[event.target.name], value: event.target.value}})
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> ) => {
        if(event.target.name === 'donViCongTac'){
            setWorkInfo({...workInfo, [event.target.name]: {...workInfo[event.target.name], code: event.target.value}})
        }  else {
            setWorkInfo({...workInfo, [event.target.name]: event.target.value})
        }
    }
    const getSimpleValue = (type: number) => {
        getAllSimpleValue(type)
        .then(({data})=> {
            if(type === typeBasicValue.position){
                setListPosition(data.data.content)
            } else if(type === typeBasicValue.positionTitle){
                setListPositionTitle(data.data.content)
            } else if(type === typeBasicValue.level) {
                setListLevel(data.data.content)
            } else if(type === typeBasicValue.rank) {
                setListRank(data.data.content)
            }
        })
    }
    useEffect(()=> {
        handleGetDataFromChildren(workInfo)
    }, [workInfo])
    useEffect(()=> {
        getAllDonVi()
        .then(({data})=> {
            setListDonVi(data.data)
        })
        getAllDepartment()
        .then(({data})=> {
            setListDepartment(data.data)
        })
        getSimpleValue(typeBasicValue.position)
        getSimpleValue(typeBasicValue.positionTitle)
        getSimpleValue(typeBasicValue.level)
        getSimpleValue(typeBasicValue.rank)
    }, [])
    return (
        <div className='pt-9 ps-9'>
            <span className='text-title open-field' onClick={handleOpenField}>
                {intl.formatMessage({ id: 'GENERAL.WORK_INFOR' })}
                {!openField ? <div className="bi bi-chevron-down text-title-icon"></div> : <div className="bi bi-chevron-up text-title-icon"></div>}
            </span>
            {openField && <>

            <div className='block-content'>
                <span className='text-header'>
                    {intl.formatMessage({ id: 'PROFILE.TITLE' })}
                </span>
                <div className='content'>
                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.CURRENT_ORGANIZATION' })}
                        </span>
                        <select
                            className="input form-select"
                            name='donViCongTac'
                            onChange={e => handleChange(e)}
                        >
                            <option>{intl.formatMessage({ id: 'GENERAL.CURRENT_ORGANIZATION' })}</option>
                            {listDonVi?.map((item: ItemListAPI) => <option value={item.code}>{item.name}</option>)}
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.OFFICE' })}
                        </span>
                        <select
                            name='phongBan'
                            onChange={e => handleChange(e)}
                            className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.OFFICE' })}</option>
                            {listDepartment?.map((item: ItemListAPI) => <option value={item.departmentId}>{item.departmentName}</option>)}
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.POSITION' })}
                        </span>
                        <select
                            name='viTriCongViec'
                            onChange={e => handleChangeSelect(e)}
                            className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.EMPLOYEE.POSITION' })}</option>
                            {listPosition?.map((item: ItemListAPI) => <option value={item.attributeId}>{item.value}</option>)}
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.TITLE' })}
                        </span>
                        <select
                            name='chucVu'
                            onChange={e => handleChangeSelect(e)}
                            className="input form-select">
                            <option >{intl.formatMessage({ id: 'GENERAL.EMPLOYEE.TITLE' })}</option>
                            {listPositionTitle?.map((item: ItemListAPI) => <option value={item.attributeId}>{item.value}</option>)}
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.LEVEL' })}
                        </span>
                        <select
                            name='cap'
                            onChange={e => handleChangeSelect(e)}
                            className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.EMPLOYEE.LEVEL' })}</option>
                            {listLevel.map((item: ItemListAPI)=> <option value={item.code}>{item.name}</option>)}
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.RANK' })}
                        </span>
                        <select
                            onChange={e => handleChangeSelect(e)}
                            name='bac'
                            className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.EMPLOYEE.RANK' })}</option>
                            {listRank.map((item: ItemListAPI)=> <option value={item.code}>{item.name}</option>)}
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.ACTIVE_STATUS' })}
                        </span>
                        <select
                            onChange={e => handleChange(e)}
                            name='eTrangThaiLaoDong'
                            className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.EMPLOYEE.ACTIVE_STATUS' })}</option>
                            <option value="2">Đang làm việc</option>
                            <option value="3">Đã nghỉ việc</option>
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.RESIGN_DATE' })}
                        </span>
                        <input 
                        onChange={e=> handleChange(e)}
                        name='ngayNghiViec'
                        placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.RESIGN_DATE' })} type='date' className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.RESIGN_REASON' })}
                        </span>
                        <input
                        onChange={e=> handleChange(e)}
                        name='lyDoNghi'
                        placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.RESIGN_REASON' })} 
                        className='input form-control py-3 ps-7'
                        >
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.NATURE_OF_WORK' })}
                        </span>
                        <select
                            onChange={e => handleChangeSelect(e)}
                            name='tinhChatLaoDong'
                            className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.EMPLOYEE.NATURE_OF_WORK' })}</option>
                            {natureOfWork.map((item) => <option value={item.id}>{item.name}</option>)}
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.WORK_PLACE' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='diaDiemLamViec'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.WORK_PLACE' })}
                            className='input form-control py-3 ps-7'
                        >
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.LABOR_MANAGE_NUMBER' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='soSoQlLaoDong'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.LABOR_MANAGE_NUMBER' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.CONTRACT_TYPE' })}
                        </span>
                        <select
                            onChange={e => handleChangeSelect(e)}
                            name='loaiHopDong'
                            className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.EMPLOYEE.CONTRACT_TYPE' })}</option>
                            {listContractType.map((item) => <option value={item.id}>{item.name}</option>)}
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.PROBATIONARY_START_DATE' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='ngayThuViec'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.PROBATIONARY_START_DATE' })}
                            type='date'
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.OFFICIAL_DATE' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='ngayChinhThuc'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.OFFICIAL_DATE' })}
                            type='date'
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.EXPECTED_RETIRE_DATE' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='ngayNghiHuuDuKien'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.EXPECTED_RETIRE_DATE' })}
                            type='date'
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.MANAGER' })}
                        </span>
                        <select className="input form-select" name='nguoiQuanLy' onChange={e=> handleChange(e)}>
                            <option>{intl.formatMessage({ id: 'GENERAL.EMPLOYEE.MANAGER' })}</option>
                            <option value="1">Two</option>
                            <option value="2">Three</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='block-content'>
                <span className='text-header'>
                    {intl.formatMessage({ id: 'GENERAL.SALARYINFOR' })}
                </span>
                <div className='content'>
                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.RANK_SALARY' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='bacLuong'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.RANK_SALARY' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.BASIC_SALARY' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='luongCoBan'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.BASIC_SALARY' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.INSURANCE_SALARY' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='luongDongBaoHiem'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.INSURANCE_SALARY' })}
                            className='input form-control py-3 ps-7' >
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.SUMMARY_SALARY' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='tongLuong'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.SUMMARY_SALARY' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.BANK_NUMBER' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='tkNganHang'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.BANK_NUMBER' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.BANK_NAME' })}
                        </span>
                        <select
                            onChange={e => handleChange(e)}
                            name='nganHangId'
                            className="input form-select"
                        >
                            <option selected>{intl.formatMessage({ id: 'GENERAL.EMPLOYEE.BANK_NAME' })}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.RANK_BRANCH' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='chiNhanh'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.RANK_BRANCH' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>
                </div>
            </div>

            <div className='block-content'>
                <span className='text-header'>
                    {intl.formatMessage({ id: 'GENERAL.ALLOWANCE' })}
                </span>
                <div className='content'>
                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.ALLOWANCE.NAME' })}
                        </span>
                        <select onChange={e=> handleChange(e)} className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.ALLOWANCE.NAME' })}</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.ALLOWANCE.VALUE' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            placeholder={intl.formatMessage({ id: 'GENERAL.ALLOWANCE.VALUE' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>
                    <div className='item-content'>
                        <span className='text-label pe-8'>
                            {intl.formatMessage({ id: 'GENERAL.CALCULATE_FOLLOW_SALARY' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            className="form-check-input mt-0 checkbox-content"
                            type="checkbox"
                            value="">
                        </input>
                    </div>
                </div>
            </div>

            <div className='ms-4 mt-4'>
                <span className='text-header'>
                    {intl.formatMessage({ id: 'GENERAL.DEDUCTIONS' })}
                </span>
                <div className='content w-100 mt-8'>
                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.DEDUCTIONS.NAME' })}
                        </span>
                        <select onChange={e=> handleChange(e)} className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.DEDUCTIONS.NAME' })}</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.DEDUCTIONS.VALUE' })}
                        </span>
                        <input
                            placeholder={intl.formatMessage({ id: 'GENERAL.DEDUCTIONS.VALUE' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>
                    <div className='item-content'>
                        <span className='text-label pe-8'>
                            {intl.formatMessage({ id: 'GENERAL.CALCULATE_FOLLOW_SALARY' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            className="form-check-input mt-0 checkbox-content"
                            type="checkbox"
                            value="">
                        </input>
                    </div>
                </div>
            </div>

            <div className='ms-4 mt-4'>
                <span className='text-header'>
                    {intl.formatMessage({ id: 'GENERAL.INSURANCE_INFOR__UNION' })}
                </span>
                <div className='content w-100 mt-8'>

                    <div className='item-content'>
                        <span className='text-label pe-8'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.HAS_ENSURANCE' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='thamGiaBaoHiem'
                            className="form-check-input mt-0 checkbox-content"
                            type="checkbox"
                            value="">
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label pe-8'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.HAS_UNION' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            className="form-check-input mt-0 checkbox-content"
                            type="checkbox"
                            name='thamGiaCongDoan'
                            value="">
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.ENSURANCE.START_DATE' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='ngayThamGiaBaoHiem'
                            placeholder={intl.formatMessage({ id: 'GENERAL.ENSURANCE.START_DATE' })}
                            type='date'
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.ENSURANCCE.PERCENT' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='tiLeDongBaoHiem'
                            placeholder={intl.formatMessage({ id: 'GENERAL.ENSURANCCE.PERCENT' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>
                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.ENSURANCE.NUMBER' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='soSoBhxh'
                            placeholder={intl.formatMessage({ id: 'GENERAL.ENSURANCE.NUMBER' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>
                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.ENSURANCE.CODE' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='maSoBhxh'
                            placeholder={intl.formatMessage({ id: 'GENERAL.ENSURANCE.CODE' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.ENSURANCE.ISSUE_PLACE' })}
                        </span>
                        <select 
                        onChange={e=> handleChange(e)}
                        name='noiCap'
                        className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.ENSURANCE.ISSUE_PLACE' })}</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.PROVINCE' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='tinhCapBhxh'
                            placeholder={intl.formatMessage({ id: 'GENERAL.PROVINCE' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>

                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.ENSURANCE.HEALTH_NUMBER' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='soTheBhyt'
                            placeholder={intl.formatMessage({ id: 'GENERAL.ENSURANCE.HEALTH_NUMBER' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>
                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.KCB_REGISTER_PLACE' })}
                        </span>
                        <select 
                        onChange={e=> handleChange(e)}
                        name='noiDkKcbId'
                        className="input form-select">
                            <option>{intl.formatMessage({ id: 'GENERAL.EMPLOYEE.KCB_REGISTER_PLACE' })}</option>
                            <option value="1">Two</option>
                            <option value="2">Three</option>
                        </select>
                    </div>
                    <div className='item-content'>
                        <span className='text-label'>
                            {intl.formatMessage({ id: 'GENERAL.EMPLOYEE.KCB_REGISTER_PLACE_CODE' })}
                        </span>
                        <input
                            onChange={e => handleChange(e)}
                            name='noiDkKcbText'
                            placeholder={intl.formatMessage({ id: 'GENERAL.EMPLOYEE.KCB_REGISTER_PLACE_CODE' })}
                            className='input form-control py-3 ps-7'>
                        </input>
                    </div>
                </div>
            </div>
            </>}
        </div>
    )
}