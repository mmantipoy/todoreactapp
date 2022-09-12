import React, { useState } from 'react';
import { TodoItem } from '../model';
import '../style/ItemCreation.css'
import { ReactComponent as IconMenu } from '../assets/broom-solid.svg'
import { dates  } from "../data/items";


interface ItemCreationProps{

    onCreate: (item: TodoItem) => void;
    data: TodoItem[];
}

export function ItemCreation({onCreate, data}: ItemCreationProps){  

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    function submitHendler(e: React.FormEvent<HTMLFormElement>){
        
        e.preventDefault();
        let new_ = { 
            id: 0,
            text:  value,
            state: false,
        }

        data.length === 0 ? new_.id = 1 : new_.id = data[data.length - 1].id + 1
        if (value.trim().length === 0){

            setError('Incorrect length')

            let element:any = document.getElementById('todoInterface__input')

            setErrorTimer(element, 1000)
            
            return
        } else  onCreate(new_)
        
        dates.push(new_)
        setValue('')
    
    }

    function setErrorTimer(element:any, time:number){

        

        element.classList.add('bg-error');
        element.placeholder = 'INCORRECT LENGTH, PRINT SMF'
        setTimeout(() => changeError(element) , time);
            

            // await setErrorTimer(element, time, times) 

        
    }

    function changeError(element: any){
        element.classList.remove('bg-error');
        element.placeholder = 'WRITE YOUR THING and ENTER';
    }

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>){

        setValue(e.target.value)
    }

    function cleanHandler(e: React.MouseEvent<HTMLElement>){

        setValue('')
    }
    return (
        <>  
            <div className='todoInterface_form' id='todoInterface_form'>
            <form className='element__inline' onSubmit={(e) => submitHendler(e)} >
            <input type="text" id='todoInterface__input' className='todoInterface__input_create' 
            placeholder='WRITE YOUR THING and ENTER' 
            autoFocus 
            maxLength={40} 
            value={value} 
            onChange={(e) => changeHandler(e)}>
            
            </input>

            
            </form>
            <button className='todoInterface_clean element__inline' onClick={cleanHandler}>
                
                <IconMenu width="25px" />
            </button>
            </div>
        </>
    )
}