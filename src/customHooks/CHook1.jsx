
import useCHook from "./useCHook"

function CHook1(){
    
   const [count,Increment,Decrement]=useCHook()
    return(
        <>

        <div className="app">
            <div>{count}</div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>decrement</button>
        </div>

        </>
    )
}
export default CHook1