

import React, { useState } from "react";
import { setConstantValue } from "typescript";
import '../style/TodoInterface.css'

type todoFilter = 'ALL' | 'COMPLITED' | 'ACTIVE'



export function TodoInterface(){  
    
    const [filter, setFilter] =  useState( 'ALL' )


    return (

        <>
            <div className="todoInterface">

                <p> {filter}</p>

                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit omnis repudiandae fuga inventore a placeat cupiditate quo, natus magnam quidem eveniet perferendis recusandae nemo excepturi error autem, veniam praesentium illum.o</p>

                <div className="todoInterface__filterbuttons">

                    <button className="todoInterface__filterbuttons_button fl-r .element__inline" onClick = { () => setFilter('COMPLITED')} >
                        COMPLITED
                    </button>
                    <button className="todoInterface__filterbuttons_button fl-r .element__inline" onClick = { () => setFilter('ACTIVE')}>
                        ACTIVE
                    </button>
                    <button className="todoInterface__filterbuttons_button fl-r .element__inline" onClick = { () => setFilter('ALL')}>
                        ALL
                    </button>
                    
                    

                </div>
            </div>


        </>
    )
}