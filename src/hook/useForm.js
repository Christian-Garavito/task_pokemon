import { useState } from "react";

export const useForm= (initialForm={})=>{
    const [formState,setformState] = useState(initialForm);

    const onInputChange =({target})=>{
        const {name, value} = target

        setFormState({
            ...formState,
            [name]:value
        })
    }

    const onResetForm =() => {
        setFormState(initialForm)
    }
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}