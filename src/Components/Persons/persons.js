import React from 'react';
import Person from './Person/Person';
const persons = (props) => props.persons.map((persons,index)=>{
        return <Person 
        Click={() =>props.clicked(index)}
        name={persons.name}
        age={persons.age}
        key={persons.id}
        change={(event)=>props.changed(event, persons.id)}
        />
      });

export default persons ;