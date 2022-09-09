

import React, { useState } from "react";
import { setConstantValue } from "typescript";
import { TodoItem } from "../model";
import '../style/TodoInterface.css'
import { TodoList, TodoListProps } from "./TodoList";
import { date  } from "../data/items";
import { ItemCreation } from "./ItemCreation";

type todoFilter = 'ALL' | 'COMPLITED' | 'ACTIVE'

let dates: TodoItem[]
// console.log(date[0])
export function TodoInterface(){  
    
    const [filter, setFilter] =  useState( 'ALL' )
    
    function renderFilterButtons(){

        return (
            <>
                <button className="todoInterface__filterbuttons_button  .element__inline" onClick = { () => setFilter('COMPLITED')} >
                        COMPLITED
                </button>
                <button className="todoInterface__filterbuttons_button .element__inline" onClick = { () => setFilter('ACTIVE')}>
                        ACTIVE
                </button>
                <button className="todoInterface__filterbuttons_button .element__inline" onClick = { () => setFilter('ALL')}>
                        ALL
                </button>
            </>
        )
    }
    
    function renderItemCreation(){

        return (

            <>
                <ItemCreation />
            </>
        )
    }

    function renderItemList(date: TodoItem[], filter: string){


        return (
            <TodoList list = {date} filter={filter} />
        )
    }
    
    // switch (filter) {

    //     case 'ALL':
    //         dates = date
    //         break;
    //     case 'ACTIVE':
    //         dates = date.filter( dat => dat.state === false);
    //         break;
    //     case 'COMPLITED':
    //         dates = date.filter( dat => dat.state === true);
    //         break;
    // }
    
    // console.log('fff');
    return (

        <>  

            <div className="todoInterface">

                {renderItemCreation()}
                {/* <p> {filter}</p> */}

                {renderItemList(date, filter)}
                
                <div className="todoInterface__filterbuttons">

                    {renderFilterButtons()}
                    
                </div>
            </div>

            <div className="beautyPages" />
            <div className="beautyPages_" />



        </>
    )
}