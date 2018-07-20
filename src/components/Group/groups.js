import React, { Component } from 'react';

import { GroupsList } from './groupsList';
import { Knockout } from './knockout';

export class Groups extends Component {
  render() {
    return (
      <div className="group-main-container">
        <GroupsList />
        <Knockout />
      </div>
    );
  }
}