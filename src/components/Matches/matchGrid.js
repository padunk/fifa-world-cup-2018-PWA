import React, { Component } from 'react';
import Modal from 'react-modal';

import './matches.css';

export class MatchGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      img_src: "",
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    this.setState({ modalIsOpen: true, img_src: e });
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    document.body.style.overflow = 'auto';
  }

  render() {
    const { matches } = this.props;

    return (
      <React.Fragment>
      {matches.map((match, idx) => {
        let localTime = new Date(match.start_time.slice(0, match.start_time.length-6));
        let yourTime = new Date(match.start_time);

        return (
          <div key = {idx} className="matches-card">
            <div className="matches-card-title">
              <h3>Group {match.group.toUpperCase()}</h3>
            </div>

            <div className="matches-card-body">
              <div className="matches-card-info">
                <p>Local Time: {`${localTime.toDateString()}, ${match.start_time.slice(11, 16)}`}</p>
                <p>Your Time: <span style={{ color: 'blue'}}>{`${yourTime.toDateString()}, ${yourTime.toTimeString().slice(0, 5)}`}</span></p>
                <div className="matches-card-info-image-div">
                  <img src={match.stadium_image} alt={match.stadium} onClick={this.openModal.bind(this, match.stadium_image)} className="stadium-modal" />
                  <p className="matches-card-info-bottom-right">{match.stadium}</p>
                </div>
                <p>{match.location}</p>
              </div>

              <div className="matches-card-teams">
                <span className="matches-card-team-name-home">{match.home_team.name.full}</span>
                <img src = {match.home_team.name.flag} alt = {match.home_team.name.full} className="match-country-flag" />
                <span className="matches-card-team-vs"> VS </span>
                <img src = {match.visitant_team.name.flag} alt = {match.visitant_team.name.full} className="match-country-flag" />
                <span className="matches-card-team-name-visitant">{match.visitant_team.name.full}</span>
              </div>

            </div>
          </div>
        );
      })}
      {/*Modal*/}
      <Modal
        className="modal"
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Stadium Image"
      >
        <div className="modal-image">
          <img src={this.state.img_src} alt="stadium" className="modal-image-stadium" />
          <button onClick={this.closeModal} className="modal-button-close">Close</button>
        </div>
      </Modal>
      </React.Fragment>
    );
  }
}
