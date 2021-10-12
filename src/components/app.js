
/*import { Component } from 'react';
import { render } from 'react-dom';
import Heading from './heading';
import Banner from './components/banner';


class App extends Component{
 handleClick(event){
        console.log("Button is clicked",event.target.id);
    }
    
     handleInputChange(event){
        console.log("Someone is typing",event.target.value);
    }
 handleFocus(event){
        console.log("Input in Focus");
 }

   render(){
    return(
        <>
        <Heading />
        <button onClick={this.handleClick} id="button-1">Click ME</button>
        <button onClick={this.handleClick} id="button-2">Primary Click</button>
        <input onChange={this.handleInputChange} onFocus={this.handleFocus}/>
        </>
    );

    } 
}
export default App;

import { Component } from "react";
import { render } from "react-dom";

class App extends Component{

constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
}

state ={
    counter:1,
    heading:"Welcome to React",
    inputText:""
    };
    handleClick (event){
        let localCounter = this.state.counter;
        this.setState({
            counter:localCounter+1,
            heading:"Learning States in React"
        })
    }

    handleInputChange=(event)=>{
        this.setState({
            inputText:event.target.value
        })
    }


render(){
    return(
        <>
        <h1>{this.state.heading}</h1>
        <button onClick={this.handleClick}>Add</button>
        <p>{this.state.counter}</p>
        <input onChange={this.handleInputChange}/>
        <p>{this.state.inputText}</p>
        </>
    
    );
}
}
export default App;*/
import { Component } from "react";
import Courses from "./courses.js";
//import { render } from "react-dom";
import courseJson from './../courses.json';
import Heading from "./heading";

class App extends Component{

    state ={
        heading:"Welcome to interesting world of React",
        courseList:courseJson
    }

    render(){
        return(
            <>
            <Heading heading={this.state.heading}/>
            <Courses courseList={this.state.courseList}/>
            </>
        );
    }
}

export default App;