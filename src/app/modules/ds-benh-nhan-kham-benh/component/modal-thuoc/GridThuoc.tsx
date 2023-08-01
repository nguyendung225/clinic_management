import { TableCustomV2 } from '../../../component/table-custom-v2/TableCustomV2';
import { ThuocColumns } from './ThuocColumns';
import { ThuocInfo } from '../../models/DSBenhNhanKhamBenhModels';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FastField, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import InputField from './InputField';

type Props = {};

export const GridThuoc = (props: Props) => {
  const [dsThuoc, setDsThuoc] = useState<ThuocInfo[]>([]);
  const [selectedThuoc, setSelectedThuoc] = useState<ThuocInfo>({});

  const handleFormSubmit = (values: ThuocInfo) => {
    if(selectedThuoc?.id){
      let index = dsThuoc.findIndex(item => item.id === selectedThuoc.id);
      let newDsThuoc = [...dsThuoc];
      newDsThuoc[index] = values;
      setDsThuoc([...newDsThuoc]);
    }else{
      setDsThuoc([
        ...dsThuoc,
        {
          ...values,
          id: new Date().getTime(),
          thanhTien:
            values?.soLuong && values?.donGia
              ? values?.soLuong * values?.donGia
              : 0
        }
      ]);
    }
  };

  const thuocValidationSchemas = Yup.object().shape({
    tenDuoc: Yup.string().required('Field required'),
    sang: Yup.string().required('Field required'),
    trua: Yup.string().required('Field required'),
    chieu: Yup.string().required('Field required'),
    toi: Yup.string().required('Field required'),
    soNgay: Yup.string().required('Field required'),
    soLuong: Yup.number().required('Field required'),
    donGia: Yup.number().required('Field required'),
    duongDung: Yup.string().required('Field required'),
    loaiThuoc: Yup.string().required('Field required'),
    cachDung: Yup.string().required('Field required')
  })

  const handleSelectThuoc = (thuocInfo: ThuocInfo[]) => {
    setSelectedThuoc(thuocInfo[0]);
  };

  const handleDeleteThuoc = () => {
    let index = dsThuoc?.findIndex((item) => item?.id === selectedThuoc?.id);
    if(index > -1){
      dsThuoc.splice(index, 1);
      setDsThuoc([...dsThuoc]);
      setSelectedThuoc({});
    }
  }
  
  return (
    <div className='form-border p-2'>
      <Formik<ThuocInfo>
        initialValues={{...selectedThuoc}}
        enableReinitialize
        validationSchema={thuocValidationSchemas}
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values);
          resetForm({});
          setSelectedThuoc({});
        }}
      >
        {({ errors, values, handleSubmit }) => {
          return (
            <Form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <Form.Group as={Row}>
                <Col sm='2' className='spaces pr-0 pb-5'>
                  <FastField
                    name='tenDuoc'
                    component={InputField}
                    placeholder='Tên thuốc'
                    isInvalid={!!errors.tenDuoc}
                  ></FastField>
                </Col>
                <Col sm='1' className='spaces pr-0'>
                  <FastField
                    name='sang'
                    component={InputField}
                    placeholder='Sáng'
                    isInvalid={!!errors.sang}
                  ></FastField>
                </Col>
                <Col sm='1' className='spaces pr-0'>
                  <FastField
                    name='trua'
                    component={InputField}
                    placeholder='Trưa'
                    isInvalid={!!errors.trua}
                  ></FastField>
                </Col>
                <Col sm='1' className='spaces pr-0'>
                  <FastField
                    name='chieu'
                    component={InputField}
                    placeholder='Chiều'
                    isInvalid={!!errors.chieu}
                  ></FastField>
                </Col>
                <Col sm='1' className='spaces pr-0'>
                  <FastField
                    name='toi'
                    component={InputField}
                    placeholder='Tối'
                    isInvalid={!!errors.toi}
                  ></FastField>
                </Col>
                <Col sm='2' className='spaces pr-0'>
                  <FastField
                    name='soNgay'
                    component={InputField}
                    placeholder='Số ngày'
                    type='number'
                    isInvalid={!!errors.soNgay}
                  ></FastField>
                </Col>
                <Col sm='2' className='spaces pr-0'>
                  <FastField
                    name='soLuong'
                    component={InputField}
                    placeholder='Số lượng'
                    type='number'
                    isInvalid={!!errors.soLuong}
                  ></FastField>
                </Col>
                <Col sm='2'>
                  <FastField
                    name='donGia'
                    component={InputField}
                    placeholder='Đơn giá'
                    type='number'
                    isInvalid={!!errors.donGia}
                  ></FastField>
                </Col>
                <Col sm='2' className='spaces pr-0'>
                  <Form.Control
                    className='customs-input'
                    placeholder='Thành tiền'
                    name='thanhTien'
                    type='number'
                    disabled
                    value={
                      values?.soLuong && values?.donGia
                        ? values?.soLuong * values?.donGia
                        : 0
                    }
                  ></Form.Control>
                </Col>
                <Col sm='2' className='spaces pr-0'>
                  <FastField
                    name='duongDung'
                    component={InputField}
                    placeholder='Đường dùng'
                    isInvalid={!!errors.duongDung}
                  ></FastField>
                </Col>
                <Col sm='2' className='spaces pr-0'>
                  <FastField
                    name='loaiThuoc'
                    component={InputField}
                    placeholder='Loại thuốc'
                    isInvalid={!!errors.loaiThuoc}
                  ></FastField>
                </Col>
                <Col sm='2' className='spaces pr-0'>
                  <FastField
                    name='cachDung'
                    component={InputField}
                    placeholder='Cách dùng'
                    isInvalid={!!errors.cachDung}
                  ></FastField>
                </Col>
                <Col sm='2' className='spaces pr-0'>
                  <FastField
                    name='ghiChu'
                    component={InputField}
                    placeholder='Ghi chú'
                    isInvalid={!!errors.ghiChu}
                  ></FastField>
                </Col>
                <Col sm='1' className='spaces pr-0'>
                  {selectedThuoc?.id ? (
                    <Button
                    type='submit'
                    className='btn btn-primary p-2 mb-2 w-80px'
                  >
                    Cập nhật
                  </Button>
                  ): (
                  <Button
                    type='submit'
                    className='btn btn-primary p-2 mb-2 w-80px'
                  >
                    Thêm
                  </Button>
                  )}
                </Col>
                <Col sm='1' className='spaces pl-4'>
                  <Button variant='danger' className='btn p-2 mb-2 w-80px' onClick={handleDeleteThuoc}>
                    Xóa
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          );
        }}
      </Formik>
      <TableCustomV2<ThuocInfo>
        data={dsThuoc}
        columns={ThuocColumns}
        selectionMode='single'
        getSelectedRowsData={handleSelectThuoc}
      />
    </div>
  );
};

export default GridThuoc;
