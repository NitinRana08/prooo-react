import { useState } from "react"

function Exercise(props) {
    const [count, setConunt] = useState(0)

    // const(()=>{
    //     console.log("Mounted")
    // })










    const obj = {
        name: "nitin",
        greet: function () {
            return `Hello, ${this.name}`;
        },

    };
    const greet = obj.greet;
    console.log(obj.greet());


    const Stu ={
        name:"nitin rnaa",
        hello : function (){
            return `hello, ${this.name}`
        }
    }

    const doHlo = Stu.hello;
    console.log(doHlo)
















    return (
        <>




            <div>
                <h1>the number you click the button. ----  {count}</h1>
                <button onClick={() => setConunt(count + 1)}>clickme </button>
                <h1></h1>
            </div>

            <br />
            <br />
            <br />
            <h1>hello my name is nitin rana</h1>
            <h1>hello {props.name}, your age {props.age}!</h1>







        </>
    )
}
export default Exercise