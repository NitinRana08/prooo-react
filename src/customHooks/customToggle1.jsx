import { useState } from "react"


const customToggle1=(defaultVal)=>{ //. component function

    const [value,setValue]=useState(defaultVal)
    
    
    function toggleValue(val){
        if(typeof val!='boolean'){
            console.log("nitin");
            
            setValue(!value)
        }else{
            setValue(val)
        }
    }



    return[value,toggleValue]
}
export default customToggle1