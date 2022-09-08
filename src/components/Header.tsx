
import React from "react";

import mainLogo from '../assets/pen-solid.svg';
import infoLogo from '../assets/circle-question-regular.svg';
import '../style/Header.css'

export function Header(){


    return (
        <>
            <div className="header"> 
                
                {/* <Icon Isrc={ '/src/componnents/paintbrush-solid.svg' } /> */}
                {/* <img src={logo} className="App-logo" alt="logo" height={20}/> */}


                <object className="header__logo element__inline" data={mainLogo} type="image/svg+xml" height={40} width={40}>
                    Error
                </object>

                
                <p className="header__text element__inline"> 
                    <i>  Best place to collect your TODOs </i>
                </p>

                <button className="header__button element__inline fl-r"> 

                <object className="header__butten_logo" data={infoLogo} type="image/svg+xml" >
                    Error
                </object>
                </button>
            </div>
        </>
        
    )
}