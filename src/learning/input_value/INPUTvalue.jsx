function INPUTvalue (){
    return (
       <>
       <div>
        <h1>enter your name</h1>
        <input type="text" onChange={(event)=>alert(event.target.value)} placeholder="User Name" />
        </div>
       </>
    )
}
export default INPUTvalue;