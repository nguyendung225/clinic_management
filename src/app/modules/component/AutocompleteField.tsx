import React, { FC, useEffect, useRef, useState } from 'react';
import { Autocomplete } from './Autocomplete';
import { AutoCompleteProps } from "../models/autocomplete";
import { CODE } from "../utils/Constant";
import { toast } from "react-toastify";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AutocompleteFieldProps extends AutoCompleteProps {
    touched?: any;
    errors?: any;
    disabled?: boolean
}

const AutocompleteField: FC<AutocompleteFieldProps> = (props) => {
    const { className, touched, errors, disabled,} = props;

    return (
        <>
            <Autocomplete
                {...props}
                className={`${className} ${errors && touched ? "is-invalid" : ""}`}
                isDisabled={disabled}
            />
            {touched && errors && (
                <div className="invalid-feedback">{errors}</div>
            )}
        </>
    );
};

export default AutocompleteField;
