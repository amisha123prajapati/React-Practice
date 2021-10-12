/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

/*import { Component, PureComponent } from "react";

import React, { Component } from "react";
import Banner from './components/banner.js';

class App extends Component{

  constructor(){
    super();
    console.log("1-Constructer method is called")
    this.state={
      heading:"Welcome to React",
      isBnannerVisible:true
    }
  }


  handleClick=()=>{
this.setState({
  heading:"Hope you are learning React",
  isBnannerVisible:false
})
  }

  static getDerivedStateFromProps(){
    console.log("2-getDerivedStatefromProps method is called")
    return null;
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate method is called")
    if(nextState.heading ==="Hope you are learning React")

  return false;

    return true;;
  }
  render(){
    console.log("3-render method is called")
    return(
      <>
      <h1>{this.state.heading}</h1>
      <button onClick={this.handleClick}>Click Me</button>
      {this.state.isBnannerVisible?<Banner/>:null}
      <Banner/>
      </>
    )
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate method is called");
    
  

  let heading=prevState.heading;
  console.log("etSnapshotBeforeUpdate method is called")
  }
  componentDidMount(){
    console.log("4-componentDidmount method is called");
  }

componentDidUpdate(){
  console.log("4-componentDidupdate method is called")

}
}
export default App;*/

/*import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Homes from'./components/Homes.js';
import About from'./components/about.js';
import Courses from'./components/courses.js';
import Header from './components/header.js';
import Footer  from './components/footer.js';
import Team from './components/team.js';

import MockTestDetail from './components/mock-tests/MockTestDetail.js';
import MockTest from './components/mock-tests/MockTest.js';
import PageNotFound from './components/PageNotFound';

function App(){
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
    <Route path="/about/team" component={Team}/>
    <Route path="/about" render={()=><h3>About Us</h3>} />
    <Route path="/courses" component={Courses}/>
    <Route path="/Homes" component={Homes} />
    <Route path="/mock-tests/:topic/:set/:date" component={MockTestDetail}/>
    <Route path="/mock-tests" component={MockTest}/>
    <Route component={PageNotFound}/>
    
    </Switch>
    
    <Footer/>
    </BrowserRouter>
  );
}

export default App;*/
/*import React, { Component, PureComponent } from "react";
import Banner from './components/banner';
class App extends PureComponent{
  state ={
    heading:"Pure Component Tutorial",
    buttonText:"clicked",
    bannerHeading:"Banner Heading",
    tutorialList:["coding"],
    student:"xyz@gmail.com"
  }
  handleClick=()=>{
    let list = this.state.tutorialList
    list.push("react")
    console.log(list);
    console.log(list===this.state.tutorialList)

    let student=this.state.student
    student.email="abc@gmail.com"

    this.setState({
      heading:"Pure Component Tutorial" ,
      buttonText:"clicked",
      bannerHeading:"Banner Heading",
      tutorialList:list,
      student:{
        email:"abc@gmail.com "
      }

    })

  }

  render(){
    console.log("render is getting called");
    return(
      <>
      <h1>{this.state.heading}</h1>
      <button onClick={this.handleClick.student}>Click Me</button>
      <Banner bannerHeading={this.state.bannerHeading}/>
      </>
    );
  }

}
export default App;*/

import { useState } from "react";

const App=()=>{
  const changeHeading=()=>{
    setHeading ("Learning React Hooks")
  }

  const changeCounter=()=>{
    setCount(prevCount=>{
      let a=2
      prevCount=prevCount*5
      return prevCount
    })
  }
  
  let [count,setCount]=useState(1)
  let [heading,setHeading]=useState("React Hooks")

  
  console.log(count)
  return(
    <>
    <h1>
    {heading}
    {count}
    </h1>
    <button onClick={changeCounter}>Update</button>
    <button onClick={changeHeading}>Change Heading</button>
    </>
  )
}
export default App;





