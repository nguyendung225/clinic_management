import { benhNhan } from '../phan-he-tiep-nhan-thanh-toan/models/PhanHeTiepNhanModel';
import moment from "moment";
import { GIOI_TINH, initialValuesTiepNhan } from "../phan-he-tiep-nhan-thanh-toan/constants/PhanHeTiepNhan";
import { NUMBER_EXCEPT_THIS_SYMBOLS, TRANG_THAI, TRANG_THAI_KHAM_BENH } from "./Constant";
import { trangThaiBenhNhan } from '../phan-he-kham-benh/constants/BenhNhanConst';
import { Col, Form, FormCheck, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import CustomTextarea from '../component/custom-textarea/CustomTextarea';
import { trangThaiBenhNhanDatLich } from '../dat-lich-hen/constants/datLichHenConstants';

export const convertNumberPrice = (value: any) => {
  let number = Number(value ? value : 0)
  let plainNumber = number.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&.");
  return plainNumber.substr(0, plainNumber.length - 2);
}

export const checkObject = (value: any) => {
  if (
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value !== null
  ) {
    return true;
  }
  return false;
}

export const formatDateToString = (date: string | Date | undefined) => {
  let newDate = date ? new Date(date) : null;
  return newDate ? moment(newDate).format("MM/DD/YYYY") : "";
}

export const formatDateAdvanceToString = (date: string | Date | undefined) => {
  return date ? moment(date).format("DD/MM/YYYY HH:mm:ss") : "";
}

export const formatDateDTO = (date: string) => {
  return date ? moment(date).format("YYYY-MM-DDTHH:mm:ss") : "";
}

export const formatDate = (value: string | undefined) => {
  if (value) {
    return value.split('-').reverse().join('/').toString();
  } else {
    return value;
  }
}

export const handleAgeCalculate = (DOB: string) => {
  const ageInMilliseconds = +(new Date()) - +(new Date(DOB));
  const ageDate = new Date(ageInMilliseconds);

  if (ageDate.getUTCFullYear() - 1970 < 1) {
    if (ageDate.getUTCMonth() < 1) {
      const days = ageDate.getUTCDate() - 1;
      return `${days} ngày`;
    } else {
      return `${ageDate.getUTCMonth()} tháng`;
    }
  } else {
    return `${Math.abs(ageDate.getUTCFullYear() - 1970).toString()} tuổi`;
  }
};

export const generateRandomId = (length: number = 10): string => {
  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength: number = characters.length;
  let randomId: string = '';

  for (let i: number = 0; i < length; i++) {
    const randomIndex: number = Math.floor(Math.random() * charactersLength);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
};

export const covertDataTiepNhanUpdate = (data: any) => {
  let { person } = data
  let gender = GIOI_TINH.find(item => (item.id.toUpperCase) === data?.gioiTinh.toUpperCase);
  let TTKhamBenh: benhNhan = {
    ...initialValuesTiepNhan,
    ...data,
    benhNhanBhyt: data?.benhNhanBhyt ? data.benhNhanBhyt : initialValuesTiepNhan.benhNhanBhyt,
    mpi: data?.pin,
    benhNhanCase: {
      ...data.benhNhanCase,
      thoiGianTiepNhan: formatDateAdvanceToString(data?.benhNhanCase?.thoiGianTiepNhan)
    },
    // province: person?.provinceId ? {
    //   id: person?.provinceId,
    //   name: person?.provinceName,
    //   code: person?.provinceCode,
    // } : null,
    // district: person?.districtId ? {
    //   id: person?.districtId,
    //   name: person?.districtName,
    //   code: person?.districtCode,
    // } : null,
    // ward: person?.communeId ? {
    //   id: person?.communeId,
    //   name: person?.communeName,
    //   code: person?.communeCode,
    // } : null,
    province: person?.provinceId ? {
      id: data.province?.id,
      name: data.province?.name,
      code: data.province?.code,
    } : null,
    district: person?.districtId ? {
      id: data.district?.id,
      name: data.district?.name,
      code: data.district?.code,
    } : null,
    ward: person?.ward?.id ? {
      id: data.ward?.id,
      name: data.ward?.name,
      code: data.ward?.code,
    } : null,
    job: person?.jobId ? {
      id: person?.jobId,
      code: person?.jobCode,
      name: person?.jobName,
    } : null,
    // danToc: person?.ethnicId ? {
    //   id: person?.ethnicId,
    //   name: person?.ethnicName,
    //   code: person?.ethnicCode,
    // } : null,
    // quocTich: person?.nationalityId ? {
    //   id: person?.nationalityId,
    //   name: person?.nationalityName,
    //   code: person?.nationalityCode,
    // } : null,
    danToc: data?.danToc ? {
      id: data?.danToc?.id,
      name: data?.danToc?.name,
      code: data?.danToc?.code,
    } : null,
    quocTich: data?.quocTich ? {
      id: data?.quocTich?.id,
      name: data?.quocTich?.name,
      code: data?.quocTich?.code,
    } : null,
    gender: gender || null,
    quanHe: data?.benhNhanMqh?.maQuanHe ? {
      name: data?.benhNhanMqh?.tenQuanHe,
      code: data?.benhNhanMqh?.maQuanHe,
    } : null,
    loaiTiepNhan: data?.benhNhanCase?.tenLoaiTiepNhan ? {
      id: data?.benhNhanCase?.loaiTiepNhan,
      name: data?.benhNhanCase?.tenLoaiTiepNhan,
    } : null,
    // loaiDoiTuong: data?.benhNhanCase?.loaiDoiTuong ? {
    //   id: data?.benhNhanCase?.loaiDoiTuong,
    //   name: data?.benhNhanCase?.tenLoaiDoiTuong,
    // } : null,
    loaiDoiTuong: data?.loaiDoiTuong ? {
      id: data?.loaiDoiTuong?.id,
      name: data?.loaiDoiTuong?.name,
      code: data?.loaiDoiTuong?.code,
    } : null,
    obs: covertSinhHieu(data?.sinhHieu),
    soDienThoai: person?.phoneNumber,
    ngaySinh: person?.ngaySinh,
    thangSinh: person?.thangSinh,
    namSinh: person?.namSinh,
    soNha: person?.address,
    diaChi: person?.fullAddress,
    tenDichVu: null,
    phongKham: null,
  }
  return TTKhamBenh
}

export const covertDataTiepNhanNew = (data: any) => {
  let { person } = data
  let gender = GIOI_TINH.find(item => (item.id.toUpperCase) === data?.gioiTinh.toUpperCase);
  let TTKhamBenh: benhNhan = {
    ...initialValuesTiepNhan,
    id: data?.id,
    mpi: data?.pin,
    benhNhanCase: {
      ...initialValuesTiepNhan.benhNhanCase,
      thoiGianTiepNhan: formatDateAdvanceToString((new Date()).toString())
    },
    province: person?.provinceId ? {
      id: person?.provinceId,
      name: person?.provinceName,
      code: person?.provinceCode,
    } : null,
    district: person?.districtId ? {
      id: person?.districtId,
      name: person?.districtName,
      code: person?.districtCode,
    } : null,
    ward: person?.communeId ? {
      id: person?.communeId,
      name: person?.communeName,
      code: person?.communeCode,
    } : null,
    job: person?.jobId ? {
      id: person?.jobId,
      code: person?.jobCode,
      name: person?.jobName,
    } : null,
    danToc: person?.ethnicId ? {
      id: person?.ethnicId,
      name: person?.ethnicName,
      code: person?.ethnicCode,
    } : null,
    quocTich: person?.nationalityId ? {
      id: person?.nationalityId,
      name: person?.nationalityName,
      code: person?.nationalityCode,
    } : null,
    gender: gender || null,
    quanHe: data?.benhNhanMqh?.maQuanHe ? {
      name: data?.benhNhanMqh?.tenQuanHe,
      code: data?.benhNhanMqh?.maQuanHe,
    } : null,
    obs: covertSinhHieu(data?.sinhHieu),
    soDienThoai: person?.phoneNumber,
    ngaySinh: person?.ngaySinh,
    hoTen: person?.name,
    thangSinh: person?.thangSinh,
    namSinh: person?.namSinh,
    soNha: person?.address,
    diaChi: person?.fullAddress,
    soDinhDanh: data?.soDinhDanh,
    avatar: data?.avatar,
    loaiTiepNhan: null,
    loaiDoiTuong: null,
    tenDichVu: null,
    phongKham: null,
  }
  return TTKhamBenh
}

export const removeDiacritics = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const handleSum = (array: any, name: string) => {
  return array?.length > 0 ? array.reduce((accumulator: number, dichVu: any) => accumulator + Number(dichVu?.[name]), 0) : 0;
}

export const numberExceptThisSymbols = (event: any) => {
  return NUMBER_EXCEPT_THIS_SYMBOLS.includes(event?.key) && event.preventDefault()
}


export const covertSinhHieu = (data: any) => {
  let sinhHieu: any = {}
  if (data?.length > 0) {
    data.map((item: any) => {
      sinhHieu[item?.code] = item
    })
  }
  return sinhHieu;
}

export const CheckTrangThaiKhamBenh = (status: number) => {
  let objectStatus = TRANG_THAI_KHAM_BENH.find(item => item?.status === status)
  return objectStatus;
}

export const newDate = (birthYear: number, birthMonth = 0, birthDay = 1, birthHour = 0, birthMinute = 0, birthSecond = 0) => {
  birthDay = birthDay <= 0 ? 1 : birthDay;
  return birthYear ? (new Date(birthYear, birthMonth - 1, birthDay, birthHour, birthMinute, birthSecond)).toString() : "";
}

export const validateNgay = (ngay: number, thang: number, nam: number) => {
  if (ngay < 1 || ngay > 31) {
    return false;
  }

  if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    return ngay <= 30;
  }

  if (thang === 2) {
    if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
      return ngay <= 29;
    }
    return ngay <= 28;
  }

  return true;
};

export const formatTrangThaiBenhNhan = (trangThai: number | undefined) => {
  return (
    <div className="text-center">
      <i className={`bi bi-circle-fill status-${trangThai}-color`}></i>&nbsp;
    </div>
  );
};

export const formatTrangThaiBenhNhanDatLich = ( trangThai: number | undefined ) => {
  switch (trangThai) {
    case trangThaiBenhNhanDatLich.chuaDen.code:
      return (
        <div className="text-center">
          <i className="bi bi-circle-fill pe-2 text-status-blue"></i>&nbsp;
        </div>
      );
    case trangThaiBenhNhanDatLich.daTiepNhan.code:
      return (
        <div className="text-center">
          <i className="bi bi-circle-fill pe-2 text-status-yellow"></i>&nbsp;
        </div>
      );
    case trangThaiBenhNhanDatLich.daGoiNhacLich.code:
      return (
        <div className="text-center">
          <i className="bi bi-circle-fill pe-2 text-status-orange"></i>&nbsp;
        </div>
      );
    case trangThaiBenhNhanDatLich.koDenHuyLich.code:
      return (
        <div className="text-center">
          <i className="bi bi-circle-fill pe-2 text-status-red"></i>&nbsp;
        </div>
      );

    default:
      return trangThai;
  }
};

export const renderItemKhamBoPhan = (Data: any) => (
  <Row>
    {Data.map((item: any) => {
      return (
        <Col xs="4" className="d-flex">
          <Form className="d-flex align-items-center">
            <FormCheck
              type="checkbox"
              label={item?.name}
              className="min-w-125px d-flex align-items-end gap-2"
              name={item?.code}
            />
            <CustomTextarea marginUnderline={8} />
          </Form>
        </Col>
      );
    })}
  </Row>
);

export const renderTrangThaiHanhChinh = (trangThai: number, listTitle?: string[]) => {

  const checkColor = trangThai === TRANG_THAI.DA_HOAN_THANH ? "text-success" : "text-warning";

  const renderTooltip = () => {
    if (listTitle && listTitle?.length > 0) {
      return <Tooltip>{listTitle[trangThai - 1]}</Tooltip>;
    }
    return <></>;
  }

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip()}
    >
      {trangThai ? <i className={`fa-solid fa-circle ${checkColor}`}></i> : <></>}
    </OverlayTrigger>
  )
}