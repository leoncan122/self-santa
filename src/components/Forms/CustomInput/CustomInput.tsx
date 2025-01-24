import { Control, Controller, FieldError } from "react-hook-form";
import './CustomInput.css';
import { AddLinkFormValues } from "../AddLink/form.model";
import { AddFundsFormValues } from "../AddFunds/form.model";
import { AddGiftFormValues } from "../AddGift/form.model";

export type FormValues = AddLinkFormValues | AddFundsFormValues | AddGiftFormValues;
export type FormKeys = "name" | "amount" | "from" | "date" | "title" | "price" | "description" | "text" | "url" ;
interface Props {
    name: FormKeys;
    control: Control<FormValues>;
    label: string;
    type: string;
    error: FieldError | undefined;
    min?: number;
    max?: number;
}


export const InputForm = ({ name, control, label, type, error, min=0, max=20}: Props) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        id={name}
                        type={type}
                        {...field}
                        min={min}
                        max={max}
                        className={`form-control ${error ? "is-invalid" : ""}`}
                    />
                )}
            />
            {error && <div className="error">{error.message}</div>}
        </div>
    );

}