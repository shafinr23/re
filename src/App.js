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
   switchNameHandler = (newname)=>{
     //console.log('click ');
    // don't do this  this.state.persons[0].name = 'shafin';
    this.setState({
      persons:[
      {name: newname , age:28 },
      {name: 'fari' , age:9 },
      {name: 'sani' , age:31 }
    ]
  });
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
    return(
        <div className="App">
            <h1>HI i am a react app</h1>
            <p>this is p tag</p>
            <button 
            style={style}
            onClick={this.tooglePersonsHandler} > switch name  </button>
            {this.state.showPersons === true ?
            <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
              Click={this.switchNameHandler.bind(this,'maxi')}
              change={this.nameChangeHandeler}
              > my hobbies : developer </Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div> : null
            }
        </div>

    )
    
  }
}

export default App;
