import React from 'react';

const ClubCards = props => {
    const { name, imgsrc, description, suburb, address, email, phone, open, order, facebook, instagram } = props;
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
                    <p><strong>Suburb:</strong> {suburb}</p>
                    <p><strong>Address:</strong> {address}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Order:</strong> {order} | <strong>Phone:</strong> {phone}</p>
                    <p><strong>Open:</strong> {open}</p>
                    <p><strong>Facebook:</strong> <a href={facebook}>{facebook}</a></p>
                    <p><strong>Instagram:</strong> <a href={instagram}>{instagram}</a></p>
                </div>
            </div>
        </div>
    );
};

export default ClubCards;
