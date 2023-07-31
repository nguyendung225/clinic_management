import React, { FC, useEffect, useState } from "react";
import Select, { GetOptionLabel } from "react-select";
import { AutoCompleteProps } from "../models/autocomplete";
import { KEY } from "../utils/Constant";

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    background: state.isDisabled ? '#eff2f5' : '#fff',
    borderColor: '#E4E6EF',
    minHeight: '30px',
    height: '30px',
    borderRadius: "0.475rem",
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#369DC3',
    },
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    height: '30px',
  }),
  input: (provided: any) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: (state: any) => ({
    display: 'none',
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    height: '30px',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: "#5E6278",
    backgroundColor: "white",
    '&:hover': {
      background: '#369DC3',
      color: "#fff",
      opacity: 0.8,
    },
    zIndex: state.isSelected ? 9999 : 'auto',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#5E6278',
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    padding: '0px',
  }),
};

export const Autocomplete: FC<AutoCompleteProps> = (props: AutoCompleteProps) => {
  const { options, onChange, searchFunction, searchObject, valueField } = props;
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
    getValue();
  }, [props.value, optionList]);

  const handleChange = (selectedOption: any) => {
    setSelectedValue(selectedOption);
    onChange?.(selectedOption);
  };

  const getValue = () => {
    if(props?.value){

      let foundValue = optionList?.find(option =>
        (valueField ? option[valueField] : option.code)
        === props.value
      )
      foundValue ? setSelectedValue(foundValue) : setSelectedValue({name: props.value})
    }
    else {
      setSelectedValue(null);
    }
  };


  return (
    <Select
      menuPortalTarget={props?.menuPortalTarget}
      isClearable={props?.isClearable !== undefined ? props?.isClearable : true}
      getOptionLabel={(option) =>
        option
          ? ((props?.displayLable)
            ? (props?.showCode
              ? option?.code + ' - ' + option[props.displayLable]
              : option[props.displayLable])
            : option?.code)
          : option?.name}
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
      styles={customStyles}
      minMenuHeight={props?.minMenuHeight}
      maxMenuHeight={props?.maxMenuHeight}
      placeholder={<p className="custom-placeholder spaces m-0">{props?.placeholder || "Chọn..."}</p>}
      onChange={handleChange}
      menuPlacement="auto"
    />
  );
};
