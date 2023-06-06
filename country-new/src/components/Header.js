import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function Header() {

  const changeTheme = ()=>{
    const moon = document.querySelector('.fa-moon');
    const header = document.querySelector('.header');
    const input = document.querySelector('#search');
    const select = document.querySelector('#select');
    const cards = document.querySelectorAll('.card');


    moon.addEventListener('click', ()=>{
      document.body.classList.toggle('light-theme');
      header.classList.toggle('light-theme');
      input.classList.toggle('light-theme');
      select.classList.toggle('light-theme');

      cards.forEach(card => {
        card.classList.toggle('light-theme');
      });
     
    });
  }
 

  return (
   
  <header className='header'>
    <div>
      <h1 >
        where in the world?
      </h1>
    </div>  


    <div  class='mode-button'>
      
        <div onClick={()=>changeTheme()}>
      <FontAwesomeIcon icon={faMoon} /> 
          <span>Dark Mode</span>
        </div>
     
    </div>  
    </header>

  
    
  );
}

export default Header;