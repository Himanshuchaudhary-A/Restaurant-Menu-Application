import React from 'react'
import './MainBackground.css';
import WelcomeMessage from './WelcomeMessage';
const MainBackground = () => {
  return (
    <div>
    <div class="context">
    <h1><WelcomeMessage/></h1>
</div>


<div class="area" >
        <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
</div >


</div>

  )
}

export default MainBackground