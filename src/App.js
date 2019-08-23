import React,{Component} from 'react';

import './App.css';
import Person from './Person/Person';



class  App extends  Component{
   state = {
     persons: [
       {name: 'max' , age:28 },
       {name: 'kani' , age:29 },
       {name: 'ridi' , age:38 }
     ]
   }
   switchNameHandler = ()=>{
     console.log('click ');
   }
  render(){
    return(
        <div className="App">
            <h1>HI i am a react app</h1>
            <p>this is p tag</p>
            <button onClick={this.switchNameHandler} > switch name  </button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].name} > my hobbies : developer </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].name} />
        </div>

    )
    
  }
}

export default App;
