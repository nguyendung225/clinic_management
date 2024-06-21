import React, { FC } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Divider from "../../../component/Divider";

export const PhieuKhamTienMeBody: FC = (props) => {

  return (
    <div>
      {/*Thông tin bệnh nhân*/}
      <Row className="spaces mb-20">
        <Col xs={4}>
          <Row className="spaces py-5">
            <Col xs={3}>
              <div >
                <label className='spaces pb-4'>
                  Tên bệnh nhân
                </label>
              </div>
            </Col>
            <Col xs={9}>
              <input
                disabled
                className="form-control customs-input"
                name="ten"
                type="text"
                value="Nguyễn Văn A"
              />
            </Col>
          </Row>
          <Row className="spaces py-5">
            <Col xs={6}>
              <Row>
                <Col xs={6}>
                  <label className='spaces pb-4'>
                    Cân nặng (kg)
                  </label>
                </Col>
                <Col xs={6}>
                  <input
                    className="form-control customs-input"
                    name="ten"
                    type="text"
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={6}>
              <Row>
                <Col xs={6}>
                  <label className='spaces pb-4'>
                    Chiều cao (cm)
                  </label>
                </Col>
                <Col xs={6}>
                  <input
                    className="form-control customs-input"
                    name="ten"
                    type="text"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="spaces py-5">
            <Col xs={3} >
              <label className='spaces pb-4'>
                Chẩn đoán
              </label>
            </Col>
            <Col xs={9}>
              <input
                disabled
                className="form-control customs-input"
                name="ten"
                value="U tủy sống"
                type="text"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={8} className="spaces pl-20">
          <Row className="spaces py-5">
            <Col xs={6}>
              <Row>
                <Col xs={3} >
                  <label className='spaces pb-4'>
                   Mã bệnh nhân
                  </label>
                </Col>
                <Col xs={9}>
                  <input
                    disabled
                    className="form-control customs-input"
                    name="ten"
                    type="text"
                    value="BN2023000078"
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Col xs={4} className="flex justify-content-end">
                  <label className='spaces pb-4'>
                    Năm sinh
                  </label>
                </Col>
                <Col xs={8}>
                  <input
                    disabled
                    className="form-control customs-input"
                    name="ten"
                    type="text"
                    value="1981"
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Col xs={4} className="flex justify-content-end">
                  <label className='spaces pb-4'>
                    Giới tính
                  </label>
                </Col>
                <Col xs={8}>
                  <input
                    disabled
                    className="form-control customs-input"
                    name="ten"
                    type="text"
                    value="Nam"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="spaces py-5">
            <Col xs={6}>
              <Row>
                <Col xs={3} >
                  <label className='spaces pb-4'>
                    BMI (kg/m2)
                  </label>
                </Col>
                <Col xs={9}>
                  <input
                    className="form-control customs-input"
                    name="ten"
                    type="text"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="spaces py-5">
            <Col xs={9}>
              <Row>
                <Col xs={2} >
                  <label className='spaces pb-4'>
                    PTTT
                  </label>
                </Col>
                <Col xs={9}>
                  <input
                    className="form-control customs-input"
                    name="ten"
                    type="text"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      {/*Tiền sử ngoại khoa,..*/}
      <div>
        <Row>
          <Col xs={5} className="bg-light-dark">
            <p className="m-0 p-3 flex justify-content-center">
              Tiền sử ngoại khoa/gây mê
            </p>
          </Col>
          <Col xs={7}>
            <Row>
              <Col xs={4} className="bg-light-dark border-start border-end border-white">
                <p className="m-0 p-3 flex justify-content-center">
                  Dị ứng
                </p>
              </Col>
              <Col xs={8} className="bg-light-dark">
                <p className="m-0 p-3 flex justify-content-center">
                  Thói quen
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={5}></Col>
          <Col xs={7}>
            <Row>
              <Col xs={4} className="p-5 border-start border-end border-dark border-opacity-25">
                <div className="flex flex-wrap gap-5">
                  <Form.Check
                    className="spaces customs-form-check "
                    inline
                    label="Chưa ghi nhận"
                  />
                  <Form.Check
                    className="spaces customs-form-check "
                    inline
                    label="Thuốc"
                  />
                  <Form.Check
                    className="spaces customs-form-check "
                    inline
                    label="Thức ăn"
                  />
                </div>
              </Col>
              <Col xs={8} className="p-5">
                <Row >
                  <Col xs={3}>
                    <label className='spaces pb-4 mb-8'>
                      Rượu bia
                    </label>
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="ruouBia"
                      type="radio"
                      label="Không"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="ruouBia"
                      type="radio"
                      label="Nghiện"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="ruouBia"
                      type="radio"
                      label="Thỉnh thoảng"
                    />
                  </Col>
                </Row>
                <Row className="flex align-items-center">
                  <Col xs={3}>
                    <label className='spaces pb-4'>
                      Hút thuốc lá
                    </label>
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="hutThuocLa"
                      type="radio"
                      label="Không"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="hutThuocLa"
                      type="radio"
                      label="Có"
                    />
                  </Col>
                  <Col xs={3} className="flex gap-3 align-items-center">
                    <label >
                      Gói/năm
                    </label>
                    <input
                      type="text  form-control customs-input w-60px"
                      name="diaChiBHYT"
                    />
                  </Col>
                </Row>
                <Row className="spaces mt-8">
                  <Col xs={6}>
                    <label className='spaces pb-4 mb-8'>
                      Lạm dụng chất gây nghiện
                    </label>
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="chatGayNghien"
                      type="radio"
                      label="Không"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="chatGayNghien"
                      type="radio"
                      label="Có"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/*Tiền sử nội khoa*/}
      <Row>
        <p className="m-0 p-3 bg-light-dark">
          Tiền sử nội khoa
        </p>
        <Row>
          <Col xs={7} className="border-end border-dark border-opacity-25 p-5">
            <Row>
              <Col xs={9}>
                <Row className="spaces mb-16">
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Tăng huyết áp"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="CPOD"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Bệnh thận mạn"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Bướu giáp"
                    />
                  </Col>
                </Row>
                <Row className="spaces mb-16">
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Bệnh tim TMCB"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Covid 19"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Lao phổi"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Bệnh van tim"
                    />
                  </Col>
              </Row>
                <Row className="spaces mb-16">
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Đái tháo đường"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Rối loạn nhịp"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Hen phế quản"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Check
                      className="spaces customs-form-check "
                      inline
                      label="Chưa ghi nhận"
                    />
                  </Col>
              </Row>
              </Col>
              <Col xs={3}>
                <label>Khác:</label>
              </Col>
            </Row>
            <Divider dark />
            <Row className="spaces mt-20">
              <Col xs={2}>
                <label className='spaces pb-4 mb-8 fw-bold'>
                  Truyền máu:
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="truyenMau"
                  type="radio"
                  label="Có"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="truyenMau"
                  type="radio"
                  label="Không"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="truyenMau"
                  type="radio"
                  label="Tai biến"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={5} className="p-5">
            <Row className="spaces h-111px">
              <label className='spaces pb-4 mb-8'>
                Tình trạng/Điều trị:
              </label>
            </Row>
            <Divider dark />
            <Row className="spaces mt-20">
              <Col xs={5} >
                <label className='spaces pb-4 mb-8 fw-bold'>
                  Tiền sử gia đình liên quan GMHS:
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="truyenMau"
                  type="radio"
                  label="Có"
                />
              </Col>
              <Col xs={3}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="truyenMau"
                  type="radio"
                  label="Chưa ghi nhận"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>

    {/* Khám GMHS và lựa chọn phương pháp vô cảm */}
      <Row>
        <p className="m-0 p-3 bg-light-dark">
          Khám GMHS và lựa chọn phương pháp vô cảm
        </p>
          <Col xs={6} className="border-end border-dark border-opacity-25 p-5">
            <p className="spaces mb-40">Tình trạng chung:</p>
            <Row className="spaces my-10">
              <Col xs={6}>Mạch (lần/phút)</Col>
              <Col xs={6}>Huyết áp (mmHg)</Col>
            </Row>
            <Row className="spaces my-10">
              <Col xs={6}>Nhiệt độ (C)</Col>
              <Col xs={6}>Nhịp thở (lần/phút)</Col>
            </Row>
            <p className="spaces my-10">Nhịn ăn uống trước mổ (dành cho PTTN/CC)</p>
          </Col>
          <Col xs={6} className="p-5">
            <p className="m-0">Đánh giá đường thở</p>
            <Row className="spaces my-10">
              <Col xs={5} >
                <label className=''>
                  {"Mở miệng < 3 cm"}
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="moMieng"
                  type="radio"
                  label="Có"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="moMieng"
                  type="radio"
                  label="Không"
                />
              </Col>
            </Row>
            <Row className="spaces my-10">
              <Col xs={5} >
                <label className=''>
                  {"Khoảng cách cằm - giáp < 6 cm"}
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="kcCamGiap"
                  type="radio"
                  label="Có"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="kcCamGiap"
                  type="radio"
                  label="Không"
                />
              </Col>
            </Row>
            <Row className="spaces my-10">
              <Col xs={5} >
                <label className=''>
                  Nguy cơ tổn thương răng
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="tonThuongRang"
                  type="radio"
                  label="Có"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="tonThuongRang"
                  type="radio"
                  label="Không"
                />
              </Col>
            </Row>
            <Row className="spaces my-10">
              <Col xs={5} >
                <label className=''>
                  Gập ngửa cổ
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="gapNguaCo"
                  type="radio"
                  label="Giới hạn"
                />
              </Col>
              <Col xs={3}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="gapNguaCo"
                  type="radio"
                  label="Bình thường"
                />
              </Col>
            </Row>
            <Row className="spaces my-10">
              <Col xs={5} >
                <label className=''>
                  Mallampati
                </label>
              </Col>
              <Col xs={7}>
                <Row>
                  <Col xs={2}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="Mallampati"
                      type="radio"
                      label="I"
                    />
                  </Col>
                  <Col xs={2}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="Mallampati"
                      type="radio"
                      label="II"
                    />
                  </Col>
                  <Col xs={2}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="Mallampati"
                      type="radio"
                      label="III"
                    />
                  </Col>
                  <Col xs={2}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="Mallampati"
                      type="radio"
                      label="IV"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <p>Khác</p>
            <Row className="spaces mt-10">
              <Col xs={5} >
                <label className=''>
                  Đường truyền tĩnh mạch ngoại biên
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="duongTruyenTinhMach"
                  type="radio"
                  label="Có"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="duongTruyenTinhMach"
                  type="radio"
                  label="Không"
                />
              </Col>
            </Row>
          </Col>
      </Row>

    {/* Hệ tim mạch,... */}
      <div>
        <Row>
          <Col xs={5} className="bg-light-dark">
            <p className="m-0 p-3 flex justify-content-center">
              Hệ tim mạch
            </p>
          </Col>
          <Col xs={7}>
            <Row>
              <Col xs={4} className="bg-light-dark border-start border-end border-white">
                <p className="m-0 p-3 bg-light-dark flex justify-content-center">
                  Hệ hô hấp
                </p>
              </Col>
              <Col xs={8} className="bg-light-dark">
                <p className="m-0 p-3 bg-light-dark flex justify-content-center">
                  Cơ quan khác
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row >
          <Col xs={5} className="p-5">
            <Row className="spaces my-10">
              <Col xs={5}>Gắng sức</Col>
              <Col xs={7}>METs</Col>
            </Row>
            <Row className="spaces my-10">
              <Col xs={5} >
                <label className=''>
                  Nhịp tim (lần/phút)
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="nhipTim"
                  type="radio"
                  label="Đều"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="nhipTim"
                  type="radio"
                  label="Không"
                />
              </Col>
            </Row>
            <Row className="spaces my-10">
              <Col xs={5} >
                <label className=''>
                  Âm thổi
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="amThoi"
                  type="radio"
                  label="Có"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="amThoi"
                  type="radio"
                  label="Không"
                />
              </Col>
            </Row>
            <p className="spaces my-10">Khác</p>
          </Col>
          <Col xs={7}>
            <Row className="h-100">
              <Col xs={4} className="border-start border-end border-dark border-opacity-25 p-5">
                <Row className="spaces my-10">
                  <Col xs={4} >
                    <label className=''>
                      Khó thở
                    </label>
                  </Col>
                  <Col xs={4}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="khoTho"
                      type="radio"
                      label="Có"
                    />
                  </Col>
                  <Col xs={4}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="khoTho"
                      type="radio"
                      label="Không"
                    />
                  </Col>
                </Row>
                <Row className="spaces my-10">
                  <Col xs={4} >
                    <label className=''>
                      Ran
                    </label>
                  </Col>
                  <Col xs={4}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="ran"
                      type="radio"
                      label="Có"
                    />
                  </Col>
                  <Col xs={4}>
                    <Form.Check
                      className="customs-form-check__radio"
                      inline
                      name="ran"
                      type="radio"
                      label="Không"
                    />
                  </Col>
                </Row>
                <p className="spaces my-10">Khác</p>
              </Col>
              <Col xs={8} className="p-5">
                <p className="spaces my-10">Thần kinh - cơ - xương khớp</p>
                <p className="spaces my-10">Tiêu hóa</p>
                <p className="spaces my-10">Khác</p>
                <div className="spaces my-10">
                  <Form.Check
                    className="spaces customs-form-check "
                    inline
                    label="Chưa ghi nhận bất thường"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Đề nghị thêm */}
      <div>
        <Row>
          <Divider dark className="spaces mb-10"/>
          <p className="px-5">Đề nghị thêm</p>
          <Divider dark className="spaces mb-0 mt-30"/>
        </Row>
        <Row>
          <Col xs={6} className="border-end border-dark border-opacity-25 p-5">
            <p>Đánh giá nguy cơ</p>
            <Row className="spaces my-10">
              <Col xs={3} >
                <label className=''>
                  Đường thở khó
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="duongThoKho"
                  type="radio"
                  label="Có"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="duongThoKho"
                  type="radio"
                  label="Không"
                />
              </Col>
            </Row>
            <Row className="spaces my-10">
              <Col xs={3} >
                <label className=''>
                  Dạ dày đầy
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="daDayDay"
                  type="radio"
                  label="Có"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="daDayDay"
                  type="radio"
                  label="Không"
                />
              </Col>
            </Row>
            <Row className="spaces my-10">
              <Col xs={3} >
                <label className=''>
                  Mức độ đau sau mổ
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="mucDoMo"
                  type="radio"
                  label="Nhẹ"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="mucDoMo"
                  type="radio"
                  label="Trung bình"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="mucDoMo"
                  type="radio"
                  label="Nặng"
                />
              </Col>
            </Row>
            <Row className="spaces my-10">
              <Col xs={5} >
                <label className=''>
                  {"Mất máu (> 500 ml người lớn; > 7 ml/kg trẻ em)"}
                </label>
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="daDayDay"
                  type="radio"
                  label="Có"
                />
              </Col>
              <Col xs={2}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="daDayDay"
                  type="radio"
                  label="Không"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={6} className="p-5">
            <p>Phương pháp vô cảm dự kiến</p>
            <p>Giảm đau dự kiến</p>
            <p>Chẩn bị chuyên biệt</p>
          </Col>
          <Divider dark />
        </Row>
        <Row className="spaces my-10">
          <Col xs={3}>
            <Row>
              <Col xs={4}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="chuongTrinh"
                  type="radio"
                  label="Chương trình"
                />
              </Col>
              <Col xs={4}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="chuongTrinh"
                  type="radio"
                  label="Cấp cứu"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={2} >
                <label className=''>
                  Phân độ ASA:
                </label>
              </Col>
              <Col xs={1}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="asa"
                  type="radio"
                  label="1"
                />
              </Col>
              <Col xs={1}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="asa"
                  type="radio"
                  label="2"
                />
              </Col>
              <Col xs={1}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="asa"
                  type="radio"
                  label="3"
                />
              </Col>
              <Col xs={1}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="asa"
                  type="radio"
                  label="4"
                />
              </Col>
              <Col xs={1}>
                <Form.Check
                  className="customs-form-check__radio"
                  inline
                  name="asa"
                  type="radio"
                  label="5"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}