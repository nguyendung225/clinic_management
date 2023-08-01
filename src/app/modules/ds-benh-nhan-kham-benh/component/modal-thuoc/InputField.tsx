import { Form } from "react-bootstrap";

type IProps = {
  type?: string;
  className?: string;
  placeholder?: string;
  disable?: boolean;
  isInvalid?: boolean;
  field?: any
}

function InputField(props: IProps) {
  const {field, type, className, placeholder, disable, isInvalid} = props;
  const {name, value, onChange, onBlur} = field;
  
  return (
    <Form.Control
      className={`customs-input pl-0 ${className ? className : ''}`}
      placeholder={placeholder}
      isInvalid={isInvalid}
      disabled={disable}
      type={type}
      id={name}
      name={name}
      value={value ? value : ''}
      onChange={onChange}
      onBlur={onBlur}
    ></Form.Control>
  );
}

export default InputField;
