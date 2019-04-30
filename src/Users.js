import React, { Component } from 'react';
import axios from 'axios';
import { Container, Table, Row, Col } from 'react-bootstrap';
import Pager from './Pager';
import Search from './Search';
import Hilite from './Hilite';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      count: 0,
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.props.match.params.searchTerm ? this.search() : this.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    const index = this.props.match.params.index;
    const searchTerm = this.state.searchTerm;
    const prevIndex = prevProps.match.params.index;

    if (
      !searchTerm &&
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      this.fetchUsers();
    }

    if (searchTerm && index !== prevIndex) {
      this.search();
    }
  }

  handleChange = ({ target }) => {
    const term = target.value;
    this.setState({ searchTerm: term });
  };

  handleClear = () => {
    this.setState({ searchTerm: '' });
    this.fetchUsers();
  };

  fetchUsers = () => {
    const index = this.props.match.params.index || 0;
    return axios
      .get(`https://acme-users-api-rev.herokuapp.com/api/users/${index}`)
      .then(response => response.data)
      .then(({ count, users }) => this.setState({ count, users }))
      .catch(e => console.log(e));
  };

  search = () => {
    const searchTerm = this.state.searchTerm;
    const index = this.props.match.params.index || 0;
    return axios
      .get(
        `https://acme-users-api-rev.herokuapp.com/api/users/search/${searchTerm}/${index}`
      )
      .then(response => response.data)
      .then(({ count, users }) => this.setState({ count, users }))
      .catch(e => console.log(e));
  };

  render() {
    const { users, count, searchTerm } = this.state;
    const index = 1 * this.props.match.params.index || 1;
    const currentSearch = this.props.match.params.searchTerm;
    return (
      <Container>
        <Row className="mt-3">
          <Col>{count} total users</Col>
          <Col>
            <Pager index={index} count={count} />
          </Col>
          <Col>
            <Search
              search={this.search}
              change={this.handleChange}
              clear={this.handleClear}
              searchTerm={searchTerm}
              history={this.props.history}
            />
          </Col>
        </Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Tile</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr key={user.id}>
                  <td>
                    <Hilite
                      searchTerm={currentSearch}
                      input={user.firstName.toUpperCase()}
                    />
                  </td>
                  <td>
                    <Hilite
                      searchTerm={currentSearch}
                      input={user.middleName.toUpperCase()}
                    />
                  </td>
                  <td>
                    <Hilite
                      searchTerm={currentSearch}
                      input={user.lastName.toUpperCase()}
                    />
                  </td>
                  <td>
                    <Hilite
                      // searchTerm={currentSearch}
                      input={user.title.toUpperCase()}
                    />
                  </td>
                  <td>
                    <Hilite
                      searchTerm={currentSearch}
                      input={user.email.toUpperCase()}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Users;
