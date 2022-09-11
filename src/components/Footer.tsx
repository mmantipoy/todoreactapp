

import React from 'react';
import '../style/Footer.css';

export function Footer(){  
    
    return (
        <>
            <div className='footer'>

                <p className='footer__text'>
                    Print to add a new todo 
                    <br/>
                    Created by <a className='footer__text_href' href="https://github.com/mmantipoy" target='_blank'>@mmantipoy</a>
                    <br/>
                    2022 

                </p>
            </div>
        </>
    )
}