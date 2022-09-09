import React from 'react';
import '../style/ItemCreation.css'

export function ItemCreation(){  


    return (
        <form className='todoInterface_form'>
        <input type="text" className='todoInterface__input_create' placeholder='WRITE YOUR THING and ENTER' autoFocus maxLength={40}>


        </input>
        </form>
    )
}