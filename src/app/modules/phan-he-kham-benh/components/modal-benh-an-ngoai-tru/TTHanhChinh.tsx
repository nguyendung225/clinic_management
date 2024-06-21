import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { Autocomplete } from "../../../component/Autocomplete";
import { danhSachNguoiNha, danToc, gioiTinh, quocTich } from "../../constants/BenhAnNgoaiTruConst";

const TTHanhChinh: FC = () => {

  return (
    <div className="administrative">
      <Row>
        <h2 className="text-uppercase">Hành chính</h2>
      </Row>

      <Row className="spaces ml-16">
        <Col xs={2}>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Mã bệnh nhân
              </label>
              <input
                className="form-control customs-input"
                name="ten"
                type="text"
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Nghề nghiệp
              </label>
              <Autocomplete
                options={gioiTinh}
                name=""
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Số nhà
              </label>
              <input
                className="form-control customs-input"
                name="ten"
                type="text"
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Tỉnh/Thành phố
              </label>
              <Autocomplete
                options={danToc}
                name=""
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                SĐT người nhà
              </label>
              <input
                className="form-control customs-input"
                name="ten"
                type="text"
              />
            </div>
          </Row>
        </Col>
        <Col xs={5}>
          <Row className="spaces my-5">
            <Col xs={6}>
              <div >
                <label className='spaces pb-4'>
                  Tên bệnh nhân
                </label>
                <input
                  className="form-control customs-input"
                  name="ten"
                  type="text"
                />
              </div>
            </Col>
            <Col xs={6}>
              <div >
                <label className='spaces pb-4'>
                  Điện thoại
                </label>
                <input
                  className="form-control customs-input"
                  name="ten"
                  type="text"
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Làm việc
              </label>
              <input
                className="form-control customs-input"
                name="ten"
                type="text"
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                T/X/Đường
              </label>
              <input
                className="form-control customs-input"
                name="duong"
                type="text"
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Địa chỉ
              </label>
              <input
                className="form-control customs-input"
                name="diaChi"
                type="text"
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Địa chỉ người nhà
              </label>
              <input
                className="form-control customs-input"
                name="ten"
                type="text"
              />
            </div>
          </Row>
        </Col>
        <Col xs={2}>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Ngày sinh
              </label>
              <input
                className="form-control customs-input"
                name="ten"
                type="date"
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Dân tộc
              </label>
              <Autocomplete
                options={danToc}
                name=""
                placeholder="Dân tộc..."
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Phường/Xã
              </label>
              <Autocomplete
                options={danToc}
                name=""
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Người nhà
              </label>
              <Autocomplete
                options={danhSachNguoiNha}
                name="nguoiNha"
                placeholder="Người nhà..."
                maxMenuHeight={200}
              />
            </div>
          </Row>
        </Col>
        <Col xs={3}>
          <Row className="spaces my-5">
            <Col xs={6}>
              <div >
                <label className='spaces pb-4'>
                  Tuổi
                </label>
                <input
                  className="form-control customs-input"
                  name="ten"
                  type="text"
                />
              </div>
            </Col>
            <Col xs={6}>
              <div >
                <label className='spaces pb-4'>
                  Giới tính
                </label>
                <Autocomplete
                  options={gioiTinh}
                  name=""
                />
              </div>
            </Col>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Quốc tịch
              </label>
              <Autocomplete
                options={quocTich}
                name=""
                placeholder="Quốc tịch..."
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Quận/Huyện
              </label>
              <Autocomplete
                options={danToc}
                name=""
              />
            </div>
          </Row>
          <Row className="spaces my-5">
            <div >
              <label className='spaces pb-4'>
                Họ tên người nhà
              </label>
              <input
                className="form-control customs-input"
                name="ten"
                type="text"
              />
            </div>
          </Row>
        </Col>
      </Row>

    </div>
  );
};
export default TTHanhChinh;
