import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { steps } from "./steps";


interface BreadcrumbsProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

const Breadcrumbs = ({ currentStep, setCurrentStep }: BreadcrumbsProps) => {
  return (
    <div className="flex justify-center ">
      <Breadcrumb>
        <BreadcrumbList>
            {steps.map(step=>(
                <React.Fragment key={step.key}>
                    {step.key == currentStep?(
                        <BreadcrumbPage>{step.title}</BreadcrumbPage>
                    ):(
                        <BreadcrumbLink asChild>
                            <button onClick={()=> setCurrentStep(step.key)}>
                                {step.title}
                            </button>
                        </BreadcrumbLink>
                    )}
                    <BreadcrumbItem>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                </React.Fragment>
            ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
