import React from "react";

const Hello= props=>{
    return(
        
        <div>
            <h1>Hello Daiana {props.name}</h1>
        </div>
    )
    // return React.createElement('div',{id:'message'},React.createElement('p',null,"Hello"))
}
export default Hello;