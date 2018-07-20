import React, { Component } from 'react';

import { getGithubData } from '../utils/api';
// import { mock2 } from '../utils/mock2';
import { GroupCard } from './groupCard';
import { RadioTabs } from './radioTab';

import './group.css';

export class GroupsList extends Component {
  constructor() {
    super();

    this.state = {
      teams: [],
      groups: {},
      id: 'group-stage',
      label: 'Groups Stage',
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
        <RadioTabs id={id} labelName={label} />
        {teams && <GroupCard teams={teams} groups={groups} /> }
      </div>
    );
  }
}

function addGroupProperties(teams) {
  let groupName = 65; // ascii code for "A"

  for (let i = 0, n = teams.length; i < n; i++) {
    if (teams[i].id % 4 === 0) {
      teams[i].group = String.fromCharCode(groupName);
      groupName ++;
    } else {
      teams[i].group = String.fromCharCode(groupName);
    }
  }

  return teams;
}
