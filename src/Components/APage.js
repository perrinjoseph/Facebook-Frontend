import React from 'react'
import {Avatar} from '@material-ui/core'
import BellIcon from '@material-ui/icons/NotificationsNoneOutlined'
import PromotionIcon from '@material-ui/icons/ShopOutlined'
import './APage.css';

function APage() {
    return (
        <div className="aPage">
            <Avatar src="https://image.freepik.com/free-vector/modern-book-cover-page-brochure-design_1017-12732.jpg"/>
            <div className="aPage__info">
                <div className="aPage__options">
                    <BellIcon/>
                    <p>
                        20+ Notification 
                    </p>
                </div>
                <div className="aPage__options">
                    <PromotionIcon/>
                    <p>
                        Create Promotion 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default APage
