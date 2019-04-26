import React, { Component } from 'react';
import axios from 'axios';
import { Container, Table, Row, Col } from 'react-bootstrap';
import Pager from './Pager';
import Search from './Search';

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
    // console.log('prevProps in Users CDU', prevProps);
    // console.log('props in Users CDU', this.props);
    const index = this.props.match.params.index;
    const searchTerm = this.props.match.params.searchTerm;
    const prevIndex = prevProps.match.params.index;
    // const prevTerm = prevProps.match.params.searchTerm;
    console.log('searchTerm', searchTerm);
    console.log('index', index);
    console.log('prevIndex', prevIndex);
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
    console.log('fetch fired!');
    const index = this.props.match.params.index || 0;
    return axios
      .get(`https://acme-users-api.herokuapp.com/api/users/${index}`)
      .then(response => response.data)
      .then(({ count, users }) => this.setState({ count, users }))
      .catch(e => console.log(e));
  };

  search = () => {
    console.log('search fired!');
    const searchTerm = this.state.searchTerm;
    const index = this.props.match.params.index || 0;
    return axios
      .get(
        `https://acme-users-api.herokuapp.com/api/users/search/${searchTerm}/${index}`
      )
      .then(response => response.data)
      .then(({ count, users }) => this.setState({ count, users }))
      .catch(e => console.log(e));
  };

  render() {
    // console.log('in Users render', this.props);
    const searchTerm = this.state.searchTerm;
    const { users, count } = this.state;
    const index = 1 * this.props.match.params.index || 1;
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
                  <td>{user.firstName} </td>
                  <td>{user.middleName} </td>
                  <td>{user.lastName} </td>
                  <td>{user.title} </td>
                  <td>{user.email} </td>
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
