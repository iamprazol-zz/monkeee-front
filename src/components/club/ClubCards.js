import React from 'react';

const ClubCards = props => {
    const { name, imgsrc, description, suburb, address, email, phone, open, order, facebook, instagram } = props;
    return (
        <div className="card">
            <div className="main">
                <div className="image-holder">
                    <img src={imgsrc} alt="Event" />
                </div>
                <div className="details">
                    <h2><strong>{name}</strong></h2>
                    <p><strong>Suburb:</strong> {suburb}</p>
                    <p><strong>Address:</strong> {address}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Order:</strong> {order}</p>
                    <p> <strong>Phone:</strong> {phone}</p>
                </div>
            </div>
            <div className="description">
                <p>{description}</p>
                <p><strong>Open:</strong> {open}</p>
            </div>
            <div className="footer">
                <p><a href={facebook}>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜</a></p>
                <p><a href={instagram}>𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞</a></p>
            </div>
        </div>
    );
};

export default ClubCards;
