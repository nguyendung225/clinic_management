import React from 'react';

interface TableCheckBoxProps {
  toggleAllRowsSelected?: () => void;
  getToggleAllRowsSelectedProps?: () => void;
  getToggleRowSelectedProps?: () => void;
  id?: string;
}

const TableCheckBox: React.FC<TableCheckBoxProps> = ({
  toggleAllRowsSelected,
  getToggleAllRowsSelectedProps,
  getToggleRowSelectedProps,
  id,
 }) => {

  const allRowsSelectedProps = () => {
    return getToggleAllRowsSelectedProps ? {...getToggleAllRowsSelectedProps} : {}
  }

  const rowSelectedProps = () => {
    return getToggleRowSelectedProps ? {...getToggleRowSelectedProps} : {}
  }

  return (
      <input
        id={id}
        type="checkbox"
        className="check-box-row"
        {...allRowsSelectedProps}
        {...rowSelectedProps}
        onClick={toggleAllRowsSelected ? toggleAllRowsSelected : undefined}
      />
  );
};

export default TableCheckBox;
