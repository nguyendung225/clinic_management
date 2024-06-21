import { VARIABLE_STRING } from "../../utils/Constant";
import { KHAM_BO_PHAN, INITIALVALUES } from "../constants/KhamBenh";

interface DataItem {
    code: string;
    value?: string;
    subConcepts?: any[];
}
export const convertDataKhamBenhDto = (data: DataItem) => {
    let concepts = []
    for (const [key, itemData] of Object.entries(data)) {
        let subConcepts: any = []

        switch (key) {
            case VARIABLE_STRING.KHAM_BO_PHAN:
                subConcepts = convertDataKhamBoPhanDto(itemData);
                if (subConcepts?.length > 0) {
                    concepts.push(convertItemValue(key, null, subConcepts));
                }
                break;
            case VARIABLE_STRING.SINH_HIEU:
                for (const [key, value] of Object.entries(itemData)) {
                    if ((value as any)?.valueText) {
                        concepts.push(value);
                    }
                }
                break;
            case VARIABLE_STRING.BENH_CHINH:
            case VARIABLE_STRING.XU_TRI:
                if (itemData?.value?.name) {
                    subConcepts.push(convertItemValue(itemData?.value?.code, itemData?.value?.name))
                    concepts.push(convertItemValue(key, null, subConcepts));
                }
                break;
            case VARIABLE_STRING.BENH_PHU:
                itemData?.value?.map((item: any) => {
                    subConcepts.push(convertItemValue(item?.code, item?.name))
                })
                if (subConcepts?.length > 0) {
                    concepts.push(convertItemValue(key, null, subConcepts));
                }
                break;
            default:
                if (itemData?.value) {
                    concepts.push(convertItemValue(key, itemData?.value));
                }
                break;
        }
    }

    return concepts;
}

export const convertDataKhamBoPhanDto = (data : any) => {
    let subConcepts:any = []
    data?.children?.forEach((itemKhamBoPhan: any) => {
        if (itemKhamBoPhan?.value) {
            subConcepts.push(convertItemValue(itemKhamBoPhan?.code, itemKhamBoPhan?.value))
        }
    });
    return subConcepts;
}

export const convertItemValue = (code: string, valueText?: string | null, subConcepts?: any) => {
    let value: any = {}
    value.code = code;
    if (valueText) value.valueText = valueText;
    if (subConcepts?.length > 0) value.subConcepts = subConcepts;

    return value;
}

export const convertDataKhamBenh = (data: any) => {
    let TTKhamBenh: any = { ...INITIALVALUES }
    if (data?.concepts?.length > 0) {
        data?.concepts?.forEach((item: any) => {
            switch (item?.code) {
                case VARIABLE_STRING.KHAM_BO_PHAN:
                    let khamBoPhan = convertDataKhamBoPhan(item);
                    TTKhamBenh[item?.code] = khamBoPhan;
                    break;
                case VARIABLE_STRING.BENH_CHINH:
                case VARIABLE_STRING.XU_TRI:
                    let valueBenhChinh = {
                        code: item?.code,
                        value: convertDataSubConcepts(item?.subConcepts)[0]
                    }
                    TTKhamBenh[item?.code] = valueBenhChinh;
                    break;
                case VARIABLE_STRING.BENH_PHU:
                    let valueBenhPhu = {
                        code: item?.code,
                        value: convertDataSubConcepts(item?.subConcepts)
                    }
                    TTKhamBenh[item?.code] = valueBenhPhu;
                    break;
                default:
                    let value = {
                        code: item?.code,
                        value: item?.valueText
                    }
                    TTKhamBenh[item?.code] = value;
                    break;
            }
        });
    }

    if (data?.sinhHieu?.length > 0) {
        let sinhHieu: any = INITIALVALUES.sinhHieu;
        data?.sinhHieu?.forEach((item: any) => {
            let value = {
                code: item?.code,
                valueText: item?.value
            }
            sinhHieu[item?.code] = value;
        });
        TTKhamBenh[VARIABLE_STRING.SINH_HIEU] = sinhHieu;
    }

    return TTKhamBenh;
}

export const convertDataKhamBoPhan = (data: any) => {
    let khamBoPhan: any = { ...KHAM_BO_PHAN }
    if (data?.subConcepts?.length > 0) {
        data?.subConcepts.forEach((itemBoPhan: any) => {
            let index = khamBoPhan?.children.findIndex((item: any) => item?.code === itemBoPhan?.valueConceptCode)

            if (index > -1) {
                let item = {
                    ...khamBoPhan.children[index],
                    value: itemBoPhan?.value,
                }
                khamBoPhan.children[index] = item
            }
        })
    }
    return khamBoPhan;
}

export const resetDataKhamBoPhan = () => {
    let khamBoPhan: any = KHAM_BO_PHAN;
    khamBoPhan?.children?.forEach((item: any) => {
        item.value = null
    });
}

export const resetDataSinhHieu = () => {
    let sinhHieu: any = INITIALVALUES?.sinhHieu;
    Object.entries(sinhHieu).forEach(([key, value]: [any, any]) => {
        value.valueText = "";
    })
}

const convertDataSubConcepts = (data: any[]) : any[] => {
    let loaiBenh: any[] = data?.map((item: any) => {
        return {
            name: item?.value,
            code: item?.valueConceptCode,
            id: item?.valueConceptId
        }
    });
    return loaiBenh;
}