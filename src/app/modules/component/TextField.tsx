import { Form, FormControl } from 'react-bootstrap';
import { useField } from 'formik';

const TextField = ({ ...props }) => {
    const [field, meta] = useField(props.name);

    return (
        <Form.Group>
            <FormControl
                {...field}
                {...props}
                className={`form-control customs-input ${meta.error && meta.touched ? "is-invalid" : ""}`}
            />
            {meta.touched && meta.error && (
                <div className="invalid-feedback">{meta.error}</div>
            )}
        </Form.Group>
    );
};

export default TextField
