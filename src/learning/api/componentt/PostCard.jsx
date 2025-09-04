import React from "react"
function PostCard(props){


    return(
        <>
        <div className="post-card">
            <h3>Title: <br /> {props.title}</h3>
            <p>Body: <br /> {props.body}</p>
        </div>

        </>
    )
}
export default PostCard