function Dog(){

    function button (){
        alert("hey you clicked")
    }
    return(
        <>
        <div><h1>nitin rana</h1></div>
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
            </div>

        </>
    )
}


export default Dog