/*import './../styles/heading.css'


function Heading(){

  let styles={
     headingStyle:{
      color:"green",backgroundColor:"yellow"
     },
     paraStyle:{
       fontSize:"5rem"
     }
    }
   let headingClass;

   let isUserRegistered=true;
if(isUserRegistered){
  headingClass="main-heading";
}
else{
  headingClass="main-heading-2";
}

   return(
      
      <div>
        <h1 className={headingClass}>Wecome to React</h1>
        <p>React is very interesting.You will love it.</p>
        <button>Click ME</button>
        <h2>Hope you are understanding React very well</h2>
        </div>
    )
}
export default Heading;*/

/*function Heading(props){
  console.log(props);
  return (
    <>
    <h1>{props.heading}</h1>
    </>
  );
}
export default Heading;*/

import {Component} from "react";
class Heading extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
render(){
  return (
    <>
    <h1>{this.props.heading}</h1>
    </>
  );
}
}

export default Heading;