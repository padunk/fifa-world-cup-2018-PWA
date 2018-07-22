import React, { Component } from 'react';

import { getGithubData } from '../utils/api';
// import { mock2 } from '../utils/mock2';
import { GroupCard } from './groupCard';
import { RadioTabs } from './radioTab';
import { addGroupProperties } from '../utils/helpers';

import './group.css';

export class GroupsList extends Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      groups: {},
    }

    this.getGroups = this.getGroups.bind(this);
  }

  componentDidMount() {
    // COMMENTED AND USE MOCK2.JS FROM UTILS
    this.getGroups();
    
    // const teams = addGroupProperties(mock2.teams);
    // this.setState({ teams });
  }

  // COMMENTED AND USE MOCK2.JS FROM UTILS
  getGroups() {
    getGithubData().then(data => {
      // add group properties in teams data.
      const teams = addGroupProperties(data.teams);
      const groups = data.groups;
      // console.log(teams);
      this.setState({ teams, groups });
    });    
  };

  render() {
    const { teams, groups, id, label } = this.state;

    return (
      <div className="main-group tab">
        <RadioTabs id='group-stage' labelName='Groups Stage' />
        {teams && <GroupCard teams={teams} groups={groups} /> }
      </div>
    );
  }
}
