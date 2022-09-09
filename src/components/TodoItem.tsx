
import React, { useState } from "react";
import {TodoItem} from "../model"
import checkCircle from '../assets/circle-check-regular.svg';
import circle from '../assets/circle-regular.svg';
import '../style/TodoItem.css'

interface TodoItemProps{

    todo: TodoItem;
    filter: string;
}



export function TodoItemF(  {todo, filter} :TodoItemProps ){  

    const [flag, setFlag] = useState(todo.state)
    const [draw, setDraw] = useState(filter)

    todo.state = flag

    function renderItem(flag: boolean, filter: string){
        let ss: number = 0
        // ss = filter === ('COMPLITED' || 'ALL') ? (filter === 'ALL' ? ss = 2 : ss = 1) : ss = 0
        
        switch (filter){
            case 'ALL':
                ss = 2;
                break;
            case 'COMPLITED':
                ss = 1;
                break;
            case 'ACTIVE':
                ss = 0;
                break;

        }

        // if (filter === 'ALL') ss = 2; else 
        // if ( filter === 'COMPLITED') ss = 1; else 
        // if ( filter === 'ACTIVE') ss = 0;

        // console.log(filter, ss);

        if ( ss === 2 || ( ss === 0 && flag === false ) || (ss === 1 && flag === true)){
            return (
            <div className="item">
                <button className="item__button_check" onClick={ () => setFlag(!flag)}>

                   {flag && '✔'}
                    
                </button>

                {!flag && <span className="item__text">
                    {todo.text}
                </span>}
                {flag && <span className="item__text line-through">
                    {todo.text}
            </span>}
            </div>
            )
        } else {return (
            <>
            </>
        )}


        
    }
    return (
        <>  
            {renderItem(flag, filter)}
            
        </>
    )
    

}