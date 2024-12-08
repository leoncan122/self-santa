import { FormValues } from "./form.model";
import { zodResolver } from "@hookform/resolvers/zod";
import  { InputForm } from "../CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { ADD_LINK } from "./form.model";
import './AddLink.css';

export const AddLink = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(ADD_LINK),
        mode: 'onBlur',
    }); 

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        console.log(data);
    };

    return (
        <section>
            <h1>
                Add a new gift
            </h1>
            <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                    name="url"
                    control={control}
                    label="Url"
                    type="text"
                    error={errors.url}
                />
                <InputForm
                    name="title"
                    control={control}
                    label="Title"
                    type="text"
                    error={errors.title}
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
                    Submit
                </button>
            </form>
        </section>
    );
}

