
import { z } from "zod";

export const ADD_LINK = z
  .object({
    url: z.string().min(1, "URL is mandatory"),
    title: z.string().email().min(1, "Title is mandatory"),
    price: z.number().int().positive('Number must be positive').min(0, "Price is mandatory"),
    description: z.string().max(100, "The description is too long"),
    
  })
  

export type AddLinkFormValues = z.infer<typeof ADD_LINK>;