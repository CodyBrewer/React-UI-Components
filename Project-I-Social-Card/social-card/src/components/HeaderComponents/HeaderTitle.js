import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
function HeaderTitle(){
    return (
        <div className="header-title">
            <div className="title-container">
                <div className ="user-container">
                    <ImageThumbnail />
                    <h1>Lambda School</h1>
                </div>
                <h2>@LambdaSchool • 27 Feb</h2>
           </div>
           <HeaderContent />
        </div>
    )
}

export default HeaderTitle;