import { FC } from "react";
import { Button, Col, Row } from "react-bootstrap";
import AutocompleteV2 from "../../../component/AutocompleteObjectV2";
import LabelRequired from "../../../component/LabelRequired";
import TextField from "../../../component/TextField";
import { benhNhanProps } from "../../tab-them-lich-hen/ThemLichHen";

const TabGiaDinhHenKham: FC<benhNhanProps> = ({ values, setFieldValue, errors, touched, handleChangeSelect }) => {
  return (
    <div className="tableHenKham over-flow">
      <Row>
        <Col xs="4">
          <div className="d-flex align-items-center position-sticky top-0 z-1000 fw-bold fs-3 btn-fill border radius-3px spaces mb-4 ">
            Thông tin bố
          </div>
          <div>
            <TextField
              
              label="Họ và tên"
              name="hoVaTen"
              labelClassName="ms-0 min-w-125px"
            />
            <div className="spaces width-100 d-flex mt-4">
              <LabelRequired label="Ngày sinh" className="min-w-125px" />
              <div className="spaces ms-0 d-flex">
                <div className="spaces width-25">
                  <TextField name="ngaySinh" type="text" maxLength="2" className="text-center " />
                </div>
                <div className="spaces width-25">
                  <TextField
                    name="thangSinh"
                    type="text"
                    maxLength="2"
                    className="text-center "
                  />
                </div>
                <div className="spaces width-50">
                  <TextField name="namSinh" type="text" maxLength="4" className="text-center " />
                </div>
              </div>
            </div>
            <div className="spaces width-100 d-flex mt-4">
              <LabelRequired label="Nghề nghiệp" className="min-w-125px" />
              <AutocompleteV2
                options={[]}
                value={values?.ngheNghiep}
                name="ngheNghiep"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "ngheNghiep", setFieldValue);
                }}
                touched={touched?.ngheNghiep}
                errors={errors?.ngheNghiep}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <TextField
              
              label="Trình độ văn hóa"
              name="trinhDoVanHoa"
              labelClassName="ms-0 min-w-125px spaces mt-4"
            />
            <TextField
              
              label="Số CMND/CCCD"
              name="cccd"
              labelClassName="ms-0 min-w-125px spaces mt-4"
            />
            <TextField
              
              label="Điện thoại"
              name="sdt"
              labelClassName="ms-0 min-w-125px spaces mt-4"
            />
            <div className="position-relative">
              <TextField
                className=" min-height-62px spaces mt-4 align-items-start"
                label="Địa chỉ"
                name="diaChi"
                as="textarea"
                labelClassName="ms-0 min-w-125px"
              />
              <Button className="btn-fill position-absolute top-30px">Giống của con</Button>
            </div>
            
          </div>
        </Col>
        <Col xs="4">
          <div className="d-flex align-items-center position-sticky top-0 z-1000 fw-bold fs-3 btn-fill border radius-3px spaces mb-5 ">
            Thông tin mẹ
          </div>
          <div>
            <TextField
              
              label="Họ và tên"
              name="hoVaTen"
              labelClassName="ms-0 min-w-125px"
            />
            <div className="spaces width-100 d-flex mt-4">
              <LabelRequired label="Ngày sinh" className="min-w-125px" />
              <div className="spaces ms-0 d-flex">
                <div className="spaces width-25">
                  <TextField name="ngaySinh" type="text" maxLength="2" className="text-center " />
                </div>
                <div className="spaces width-25">
                  <TextField
                    name="thangSinh"
                    type="text"
                    maxLength="2"
                    className="text-center "
                  />
                </div>
                <div className="spaces width-50">
                  <TextField name="namSinh" type="text" maxLength="4" className="text-center " />
                </div>
              </div>
            </div>
            <div className="spaces width-100 d-flex mt-4">
              <LabelRequired label="Nghề nghiệp" className="min-w-125px" />
              <AutocompleteV2
                options={[]}
                value={values?.ngheNghiep}
                name="ngheNghiep"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "ngheNghiep", setFieldValue);
                }}
                touched={touched?.ngheNghiep}
                errors={errors?.ngheNghiep}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <TextField
              
              label="Trình độ văn hóa"
              name="trinhDoVanHoa"
              labelClassName="ms-0 min-w-125px spaces mt-4"
            />
            <TextField
              
              label="Số CMND/CCCD"
              name="cccd"
              labelClassName="ms-0 min-w-125px spaces mt-4"
            />
            <TextField
              
              label="Điện thoại"
              name="sdt"
              labelClassName="ms-0 min-w-125px spaces mt-4"
            />
            <div className="position-relative">
              <TextField
                className=" min-height-62px spaces mt-4 align-items-start"
                label="Địa chỉ"
                name="diaChi"
                as="textarea"
                labelClassName="ms-0 min-w-125px"
              />
              <Button className="btn-fill position-absolute top-30px">Giống của con</Button>
            </div>
          </div>
        </Col>
        <Col xs="4">
          <div className="d-flex align-items-center position-sticky top-0 z-1000 fw-bold fs-3 btn-fill border radius-3px spaces mb-5 ">
            Thông tin người nuôi dưỡng, giám hộ
          </div>
          <div>
            <TextField
              
              label="Họ và tên"
              name="hoVaTen"
              labelClassName="ms-0 min-w-125px"
            />
            <div className="spaces width-100 d-flex mt-4">
              <LabelRequired label="Ngày sinh" className="min-w-125px" />
              <div className="spaces ms-0 d-flex">
                <div className="spaces width-25">
                  <TextField name="ngaySinh" type="text" maxLength="2" className="text-center " />
                </div>
                <div className="spaces width-25">
                  <TextField
                    name="thangSinh"
                    type="text"
                    maxLength="2"
                    className="text-center "
                  />
                </div>
                <div className="spaces width-50">
                  <TextField name="namSinh" type="text" maxLength="4" className="text-center " />
                </div>
              </div>
            </div>
            <div className="spaces width-100 d-flex mt-4">
              <LabelRequired label="Nghề nghiệp" className="min-w-125px" />
              <AutocompleteV2
                options={[]}
                value={values?.ngheNghiep}
                name="ngheNghiep"
                onChange={(selectedOption) => {
                  handleChangeSelect(selectedOption, "ngheNghiep", setFieldValue);
                }}
                touched={touched?.ngheNghiep}
                errors={errors?.ngheNghiep}
                className="autocomplete-custom-tiep-nhan radius spaces width-100 h-26"
              />
            </div>
            <TextField
              
              label="Trình độ văn hóa"
              name="trinhDoVanHoa"
              labelClassName="ms-0 min-w-125px spaces mt-4"
            />
            <TextField
              
              label="Số CMND/CCCD"
              name="cccd"
              labelClassName="ms-0 min-w-125px spaces mt-4"
            />
            <TextField
              
              label="Điện thoại"
              name="sdt"
              labelClassName="ms-0 min-w-125px spaces mt-4"
            />
            <div className="position-relative">
              <TextField
                className=" min-height-62px spaces mt-4 align-items-start"
                label="Địa chỉ"
                name="diaChi"
                as="textarea"
                labelClassName="ms-0 min-w-125px"
              />
              <Button className="btn-fill position-absolute top-30px">Giống của con</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default TabGiaDinhHenKham;
