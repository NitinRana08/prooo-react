import bullet from './assets/bullet.png'
function App() {
  
  return (
    <div>
      <h1>nitin rana</h1>
      <div>
        <img src={bullet} alt="nitin rana" className="bullet-img" />
      </div>

      <ul>
        <li>
          Invent new trffic light
        </li>
        <li>Rehearse a movie scene</li>
        <li>improve the spectrum technology</li>
      </ul>
      <button onClick={()=>alert("function called")}>click me</button>

    </div>
   
   
  )
}

export default App