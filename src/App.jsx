
import ArrPRO from "./learning/ArrayPRO"
import Count from "./learning/Count"
import Dog from "./learning/Dog"
import Exercise from "./learning/Exercise"
import Hide1 from "./learning/Hide1"
import HideShow from "./learning/HideShow"
import IfElse from "./learning/IfElse"
import PROPS from "./learning/PROPS"
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
let collegeName =['amity ' , 'gl ' , 'sharda']
  return (

  <>
      <ArrPRO  details={collegeName}/>

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