import React from "react"


function Comment(props){
    
    return(
        <div className="card">
        <div className="image">
        <img className={props.border ? "img-border" : "img"} 
        src={props.img} alt={props.name}  />
        </div>
        <div className="text">
            <div className="details">
                <div className="name">{props.name}</div>
                <div className="occurance">{props.months}</div>
            </div>
            <h2>{props.comm}</h2>
        </div>

        </div>
    )
}


export default Comment