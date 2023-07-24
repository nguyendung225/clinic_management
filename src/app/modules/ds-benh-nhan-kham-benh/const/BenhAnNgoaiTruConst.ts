import { loaiBenhAn } from "../models/BenhAnNgoaiTruModel";

export const danhSachLoaiBenhAn: loaiBenhAn[] = [
  { id: 0, code: "BANOIKHOA", name: "Bệnh án nội khoa", description: "" },
  { id: 1, code: "BANHIKHOA", name: "Bệnh án nhi khoa", description: "" },
  { id: 2, code: "BATRUYENNHIEM", name: "Bệnh án truyền nhiễm", description: "" },
  { id: 3, code: "BADALIEU", name: "Bệnh án da liễu", description: "" },
  { id: 4, code: "BAHHVTM", name: "Bệnh án huyết học và truyền máu", description: "" },
  { id: 5, code: "BABONG", name: "Bệnh án bỏng", description: "" },
  { id: 6, code: "BAUNGBUOU", name: "Bệnh án ung bướu", description: "" },
  { id: 7, code: "BARHM", name: "Bệnh án răng - hàm - mặt", description: "" },
  { id: 8, code: "BATMH", name: "Bệnh án tai - mũi - họng", description: "" },
  { id: 9, code: "BANGOAITRU", name: "Bệnh án ngoại trú (chung)", description: "" },
  { id: 10, code: "BANGOAITRURHM", name: "Bệnh án ngoại trú răng hàm mặt", description: "" },
  { id: 11, code: "BANGOAITRUTMH", name: "Bệnh án ngoại trú tai mũi họng", description: "" },
  { id: 12, code: "BANGOAIKHOA", name: "Bệnh án ngoại khoa", description: "" },
  { id: 13, code: "BAYHCTNGOAITRU", name: "Bệnh án YHCT ngoại trú", description: "" },
  { id: 14, code: "BANOITRUYHCT", name: "Bệnh án nội trú YHCT", description: "" },
  { id: 15, code: "BADDVPHCN", name: "Bệnh án điều dưỡng và phục hồi chức năng", description: "" },
]
export const danhSachNguoiNha = [
  { id: 0, name: "Ông" },
  { id: 1, name: "Bà" },
  { id: 2, name: "Bố" },
  { id: 3, name: "Mẹ" },
  { id: 4, name: "Cô" },
  { id: 5, name: "Dì" },
  { id: 6, name: "Chú" },
  { id: 7, name: "Bác" },
  { id: 8, name: "Cậu" },
  { id: 9, name: "Mợ" },
  { id: 10, name: "Anh trai" },
  { id: 11, name: "Chị gái" },
  { id: 12, name: "Em gái" },
  { id: 13, name: "Em Trai" },
  { id: 14, name: "Cháu trai" },
  { id: 15, name: "Cháu gái" },
]

export const gioiTinh = [
  { id: 1, name: "Nam" },
  { id: 2, name: "Nữ" },
  { id: 3, name: "Khác" },
]

export const danToc = [
  { id: 1, name: "Kinh" },
  { id: 2, name: "Mường" },
  { id: 3, name: "Thái" },
  { id: 3, name: "Tày" },
  { id: 3, name: "Nùng" },
  { id: 3, name: "Khơ-me" },
  { id: 3, name: "Khơ-mú" },
  { id: 3, name: "H-Mông" },
  { id: 3, name: "Ê đê" },
  { id: 3, name: "Gia rai" },
]

export const quocTich = [
  { id: 1, name: "Việt Nam" },
  { id: 2, name: "Hoa Kỳ" },
  { id: 3, name: "Trung Quốc" },
  { id: 4, name: "Nhật Bản" },
  { id: 5, name: "Hàn Quốc" },
  { id: 6, name: "Lào" },
  { id: 7, name: "Campuchia" },
  { id: 8, name: "Thái Lan" },
  { id: 9, name: "Malaysia" },
  { id: 10, name: "Indonesia" },
  { id: 11, name: "Ấn Độ" },
  { id: 12, name: "Nga" },
  { id: 13, name: "Anh" },
  { id: 14, name: "Đức" },
]

export const doiTuong = [
  { id: 0, name: "BHYT" },
  { id: 1, name: "Viện phí" },
  { id: 2, name: "Quân đội" },
  { id: 3, name: "Công an" },
]

export const noiDangKyKCBBD = [
  { id: 0, name: "Bệnh viện phục hồi chức năng Quảng Nam" },
]

export const KEY_NAME = {
  thongTinKhamBenh: "Thông tin khám bệnh",
  sinhHieu: "Sinh hiệu",
  chieuCao: "Chiều cao",
  canNang: "Cân nặng",
  BMI: "BMI"
}

export const MUC_BMI = {
  "gầy": 18.5,
  "bình thường": 24.9,
  "tiền béo": 29.9,
  "béo phì độ I": 34.9,
  "béo phì độ II": 39.9,
};

export const PHAN_LOAI: { [key: string]: string } = {
  "gầy": "gầy",
  "bình thường": "bình thường",
  "tiền béo": "tiền béo",
  "béo phì độ I": "béo phì độ I",
  "béo phì độ II": "béo phì độ II",
  "béo phì độ III": "béo phì độ III",
};


export const THONG_TIN_KHAM_BENH = [
  {
    "id": 9,
    "name": "Sinh hiệu",
    "code": "TTKB02",
    "structure": [
      {
        "parentId": 9,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 1,
          "name": "Mạch",
          "datatypeId": 2,
          "dataType": "number",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": {
          "conceptId": 1,
          "hiMaleAbsolute": null,
          "hiMaleCritical": null,
          "hiMaleNormal": null,
          "lowMaleAbsolute": null,
          "lowMaleCritical": null,
          "lowMaleNormal": null,
          "hiFemaleAbsolute": null,
          "hiFemaleCritical": null,
          "hiFemaleNormal": null,
          "lowFemaleAbsolute": null,
          "lowFemaleCritical": null,
          "lowFemaleNormal": null,
          "hiChildAbsolute": null,
          "hiChildCritical": null,
          "hiChildNormal": null,
          "lowChildAbsolute": null,
          "lowChildCritical": null,
          "lowChildNormal": null,
          "units": "lần/phút",
          "allowDecimal": null,
          "displayPrecision": null
        },
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 9,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 2,
          "name": "Nhiệt độ",
          "datatypeId": 2,
          "dataType": "number",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": {
          "conceptId": 2,
          "hiMaleAbsolute": null,
          "hiMaleCritical": null,
          "hiMaleNormal": null,
          "lowMaleAbsolute": null,
          "lowMaleCritical": null,
          "lowMaleNormal": null,
          "hiFemaleAbsolute": null,
          "hiFemaleCritical": null,
          "hiFemaleNormal": null,
          "lowFemaleAbsolute": null,
          "lowFemaleCritical": null,
          "lowFemaleNormal": null,
          "hiChildAbsolute": null,
          "hiChildCritical": null,
          "hiChildNormal": null,
          "lowChildAbsolute": null,
          "lowChildCritical": null,
          "lowChildNormal": null,
          "units": "Độ C",
          "allowDecimal": null,
          "displayPrecision": null
        },
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 9,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 3,
          "name": "Huyết áp",
          "datatypeId": 2,
          "dataType": "listInput",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": {
          "conceptId": 3,
          "hiMaleAbsolute": null,
          "hiMaleCritical": null,
          "hiMaleNormal": null,
          "lowMaleAbsolute": null,
          "lowMaleCritical": null,
          "lowMaleNormal": null,
          "hiFemaleAbsolute": null,
          "hiFemaleCritical": null,
          "hiFemaleNormal": null,
          "lowFemaleAbsolute": null,
          "lowFemaleCritical": null,
          "lowFemaleNormal": null,
          "hiChildAbsolute": null,
          "hiChildCritical": null,
          "hiChildNormal": null,
          "lowChildAbsolute": null,
          "lowChildCritical": null,
          "lowChildNormal": null,
          "units": "mmHg",
          "allowDecimal": null,
          "displayPrecision": null
        },
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": [
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 21,
              "name": "Cho về nhà",
              "datatypeId": 1,
              "dataType": "number",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 21,
              "name": "Cho về nhà",
              "datatypeId": 1,
              "dataType": "number",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
        ]
      },
      {
        "parentId": 9,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 4,
          "name": "Nhịp thở",
          "datatypeId": 2,
          "dataType": "number",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": {
          "conceptId": 4,
          "hiMaleAbsolute": null,
          "hiMaleCritical": null,
          "hiMaleNormal": null,
          "lowMaleAbsolute": null,
          "lowMaleCritical": null,
          "lowMaleNormal": null,
          "hiFemaleAbsolute": null,
          "hiFemaleCritical": null,
          "hiFemaleNormal": null,
          "lowFemaleAbsolute": null,
          "lowFemaleCritical": null,
          "lowFemaleNormal": null,
          "hiChildAbsolute": null,
          "hiChildCritical": null,
          "hiChildNormal": null,
          "lowChildAbsolute": null,
          "lowChildCritical": null,
          "lowChildNormal": null,
          "units": "lần/phút",
          "allowDecimal": null,
          "displayPrecision": null
        },
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 9,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 5,
          "name": "Cân nặng",
          "datatypeId": 2,
          "dataType": "number",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": {
          "conceptId": 5,
          "hiMaleAbsolute": null,
          "hiMaleCritical": null,
          "hiMaleNormal": null,
          "lowMaleAbsolute": null,
          "lowMaleCritical": null,
          "lowMaleNormal": null,
          "hiFemaleAbsolute": null,
          "hiFemaleCritical": null,
          "hiFemaleNormal": null,
          "lowFemaleAbsolute": null,
          "lowFemaleCritical": null,
          "lowFemaleNormal": null,
          "hiChildAbsolute": null,
          "hiChildCritical": null,
          "hiChildNormal": null,
          "lowChildAbsolute": null,
          "lowChildCritical": null,
          "lowChildNormal": null,
          "units": "kg",
          "allowDecimal": null,
          "displayPrecision": null
        },
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 9,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 6,
          "name": "Chiều cao",
          "datatypeId": 2,
          "dataType": "number",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": {
          "conceptId": 6,
          "hiMaleAbsolute": null,
          "hiMaleCritical": null,
          "hiMaleNormal": null,
          "lowMaleAbsolute": null,
          "lowMaleCritical": null,
          "lowMaleNormal": null,
          "hiFemaleAbsolute": null,
          "hiFemaleCritical": null,
          "hiFemaleNormal": null,
          "lowFemaleAbsolute": null,
          "lowFemaleCritical": null,
          "lowFemaleNormal": null,
          "hiChildAbsolute": null,
          "hiChildCritical": null,
          "hiChildNormal": null,
          "lowChildAbsolute": null,
          "lowChildCritical": null,
          "lowChildNormal": null,
          "units": "cm",
          "allowDecimal": null,
          "displayPrecision": null
        },
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 9,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 7,
          "name": "SPO2",
          "datatypeId": 2,
          "dataType": "number",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": {
          "conceptId": 7,
          "hiMaleAbsolute": null,
          "hiMaleCritical": null,
          "hiMaleNormal": null,
          "lowMaleAbsolute": null,
          "lowMaleCritical": null,
          "lowMaleNormal": null,
          "hiFemaleAbsolute": null,
          "hiFemaleCritical": null,
          "hiFemaleNormal": null,
          "lowFemaleAbsolute": null,
          "lowFemaleCritical": null,
          "lowFemaleNormal": null,
          "hiChildAbsolute": null,
          "hiChildCritical": null,
          "hiChildNormal": null,
          "lowChildAbsolute": null,
          "lowChildCritical": null,
          "lowChildNormal": null,
          "units": "%",
          "allowDecimal": null,
          "displayPrecision": null
        },
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 9,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 7,
          "name": "BMI",
          "datatypeId": 2,
          "dataType": "string",
          "hasMinMax": null,
          "value": ""
        },
        "conceptNumeric": {
          "conceptId": 7,
          "hiMaleAbsolute": null,
          "hiMaleCritical": null,
          "hiMaleNormal": null,
          "lowMaleAbsolute": null,
          "lowMaleCritical": null,
          "lowMaleNormal": null,
          "hiFemaleAbsolute": null,
          "hiFemaleCritical": null,
          "hiFemaleNormal": null,
          "lowFemaleAbsolute": null,
          "lowFemaleCritical": null,
          "lowFemaleNormal": null,
          "hiChildAbsolute": null,
          "hiChildCritical": null,
          "hiChildNormal": null,
          "lowChildAbsolute": null,
          "lowChildCritical": null,
          "lowChildNormal": null,
          "units": "kg/m2",
          "allowDecimal": null,
          "displayPrecision": null
        },
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null,
          "disabled": true,
          "outline": true,
          "readOnly": true,
          "color": "red"
        },
        "conceptAnswers": null
      }
    ]
  },

  {
    "id": 10,
    "name": "Thông tin khám bệnh",
    "code": "TTKB01",
    "structure": [
      {
        "parentId": 10,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 11,
          "name": "Diễn biến bệnh & triệu chứng LS",
          "datatypeId": 4,
          "dataType": "textarea",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 10,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 12,
          "name": "Tiền sử của BN",
          "datatypeId": 4,
          "dataType": "textarea",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 10,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 14,
          "name": "Chẩn đoán",
          "datatypeId": 4,
          "dataType": "textarea",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 10,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 15,
          "name": "Tiền sử bệnh của gia đình",
          "datatypeId": 4,
          "dataType": "textarea",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 10,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 16,
          "name": "Khám toàn thân",
          "datatypeId": 4,
          "dataType": "textarea",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 10,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 17,
          "name": "Chẩn đoán ban đầu",
          "datatypeId": 4,
          "dataType": "textarea",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 10,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 18,
          "name": "Tóm tắt kết quả CLS",
          "datatypeId": 4,
          "dataType": "textarea",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 10,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 19,
          "name": "Phương pháp điều trị",
          "datatypeId": 4,
          "dataType": "textarea",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },
      {
        "parentId": 10,
        "conceptAnswerIds": "21",
        "concept": {
          "conceptId": 20,
          "name": "Xử trí",
          "datatypeId": 3,
          "dataType": "select",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": [
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 21,
              "name": "Cho về nhà",
              "datatypeId": 1,
              "dataType": "String",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 21,
              "name": "Cho về nhà",
              "datatypeId": 1,
              "dataType": "String",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },

        ]
      },
      {
        "parentId": 10,
        "conceptAnswerIds": null,
        "concept": {
          "conceptId": 22,
          "name": "Ghi chú",
          "datatypeId": 4,
          "dataType": "textarea",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": null
      },




      {
        "parentId": 10,
        "conceptAnswerIds": "37,36,35,34,33,32,31,30,24,25,26,27,28,29,38",
        "concept": {
          "conceptId": 23,
          "name": "Khám bộ phận",
          "datatypeId": 3,
          "dataType": "radioText",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": [
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 24,
              "name": "TMH",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": "12345"
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 25,
              "name": "RHM",
              "datatypeId": 2,
              "dataType": "radio",
              "hasMinMax": null,
              "value": "huy"
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 26,
              "name": "Mắt",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 27,
              "name": "Nội tiết",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 28,
              "name": "Tâm thần",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 29,
              "name": "Dinh dưỡng",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 30,
              "name": "Vận động",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 31,
              "name": "Sản phụ khoa",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 32,
              "name": "Chung",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 33,
              "name": "Tuần hoàn",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 34,
              "name": "Hô hấp",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 35,
              "name": "Tiêu hóa",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 36,
              "name": "Thận tiết niệu",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 37,
              "name": "Thần kinh",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          },
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 38,
              "name": "Cơ xương khớp",
              "datatypeId": 1,
              "dataType": "radio",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          }
        ]
      },

      {
        "parentId": 10,
        "conceptAnswerIds": "40",
        "concept": {
          "conceptId": 39,
          "name": "Bệnh chính",
          "datatypeId": 3,
          "dataType": "select",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": [
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 40,
              "name": "Tiêu chảy",
              "datatypeId": 1,
              "dataType": "string",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          }
        ]
      },
      {
        "parentId": 10,
        "conceptAnswerIds": "42",
        "concept": {
          "conceptId": 41,
          "name": "Bệnh phụ",
          "datatypeId": 3,
          "dataType": "select",
          "hasMinMax": null,
          "value": null
        },
        "conceptNumeric": null,
        "conceptAttribute": {
          "attributeId": null,
          "name": null,
          "datatype": null,
          "totalTextRow": null
        },
        "conceptAnswers": [
          {
            "parentId": null,
            "conceptAnswerIds": null,
            "concept": {
              "conceptId": 42,
              "name": "Viêm ruột",
              "datatypeId": 1,
              "dataType": "String",
              "hasMinMax": null,
              "value": null
            },
            "conceptNumeric": null,
            "conceptAttribute": {
              "attributeId": null,
              "name": null,
              "datatype": null,
              "totalTextRow": null
            },
            "conceptAnswers": null
          }
        ]
      }
    ]
  }
]