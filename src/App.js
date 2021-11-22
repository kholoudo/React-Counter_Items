import React, { Component } from 'react'

import NavBar from './Navigation'
import ItemsList from './Items'

// import Increase from './Increase'
// import Decrement from './Decrement'

export class App extends Component {
    constructor(props){
        super(props)
        this.state={
            Counter:0,
        }
    }

    handleTotal1=()=>{
    this.setState({Counter:this.state.Counter+1})
    }
    handleTotal2=()=>{
        if(this.state.Counter !=0)
        this.setState({Counter:this.state.Counter-1})
        }

        

  render() {
    return (
      <div>
          <h1 style={{textAlign:"center",backgroundColor:"#dbcd36"}} >Welcome to our online shop</h1>
          <NavBar/>
          {this.state.Counter}
          <ul>
          <ItemsList src="./per1.png" onChange1={this.handleTotal1} onChange2={this.handleTotal2}/>
          <ItemsList src="./per2.jpg"onChange1={this.handleTotal1} onChange2={this.handleTotal2}/>
          <ItemsList src="./per3.jpg"onChange1={this.handleTotal1} onChange2={this.handleTotal2}/>
          <ItemsList src="./per4.jpeg"onChange1={this.handleTotal1} onChange2={this.handleTotal2}/>
          </ul>
          
          {/* <Increase/>
          <Decrement/> */}
      </div>
    )
  }
}

export default App