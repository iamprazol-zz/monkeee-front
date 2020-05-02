import React from 'react';

const EventCards = props => {
    const { imgsrc, description, address, opening, closing, price, ticketLink, facebook, instagram } = props;
    return (
        <div className="card">
            <div className="image-holder">
                <img src={imgsrc} alt="Event" />
            </div>
            <div className="description">
                <p>{description}</p>
                <div className="details">
                    <p><strong>Address:</strong> {address}</p>
                    <p><strong>Opening Time:</strong> {opening} | <strong>Closing Time:</strong> {closing}</p>
                    <p><strong>Price:</strong> {price} | <strong>Ticket Link:</strong> <a href={ticketLink}>{ticketLink}</a></p>
                    <p><strong>Facebook:</strong> <a href={facebook}>{facebook}</a></p>
                    <p><strong>Instagram:</strong> <a href={instagram}>{instagram}</a></p>
                </div>
            </div>
        </div>
    );
};

export default EventCards;
