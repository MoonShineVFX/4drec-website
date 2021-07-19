import React from 'react';


export default function Navbar(){
  return <nav className="fixed-top">
      <input type="checkbox" id="nav-check" />
      <ul className="navbar container pt-4 pb-4">
        <li className="logo">
          <a href="#home" >
            <img src="./images/ms_logo-01.svg" alt="" /> 
          </a>
        </li>
        <li className="pc"><a href="#About" className="scroll">關於</a></li>
        <li className="pc"><a href="#Chapter1" className="scroll">場地規格</a></li>
        <li className="pc"><a href="#Chapter2" className="scroll">試營運</a></li>
        <li className="pc"><a href="#Chapter3" className="scroll">收費方式</a></li>
        <li className="pc"><a href="https://docs.google.com/forms/d/18MpNoyQmqVg2EwHo11tGS7-4EZ72xFx48RMI5kvi9Kw/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">線上預約</a></li>
        <li className="pc">
          <a href="https://www.facebook.com/MoonShineAnimation/" target="_blank" rel="noopener noreferrer">
            <img src="./images/facebook-brands.svg" alt="" className="svg icon"/>
          </a>
        </li>
        <li className="pc">
          <a href="https://www.instagram.com/moonshine.tw/" target="_blank" rel="noopener noreferrer">
          <img src="./images/instagram-brands.svg" alt="" className="svg icon"/>
          </a>
        </li>
      </ul>
      <div className="nav-btn">
        
        <label htmlFor="nav-check" id="arrowLabel">
          <span className="arrowSpan"></span>
        </label>
      </div>
      <ul id="menuList">
        <li className="pc"><a href="#About" className="scroll">關於</a></li>
        <li className="pc"><a href="#Chapter1" className="scroll">場地規格</a></li>
        <li className="pc"><a href="#Chapter2" className="scroll">試營運</a></li>
        <li className="pc"><a href="#Chapter3" className="scroll">收費方式</a></li>
        <li className="pc"><a href="https://docs.google.com/forms/d/18MpNoyQmqVg2EwHo11tGS7-4EZ72xFx48RMI5kvi9Kw/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">線上預約</a></li>
        <li>
          <a href="https://www.facebook.com/MoonShineAnimation/" target="_blank" rel="noopener noreferrer">
            <img src="./images/facebook-brands.svg" alt="" className="svg icon"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/moonshine.tw/" target="_blank" rel="noopener noreferrer">
          <img src="./images/instagram-brands.svg" alt="" className="svg icon"/>
          </a>
        </li>
      </ul>
  </nav> 
}