import { Button } from 'react-bootstrap';
import AutocompleteV2 from '../../../../component/AutocompleteObjectV2';
import LabelRequired from '../../../../component/LabelRequired';
import TextField from '../../../../component/TextField';
import { LIST_NGUOI_NHA } from '../../fakeData';
import { benhNhan } from '../../../models/PhanHeTiepNhanModel';
import { useFormikContext } from 'formik';

type Props = {
  title: string;
  name: string;
  nguoiNha?: boolean;
}

const ThongTinGiaDinh = (props: Props) => {
  const { values, setFieldValue} =  useFormikContext<benhNhan>();
  const { nguoiNha = true } = props;

  return (
    <>
      <div className="d-flex align-items-center position-sticky top-0 z-1000 fw-bold fs-4 btn-fill border radius-3px spaces mb-4">
        {props?.title}
      </div>
      <div className="p-2">
        <TextField
          
          label="Họ và tên"
          name={`${props?.name}.hoVaTen`}
          labelClassName="ms-0 min-w-125px"
        />
        <div className="spaces width-100 d-flex mt-4">
          <LabelRequired label="Ngày sinh" className="min-w-125px" />
          <div className="spaces ms-0 d-flex">
            <div className="spaces width-25">
              <TextField
               name={`${props?.name}.ngaySinh`}
               type="text" 
               maxLength="2" 
               className="text-center " 
               />
            </div>
            <div className="spaces width-25">
              <TextField
                name={`${props?.name}.thangSinh`}
                type="text"
                maxLength="2"
                className="text-center "
              />
            </div>
            <div className="spaces width-50">
              <TextField 
                name={`${props?.name}.namSinh`}
                type="text"
                maxLength="4" 
                className="text-center "
                 />
            </div>
          </div>
        </div>
        <TextField
          className=" spaces mt-4"
          label="Nghề nghiệp"
          name={`${props?.name}.ngheNghiep`}
          labelClassName="ms-0 min-w-125px"
        />
        {nguoiNha && <div className="spaces width-100 d-flex mt-4">
          <LabelRequired label="Người nhà" className="min-w-125px" />
          <AutocompleteV2
            options={LIST_NGUOI_NHA}
            name={`${props?.name}.nguoiNha`}
            value={values[props?.name as keyof benhNhan]?.nguoiNha || null}
            onChange={(selectOption) => setFieldValue(`${props?.name}.nguoiNha`, selectOption)}
            className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
          />
        </div>}
        <TextField
          className=" spaces mt-4"
          label="Trình độ văn hóa"
          name={`${props?.name}.trinhDoVanHoa`}
          labelClassName="ms-0 min-w-125px"
        />
        <TextField
          className=" spaces mt-4"
          label="Số CMND/CCCD"
          name={`${props?.name}.cccd`}
          labelClassName="ms-0 min-w-125px"
        />
        <TextField
          className=" spaces mt-4"
          label="Điện thoại"
          name={`${props?.name}.sdt`}
          labelClassName="ms-0 min-w-125px"
        />
        <div className="position-relative">
          <TextField
            className=" min-height-62px spaces mt-4 align-items-start"
            label="Địa chỉ"
            name={`${props?.name}.diaChi`}
            as="textarea"
            labelClassName="ms-0 min-w-125px"
          />
          <Button className="btn-fill position-absolute top-30px">Giống của BN</Button>
        </div>
      </div>
    </>
  )
}

export default ThongTinGiaDinh