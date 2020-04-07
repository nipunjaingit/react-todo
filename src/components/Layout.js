import React from 'react'
import ListContainer from './ListContainer'
import Head from './Head'
import { Context } from '../store'

class Layout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            itemState: 'Pending' 
        }
    }
    setItemState = (e) => {
        this.setState({
            itemState: e.target.value
        })
    }
    render () {
        return <div className="container-fuild main-container">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 text-center m-auto">
                <Context.Provider value={{itemState: this.state.itemState, setItemState: this.setItemState}}>
                    <Head />
                    <ListContainer />
                </Context.Provider>
            </div>
            <div className="col-lg-3"></div>
        </div>
    }
}

export default Layout