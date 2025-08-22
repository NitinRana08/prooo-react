import { useMemo, useState } from "react"

function NEWW() {
    const [count, setCount] = useState(0)
    const [input,setInput]=useState('')


    function expensiveTask(num) {

        console.log('in');

        for (let i = 0; i <= 1000000000; i++) { }
        console.log('exit');
        return num * 2

    }

    // let slow = expensiveTask(4)

    let slow = useMemo(() => expensiveTask(input), [input])
    return (
        <>
            <div>
                <h2>{count}</h2>
            </div>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <div>
                <input type="number"
                    placeholder="number plz"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <h2>
                    Slow : {slow}
                </h2>
            </div>
        </>
    )
}
export default NEWW