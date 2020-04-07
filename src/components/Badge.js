import React from 'react'
import { Context } from '../store'

function Badge () {
    let colorClass
    return <Context.Consumer>{(context) => {
        if (context.itemState === 'Completed') {
            colorClass = 'success'
        } else if (context.itemState === 'Failed') {
            colorClass = 'danger'
        } else {
            colorClass = 'primary'
        }
        return <span className={`badge badge-${colorClass}`}>{context.itemState}</span>
    }}
</Context.Consumer>
}

export default Badge