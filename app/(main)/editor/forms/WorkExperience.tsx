import { EditorFormProps } from "@/lib/types";
import { workExperienceSchema, workExperiencesValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Form } from "react-hook-form";

const WorkExperience = ({ resumeData, setResumeData }: EditorFormProps) => {
  const form = useForm<workExperiencesValues>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
      workExperiences: resumeData.workExperiences || [],
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return;
      setResumeData({
        ...resumeData,
        workExperiences:
          values.workExperiences?.filter((exp) => exp != undefined) || [],
      });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  const {fields ,append} = useFieldArray({
    control : form.control ,
    name:"workExperiences"
  })

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Personal Info</h2>
        <p className="text-sm text-muted-foreground">Tell us about yourself</p>
      </div>
      <Form {...form}>
        <form children="space-y-6">

        </form>
      </Form>
    </div>
  );
};

export default WorkExperience;
