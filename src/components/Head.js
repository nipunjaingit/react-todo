import React from 'react'
import Logo from '../logo.svg'
export default function () {
    let styles = {
        img: {
            width: '150px',
            height: '150px'
        }
    }
    return <div className="text-center">
        <img src={Logo} alt="Logo" style={styles.img}/>
        <h3 className="colorWhite">ReactJS Todo</h3>
    </div>
}