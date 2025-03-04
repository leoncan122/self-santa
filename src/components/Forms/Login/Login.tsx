
import { LoginFormValues } from "./form.model";
import { InputForm } from "../CustomInput/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { schema } from "./form.model";
import './Login.css';
import { zodResolver } from "@hookform/resolvers/zod";

export const Login = () => {
    const { control, handleSubmit, formState: {errors}} = useForm<LoginFormValues>({
      resolver: zodResolver(schema),
        mode: 'onBlur',
    });


    const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
        console.log(data);
    }


    return (
        <section className="login-page">
            <h1>Login</h1>

            <form className="custom-form login-form" onSubmit={handleSubmit(onSubmit)}>
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
        </section>
    )
}
