import { InputForm } from "../CustomInput/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ADD_FUNDS_SCHEMA } from "./form.model";
import { AddFundsFormValues } from "./form.model";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../Button/Button";
export const AddFunds = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<AddFundsFormValues>({
        resolver: zodResolver(ADD_FUNDS_SCHEMA),
        mode: 'onBlur',
    }); 

    const onSubmit: SubmitHandler<AddFundsFormValues> = (data: AddFundsFormValues) => {
        console.log(data);
    }   
    
    return (
        <>
            <h1>
                Add funds
            </h1>
            <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
                    <InputForm
                    name="from"
                    control={control}
                    label="From"
                    type="text"
                    error={errors.from}
                />
                <InputForm
                    name="amount"
                    control={control}
                    label="Amount"
                    type="number"
                    error={errors.amount}
                    min={0}
                    max={9999}
                />
                <Button type="submit" >Send</Button>
            </form>
        </>
    )

};