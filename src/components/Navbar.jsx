import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
       <div className="left">
        LOGO
       </div> 
       <div className="right">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products </Link>
        <Link to={"/cart"}><i className="fa-solid fa-cart-shopping"></i> </Link>
       </div>
    </div>
  )
}

export default Navbar