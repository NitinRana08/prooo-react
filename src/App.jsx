
import ArrPRO from "./learning/props/ArrayPRO"
import Count from "./learning/Count"
import Dog from "./learning/Dog"
import Exercise from "./learning/Exercise"
import Hide1 from "./learning/Hide1"
import HideShow from "./learning/HideShow"
import IfElse from "./learning/IfElse"
import PROPS from "./learning/props/PROPS"
import Student from "./learning/props/Student"
import { useState } from "react"
import PRA from "./learning/props/PRA"
import Wrapper from "./learning/Wrapper"
function App() {

  // let name = 'nitin rana'

  // let username="nitin rana"
  // let age= "21"
  // let email="nitinr8229@gmail.com"
  // let user1_ObjDetails = {
  //   name:"nitin rana",
  //   age: 21,
  //   email:"nitinr8229@gmail.com"
  // }
  // let user2_ObjDetails = {
  //   name:"sharad rana",
  //   age: 22,
  //   email:"sharadR8229@gmail.com"
  // }
  // let collegeName =['amity ' , 'gl ' , 'sharda']

  // let collegeNAME = ['GL Bajaj', 'Amity', 'Bennett University', 'Sharda Greater Noida']
  // const [BachelorCLG,MasterCLG]=useState("GL Bajaj")




  // const [Firstnaam, secondNaam] = useState()

  const username = "nitin rana"
  return (

    <>

<div>
  <h1>propd</h1>
  <Wrapper><h1 color="white">hellodcdc</h1></Wrapper>
</div>
    {/* <Wrapper><h1>heloodcdc</h1> </Wrapper> */}



      {/* <div>

        <PRA brand="BMW Z4" color="black" /> */}

        {/* <Wrapper name={username} /> */}

        {/* <Wrapper><div>hello</div></Wrapper>

      </div> */}



      {/* {Firstnaam && <Student naam={Firstnaam} />}

      <button onClick={()=>secondNaam("hello here you go")}>click to see</button>
    */}










      {/* <button on onClick={()=>MasterCLG({BachelorCLG})}>click me to change the college name</button> */}
      {/* < Student name={collegeNAME} /> */}
      {/* <Student  name={BachelorCLG}/>
      {BachelorCLG && <BachelorCLG >}
      <button onClick={()=>name("Bennett University")}>click to master course</button> */}
      {/* <ArrPRO  details={collegeName}/> */}

      {/* <PROPS details={collegeName} /> */}
      {/* <Dog />
      <Count />
      <HideShow/> */}

      {/* <Hide1/> */}
      {/* <IfElse/> */}
      {/* <h2>{name}</h2> */}
      {/* <Exercise name={"nitin rana from exrecise"}/> */}
      {/* <h1>hello from app.jsx</h1> */}
      {/* <h2>{name}</h2> */}
      {/* <PROPS name="hello from app.jsx file - component" age={21} email="nitinr8229@gmail.com" /> */}
      {/* <PROPS name={username} age={age} email={email} /> */}
      {/* <PROPS details={user1_ObjDetails} />
      <PROPS  details={user2_ObjDetails}    /> */}
      {/* < ArrPRO /> */}


    </>



  )
}

export default App