import { Phone } from "lucide-react";
import {z} from "zod" ;

export const optionalString = z.string().trim().optional().or(z.literal("")) ;

export const generalInfoSchema = z.object({
    title :optionalString ,
    description :optionalString
})

export type GeneralInfoValues = z.infer<typeof generalInfoSchema>

export const personalInfoSchema = z.object({
    photo:z.custom<File|undefined>()
    .refine(
        (file)=>!file || (file instanceof File && file.type.startsWith("image/")),
        "Must be an Image File"
    )
    .refine(
        (file) => !file || file.size<= 1024* 1024*4,
        "File Must be less than 4Mb"
    ),
    firstName:optionalString,
    lastName :optionalString,
    jobTitle:optionalString,
    city:optionalString,
    country:optionalString,
    phone:optionalString,
    email:z.string().email()
})

export type personalInfoValues = z.infer<typeof personalInfoSchema>


export const resumeSchema = z.object({
    ...generalInfoSchema.shape ,
    ...personalInfoSchema.shape 
})

export type ResumeValues = Omit<z.infer<typeof resumeSchema>,"photo"> & {
    id?:string,
    photo?:string | File | null
}