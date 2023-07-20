import { INPUT_TYPE, LAYOUT, SELECT_TYPE, TYPE } from "./const";
import { iChildren, iConceptDto, iItemData } from "../models/inputModel";

export const checkType = (datatype: string) => {
    if (INPUT_TYPE.includes(datatype)) {
        return TYPE.input;
    }
    if (SELECT_TYPE.includes(datatype)) {
        return TYPE.select;
    }
    return datatype;
}

export const checkLayout = (layout: string) => {
    return LAYOUT.horizontal === layout
}

export const listItemChild = (data: any) => {
    let objectData: any = {}
    if (data?.length > 0) {
        data?.forEach((item: any, index: number) => {
            let value: any = {}
            item?.structure?.length > 0 && item?.structure?.map((itemStructure: any, index: number) => {
                let itemObjects = getListItemChild(itemStructure)
                value[`${itemObjects?.name}`] = itemObjects
            })
            objectData[`${item?.name}`] = value
        });
    }
    return objectData
}

export const convertDto = (data: any) => {
    let listData: any[] = []
    data?.length > 0 && data.map((item: any, index: number) => {
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                const itemData = item[key];
                let itemObject: iConceptDto = {
                    id: itemData?.id || null,
                    valueComplex: itemData?.value || null,
                    valueNumeric: itemData?.value || null,
                    valueText: itemData?.value || null,
                }
                listData.push(itemObject)
            }
        }
    })
    return listData;
}

const getListItemChild = (items: any) => {
    let arr: any = []
    let itemObject: iItemData = {
        id: items?.concept?.conceptId,
        name: items?.concept?.name,
        value: items?.concept?.value,
        dataType: items?.concept?.dataType,
        units: items?.conceptNumeric?.units || null
    }

    if (items?.conceptAnswers?.length > 0) {
        items?.conceptAnswers?.map((item: any, index: number) => {
            let itemObject: iChildren = {
                id: item?.concept?.conceptId,
                name: item?.concept?.name,
                value: item?.concept?.value,
                dataType: item?.concept?.dataType,
                units: item?.conceptNumeric?.units || null,
                attribute: item?.conceptAttribute || null
            }
            arr.push(itemObject)
        })
    }
    itemObject.children = arr?.length > 0 ? arr : null

    return itemObject;

}