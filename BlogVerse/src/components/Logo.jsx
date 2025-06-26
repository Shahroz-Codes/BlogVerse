import React from 'react'
import blogapplogo from '../assets/blogapplogo.png'

function Logo({ width = "50px" }) {
  return (<div className='w-11 rounded-full'><img src={blogapplogo}  alt="Logo" /></div>
  )
}

export default Logo