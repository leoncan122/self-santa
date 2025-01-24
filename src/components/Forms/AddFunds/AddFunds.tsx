import { InputForm } from "../CustomInput/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ADD_FUNDS_SCHEMA } from "./form.model";
import { AddFundsFormValues } from "./form.model";
import { SubmitHandler, useForm,  } from "react-hook-form";
import { Button } from "../../Button/Button";
import { MessagingObservable } from "../../../services/messaging.service";
import { BaseSyntheticEvent } from "react";
export const AddFunds = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<AddFundsFormValues>({
        resolver: zodResolver(ADD_FUNDS_SCHEMA),
        mode: 'onBlur',
        defaultValues: {
            text: '',
            amount: '',
            from: '',
            date: new Date(), // Inicializa correctamente los valores
          },
    }); 
    
    const onSubmit: SubmitHandler<AddFundsFormValues> = async (data: AddFundsFormValues, event?: BaseSyntheticEvent) => {
        console.log(data);
        if (event) {
            event.preventDefault();
        }
        // try {
        //     MessagingObservable.notify({
        //         type: "notification",
        //         payload: {
        //             id: "notif134",
        //             data: {
        //                 text: `You have added ${data.amount} from ${data.from}`,
        //                 amount: data.amount,
        //                 dateCreated: new Date(),
        //                 from: data.from
        //             }
        //         }
        //     });
        // } catch (error) {
        //     console.error(error);
        // }
        
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