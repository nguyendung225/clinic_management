import React from "react";


export interface AutoCompleteProps {
  options: any[];
  isClearable?: boolean;
  getOptionLabel?: (option: any) => string;
  searchFunction?: (searchObject: object) => Promise<any> | null | 0 | undefined;
  searchObject?: object | undefined;
  onChange?: (selectedOption: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
  className?: string;
  name?: string;
  id?: string;
  key?: string;
  noOptionsMessage?: (obj: { inputValue: string }) => React.ReactNode;
  backspaceRemovesValue?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  minMenuHeight?: number;
  maxMenuHeight?: number;
  placeholder?: string;
  setSelectedVal?: any
  value?: any;
  valueField?: string;
}
