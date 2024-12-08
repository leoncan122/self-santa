
import { FormValues } from "./form.model";
import { InputForm } from "../CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { schema } from "./form.model";

export const Login = () => {
    const { control, handleSubmit, formState: {errors}} = useForm<FormValues>({
      zodResolver: schema,
        mode: 'onBlur',
    });


    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        console.log(data);
    }


    return (
        <main>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm
                    name="name"
                    control={control}
                    label="Name"
                    type="text"
                    error={errors.name}
                />
                <InputForm
                    name="email"
                    control={control}
                    label="Email"
                    type="email"
                    error={errors.email}
                />
                <InputForm
                    name="password"
                    control={control}
                    label="Password"
                    type="password"
                    error={errors.password}
                />
                <InputForm
                    name="confirmPassword"
                    control={control}
                    label="Confirm Password"
                    type="password"
                    error={errors.confirmPassword}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </main>
    )
}
