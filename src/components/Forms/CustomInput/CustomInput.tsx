import { Control, Controller, FieldError } from "react-hook-form";
import './CustomInput.css';
import { FormValues } from "../AddLink/form.model";

interface Props {
    name: keyof FormValues;
    control: Control<FormValues>;
    label: string;
    type: string;
    error: FieldError | undefined;
}


export const InputForm = ({ name, control, label, type, error }: Props) => {
    return (
        <div className="form-group">
            <label htmlFor={name.toLocaleString()}>{label}</label>
            <Controller
                name={name.toLocaleString()}
                control={control}
                render={({ field }) => (
                    <input
                        id={name.toLocaleString()}
                        type={type}
                        {...field}
                        className={`form-control ${error ? "is-invalid" : ""}`}
                    />
                )}
            />
            {error && <span className="error">{error.message}</span>}
        </div>
    );

}