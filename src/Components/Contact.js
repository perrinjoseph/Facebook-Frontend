import React from 'react'
import {Avatar} from '@material-ui/core'
import './Contact.css'

function Contact({img,title}) {
    return (
        <div className="contact">
            <Avatar src={img}/>
            <div className="contact__online"></div>
            <p>{title}</p>
        </div>
    )
}

export default Contact
