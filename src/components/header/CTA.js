import React from 'react'
import PDF from '../../assets/sample.pdf'

function CTA() {
  return (
    <div className='cta'>
      <a href={PDF} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
