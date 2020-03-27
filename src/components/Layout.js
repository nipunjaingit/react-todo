import React from 'react'
import ListContainer from './ListContainer'
import Head from './Head'

function Layout () {
    return <div className="container-fuild main-container">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-center m-auto">
            <Head />
            <ListContainer />
        </div>
        <div className="col-lg-3"></div>
    </div>
}

export default Layout