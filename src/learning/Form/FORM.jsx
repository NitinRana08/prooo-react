function FORM (){

    const handleIT=(e)=>{
        console.log(e.target.value,e.target.name);
        


    }
    return(
        <>
        <h2>login form handling using useState</h2>
        <form action="">
            <div>
                <input onChange={handleIT} type="emial" placeholder="email" aria-required/>
                <label htmlFor="">Email</label>
            </div>
            <div>
                <input type="password" placeholder="PS" required onChange={handleIT}/>
                <label htmlFor="">password</label>
            </div>
            <button>submit</button>

        </form>
        </>
    )
}
export default FORM