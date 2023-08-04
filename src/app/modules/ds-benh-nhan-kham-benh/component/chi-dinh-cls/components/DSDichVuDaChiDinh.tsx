import React, { FC, memo } from 'react';
import { Row } from 'react-bootstrap';
import TableCustom from '../../../../component/table-custom-v3/TableCustom';
import { handleSum } from '../../../../utils/FormatUtils';
import TextGroup from '../../../../component/TextGroup';
import { iDSDVChiDinhProps } from '../../../models/ChiDinhDVModel';

const DanhSachDichDaVuChiDinh: FC<iDSDVChiDinhProps> = ({ ...props }) => {
    let { columns, data, handleSum } = props;

    return (
        <div>
            <TableCustom
                data={data}
                columns={columns}
                height={300}
            />
            <div className="spaces p-16">
                <Row className="spaces py-5">
                    <TextGroup
                        className='spaces pr-0 py-4'
                        sx={12}
                        sm={4}
                        label="Tổng chi phí"
                        value={handleSum(data)}
                    />
                </Row>
            </div>
        </div>
    )
};

export default memo(DanhSachDichDaVuChiDinh);
