function Dog() {
    const name = 'nitin ranaa'
    let a = 2
    let b = 6
    const userr={
        name:'nitin',
        age:11,
        mail: "nitinr8229@gmail.com"

    }
  

    const hola = () => {
        return 'apple'
    }
    let sum = (a, b) => {
        return a + b
    }
    let cal = (a, b, calcu) => {
        if (calcu == "+") {
            return a + b
        }
        else if (calcu == '-') {
            return a - b
        }
        else { }

    }





    return (
        <>
            {
                <div>
                    {/* <h1>{JSON.stringify(userr)}</h1> */}
                    <h1>{userr.mail}</h1>
                    {/* <h1>{helllo}</h1> */}
                    <h1>nitin</h1>
                    <h1>{name ? name : "user not found"}</h1>
                    <h1>{a + b}</h1>
                    <h1>{hola()}</h1>
                    <h1>{sum(2, 5)}</h1>
                    <h1>{cal(3, 3, "+")}</h1>



                </div>
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