import React from 'react'
import ListItem from './ListItem'
// import { Context } from '../store'
import Input from './Input'
import Select from './Select'

class ListContainer extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            list: [],
            value: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    appendToList = (e) => {
        e.preventDefault()
        if (this.state.value !== '') {
            this.setState((prevState) => {
                let listItemObj = {
                    value: prevState.value,
                    key: Date.now()
                }
                const list = prevState.list.concat(listItemObj)
                return {
                    list: list,
                    value: ''
                }
            })
        }
    }

    deleteItem (e, key) {
        e.stopPropagation()
        let list = this.state.list.filter(item => {
            return item.key !== key
        })
        this.setState({
            list
        })
    }

    render () {
        return (
            <div className="listContainer">
                <form onSubmit={this.appendToList}>
                    
                    <Input value={this.state.value} onValueChange={this.onValueChange}/>

                    <Select />

                    {/* <select defaultChecked="Pending" onChange={this.context.setItemState} style={{width: '100%', marginTop: '10px'}}>
                        <option value="Pending">
                            Pending
                        </option>
                        <option value="Completed">
                            Completed
                        </option>
                        <option value="Failed">
                            Failed
                        </option>
                    </select> */}

                    <button type="submit" disabled={this.state.value === ''} className="btn btn-primary mt-5">Add</button>
                </form>

                <ul className="list-group pt-5">
                    {this.state.list.length > 0 ? <p className="colorWhite">Total Items: {this.state.list.length}</p> : <p className="colorWhite">No items added</p>}
                    {this.state.list.map((item) => {
                        return <ListItem textValue={item.value} key={item.key} deleteItem={(e) => this.deleteItem(e, item.key)} />
                    })}
                </ul>

            </div>
        )
    }
}

// ListContainer.contextType = Context

export default ListContainer