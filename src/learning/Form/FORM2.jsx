import { useEffect } from "react";


function FORM2({ propsData }) {


    const handleCounter = () => {
        console.log("handleCounter called");

    }
    useEffect(() => {
        handleCounter()

    }, [])




    return (
        <>
            <div>
                <h1>form 2 component {propsData}</h1>
            </div>


        </>
    )





}

export default FORM2