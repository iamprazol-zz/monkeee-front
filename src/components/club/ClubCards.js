import React from 'react';

const ClubCards = props => {
    const { name, imgsrc, description, suburb, address, opening, email, phone, facebook, instagram } = props;
    return (
        <div className="popup-card">
            <div className="popup-main">
                <div className="popup-header">
                    <h5 className="popup-title align-center display-5">{name}</h5>
                </div>
                <div className="popup-image-holder">
                    <img src={imgsrc} alt="Club" />
                </div>
                <div className="popup-description">
                    <p>{description}</p>
                </div>
                <div className="popup-details">
                    <p><strong>Address :</strong> {address}</p>
                    <p><strong>Suburb :</strong> {suburb}</p>
                    <p><strong>Email :</strong> {email}</p>
                    <p><strong>Phone :</strong> {phone}</p>
                    <p><strong>Open : </strong> {opening}</p>
                </div>
            </div>
            <div className="popup-footer">
                <p><a href={facebook}>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜</a></p>
                <p><a href={instagram}>𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞</a></p>
            </div>
        </div>
    );
};

export default ClubCards;
