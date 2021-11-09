import React,{useState} from "react"
import Comment from "./Comment"
import "./App.css"



function Comments(){
   

   
    return(<div className="body">
    <h1 className="header">45 comments</h1>
    <div>
        <Comment 
        img="https://pbs.twimg.com/profile_images/1260380723170738176/oCEhIL3k_400x400.jpg"
        name="Rahul gupta"
        months="2 months ago"
        comm="This is a great post"
        border={true}
        />
    </div>
    <div>
    <Comment 
    img="https://pbs.twimg.com/profile_images/1260380723170738176/oCEhIL3k_400x400.jpg"
        name="Rahul gupta"
        months="2 months ago"
        comm="This is a great post"
        border={false}
        />
    </div>

    </div>)
}



export default Comments;