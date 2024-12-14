import GeneralInfoForm from "./forms/GeneralInfoForms"
import PersonalInfoForm from "./forms/PersonalInforForm"

export const steps :{
   title:string,
   component:React.ComponentType,
   key:string
}[]=[
    {
        title:"General Info",
        component:GeneralInfoForm,
        key:"general-info"
    },
    {
        title:"Personal Info",
        component:PersonalInfoForm,
        key:"personal-info"
    }
]