import React from 'react';

const EventCards = props => {
    const { name, imgsrc, description, opening, opening_date, closing, closing_date, price, ticketLink, facebook, instagram, views } = props; return (
        <div className="popup-card">
            <div className="popup-main">
                <div className="popup-header">
                    <h5 className="popup-title align-center display-5">{name}</h5>
                </div>
                <div className="popup-image-holder">
                    <img src={imgsrc} alt="Event" />
                </div>
                <div className="item-header">
                    <p>Details</p>
                </div>
                <div className="popup-description">
                    <p>{description}</p>
                </div>
                <div className="popup-details">
                    <p><strong>Opening Date:</strong> {opening_date} at {opening}</p>
                    <p><strong>Closing Time:</strong> {closing_date} at {closing}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Event Views:</strong> {views}</p>
                </div>
            </div>
            <div className="popup-footer">
                <p><a href={ticketLink}>Ticket</a></p>
                <p><a href={facebook}>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜</a></p>
                <p><a href={instagram}>𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞</a></p>
            </div>
        </div>
    );
};

export default EventCards;
