import React, { Children } from 'react'
import './find.scss'

const Find = props => {
    return(
        <div className='find'>
            {props.children}
        </div>
       
    )
}

export default Find