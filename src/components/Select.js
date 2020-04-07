import React from 'react'
import { Context } from '../store'

function Select () {
    return <Context.Consumer>{(context) => (
            <select defaultChecked="Pending" onChange={context.setItemState} style={{width: '100%', marginTop: '10px'}}>
                <option value="Pending">
                    Pending
                </option>
                <option value="Completed">
                    Completed
                </option>
                <option value="Failed">
                    Failed
                </option>
            </select>
            )
        }
    </Context.Consumer>
}

export default Select