import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props ) =>{
     return(
          <div className="Person" >

               <p onClick = {props.Click}>i am a {props.name} and i am {props.age}  years old .</p>
               <p>{props.children}</p>
               <input type="text" onChange={props.change} value={props.name}  />
          </div>
     
     );
}


export default Radium(Person);