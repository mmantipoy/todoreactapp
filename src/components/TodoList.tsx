import React, { useState } from "react";
import {TodoItem} from "../model"
import { TodoItemF } from "./TodoItem";

export interface TodoListProps{

    list: TodoItem[],
    filter: string,
    onDelete: (item: TodoItem) => void
}

export function TodoList ( {list, filter, onDelete}: TodoListProps){

    console.log(list);
    return (

        <>  

            { list.map( todo => <TodoItemF todo={ todo } key={ todo.id} filter={filter} onDelete={onDelete}/>)}

        
        </>

    )
}