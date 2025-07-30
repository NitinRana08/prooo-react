import { useState } from "react"

function Form() {



    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")

    return (
        <>
            <div>
                <h1>hola from Form</h1>
                <form action="" method="get" >
                    <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="name" />
                    <br /> 
                    <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} id="pass" placeholder="password" />
                    <br />
                    <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="email" />
                    <br />
                    <button>submit</button>
                    <button onClick={()=>{setName('');setPassword('');setEmail('')}}>claer all</button>

                    <div>
                        <h3>{name}</h3>
                        <h3>{password}</h3>
                        <h3>{email}</h3>
                        </div>
                </form>
            </div>
        </>
    )
}


export default Form