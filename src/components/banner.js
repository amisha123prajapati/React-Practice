/*function Banner(){
    return(<h2>Here is the Banner</h2>)
}

export default Banner;*/

/*import React, { Component } from 'react'

class Banner extends Component {

    render(){
        return(
            <>
            <h1>Banner</h1>
            </>
        );
    }
    componentWillUnmount(){
        console.log("componentWillUnmount method is called");
    }
}

export default Banner;*/


import { Component } from "react";

class Banner extends Component {
    render(){
        return(
            <h2>{this.props.bannerHeading}</h2>
        )
    }

}

export default Banner;