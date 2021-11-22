import React from 'react'


const NavBar= () =>{
const NavStyle={
    backgroundColor:"#5b5a50",
    color:"white",
display:'flex',
justifyContent:'space-around',


}
const listStyle={display:'flex',
listStyleType:'none',
justifyContent:'space-around',
width:'60%'}

    return (
    <div className="Navi"  style={NavStyle}>
        <ul className="list1" style={listStyle}>
      <li>Home</li>
      <li> Shop
      </li>
      <li id="Cart1">
        Cart
      </li></ul>
      </div>);}

      export default NavBar;