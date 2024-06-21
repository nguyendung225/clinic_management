import { TYPE_INPUT } from "../../utils/Constant";
import { LIST_PRODUCT_TYPE, LIST_STATUS_KHO_TU_TRUC } from "../consts/QuanLyKhoConst"
import { IStatus } from "../models/QuanLyKhoModels";

export const CheckLoaiHangHoa = (type: string) => {
    return LIST_PRODUCT_TYPE.find(item => item?.code === type)
}

export const CheckStatusKhoTuTruc = (type: string) => {
    return LIST_STATUS_KHO_TU_TRUC.find((item: IStatus) => item?.code === type)
}

export const convertData = (data: any) => {
  const result: any = {};
  for (const key in data) {
    let item = data[key];
    if (item?.valueText) result[key] = item?.valueText;
    else if (item?.valueObject?.length > 0) {
      let array: any = [];
      item?.valueObject?.forEach((element: any) => {
        array.push({
          code: element?.code,
          name: element?.name,
        });
      });
      result[key] = array;
    }
  }
  return result;
};

export const convertObjectToArray = (data: any) => {
  const mappedObject: any = {};
  for (const key in data) {
    if (typeof data[key] === TYPE_INPUT.STRING && data[key]) {
      mappedObject[key] = {
        code: key,
        valueText: data[key],
      };
    } else if (Array.isArray(data[key]) && data[key]?.[0]?.code) {
      mappedObject[key] = {
        code: key,
        valueObject: data[key].map((item: any) => ({
          code: item?.code,
          name: item?.name,
        })),
      };
    }
  }

  return Object.values(mappedObject);
};