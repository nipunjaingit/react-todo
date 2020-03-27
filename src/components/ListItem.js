import React from 'react'
export default function (props) {
    return <li className="list-group-item mt-2">
        {props.textValue}
        <button type="button" className="close" aria-label="Close" onClick={props.deleteItem}>
            <span aria-hidden="true">&times;</span>
        </button>
    </li>
}