import React from 'react';

const EventCards = props => {
    const { imgsrc, description, address, opening, closing, price, ticketLink, facebook, instagram } = props;
    return (
        <div className="card">
            <div className="main">
                <div className="image-holder">
                    <img src={imgsrc} alt="Event" />
                </div>
                <div className="details">
                    <p><strong>Address:</strong> {address}</p>
                    <p><strong>Opening Time:</strong> {opening}</p>
                    <p><strong>Closing Time:</strong> {closing}</p>
                    <p><strong>Price:</strong> {price}</p>
                </div>
            </div>
            <div className="description">
                <p className="desp">{description}</p>
            </div>
            <div className="footer">
                <p><a href={ticketLink}>𝕋𝕚𝕔𝕜𝕖𝕥</a></p>
                <p><a href={facebook}>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜</a></p>
                <p><a href={instagram}>𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞</a></p>
            </div>
        </div>
    );
};

export default EventCards;
