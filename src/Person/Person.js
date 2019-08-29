import React from 'react';

const Person = (props ) =>{
     return(
          <div>

               <p onClick = {props.Click}>i am a {props.name} and i am {props.age}  years old .</p>
               <p>{props.children}</p>
               <input type="text" onChange={props.change} value={props.name}  />
          </div>
     
     );
}


export default Person;