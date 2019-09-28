import React,{Component} from 'react';

import styles from './App.module.css';
import Persons from '../Components/Persons/persons';
import Cockpit from '../Components/cockpit/cockpit';





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

    let persons = null;

    if(this.state.showPersons){
      persons = 
              <Persons 
              persons={this.state.persons}
              clicked={this.deletePersoneHandler}
              changed={this.nameChangeHandeler}
               />
              {/* {this.state.persons.map((persons,index)=>{
                return <Person 
                Click={() =>this.deletePersoneHandler(index)}
                name={persons.name}
                age={persons.age}
                key={persons.id}
                change={(event)=>this.nameChangeHandeler(event, persons.id)}
                />
              })} */}
              
           
     

    }
    //let classes = ['red','blod'].join(' ');
    const AbbClasses = [];
    if(this.state.persons.length <= 2){
      AbbClasses.push(styles.red); //show red 
    }
    if(this.state.persons.length <= 1 ){
      AbbClasses.push(styles.bold); // shows red and blod
    }


    return(
     
        <div className={styles.App}>
           <Cockpit
           showPersons={this.state.showPersons}
           persons={this.state.persons}
           clicked={this.tooglePersonsHandler}
           />
            {persons}
        </div>
       

    )
    
  }
}

export default App;
