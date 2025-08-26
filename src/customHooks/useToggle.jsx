import { useState } from "react"


const useToggle=(defaultVal)=>{ //. component function

    const [value,setValue]=useState(defaultVal)
    
    
    function toggleValue(val){
        if(typeof val!='boolean'){
            setValue(!value)
        }else{
            setValue(val)
        }
    }



    return[value,toggleValue]
}
export default useToggle