import React from 'react';
import '../style/InfoInterface.css'

interface infoProps {

    onClick: (state: boolean) => void
}

export function InfoInterface({onClick}: infoProps){  
    
    function closeInfo(){

        onClick(false)
    }
    
    return (

        <>
            <div className='infoMain' onClick={closeInfo}>
                
                <div className='infoMain__info'>

                    <p className='infoMain__info_text'>

                         - Приложение создано для хранения и записи ваших дел, в виде простых записок <br/> <br/>
                         
                         - Чтобы сделать запись, просто напишите текст в верхнем поле и нажмите ENTER для ввода <br/> <br/>

                         - Записи можно отмечать как *выполненные* нажатием кнопки слева от записи <br/> <br/>

                         - Записи можно удалять нажатием кнопки справа от записи <br/> <br/>

                         - Have fun ! ^_^
                    </p>
                </div>

            </div>
        </>
    )
}