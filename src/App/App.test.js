import React from 'react';
import ReactDOM from 'react-dom';
import App from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



/**
 * 
<nav className="container fixed-top">
    <div className="row">
      <div className="logo col">
          <a href="#home">
            <img src="/images/ms_logo-01.svg" alt="" /> 
          </a>
        </div>
        
        <ul id="menuList" className="col-7">
          <li><a href="#About" className="scroll">About</a></li>
          <li><a href="#VirtualStudio" className="scroll">Virtual Studio</a></li>
          <li><a href="#3DRec" className="scroll">3D Rec</a></li>
          <li><a href="#4DRec" className="scroll">4D Rec</a></li>
          
        </ul>
        <ul id="menuSub" className="col">
          <li>
            <a href="https://www.facebook.com/MoonShineVFX/" >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/moonshine.tw/" >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
    </div>


    
    
    <div className="nav-btn">
      <input type="checkbox" id="nav-check" />
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  </nav>
 * 
 * 
 */