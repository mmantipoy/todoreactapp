

import React, { useState } from "react";
import { setConstantValue } from "typescript";
import { TodoItem } from "../model";
import '../style/TodoInterface.css'
import { TodoList, TodoListProps } from "./TodoList";
import { dates  } from "../data/items";
import { ItemCreation } from "./ItemCreation";

type todoFilter = 'ALL' | 'COMPLITED' | 'ACTIVE'

// let dates: TodoItem[]
// console.log(date[0])
export function TodoInterface(){  
    
    const [filter, setFilter] =  useState<todoFilter>( 'ALL' )

    const [data, setData] = useState<TodoItem[]>( dates )
    

    function addItem (item: TodoItem){

        setData(prev => [...prev, item])
    }

    function deleteItem (item: TodoItem){
        // console.log(data.filter((e)=> e !== item ))
        setData(prev => prev.filter((e)=> e !== item ))
    }
    function renderFilterButtons(){

        let but:todoFilter[] = ['COMPLITED','ACTIVE','ALL']
        return (
            <>  
                { but.map( sta => renderFilterButton(sta)) }

                {/* {renderFilterButton('COMPLITED')}
                {renderFilterButton('ACTIVE')}
                {renderFilterButton('ALL')} */}
                
            </>
        )
    }
    function renderFilterButton(text: todoFilter){

        return(
            <button className="todoInterface__filterbuttons_button  .element__inline" onClick = { () => setFilter(text)} >
                    {text}
            </button>

        )
    }

    function renderItemCreation(data: TodoItem[]){

        return (

            <>
                <ItemCreation onCreate={addItem}/>
            </>
        )
    }

    function renderItemList(data: TodoItem[], filter: string){


        return (
            <TodoList list = {data} filter={filter} onDelete={deleteItem}/>
        )
    }
    
    function rederPlaceHolder(){

        return (

            <div className="todoInterface__placeholder">
                
                Looks like you dont have TODOs... <br/> time to come up with new ones!
            </div>
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

                {renderItemCreation(data)}
                {/* <p> {filter}</p> */}

                {renderItemList(data, filter)}
                {data.length === 0 && rederPlaceHolder()}
                
                <div className="todoInterface__filterbuttons">

                    {renderFilterButtons()}

                    
                    
                </div>
            </div>

            <div className="beautyPages" />
            <div className="beautyPages_" />



        </>
    )
}