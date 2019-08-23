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
     //console.log('click ');
    // don't do this  this.state.persons[0].name = 'shafin';
    this.setState({
      persons:[
      {name: 'shafin' , age:28 },
      {name: 'fari' , age:9 },
      {name: 'sani' , age:31 }
    ]
  });
   }
  render(){
    return(
        <div className="App">
            <h1>HI i am a react app</h1>
            <p>this is p tag</p>
            <button onClick={this.switchNameHandler} > switch name  </button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > my hobbies : developer </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>

    )
    
  }
}

export default App;
