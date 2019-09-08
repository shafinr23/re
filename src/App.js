import React,{Component} from 'react';

import './App.css';
import Person from './Person/Person';



class  App extends  Component{
   state = {
     persons: [
       {name: 'max' , age:28 },
       {name: 'kani' , age:29 },
       {name: 'ridi' , age:38 }
     ],
     otherState: 'some other value',
     showPersons: false
   }

   deletePersoneHandler = (personIndex)=>{
      //const persons = this.state.persons.slice(); 
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons})
   }

   nameChangeHandeler = (event) =>{
    this.setState({
      persons:[
      {name: 'max' , age:28 },
      {name: event.target.value  , age:9 },
      {name: 'sani' , age:91 }
    ]
    });
   }

   tooglePersonsHandler  = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
   }
  render(){
    const style = {
      backgroundColor:'white',
      font:'inharit',
      border:'2px solid blue',
      padding:'8px',  
      cursor:'pointer'
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
            <div>
              {this.state.persons.map((persons,index)=>{
                return <Person 
                Click={() =>this.deletePersoneHandler(index)}
                name={persons.name}
                age={persons.age}
                />
              })}
              
            </div> 
      )
    }
    return(
        <div className="App">
            <h1>HI i am a react app</h1>
            <p>this is p tag</p>
            <button 
            style={style}
            onClick={this.tooglePersonsHandler} > toggol name  </button>
            
            {persons}
        </div>

    )
    
  }
}

export default App;
