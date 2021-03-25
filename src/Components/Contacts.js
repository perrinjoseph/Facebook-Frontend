import React from 'react'
import Contact from './Contact'
import './Contacts.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';


function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts__headingItems">
                <h3>Contacts</h3>
                <div className="contacts__icons">
                    <div className="contacts__icon">
                        <VideocamIcon/>
                    </div>
                    <div className="contacts__icon">
                        <SearchIcon/>   
                    </div>
                </div>
            </div>
            <Contact title="Jacob George" img="https://www.daniosorio.com/wp-content/uploads/2018/03/black-and-white-portrait-young-man.jpg"/>
            <Contact title="Hannas Shivatski" img="https://www.mordeo.org/files/uploads/2019/09/Josephine-Langford-Portrait-2019-4K-Ultra-HD-Mobile-Wallpaper.jpg"/>
            <Contact title="April" img="https://tse3.mm.bing.net/th?id=OIP.GtQxZ1ie3UaaftbostKzAgHaJQ&pid=Api&P=0&w=300&h=300"/>
            <Contact title="Maddie Jane" img="https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg"/>
            <Contact title="Lana Del Re" img="https://weandthecolor.com/wp-content/uploads/2017/07/2-Obi-Wolf-Photography-portrait-of-Luisa.jpg"/>
            <Contact title="Timberlake Justin" img="https://nadiazheng.com/wp-content/uploads/2015/12/business-portrait.jpg"/>
            <Contact title="Joseph Arnold" img="https://monovisions.com/wp-content/uploads/2015/06/portrait-photographer-philippe-halsman-18.jpg"/>

        </div>
    )
}

export default Contacts
