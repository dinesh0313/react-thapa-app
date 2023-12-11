import React, { useState } from 'react'
import "./style.css";
import Menu from "./manuAPI.js"
import Menucard from './Menucard.js';

const Resturant = () => {
  const [menuData,setMenuData]=useState(Menu);
  // <Menucard menuData={menuData}/>
  // console.log(menuData);
  // const myStyle= {color:"red"}
  return (
    <>
    hello
    <Menucard menuData={menuData}/>
    </>
  )
}

export default Resturant
