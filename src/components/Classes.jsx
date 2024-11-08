import React, { Component } from 'react'

export default class Classes extends Component {
 constructor(props){
    super(props)
    this.state={count:0}
    // constructor initialization
 }
 componentDidMount(){
    // component did mount 
    this.interval = setInterval(()=>{
        this.setState({count: this.state.count +1})
    }, 1000)
 }
//  shouldComponentUpdate(){

//  }
//  componentDidUpdate(){

//  }
//  componentWillUnmount(){

//  }
    render() {
    return (
      <div>
        <h1>count :{this.state.count}</h1>
      </div>
    )
  }
}
