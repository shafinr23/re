import React,{Component} from 'react';

import styles from './App.module.css';
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
    let btnClass = '';
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
      );
      btnClass = styles.red;
     

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
            <h1> PhotoShop app</h1>
            <p className={AbbClasses.join(' ')} >this is p tag</p>
            <button 
           className={btnClass}
            onClick={this.tooglePersonsHandler} > toggol name  </button>
            
            {persons}
        </div>
       

    )
    
  }
}

export default App;
