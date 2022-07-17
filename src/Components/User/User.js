import React from 'react'
import classes from './User.module.css'
const User = (props) => {
  return (
    <div className = "  d-flex flex-row my-4 shadow p-3 mb-5 bg-white rounded">
        <div className = "d-flex align-items-start mx-3 pl-3">
            {props.name}
        </div>
        <div className = "d-flex align-items-end pr-3">
            <img className = "rounded-circle" src={props.src} alt="" />
        </div>
    </div>
  )
}

export default User;