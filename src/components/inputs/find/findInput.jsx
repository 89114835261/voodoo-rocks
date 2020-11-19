import React from 'react'
import './findInput.scss'
import find from './../../../assests/media/icons/find.svg'

const FindInput = props => {

    const changeValue = value => {
        props.setPostsFunc(props.postsData, props.usersData, value.target.value)
    }

     return (
        <div className='input-element'>
            <div className='find-icon'>
                <img src={find} />
            </div>
            <input placeholder='Filter by author...' onChange={e => changeValue(e)} type='text' />
        </div>
     )     
}


export default FindInput
