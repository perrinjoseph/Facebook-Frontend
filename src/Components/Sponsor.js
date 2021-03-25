import React from 'react'
import './Sponsor.css'

function Sponsor({img, title, link}) {
    return (
        <div className="sponsor">
            <div className="sponsor__ad">
                <div style={{backgroundImage: `url(${img})`}} className="sponsor__image"></div>
                <div className="sponsor__info">
                    <h4>{title}</h4>
                    <a href="#">{link}</a>
            </div>
            </div>
        </div>
    )
}

export default Sponsor
