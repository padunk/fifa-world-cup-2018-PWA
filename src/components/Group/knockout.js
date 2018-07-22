import React, { Component } from 'react';

import {RadioTabs} from './radioTab';
import {getKnockoutData} from '../utils/api';
import { alter } from '../utils/helpers';

export class Knockout extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            round: 'round_16'
        }
    }

    componentDidMount() {
        this.getData(this.state.round);
    }

    getData = (round) => {
        getKnockoutData(round).then(data=> {
            this.setState({ data });
        })
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ round: e.target.value }, () => this.getData(this.state.round));
    }

    render() {
        const { data } = this.state;
        return (
            <div className='tab'>
                <RadioTabs
                    id='knockout-stage'
                    labelName='Knockout Stage'
                />
                <div className='content'>
                    <select className="knockout-select" onChange={this.handleChange}>
                        <option disabled='true'>Select Round</option>
                        <option value='round_16'>Round of 16</option>
                        <option value='round_8'>Round of 8</option>
                        <option value='round_4'>Semi Finals</option>
                        <option value='round_2_loser'>Third Place</option>
                        <option value='round_2'>Finals</option>
                    </select>
                    {data && data.map(match => {
                        let localTime = new Date(match.date.slice(0, match.date.length-6));
                        let yourTime = new Date(match.date);

                        return (
                        <div key = {match.name} className="matches-card">
                            <div className="matches-card-title">
                            <h3>{alter(this.state.round)}</h3>
                            </div>

                            <div className="matches-card-body">
                            <div className="matches-card-info">
                                <p>Local Time: {`${localTime.toDateString()}, ${match.date.slice(11, 16)}`}</p>
                                <p>Your Time: <span style={{ color: 'blue'}}>{`${yourTime.toDateString()}, ${yourTime.toTimeString().slice(0, 5)}`}</span></p>
                                <div className="matches-card-info-image-div">
                                <img src={match.stadium[0].image} alt={match.stadium[0].name} className="stadium-modal" />
                                <p className="matches-card-info-bottom-right">{match.stadium[0].name}</p>
                                </div>
                                <p>{match.stadium[0].city}</p>
                            </div>

                            <div className="matches-card-teams">
                                <span className="matches-card-team-name-home">{match.home_team[0].name}</span>
                                <img src = {match.home_team[0].flag} alt = {match.home_team[0].name} className="match-country-flag" />
                                <span className="matches-result">{match.home_result}</span>
                                <span className="matches-card-team-vs"> VS </span>
                                <span className="matches-result">{match.away_result}</span>
                                <img src = {match.away_team[0].flag} alt = {match.away_team[0].name} className="match-country-flag" />
                                <span className="matches-card-team-name-visitant">{match.away_team[0].name}</span>
                                {match.away_penalty !== null
                                    ? <div className="matches-card-penalty">
                                            <span>Penalty Shootout</span>
                                            <div className="matches-card-penalty-result">
                                                <span>{match.home_penalty}</span>
                                                <span> - </span>
                                                <span>{match.away_penalty}</span>
                                            </div>
                                        </div>
                                    : null }
                            </div>

                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    
}
