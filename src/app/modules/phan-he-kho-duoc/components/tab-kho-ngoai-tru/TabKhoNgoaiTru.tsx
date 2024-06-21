import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Autocomplete from '../../../component/AutocompleteObject';
import InputSearch from '../../../component/InputSearch';
import LabelRequired from '../../../component/LabelRequired';
import SelectTree from '../../../component/SelectTree';
import CombinedTable from '../../../component/table/combined-table/CombinedTable';
import { dsPhieuKhoNgoaiTruColumn } from '../../consts/Columns';
import { TreeKhoNgoaiTru, dataDsPhieuKhoNgoaiTru } from '../../consts/PhanHeKhoDuocConst';

type Props = {}

const TabKhoNgoaiTru = (props: Props) => {
    const [codeCollapses, setCodeCollapses] = useState<string[]>([]);
    const [idSelected, setIdSelected] = useState<string>("");
    return (
        <div className='kho-noi-tru-container'>
            <div className='kho-noi-tru-menu border'>
                <div className='d-flex spaces h-53 align-items-center gap-10 '>
                    <Button className="btn-outline spaces h-29 d-flex justify-content-center min-w-40px">
                        <i className="bi bi-list spaces scale-15 m-0 p-0"></i>
                    </Button>
                    <Button className='btn-fill h-auto min-w-50px'>Báo cáo</Button>
                    <Button className='btn-fill h-auto'>Danh sách</Button>
                    <Button className='btn-fill h-auto'>Tạo phiếu</Button>
                </div>
                <div className='d-flex align-items-center'>
                    <LabelRequired label="Mã phiếu:" className="min-w-70px" />
                    <input type="text" className='form-control customs-input' />
                </div>
            </div>
            <div className="kho-noi-tru-content">

                <div className='border spaces width-20 bg-white'>
                    <div className='d-flex justify-content-between spaces p-10'>
                        <div className="fw-bold fs-4 spaces">Kho thuốc</div>
                        <Autocomplete
                            placeholder='Kho thuốc nội trú'
                            options={[]}
                            className="autocomplete-custom-tiep-nhan radius spaces h-26 "
                        />
                    </div>
                    <SelectTree
                        className="w-100 border border-top-0"
                        codeCollapses={codeCollapses}
                        handleChangeCollapsesCode={setCodeCollapses}
                        idSelected={idSelected}
                        handleChangeSelectId={setIdSelected}
                        selectTree={TreeKhoNgoaiTru}
                    />
                </div>
                <div className='spaces width-80 bg-white p-10'>
                    <div className="d-flex align-items-center justify-content-between pb-2">
                        <div className='d-flex align-items-center'>
                            <LabelRequired label="Tìm theo:" className="min-w-100px" />
                            <input type="text" className='form-control customs-input' />
                        </div>
                        <div className='d-flex align-items-center'>
                            <LabelRequired label="Từ ngày:" className="min-w-100px" />
                            <input type="date" className='form-control customs-input' />
                        </div>
                        <div className='d-flex align-items-center'>
                            <LabelRequired label="Đến ngày:" className="min-w-100px" />
                            <input type="date" className='form-control customs-input' />
                        </div>
                        <Button className="btn-fill min-w-50px" type="submit">
                            <i className="bi bi-search"></i>
                            Tìm kiếm
                        </Button>
                    </div>
                    <div className='table-ds-phieu'>
                        <div className='bg-table-gray border spaces px-10 py-4'>
                            <InputSearch
                                handleChange={() => { }}

                                placeholder="Tìm kiếm"
                                type="text"
                                className="spaces w-100" />
                        </div>
                        <CombinedTable userColumns={dsPhieuKhoNgoaiTruColumn} data={dataDsPhieuKhoNgoaiTru} height={"calc(100vh - 225px)"} />
                    </div>

                </div>
            </div>

        </div >
    )
}

export default TabKhoNgoaiTru