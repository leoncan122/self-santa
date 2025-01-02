import { AddGiftFormValues } from "./form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import  { InputForm } from "../CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { ADD_GIFT_SCHEMA } from "./form.model";
import { useApi } from "../../../hooks/useApi";
import './AddGift.css';
import { addGift } from "../../../services/gifts.service";
import { AddLink } from "../AddLink";

export const AddGift = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<AddGiftFormValues>({
        resolver: zodResolver(ADD_GIFT_SCHEMA),
        mode: 'onBlur',
    }); 
    
    const {data, loading, error, fetch} = useApi<AddGiftFormValues, null>(addGift, {autoFetch: false});


    const onSubmit: SubmitHandler<AddGiftFormValues> = (data: AddGiftFormValues) => {
        console.log(data);
    };

    

    if (loading) {
        return <div>Loading...</div>;
      }
    
    if (error) {
    return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h1>
                Add a new gift
            </h1>
            <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
                <AddLink />
                <InputForm
                    name="title"
                    control={control}
                    label="Title"
                    type="text"
                    error={errors.title}
                />
                <InputForm
                    name="price"
                    control={control}
                    label="Price"
                    type="number"
                    error={errors.price}
                />
                <InputForm
                    name="description"
                    control={control}
                    label="Description"
                    type="text"
                    error={errors.description}
                />
                {/* <InputForm
                    name="confirmPassword"
                    control={control}
                    label="Confirm Password"
                    type="password"
                    error={errors.confirmPassword}
                /> */}
                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </form>
        </>
    );
}

