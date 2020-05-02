import React from 'react';

const DjCards = props => {
    const { name, imgsrc, description, address, email, phone, label, category, facebook, instagram } = props;
    return (
        <div className="card">
            <div className="image-holder">
                <img src={imgsrc} alt="Event" />
            </div>
            <div className="title">
                <h2><strong>{name}</strong></h2>
            </div>
            <div className="description">
                <p>{description}</p>
                <div className="details">
                    <p><strong>Resident:</strong> {address}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone} | <strong>Category:</strong> {category}</p>
                    <p><strong>Label:</strong> {label}</p>
                    <p><strong>Facebook:</strong> <a href={facebook}>{facebook}</a></p>
                    <p><strong>Instagram:</strong> <a href={instagram}>{instagram}</a></p>
                </div>
            </div>
        </div>
    );
};

export default DjCards;
