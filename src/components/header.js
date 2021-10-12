import {Link,NavLink} from 'react-router-dom';


const Header =()=>{
    return(
        <>
        <div>
        <NavLink to={{
            
         pathname: "/courses",
           hash:'#1234',
           search:"?paid:true"
        }}>Courses</NavLink>
        </div>
        <div>
        <NavLink activeStyle={{color:'red', fontSize:'2rem',fontWeight:'700'}} 
        to="/about">About US</NavLink>
        </div>
        </>
    )
}

export default Header;
