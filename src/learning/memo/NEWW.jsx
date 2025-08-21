import { useState } from "react"

function NEWW() {
    const [count, setCount] = useState(0)


    function expensiveTask(num) {

        console.log('in');

        for (let i = 0; i <= 1000000000; i++) {}
        console.log('exit');
        return num * 2
       
    }

    let slow = expensiveTask(4)
    return (
        <>
            <div>
                <h2>{count}</h2>
            </div>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <div>
                <h2>
                    Slow : {slow}
                </h2>
            </div>
        </>
    )
}
export default NEWW