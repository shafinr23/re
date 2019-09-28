import React from 'react';
import styles from './Cockpit.css';
const Cockpit = (props)=>{
    let btnClass = '';
    
    if(props.showPersons){
        btnClass = styles.red
    }
    const AbbClasses = [];
    if(props.persons.length <= 2){
      AbbClasses.push(styles.red); //show red 
    }
    if(props.persons.length <= 1 ){
      AbbClasses.push(styles.bold); // shows red and blod
    }

return(
    <div className={styles.cockpit} >
<h1> PhotoShop app</h1>
            <p className={AbbClasses.join(' ')} >this is p tag</p>
            <button 
           className={btnClass}
            onClick={props.clicked} > toggol name  </button>

    </div>
    
);
}

export default Cockpit;