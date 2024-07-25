import React from 'react'
import "./Footer.css"

const Footer = ({setopenMenu}) => {
  return (
    <div onClick={()=>setopenMenu(false)} className='footer'>
      footer
    </div>
  )
}

export default Footer
