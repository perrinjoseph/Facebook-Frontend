import React from 'react'
import './RightSideBar.css';
import Sponsors from './Sponsors';
import YourPages from './YourPages';
import Contacts from './Contacts';


function RightSideBar() {
    return (
        <div className="rightSideBar">
            
            <Sponsors/>
            <YourPages/>
            <Contacts/>
        </div>
    )
}

export default RightSideBar
