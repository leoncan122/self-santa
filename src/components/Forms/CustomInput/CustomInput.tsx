import { Control, Controller, FieldError, FieldValues } from "react-hook-form";
import './CustomInput.css';
import { AddLinkFormValues } from "../AddLink/form.model";
import { AddFundsFormValues } from "../AddFunds/form.model";
import { AddGiftFormValues } from "../AddGift/form.model";
import { Path } from "react-hook-form";
import { LoginFormValues } from "../Login";
export type FormValues = AddLinkFormValues | AddFundsFormValues | AddGiftFormValues | LoginFormValues;

export type FormKeys = keyof AddLinkFormValues | keyof AddFundsFormValues | keyof AddGiftFormValues;

// export type FormKeys = "amount" | "from" | "date" | "title" | "price" | "description" | "text" | "url" | "email" | "password" | "confirmPassword" | "name";

interface Props<FormValues extends FieldValues> {
    name: Path<FormValues>;
    control: Control<FormValues>;
    label: string;
    type: string;
    error: FieldError | undefined;
}


export const InputForm = <T extends FormValues>({ name, control, label, type, error}: Props<T>) => {
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
                            value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
                            className={`form-control ${error ? "is-invalid" : ""}`}
                        />
                )}
            />
            {error && <div className="error">{error.message}</div>}
        </div>
    );

}