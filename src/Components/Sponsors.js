import React from 'react'
import Sponsor from './Sponsor'
import './Sponsors.css'


function Sponsors() {
    return (
        <div className="sponsors">
            <h3>Sponsored</h3>
            <Sponsor img="https://www.techrepublic.com/a/hub/i/r/2020/11/02/5915e0ca-249c-4b6f-94b3-0aea779aac77/resize/1200x900/2696cdbe9c25f37c29f0b8d87401549f/applenovevent.jpg" link="https://image.freepik.com/" title="Free Napkins" />
            <Sponsor img="https://leifandersendesign.files.wordpress.com/2017/05/square-ad.png?w=300" link="https://zacomic.com/" title="Tropical Pan Pizza"/>

        </div>
    )
}

export default Sponsors
