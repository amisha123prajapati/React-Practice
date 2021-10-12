const MockTestDetail=(props)=>{
    console.log(props);
    console.log(props.match.params.topic);
    return(
        <>
        <div>{props.match.params.topic}</div>
        </>

    )
}

export default MockTestDetail;