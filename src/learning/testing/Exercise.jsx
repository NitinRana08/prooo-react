import { useEffect, useState } from "react"

function Exercise(props) {
    // const [count, setConunt] = useState(0)

    // const(()=>{
    //     console.log("Mounted")
    // })










    // const obj = {
    //     name: "nitin",
    //     greet: function () {
    //         return `Hello, ${this.name}`;
    //     },

    // };
    // const greet = obj.greet;
    // console.log(obj.greet());


    // const Stu ={
    //     name:"nitin rnaa",
    //     hello : function (){
    //         return `hello, ${this.name}`
    //     }
    // }

    // const doHlo = Stu.hello;
    // console.log(doHlo)














    // const [count, clickCount] = useState(0)
    // const [data, setData] = useState(0)


    // useEffect(() => {
    //     // faltu()
    //     faltuu()
    // }, [])

    // const faltu = () => {
    //     console.log("call events")
    // }
    // faltu()

    // const faltuu = () => {
    //     console.log("call eventssssssssssssssss")
    // }


    // function NameForm() {
    //     const [name, setName] = useState(''); // to store the input value

    //     const handleChange = (event) => {
    //         setName(event.target.value); // update state as user types
    //     };

    // const [name, setName] = useState(''); // to store the input value

    // const handleChange = (event) => {
    //     setName(event.target.value);
    // }             // update state as user types

    // const [name, setName] = useState("")
    // const handleChange = (event) => {
    //     setName(event.target.value)
    // }
    
// const [name,setName]=useState("nitin rana")
const [address, setAddress] = useState("");

    return (
        <>
        <div>
      <h3>Enter Your Delivery Address:</h3>
      <input
        type="text"
        value={address}
        placeholder="e.g. Sector 62, Noida"
        onChange={(e) => setAddress(e.target.value)}
      />

      <p>We will deliver your food to: {address || "________"}</p>
    </div>

        {/* <div>
            <h2>your name {name}</h2>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div> */}

            {/* <div>
                <h2>enter you name:</h2>
                <input type="text" value={name} onChange={handleChange} placeholder="naam daal" />
                <h1>you name is: {name}</h1>
            </div> */}





            {/* <div>
                <h2>Enter your name:</h2>
                <input type="text" value={name} onChange={handleChange} />
                <p>Your name is: {name}</p>
            </div> */}



            {/* <div>
                    <h2>Enter your name:</h2>
                    <input type="text" value={name} onChange={handleChange} />
                    <p>Your name is: {name}</p>
                </div>
                <div>
                    <h1>click to incress__{count}</h1>
                    <button onClick={() => clickCount(count - 1)}>click bb</button>

                </div>
                <h1>click to incress__ by 10______{data}</h1>
                <button onClick={() => setData(data + 1)}>Scond btn of useState</button>
 */}



            {/* <div>
                <h1>the number you click the button. ----  {count}</h1>
                <button onClick={() => setConunt(count + 1)}>clickme </button>
                <h1></h1>
            </div>

            <br />
            <br />
            <br />
            <h1>hello my name is nitin rana</h1>
            <h1>hello {props.name}, your age {props.age}!</h1> */}







        </>
    )
}

export default Exercise