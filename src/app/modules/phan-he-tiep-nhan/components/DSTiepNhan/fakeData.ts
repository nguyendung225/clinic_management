import { receptionList } from "../../models/DSTiepNhanModel";

export const fakeReceptionList: receptionList[] = [
  {
    id: "0",
    mpi: "BN20230004",
    hoTen: "Ngọc Long",
    soDinhDanh: "035204573492",
    yeuCauKham: "Khám tổng quát",
    person: {
      phone: "0844293123",
      address: "Thanh Xuân, Hà Nội"
    },
    phongKham: "Phòng khám số 2",
    receptionDate: "29/06/2023",
    fee: "Đã thu phí",
    prioritize: true,
  },
  {
    id: "1",
    mpi: "BN20235415",
    hoTen: "Nguyễn Vũ Thanh Tùng",
    soDinhDanh: "035204349723",
    yeuCauKham: "Khám mắt",
    person: {
      phone: "0834329354",
      address: "Thanh Xuân, Hà Nội"
    },
    phongKham: "Phòng khám số 6",
    receptionDate: "30/06/2023",
    fee: "Chưa thu phí",
    prioritize: false,
  },

]