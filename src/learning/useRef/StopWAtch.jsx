import { useRef, useState } from "react"

function StopWatch() {
    const [time, setTime] = useState(0)

    let timerRef = useRef(null)


    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTime(time => time + 1)

        }, 1000)

 
    }
    function stopTimer() {
        clearInterval(timerRef.current)
        timerRef.current= null

    }

    function resetTimer() {
        stopTimer()
        setTime(0)

    }


    return (
        <>
            <h1>StopWatch : {time} second</h1>
            <button onClick={startTimer}>start</button>
            <br />

            <button onClick={stopTimer}>Stop</button>
            <br />

            <button onClick={resetTimer}>reset</button>

        </>
    )
}
export default StopWatch