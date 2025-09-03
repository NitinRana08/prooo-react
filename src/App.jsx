
import ArrPRO from "./learning/props/ArrayPRO"
import Count from "./learning/click_count/Count"
import Dog from "./learning/ifelse/Dog"
import Exercise from "./learning/testing/Exercise"
import Hide1 from "./learning/hide_show/Hide1"
// import HideShow from "./learning/hide_show/HideShow"
import IfElse from "./learning/click_count/IfElse"
import PROPS from "./learning/props/PROPS"
import Student from "./learning/props/Student"
// import { useCallback, useState } from "react"
import PRA from "./learning/props/PRA"
import Wrapper from "./learning/props/Wrapper"
import INPUTvalue from "./learning/input_value/INPUTvalue"
import Form from "./learning/from/Form"
import CheckBox from "./learning/from/CheckBox"
import DropDown from "./learning/from/DropDown"
import Table from "./learning/Table_Loop_Array_map/Table"
import REuse from "./learning/reuseOfComp/REuse"

import LiftingStateUp from "./learning/Lifting_state_up/LiftingStateUp.jsx"
// import LOGIN from "./learning/if_else_toggle/LOGIN.jsx"
// import IfElse from "./learning/click_count/IfElse"
import IFELSE from "./learning/if_else_toggle/IFELSE.jsx"
import MAP from "./learning/map/MAP.jsx"
import FORM from "./learning/Form/FORM.jsx"



import Nav from "./learning/Router/Nav.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./learning/Router/Home.jsx"
import Login from "./learning/Router/Login.jsx"
import About from "./learning/Router/About.jsx"
import Contact from "./learning/Router/Contact.jsx"
import UseRefOne from "./learning/useRef/UseRefOne.jsx"
import UseRefSecond from "./learning/useRef/UseRefSecond.jsx"
import New from "./learning/useRef/New.jsx"
import TODO from "./learning/useState/TODO.jsx"
import NEW1 from "./learning/useRef/NEW1.jsx"
import PRAC from "./learning/useRef/PRAC.jsx"
import StopWatch from "./learning/useRef/StopWAtch.jsx"
import NEw from "./learning/useState/NEw.jsx"
import NEW2 from "./learning/useRef/NEW2.jsx"
import MEMO from "./learning/memo/MEMO.jsx"
import NEWW from "./learning/memo/NEWW.jsx"
import CALLback from "./learning/callback/CHILD.jsx"
import CALLback_CHILD from "./learning/callback/CHILD.jsx"
import CHILD from "./learning/callback/CHILD.jsx"
// import Child1 from "./learning/useContext/Child1.jsx"
import Car1 from "./learning/useContext/Car1.jsx"
import UseToggle1 from "./customHooks/useToggle1.jsx"
import CHook1 from "./customHooks/CHook1.jsx"
// import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice.js'
import ReduxTestingProps from "./learning/reduxTestingProps.jsx"
import Appapi from './learning/api/Appapi.jsx'


// import { useState } from "react"
// import { useSelector,useDispatch } from "react-redux"
// import { increment } from "./redux/counter/counterSlice.js"


// import App_LOGIN from "./practice-PROJECT/login/App_LOGIN.jsx"
// import App_LOGIN from "./practice-PROJECT/login/App_LOGIN.jsx"



// import { createContext } from "react"

// import CHILD1 from "./learning/USEcontext2/Child1.jsx"
//  const UserContext = createContext();





// import Counttt from "./redux/Counttt.jsx"


function App() {






// <h1>hola</h1>
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <><Nav /><Home /></>
//   },
//   {
//     path: "/Login",
//     element: <> <Nav /><Login /></>
//   },
//   {
//     path: "/About",
//     element: <> <Nav /><About /></>
//   },
//   {
//     path: "/Contact",
//     element: <> <Nav /><Contact /></>
//   }

// ])

// const nav = createBrowserRouter([{
//     path: "/",
//     element: <OneROUTER />, // layout wrapper
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/contact", element: <Contact /> },
//     ],
//   },
// ])

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

// // const username = "nitin rana"


// const [isLoggedIn, setIsLoggedIn] = useState(false);

// const handleLoginLogout = () => {
//   setIsLoggedIn(!isLoggedIn);
// }

// const [count, setCount] = useState(0)

// function handleClick() {

// }
// const handleClick = useCallback(() => {
//   setCount(count + 1)

// }, [count])

// const UserContext = createContext();
// const details = { name: 'nitin', email: 'nitinr8229@gmial.com'}


//created context


// const [user,setUser]= useState({name:"nitin rana"})
// function BuggyComponent() {
//   // This will throw an error
//   throw new Error("Crashed!");
// }
// const [count, setCount] = useState(0)
//  const count = useSelector((state) => state.counter.value)

// const count = useCounterStore((x)=>x.count2)
// const [count, setCount] = useState(0)


// const count = useSelector((state)=>state.counter.value)
// const dispatch = useDispatch()
// const [count, setCount] = useState(0)
return (

  <>




    {/* <h1>hola</h1> */}
    <Appapi/>
    {/* <button onClick={() => setCount(count + 1)}>+</button>
      <ReduxTestingProps data_count={count}/>
      <button onClick={() => setCount(count - 1)}>-</button> */}



    {/* <h1>hola</h1>
      <div style={{textAlign: "center", marginTop: "50px"}}>
       <h1>redux toolkit counter</h1>
       <button onClick={()=> dispatch(increment())}>Increment</button>
       <button onClick={()=> dispatch(decrement())}>Decrement</button>
       <button onClick={()=> dispatch(reset())}>Reset</button>
       <button onClick={()=> dispatch(incrementByAmount(5))}>+5</button>
       {count}


      </div> */}



    {/* <h2>hola</h2> */}
    {/* <button onClick={() => setCount(count + 1)}>click to +1 count</button> */}

    {/* <button>-</button>
      <h2>current count is {count}</h2>
      <button onClick={()=>dispatchEvent(increment())}>+</button> */}
    {/* <Counttt count={count}/> */}
    {/* <CHook1/> */}
    {/* <UseToggle1/> */}
    {/* <App_LOGIN/> */}
    {/* <App_LOGIN/> */}
    {/* <LOGIN /> */}
    {/* <div>
        <h1>Example: componentDidCatch</h1>
        <br />
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>
      </div> */}

    {/* <UserContext.Provider value={user}>

        <CHILD1 />

      </UserContext.Provider> */}


    {/* <Car1/> */}



    {/* <Car1 user={details}/> */}
    {/* <UserContext.Provider 
        value={{name:'nitin',age: 22, location : 'Greater Noida'} }
        >
        <Child1 />
      </UserContext.Provider> */}

    {/* <div>
        <h4>{count}</h4>
        <button onClick={handleClick}>clickMe</button>
      </div>
      <br />
      <div>
        <CHILD
          buttonName='click me'
          handleClick={handleClick}
        />
      </div> */}

    {/* <CALLback_CHILD/> */}
    {/* <CALLback/> */}
    {/* <NEWW/> */}

    {/* <MEMO /> */}
    {/* <NEW2/> */}
    {/* <NEw/> */}
    {/* <StopWatch/> */}
    {/* <PRAC/> */}

    {/* <NEW1/> */}
    {/* <TODO/> */}
    {/* <New/> */}
    {/* <UseRefSecond /> */}
    {/* <UseRefOne /> */}
    {/* <h2>hola from app.jsx</h2>
      
      <RouterProvider router={router} /> */}
    {/* <AppGPT/> */}

    {/* <RouterProvider router={nav}/> */}
    {/* <div></div> */}
    {/* <oneROUTER /> */}
    {/* <FORM /> */}
    {/* <Exercise/> */}

    {/* <MAP /> */}
    {/* <IFELSE/> */}
    {/* <IfElse/> */}
    {/* <LOGIN/> */}


    {/* <div>
      <h1>Welcome to MyApp</h1>

      {isLoggedIn ? (
        <>
          <p>You are logged in!</p>
          <button onClick={handleLoginLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please login to continue</p>
          <button onClick={handleLoginLogout}>Login</button>
        </>
      )}
    </div> */}

    {/* <LiftingStateUp /> */}






    {/* <Exercise/> */}
    {/* <Exercise name="nitin" age={21} /> */}
    {/* <h1>its 5 aug</h1> */}





    {/* <REuse/> */}
    {/* <h1>yeh its me</h1> */}
    {/* <Table/> */}
    {/* <DropDown /> */}
    {/* <CheckBox/> */}
    {/* <h1>helo</h1> */}
    {/* <INPUTvalue/> */}

    {/* <Form /> */}












    {/* <div>
      <h1>props in react js</h1>
      <Wrapper>
         <h1>hello</h1>
      </Wrapper>


<Wrapper>
  <h3 style={{fontSize:"40px"}}>nitin rana</h3>
</Wrapper>


    </div>
 */}







    {/* <div>
  <h1>propd</h1>
  <Wrapper>
    <h1 color="white">hellodcdc</h1>
    </Wrapper>
</div> */}
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
    {/* <PROPS details={user1_ObjDetails} />  <PROPS  details={user2_ObjDetails}    /> */}

    {/* < ArrPRO /> */}


  </>



)
}

export default App
// export { UserContext }