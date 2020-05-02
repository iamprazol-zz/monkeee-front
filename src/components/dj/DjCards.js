import React from 'react';

const DjCards = props => {
    const { name, imgsrc, description, address, email, phone, label, category, facebook, instagram } = props;
    return (
        <div className="card">
            <div className="main">
                <div className="image-holder">
                    <img src={imgsrc} alt="Event" />
                </div>
                <div className="details">
                    <h2><strong>{name}</strong></h2>
                    <p><strong>Resident:</strong> {address}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Label:</strong> {label}</p>
                </div>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="footer">
                <p><a href={facebook}>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜</a></p>
                <p><a href={instagram}>𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞</a></p>
            </div>
        </div>
    );
};

export default DjCards;
