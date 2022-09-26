import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeadeSocial() {
  return (
    <div className='header__socials'>
    <a href='https://linkedin.com'><BsLinkedin /></a>
    <a href='https://github.com'><FaGithub /></a>
    </div>
  )
}

export default HeadeSocial
