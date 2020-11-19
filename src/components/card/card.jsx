import React from 'react'
import './card.scss'

const Card = props => {

    const upperCaseFunc = value => {
      if(value) return value[0].toUpperCase() + value.slice(1)
    }

    return (
      <div className='card'>
        <h4> { upperCaseFunc(props.title) } </h4>
        <font> { upperCaseFunc(props.body) } </font>
        <span> { props.author } </span>
      </div>
    )
}

export default Card