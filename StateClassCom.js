import React,{Component} from 'react'
class StateClassCom extends Component{
    state={
        Color:"Yellow",
        price:121
    }
    handleChange=()=>{this.setState({Color:"Red"})}
    render()
    {
        return(
            <div>
            <h1>the color i have selected is {this.state.Color} the price is {this.state.price}</h1>
            <button onClick={this.handleChange}>click me</button>
            </div>
        )
    }
}
export default StateClassCom;