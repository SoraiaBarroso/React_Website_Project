import React from 'react'
import "./Header.css"
import imgHeader from "../../assets/headerImg.png"
import { BsMouse } from "react-icons/bs"

// Button template so we dont have to create it over and over again
import Button from "../UI/button/Button"

const Header = () => {
  return (
    <section id='header'>
      <div className='container header'>
        <div className='header-left'> 
          <h1>
            <span>INNOVATIVE WEB DEVELOPMENT</span>
            <span>DESIGNING THE WEB OF TOMORROW,</span>
            <span>TODAY</span>
          </h1>
          <p>
            TechX is lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed commodo urna vel mauris faucibus. Consectetur adipiscing elit. 
          </p>
          <div className='header-btn'>
            <Button text={"Get Started"} btnClass={"btn-light"} href={"#"}/>
            <Button text={"How It Works"} btnClass={"btn-orange"} href={"#"}/>
          </div>
        </div>
        <div className='header-right'>
          <img src={imgHeader} alt='Header'></img>
        </div>
      </div>
      <div className='floating-icon'>
        <a href='#features'>
          <BsMouse color='#fff' size={25} className='mouse'/>
        </a>
      </div>
    </section>
  )
}

export default Header