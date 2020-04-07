import React from 'react'

function Input (props) {
    return <input onChange={props.onValueChange} value={props.value} className="form-control" type="text" />
}

export default Input