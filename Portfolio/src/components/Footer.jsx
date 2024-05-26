import React from 'react'
import { FaSpider } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import '../css/Footer.css'
const Footer = () => {
    return (
        <div className='footercompleto'>
            <span className='footer-text'> Maria de los Angeles Goyechea - 2024 
            <a target='_blank' href='https://www.instagram.com'style={{color:'white',marginLeft:'5px' }}><FaInstagram/></a> 
            <a target='_blank' href='https://www.facebook.com' style={{color:'white',marginLeft:'5px'}}><FaFacebook /></a>
            </span> 
        </div>
    )

}
export default Footer
