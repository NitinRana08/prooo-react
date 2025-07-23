function App() {
  const userName = 'nitin rana'
  let a = 2
  let v = 1
  return (
    <div>
      <h1>hello, {userName}</h1>
      <p>{a+v}</p>
      {/* <h2>{313+313+3131+13}</h2> */}

      <button onClick={()=>alert("hello")}>click</button>

    </div>
  )
}

export default App