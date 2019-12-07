import React from 'react'

import './Header.css'


export default function Header() {

    return (
        <div className="header">
            <div className="header__wrapper">
            </div>
        </div>
    )
}

Header.defaultProps = {
    isSearchExist: true
}