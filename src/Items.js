import React from 'react'



class ItemsList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Count:0,
        }

        this.list2Style={
            listStyleType:"none",
            textAlign:"center",
            display:"flex",
            flexDirection:"row"
            
                }
               this.style2={
                    margin:"0.5em",
                    padding:"0.5em"
                }
            
                this.buttonStyle={padding:"0.5em", margin:"0.5em"}
    }

     increment =()=>{
     this.setState({Count:this.state.Count+1})
     this.props.onChange1()

     }

     decrement =()=>{
         if(this.state.Count !=0)
        this.setState({Count:this.state.Count-1})
     this.props.onChange2()
        }




    render(){
    return(
<React.Fragment>
<img src={this.props.src} height="100em" width="100em"></img>

    <li style={this.list2Style}><p>Item1</p>
    
    <button onClick={this.increment} id="increaseButton" style={this.buttonStyle}>+</button>
    <p>{this.state.Count}</p>
    <button onClick={this.decrement} id="decrementButton" style={this.buttonStyle}>-</button>
    </li>

    </React.Fragment>
    )
    

;}
}
export default ItemsList
