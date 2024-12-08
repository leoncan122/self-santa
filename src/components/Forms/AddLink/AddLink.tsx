import { FormValues } from "./form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import  { InputForm } from "../CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { ADD_LINK } from "./form.model";
import { useApi } from "../../../hooks/useApi";
import './AddLink.css';
import { addGift, addLink } from "../../../services/gifts.service";

export const AddLink = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(ADD_LINK),
        mode: 'onBlur',
    }); 
    
    const {data, loading, error, fetch} = useApi<FormValues, null>(addLink, {autoFetch: false});


    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        console.log(data);
    };

    const handleVerifyLink = () => {
        fetch();
    }

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
                <div className="url-form">
                    <InputForm
                        name="url"
                        control={control}
                        label="Url"
                        type="text"
                        error={errors.url}
                    />
                    <button onClick={handleVerifyLink} type="button" className="verify-btn">verify link</button>
                </div>
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

