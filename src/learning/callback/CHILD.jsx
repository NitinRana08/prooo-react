// import React from "react";
// function CHILD(props) {
//     console.log("re-render ho raha hai ");

//     return (
//         <>
//             <div>
//                 <button>
//                     {props.buttonName}
//                 </button>

//             </div>
//         </>

//     )
// }
// export default React.memo(CHILD) 


import React from "react";

const CHILD = React.memo((props)=>{
    console.log('re-render huing');

    return(
        <>
        <div>
            <button>
                {props.buttonName}
            </button>
        </div>
        </>
    )
    
})
export default CHILD