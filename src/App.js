import React,{Component} from 'react';

import './App.css';
import Person from './Person/Person';



class  App extends  Component{
   state = {
     persons: [
       {id: 'ad',name: 'max' , age:28 },
       {id: 'ad32',name: 'kani' , age:29 },
       {id: 'ad98',name: 'ridi' , age:38 }
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



   
   nameChangeHandeler = (event,id) =>{

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    const persons = [...this.state.persons];
    persons[personIndex]=person;

    //const person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;
    this.setState({persons:persons});
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
                key={persons.id}
                change={(event)=>this.nameChangeHandeler(event, persons.id)}
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
