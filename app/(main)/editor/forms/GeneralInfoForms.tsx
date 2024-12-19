import { generalInfoSchema, GeneralInfoValues } from "@/lib/validation";
import {useForm} from "react-hook-form" ;
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const GeneralInfoForm=()=>{
    const form = useForm<GeneralInfoValues>({
        resolver: zodResolver(generalInfoSchema),
        defaultValues:{
            title:"" ,
            description:""
        }
    }) ;
    return(
        <div className="max-w-full ma-auto space-y-6 ">
            <div className="space-y-1.5 text-center"> 
                <h2 className="text-2xl font-semibold">
                    General Info
                    <p className="text-sm text-muted-foreground">
                        This will not appear in your resume
                    </p>
                </h2>
            </div>
            <Form {...form}>
                <form className="space-y-3">
                    <FormField
                        control = {form.control}
                        name= "title"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    Project Name
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder = "my cool resume" autoFocus/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} 
                    />
                    <FormField
                        control = {form.control}
                        name= "description"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>
                                    Description
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder = "Add your Description"/>
                                </FormControl>
                                <FormDescription>
                                    Descript what this this resume is for
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )} 
                    />
                </form>
            </Form>
        </div>
    )
}

export default GeneralInfoForm ;