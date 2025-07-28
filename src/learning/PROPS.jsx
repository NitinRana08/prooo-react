function PROPS({details}) {
    // console.log(data)
    return (
       
        <>
        <div className="user1">
        <h1>name: {details.name}</h1>
        <h1>age: {details.age}</h1>
        <h1>Email: {details.email}</h1>
        </div>
        <hr />
        </>
    )
}
export default PROPS