import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pager from './Pager';
import Search from './Search';

class Users extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Pager />
        <Search />
      </Fragment>
    );
  }
}

export default Users;
