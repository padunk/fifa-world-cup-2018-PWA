import React, { Component } from 'react';

// import { mock_data } from '../utils/mock';
import { getMatches } from '../utils/api';
import { SelectGroup } from './selectGroup';
import { MatchGrid } from './matchGrid';

import './matches.css';

export class Matches extends Component {
  constructor() {
    super();

    this.state = {
      matches: [],
      selectedGroup: 'all',
    }

    this.updateSortByGroup = this.updateSortByGroup.bind(this);
  }

  componentDidMount() {
    this.updateSortByGroup(this.state.selectedGroup);
  }

  updateSortByGroup(newGroup) {
    this.setState(() => ({
      selectedGroup: newGroup
    }));

    // Uncomment below to use real data
    getMatches(newGroup).then(matches => this.setState({ matches }));
    
    // USED MOCK DATA & Uncomment this section
    // if (newGroup === 'all') {
    //   this.setState({ matches: mock_data })
    // } else {
    //   const matches = mock_data.filter(data => data.group.slice(-1) === newGroup);
    //   this.setState({ matches });
    // }
  }

  render() {
    const { matches, selectedGroup } = this.state;

    if (!matches) {
      return <div>LOADING...</div>;
    } else {
      return (
        <div className="matches-main" id="matches-page">
          <SelectGroup selectedGroup={selectedGroup} onClick={this.updateSortByGroup} />
          <MatchGrid matches={matches} />
          <div className="up-arrow-div">
            <a href="#matches-page" className="up-arrow">&uarr;</a>
          </div>
        </div>
      );
    }
  }
}