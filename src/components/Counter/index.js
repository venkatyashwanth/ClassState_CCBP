import {Component} from 'react'

class Counter extends Component{
    render(){
        const {name} = this.props;
        return <h1>Hello {name}, I am Class Component</h1>
    }
}

export default Counter