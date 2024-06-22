import { useNavigate } from 'react-router-dom'
import './homepage.scss'

export function HomePage() {
  const navigate = useNavigate()
  const handleButtonClick = (to: string) => {
    navigate(to)
  };

  return (
    <div className='main'>
      <div className='container'>
        <div>
          <p className='text-uppercase text-center text-white fw-normal heading-3 mb-20'>Phần mềm quản lý phòng khám</p>
        </div>
        <div className='button-group'>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/phan-he-tiep-nhan")}>
              <img src='media/svg/dashboard-icons/appointment.svg'></img>
            </button>
            <span className='title-button'>Đặt lịch hẹn</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/phan-he-tiep-nhan")}>
              <img src='media/svg/dashboard-icons/bills.svg'></img>
            </button>
            <span className='title-button'>Tiếp nhận & Viện phí</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/kham-benh")}>
              <img src='media/svg/dashboard-icons/diagnose.svg'></img>
            </button>
            <span className='title-button'>Khám bệnh</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/test")}>
              <img src='media/svg/dashboard-icons/microscope.svg'></img>
            </button>
            <span className='title-button'>Xét nghiệm</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/cdha-tdcn")}>
              <img src='media/svg/dashboard-icons/cdha.svg'></img>
            </button>
            <span className='title-button'>CĐHA</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/hanh-chinh")}>
              <img src='media/svg/dashboard-icons/hrm.svg'></img>
            </button>
            <span className='title-button'>HRM</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/kho-duoc")}>
              <img src='media/svg/dashboard-icons/pharmacy.svg'></img>
            </button>
            <span className='title-button'>Nhà thuốc</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/kho-vat-tu")}>
              <img src='media/svg/dashboard-icons/medicine.svg'></img>
            </button>
            <span className='title-button'>Kho dược</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/nha-thuoc-thu-ngan")}>
              <img src='media/svg/dashboard-icons/report.svg'></img>
            </button>
            <span className='title-button'>Báo cáo</span>
          </div>
          <div className='item-button'>
            <button
              className='btn btn-light-primary fw-bolder btn-homepage'
              onClick={() => handleButtonClick("/chuyen-khoa")}>
              <img src='media/svg/dashboard-icons/nurse.svg'></img>
            </button>
            <span className='title-button'>Điều dưỡng</span>
          </div>
        </div>
      </div>
    </div>
  );
}