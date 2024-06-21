import React, { FC, useEffect, useState } from "react";
import Select, { GetOptionLabel, mergeStyles } from "react-select";
import { AutoCompleteProps } from "../models/autocomplete";
import { KEY } from "../utils/Constant";
import clsx from "clsx";
import { autocompleteStyle, multiValueRemove } from "./StyleComponent";
import { toast } from "react-toastify";

const Autocomplete: FC<AutoCompleteProps> = (props: AutoCompleteProps) => {
  const {
    options,
    onChange,
    searchFunction,
  } = props;
  const [optionList, setOptionList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [pageIndex, setPageIndex] = useState<number>(1)
  const [isCheckDataSrcoll, setIsCheckDataSrcoll] = useState<boolean>(false);
  let styles = { ...props?.styles, ...props?.isReadOnly ? multiValueRemove : {} }
  const combinedStyles = mergeStyles(autocompleteStyle, styles);
  const [keyword, setKeyword] = useState('');

  const convertNameUrl = (value: string, item: any) => {
    const array = value.split(".")
    for (let i = 0; i < array.length; i++) {
      item = item?.[array[i]];
    }
    return item
  }

  const fetchData = async () => {
    if (options?.length > 0 && !props.searchFunction) {
      setOptionList(options);
    } else if (!isLoading) {
      setIsLoading(true);
      try {
        if (props.searchObject !== undefined && props.searchFunction) {

          let data = await getData(props.searchObject)
          setPageIndex(props.searchObject?.pageIndex || 1)
          setOptionList(data)
          setIsCheckDataSrcoll(data?.length > 0)
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    ((isFocus && optionList?.length === 0) || (props?.isSrcoll && !keyword)) && fetchData();
    return () => {
      setIsLoading(false);
    };
  }, [options, searchFunction, isFocus, props.value, keyword]);

  const getData = async (searchObject: any) => {
    const res = await props.searchFunction?.(searchObject);
    let data = props?.urlData ? convertNameUrl(props?.urlData, res) : res?.data?.data?.content;
    return data;
  }

  useEffect(() => {
    setOptionList([]);
    setSelectedValue(null)
  }, props?.dependencies || []);

  useEffect(() => {
    getValue();
  }, [props.value, optionList]);


  const handleChange = (selectedOption: any) => {
    setSelectedValue(selectedOption);
    onChange?.(selectedOption);
  };
  const combinedClassName = clsx(
    props?.className ? props.className : "w-100",
    clsx(props.className, props.errors && props.touched && "ac-is-invalid", "autocomplete-custom-tiep-nhan spaces h-25 radius")
  );

  const getValue = () => {
    if (props?.value) {
      setSelectedValue(props?.value)
    }
    else {
      setSelectedValue(null);
    }
  };

  const handleScrollToBottom = async () => {
    try {
      if (isCheckDataSrcoll) {
        let searchObject = { ...props.searchObject }
        searchObject.pageIndex = pageIndex + 1
        if (props?.labelSearch) searchObject[props?.labelSearch] = keyword

        setIsLoading(true);
        let data = await getData(searchObject);
        setPageIndex(pageIndex + 1);
        setIsCheckDataSrcoll(data?.length > 0);
        setOptionList([...optionList, ...data]);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false)
      toast.error("Xảy ra lỗi, vui lòng thử lại!");
    }
  }

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLElement>) => {
    if (KEY.SPACE === event.code && !(event.target as HTMLInputElement).value) {
      event.preventDefault();
      return;
    }
  };

  const handleInputChange = (newValue: string) => {
    setKeyword(newValue?.trim());
  };

  const handeBlur = () => {
    setIsFocus(false);
    setKeyword("");
  }

  useEffect(() => {
    searchOption()
  }, [keyword, selectedValue])

  const searchOption = async () => {
    try {
      if (props?.isSrcoll && !selectedValue) {
        let searchObject = { ...props.searchObject };
        if (props?.labelSearch) searchObject[props?.labelSearch] = keyword;

        setIsLoading(true);
        let data = await getData(searchObject);
        setPageIndex(props.searchObject?.pageIndex || 1);
        setOptionList(data);
        setIsCheckDataSrcoll(data?.length > 0);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Xảy ra lỗi, vui lòng thử lại!");
    }
  };
  
  return (
    <>
      <Select
        getOptionLabel={(option: GetOptionLabel<any>) =>
          props.getOptionLabel
            ? props.getOptionLabel(option)
            : option.name
        }
        getOptionValue={(option: any) =>
          props.getOptionValue
            ? props.getOptionValue(option)
            : option?.value
        }
        backspaceRemovesValue={props?.backspaceRemovesValue}
        options={optionList}
        noOptionsMessage={({ inputValue }) => `Không tìm thấy lựa chọn cho "${inputValue}"`}
        className={combinedClassName}
        name={props?.name}
        value={selectedValue}
        id={props?.id}
        key={props?.key}
        onFocus={() => setIsFocus(true)}
        onBlur={handeBlur}
        isDisabled={props?.isDisabled}
        isLoading={isLoading}
        styles={combinedStyles}
        minMenuHeight={props?.minMenuHeight}
        maxMenuHeight={props?.maxMenuHeight}
        placeholder={<p className="custom-placeholder spaces m-0">{props?.placeholder || "Chọn..."}</p>}
        onChange={handleChange}
        menuPortalTarget={props?.menuPortalTarget}
        isMulti={props?.isMulti}
        closeMenuOnSelect={props?.closeMenuOnSelect}
        menuPlacement={props?.menuPlacement ? props?.menuPlacement : "auto"}
        onMenuScrollToBottom={props?.isSrcoll ? handleScrollToBottom : undefined}
        onKeyDown={handleKeyDown}
        onInputChange={handleInputChange}
        hideSelectedOptions={props?.isReadOnly}
        menuIsOpen={props?.isReadOnly ? false : undefined}
        isSearchable={props?.isReadOnly ? false :props?.isSearchable !== undefined ? props?.isSearchable : true}
        isClearable={props?.isReadOnly ? false : (props?.isClearable !== undefined ? props?.isClearable : true)}
        />
      {props.touched && props.errors && <div className="invalid-feedback">{props.errors}</div>}
    </>
  );
};
export default Autocomplete;