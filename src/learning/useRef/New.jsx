
import { useRef } from "react"
function New(){

    const inputRef = useRef(null)

    const focuseInput =()=>{
        inputRef.current.focus();
    }

    return (
        <>
        <div>
            <input ref={inputRef} type="text" placeholder="type here..." />
            <button onClick={focuseInput}>focus Input</button>
           
        </div>
        </>
    )
}
export default New