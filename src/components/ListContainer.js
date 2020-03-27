import React from 'react'
import ListItem from './ListItem'

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
    appendToList = () => {
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
                    <input onChange={this.onValueChange} value={this.state.value} className="form-control" type="text" />
                    <button onClick={this.appendToList} type="submit" disabled={this.state.value === ''} className="btn btn-primary mt-5">Add</button>
                </form>
                <ul className="list-group pt-5">
                    {this.state.list.length > 0 ? <p className="colorWhite">Total Items: {this.state.list.length}</p> : <p className="colorWhite">No items added</p>}
                    {this.state.list.map((item) => {
                        return <ListItem textValue={item.value} key={item.key} deleteItem={(e) => this.deleteItem(e, item.key)}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default ListContainer