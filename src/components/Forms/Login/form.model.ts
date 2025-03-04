import {z} from "zod";


export const schema = z
    .object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email().min(1, "Email is required"),
        password: z.string().max(14, "Password is too long"),
        confirmPassword: z.string().max(14, "Password is too long"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords are different",
    });

export type LoginFormValues = z.infer<typeof schema>;