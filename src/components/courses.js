/*import CourseItem from "../coursesItem";

function Courses(props){
    console.log(props);
    
    return(
        <>
       {props.courseList.map((item)=>(
       <CourseItem key={item.id}  courseDetails={item}/>
       
       ))}




        </>
    );
    */
    /*return(
    <>
    {props.courseList.map((item)=>(
    <>
    <h3>{item.heading}</h3>
    <p>{item.description}</p>

    </>
    ))}
    </>
    );


}
export default Courses;*/

const Courses =(props)=>{
    console.log(props)
    console.log(props.location.pathname)
    return(
        <>
        Courses
        </>

    )
}

export default Courses;