import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/avatar1.jpg'

import HeadeSocial from './HeadeSocial'

function Header() {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Pushpam Chodankar</h1>
            <h5 className='text-light'>Software Developer</h5>
            <CTA />

            <HeadeSocial />

            <div className='me'>
                <img className='me__img' src={ME} alt='image one'/>
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
