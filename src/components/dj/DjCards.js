import React from 'react';

const DjCards = props => {
    const { name, imgsrc, description, category, label, address, facebook, instagram } = props;
    return (
        <div className="popup-card">
            <div className="popup-main">
                <div className="popup-header">
                    <h5 className="popup-title align-center display-5">{name}</h5>
                </div>
                <div className="popup-image-holder">
                    <img src={imgsrc} alt="Club" />
                </div>
                <div className="item-header">
                    <p>Details</p>
                </div>
                <div className="popup-description">
                    <p>{description}</p>
                </div>
                <div className="popup-details">
                    <p><strong>Address :</strong> {address}</p>
                    <p><strong>Category :</strong> {category}</p>
                    <p><strong>Label :</strong> {label}</p>
                </div>
            </div>
            <div className="popup-footer">
                <p><a href={facebook}>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜</a></p>
                <p><a href={instagram}>𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞</a></p>
            </div>
        </div>
    );
};

export default DjCards;
