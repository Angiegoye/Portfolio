
import React from 'react'
import { Titulo } from "../constants/constanst"
import "../css/Header.css"
import UTNICONO from "../assets/logo-utn.png"
const Header = () => {

    return (
        <div className='header'>
            <div className="contenidoflex">
                <img className='logo' src={UTNICONO}/>  
                <h4 style={{margin:'10px',fontSize:'64px'}}> - PORTFOLIO</h4>                                                            
            </div>
        </div>
    )

}
export default Header