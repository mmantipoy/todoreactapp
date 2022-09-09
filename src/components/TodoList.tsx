import React, { useState } from "react";
import {TodoItem} from "../model"
import { TodoItemF } from "./TodoItem";

export interface TodoListProps{

    list: TodoItem[];
    filter: string
}

export function TodoList ( {list, filter}: TodoListProps){

    // console.log(list);
    return (

        <>  

            { list.map( todo => <TodoItemF todo={ todo } key={ todo.id} filter={filter}/>)}

        
        </>

    )
}