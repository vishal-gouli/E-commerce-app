// import React, { useState } from 'react'
import  style1  from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const Navbar = ({func}) => {

    // let  [toggle,setToggle] = useState(false);

    // let clickedAbout =()=>{
    //      setToggle(true);
    // }

    func()
  return (
     <>
     <nav>
        <div className={style1.logo} >
           
            <h1> A!!!!!!! </h1>  <span>Packaging</span>
            {/* <img src="https://t3.ftcdn.net/jpg/03/65/42/00/360_F_365420014_xjsSDkKzrhq4gr9GFzP6S97H7MJyNI5B.jpg" alt="" /> */}
        </div>
        <div className={style1.content}>
            <ul>
                
                {/* <li><NavLink to="/" onClick={clickedAbout}>About</NavLink></li> */}
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/founders">Founders</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
               
            </ul>
        </div>
     </nav>
     </>
  )
}

export default Navbar