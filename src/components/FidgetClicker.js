import React from 'react'

class FidgetClicker extends React.Component{
    constructor(){
        super()
        this.state = {
            number: 0
        }
    }
    increment = () => {
        this.setState({
            number: this.state.number + 1
        })
        if(this.state.number >= 10){
            this.setState({
                number: 0
            })
        }
    }
    decrement = () => {
        this.setState({
            number: this.state.number - 1
        })
        if(this.state.number <= 0){
            this.setState({
                number: 10
            })
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.decrement()}>-</button>
                <button onClick={() => this.increment()}>+</button>
            </div>
        )
    }
}

export default FidgetClicker