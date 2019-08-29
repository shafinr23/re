import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person';



const App = props  =>{


  const [ personsState , setPersoneState ] = useState({
      persons: [
        {name: 'max' , age:28 },
        {name: 'kani' , age:29 },
        {name: 'ridi' , age:38 }
      ]
       
    });
    
    
    

    const [otherState , setOtherstate] = useState('this is new state ')
    console.log(personsState,otherState);
    const switchNameHandler = ()=>{
      //console.log('click ');
     // don't do this  this.state.persons[0].name = 'shafin';
     setPersoneState({
       persons:[
       {name: 'shafin' , age:28 },
       {name: 'fari' , age:9 },
       {name: 'sani' , age:31 }
     ]
    
    });
    }


    return(
        <div className="App">
            <h1>HI i am a react app</h1>
            <p>this is p tag</p>
            <button onClick={switchNameHandler} > switch name  </button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} > my hobbies : developer </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>

    )
    
  
}

export default App;



