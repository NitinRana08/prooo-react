function FORM() {


    const handlekroo= async()=>{
        await new Promise(res=>setTimeout(res,2000))
        console.log("submit ho gaya");
        


    }

    return (
    <>

        <div>
            <h1>fill</h1>
            <form action={handlekroo}>
                <label htmlFor="">name: </label><input type="text" />
                <br />
                <label htmlFor="">password: </label><input type="text" />
                <br />
                <button>submit</button>
            </form>
        </div>

    </>
)





}

export default FORM