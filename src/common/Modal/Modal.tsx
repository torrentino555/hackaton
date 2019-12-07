import React from 'react'
import Popup from 'reactjs-popup'

import './Modal.css'


interface Props {
    trigger?: JSX.Element | ((isOpen: boolean) => JSX.Element)
    children: JSX.Element
    isOpen?: boolean
}


export default function Modal({ trigger, isOpen, children }: Props) {

    return (
        <Popup
            modal
            className="modal"
            open={ isOpen }
            trigger={ trigger }
            closeOnDocumentClick={ false }
            closeOnEscape={ false }
        >
            { children }
        </Popup>
    )
}