import React, {Component} from "react";

class Updating extends Component {
    state = {
        number : 20
    }

    componentDidUpdate(){
        console.log(" componentDidUpdate");
    }
    render(){
        console.log(" render function");
        return (
            <div>
                <h5>Example</h5>
                  {this.state.number}
                <button onClick = {()=>this.setState({number:this.state.number+1})}>Change</button>
            </div>
        )
    }
}

export default Updating