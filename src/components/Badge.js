import React from 'react'
import { Context } from '../store'

function Badge () {
    return  <Context.Consumer>{(context) => {
            return context.itemState === 'Completed' ? <span className="badge badge-success">Complete</span> : context.itemState === 'Failed' ? <span className="badge badge-danger">Failed</span> : <span className="badge badge-primary">Pending</span>
        }}
        </Context.Consumer>
    
}

export default Badge