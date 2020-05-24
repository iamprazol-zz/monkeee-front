import React, { Component } from 'react';

class ClubCards extends Component {
    constructor (props) {
        super(props);

        this.state = {
            showGallery: true,
            galleries: []
        };

        this.displayGallery = this.displayGallery.bind(this);
    }

    componentDidMount () {
        fetch(`http://monkeee.com/api/clubbyid/${this.props.oneurl}`)
            .then(results => {
                return results.json();
            }).then(data => {
                let galleries = data.data.gallery.original.data.map((gallery, i) => {
                    return (
                        <div className="club-gallery" key={i}>
                            {
                                gallery.picture.map((picture, i) => {
                                    return (
                                        <img key={i} src={picture} alt="Gallery" />
                                    );
                                })
                            }
                        </div>
                    );
                });
                this.setState({ galleries: galleries });
            });
    }

    displayGallery () {
        this.setState({
            showGallery: !this.state.showGallery
        });
    }
    render () {
        const { name, imgsrc, description, suburb, address, opening, email, phone, facebook, instagram } = this.props;
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
                        <p><strong>Suburb :</strong> {suburb}</p>
                        <p><strong>Email :</strong> {email}</p>
                        <p><strong>Phone :</strong> {phone}</p>
                        <p><strong>Open : </strong> {opening}</p>
                    </div>
                    <div className="item-header">
                        <p>Gallery</p>
                    </div>
                    {this.state.galleries}
                </div>
                <div className="popup-footer">
                    <p><a href={facebook}>𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜</a></p>
                    <p><a href={instagram}>𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞</a></p>
                </div>
            </div>
        );
    }
}

export default ClubCards;

