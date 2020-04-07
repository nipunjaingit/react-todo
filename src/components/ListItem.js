import React from 'react'
import Badge from './Badge'
export default function (props) {
    return (
        <li className="list-group-item mt-2">
            <span style={{marginRight: '10px'}}>{props.textValue}</span>
            <Badge />
            <button type="button" className="close" aria-label="Close" onClick={props.deleteItem}>
                <span aria-hidden="true">&times;</span>
            </button>
        </li> 
    )
}