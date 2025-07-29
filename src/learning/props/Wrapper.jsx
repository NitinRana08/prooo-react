

function Wrapper({ children }) {
    return (
        <>
            {/* <h1>heloo</h1> */}
            <div style={{ color: "white", border: "5px solid green", width: "300px", margin: "10px" }}>
               {children }
            </div>

        </>
    )
}
export default Wrapper
