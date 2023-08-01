import React, { useContext } from 'react'
import { PhanHeTiepDonContext } from '../../PhanHeTiepDonContext'
import TextGroup from '../../../component/TextGroup';
import Divider from '../../../component/Divider';

type Props = {}

const ThongTinBenhNhan: React.FunctionComponent<Props> = () => {
    
    const { benhNhanInfo } = useContext(PhanHeTiepDonContext);

    return (
      <>
        <TextGroup
          label='Đã khám: '
          labelClass='col-sm-3 label-fw'
          value='Tổng số: 0 BHYT: 0 VPI: 0'
          valueClass='m-0 text-pri col-sm-7'
        />
        <TextGroup
          label='Mã bệnh nhân: '
          labelClass='label-fw col-sm-5'
          value={benhNhanInfo?.pin}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Tổng chi phí: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Đã nộp: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Tiền tạm ứng: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
        <Divider className='my-2 h-2px' dark={true}/>
        <TextGroup
          label='Họ và tên: '
          labelClass='label-fw col-sm-5'
          value={benhNhanInfo?.hoTen}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Địa chỉ: '
          labelClass='label-fw col-sm-5'
          value={benhNhanInfo?.person?.fullAddress}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Ngày sinh: '
          labelClass='label-fw col-sm-5'
          value={benhNhanInfo?.ngaySinh}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Giới tính: '
          labelClass='label-fw col-sm-5'
          value={benhNhanInfo?.gioiTinh}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Yêu cầu khám: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Đối tượng: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Thời hạn BHYT: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Tuyến: '
          labelClass='label-fw col-sm-5'
          value={benhNhanInfo?.benhNhanBhyt?.loaiTuyen}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Số thẻ BHYT: '
          labelClass='label-fw col-sm-5'
          value={benhNhanInfo?.benhNhanBhyt?.soBhyt}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Nơi KCBBĐ: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Xử trí: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Chẩn đoán TD: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Chẩn đoán chính: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
        <TextGroup
          label='Chẩn đoán phụ: '
          labelClass='label-fw col-sm-5'
          value={''}
          valueClass='col-sm-7 text-fw'
        />
      </>
    );
}

export default ThongTinBenhNhan;