import {date, z} from "zod";


export const ADD_FUNDS_SCHEMA = z.object({
    // amount: z.number().int().positive('Number must be positive').min(0, "Amount is mandatory"),
    text: z.string().min(1, "Text is mandatory"),
    amount: z.string().min(1, "Amount is mandatory"),
    from: z.string().max(23, "Name is mandatory"),
    date: date().min(new Date(), "Date must be in the future")
})

export type AddFundsFormValues = z.infer<typeof ADD_FUNDS_SCHEMA>;