import { hydrateRoot } from "react-dom/client"

function MAP() {




    const NormalArray = ['nitin', 'nikhil', 'sharad', 'shiv']
    const Student = [
        { name: 'nitin', age: 22, location: 'GNoida' },
        { name: 'nikhil', age: 24, location: 'canada' },
        { name: 'sharad', age: 22, location: 'delhi' }
    ]

    return (
        <>

        <div>
            <h1>aap sab k naam</h1>
            <table border={1}>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Location</td>
                </tr>
                {
                    Student.map((data)=>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.location}</td>
                        </tr>
                    
                    )
                   
                }

            </table>






            {/* {
            Student.map((data)=>
                <h2>Name :  {data.name} <br /> Age : {data.age} <br />Location : {data.location}</h2> 
            
            )
            } */}
        </div>





        </>
    )
}
export default MAP