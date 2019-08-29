import React from 'react';

const Person = (props ) =>{
     return(
          <div>

               <p onClick = {props.Click}>i am a {props.name} and i am {props.age}  years old .</p>
               <p>{props.children}</p>

          </div>
     
     );
}


export default Person;