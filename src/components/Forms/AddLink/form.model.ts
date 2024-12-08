
import { z } from "zod";

export const ADD_LINK = z
  .object({
    url: z.string().min(1, "URL is mandatory"),
    title: z.string().email().min(1, "Email is mandatory"),
    description: z.string().max(14, "The descriotion is too long"),
    
  })
  

export type FormValues = z.infer<typeof ADD_LINK>;