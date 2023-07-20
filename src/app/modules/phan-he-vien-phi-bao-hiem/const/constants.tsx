import { KEY_DS_TAB_THANH_TOAN } from "../../utils/Constant";
import { NgoaiTru } from "../components/NgoaiTru";
import { NoiTruCapCuu } from "../components/NoiTruCapCuu";

export const danhsachTabThanhToan = [
  {
    eventKey: '0',
    title: "Ngoại trú",
    component: <NgoaiTru />,
  },
  {
    eventKey: "1",
    title: "Nội trú/Cấp cứu",
    component: <NoiTruCapCuu />,
  },
];

export const danhSachMenuThanhToan = [
  {
      id: "0",
      title: "Thanh toán",
      to: '/fee-and-insurance',
      children: [
          {
              id: "0",
              key: KEY_DS_TAB_THANH_TOAN,
              title: "Ngoại trú",
              to: '/fee-and-insurance',
              fontIcon: "bi-file-earmark-person"
          },
          {
              id: "1",
              key: KEY_DS_TAB_THANH_TOAN,
              title: "Nội trú/Cấp cứu",
              to: '/fee-and-insurance',
              fontIcon: "bi-list-ul"
          },
      ]
  },
];

export const loaiPhieuOptions = [
  { value: 'bienLai', name: 'Biên lai' },
  { value: 'tamUng', name: 'Tạm ứng' },
  { value: 'hoanUng', name: 'Hoàn ứng' },
]

export const phuongThucTTOptions = [
  { value: 'tienMat', name: 'Tiền mặt' },
  { value: 'chuyenKhoan', name: 'Chuyển khoản' },
]

export const doiTuongOptions = [
  { value: 'all', name: 'Tất cả' },
  { value: 'vienPhi', name: 'Viện phí' },
  { value: 'BHYT', name: 'BHYT' },
]

export const trangThaiOptions = [
  { value: 'all', name: 'Tất cả' },
  { value: 'choThanhToan', name: 'Chờ thanh toán' },
  { value: 'daThanhToan', name: 'Đã thanh toán' },
]

export const loaiPhieu = [
  { value: 'advance', name: 'Tạm ứng' },
  { value: 'refund', name: 'Hoàn ứng' },
  { value: 'receipt', name: 'Biên lai' },
  { value: 'all', name: 'All' },
]