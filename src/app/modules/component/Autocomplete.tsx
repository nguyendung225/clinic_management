import React, { FC, useEffect, useState } from "react";
import Select, { GetOptionLabel, mergeStyles } from "react-select";
import { AutoCompleteProps } from "../models/autocomplete";
import { KEY } from "../utils/Constant";
import { autocompleteStyle, multiValueRemove } from "./StyleComponent";

export const Autocomplete: FC<AutoCompleteProps> = (props: AutoCompleteProps) => {
  const {
    options,
    onChange,
    searchFunction,
    searchObject,
    valueField,
    value,
    setSelectedVal,
    isYeuCauKham,
    defaultValue
  } = props;
  let styles = {
    ...props?.styles,
    ...(props?.isReadOnly ? multiValueRemove : {}),
    control: (styles: any) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      const color_bg_selected = "#E6FFFB"
      return {
        ...styles,
        backgroundColor: "white",
        color: '#000',
        margin:"5px",
        width: "calc(100% - 10px)",
        cursor: isDisabled ? 'not-allowed' : 'default',
        borderRadius: "6px",
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? color_bg_selected
            : undefined,
            color:"#000",
        },
        ':hover': {
          ...styles[':hover'],
          backgroundColor: !isDisabled
            ? color_bg_selected
            : undefined,
            color:"#000",
        },
      };
    },
  };
  const combinedStyles = mergeStyles(autocompleteStyle, styles);
  const [optionList, setOptionList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (KEY.SPACE === event.code && !(event.target as HTMLInputElement).value) {
      event.preventDefault();
    }
  };

  const convertNameUrl = (value: string, item: any) => {
    const array = value.split(".")
    for (let i = 0; i < array.length; i++) {
      item = item?.[array[i]];
    }
    return item
  }

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      if (options?.length > 0 && !props.searchFunction) {
        setOptionList(options);
      } else if (!isLoading) {
        setIsLoading(true);
        try {
          if (props.searchObject !== undefined) {
            const res = await props.searchFunction?.(props.searchObject);
            let data = props?.urlData ? convertNameUrl(props?.urlData, res) : res?.data?.data?.content;
            if (active && data) {
              setOptionList(data);
              setIsLoading(false);
            }
          }
        } catch (error) {
          setIsLoading(false);
        }
      }
    };

    (isFocus && optionList?.length === 0) && fetchData();

    return () => {
      active = false;
      setIsLoading(false)
    };
  }, [options, searchFunction, searchObject, isFocus, props.value]);


  useEffect(() => {
    setOptionList([])
    setSelectedValue(null)
    if (props?.dependencies) {
      onChange?.(null);
    }
  }, props?.dependencies || []);

  useEffect(() => {
    getValue();
    setSelectedValue(defaultValue)
  }, [props.value, optionList]);

  const handleChange = (selectedOption: any) => {
    setSelectedValue(selectedOption);
    onChange?.(selectedOption);
  };

  const getValue = () => {
    if (props?.value) {
      let options = searchFunction ? optionList : props.options
      if (options?.length > 0){
        let foundValue = options?.find(option =>
          (valueField ? option[valueField] : option.code)
          === props.value
        )
        foundValue ? setSelectedValue(foundValue) : setSelectedValue(null)
      }
      else{
        setSelectedValue({name: props.value})
      }
    }
    else {
      setSelectedValue(null);
    }
  };

  const setOrderTypeId = (data: any) => {
    data?.data?.map((item: any) => item.orderTypeId = data?.id)
    return data.data;
  }

  return (
    <Select
      isClearable={props?.isClearable !== undefined ? props?.isClearable : true}
      getOptionLabel={(option: GetOptionLabel<any>) =>
        props.getOptionLabel
        ? props.getOptionLabel(option)
        : option.name
      }
      onKeyDown={(event) => handleKeyDown(event)}
      backspaceRemovesValue={props?.backspaceRemovesValue}
      isSearchable={props?.isSearchable !== undefined ? props?.isSearchable : true}
      options={optionList}
      noOptionsMessage={({ inputValue }) => `Không tìm thấy lựa chọn cho "${inputValue}"`}
      className={props?.className ? props?.className : "w-100"}
      name={props?.name}
      value={selectedValue}
      id={props?.id}
      key={props?.key}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      isDisabled={props?.isDisabled}
      isLoading={isLoading}
      styles={{...autocompleteStyle,...combinedStyles}}
      minMenuHeight={props?.minMenuHeight}
      maxMenuHeight={props?.maxMenuHeight}
      placeholder={<p className="custom-placeholder spaces m-0">{props?.placeholder || "Chọn..."}</p>}
      onChange={handleChange}
      closeMenuOnSelect={props?.closeMenuOnSelect}
      isMulti={props?.isMulti}
      defaultValue={props?.defaultValue}
      menuPortalTarget={props?.menuPortalTarget}
    />
  );
};
