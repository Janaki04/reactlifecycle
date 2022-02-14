import React from "react";

class Mounting extends React.Component {
    constructor(){
        super()
        console.log(" constructor function");
    }

    componentDidMount(){
        console.log(" componentDidMount function");
    }

    render(){
        console.log(" render function");
        return(
            <div>
                Example: Mounting Phase
            </div>
        )
    }
}

export default Mounting