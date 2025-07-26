//    let fruit = (name)=>{
//        alert(name)

//     }
// import { useState } from "react"
import {useState} from "react"
function Dog() {

    // function callFun(){ 
    //     alert("called//")
    // }

    // let fruit = (name)=>{
    //    alert(name)

    // }
    // const name = 'nitin ranaa'
    // let a = 2
    // let b = 6
    // const userr = {
    //     name: 'nitin',
    //     age: 11,
    //     mail: "nitinr8229@gmail.com"

    // }


    // const hola = () => {
    //     return 'apple'
    // }
    // let sum = (a, b) => {
    //     return a + b
    // }
    // let cal = (a, b, calcu) => {
    //     if (calcu == "+") {
    //         return a + b
    //     }
    //     else if (calcu == '-') {
    //         return a - b
    //     }
    //     else { }

    // }

    // const arr = ['nitn', 'rana', 'hello']
    // const path = "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Labrador.jpg?v=164517915


    //  let fruit = "apple"

    //  let changeFruits=()=>{
    //     fruit = 'banana'
    //     console.log(fruit)

    //  }



    // let fruit = "apple"

    // let newFruit =()=>{
    //     fruit = " banana"
    //     console.log(fruit)

    // }


    let fruit = "apple"
    let newFruit = () => {
        fruit = "banana"
        console.log(fruit)
    }


    return (
        <>
            <div><h1>{fruit}</h1>
                <button className="btn" onClick={newFruit}>click to replace the fruit</button>
            </div>


            {
                <>
                    {/* <h1>HOLA</h1>
                <h1>{fruit}</h1>
                <button onClick={newFruit}>change the fruit</button>
 */}

                </>

                // <div> 
                //     <h1>hello</h1>
                //     <h1>{fruit}</h1>
                //     <button onClick={changeFruits}>click to change the fruit</button>
                // </div>
                // <div>
                //     <h1>enent and function call</h1>
                //     {/* <button onClick={callFun}>click me </button> */}

                //     <button onClick={()=>fruit("apple")}>apple</button>
                //     <button onClick={()=>fruit("nitin's banana")}>bananaaaaaa</button>
                // </div>



                // <div>
                //     {/* <h1>{JSON.stringify(userr)}</h1> */}
                //     <h1>{userr.mail}</h1>
                //     {/* <h1>{helllo}</h1> */}
                //     <h1>nitin</h1>
                //     <h1>{name ? name : "user not found"}</h1>
                //     <h1>{a + b}</h1>
                //     <h1>{hola()}</h1>
                //     <h1>{sum(2, 5)}</h1>
                //     <h1>{cal(3, 3, "+")}</h1>
                //     <h1>{arr[1]}</h1>
                //    <img src={path} alt="" />



                // </div>
        /* <div><h1>nitin rana</h1></div>
        <div><img src="" alt="img hai bas" /></div>
        <div><ul>
            <li>my</li>
            <li>name</li>
            <li>is</li>
            <li>nitin</li>
            <li>rana</li>

            </ul></div>

            <div>
                <button onClick={button}>click me</button>
            </div> */}







        </>
    )
}


export default Dog