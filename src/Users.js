import React, { Component } from 'react';
import axios from 'axios';
import { Container, Table, Row } from 'react-bootstrap';
import Pager from './Pager';
import Search from './Search';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      count: 0
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.index !== prevProps.match.params.index) {
      this.fetchUsers();
    }
  }

  // setLocalState = () => {};

  fetchUsers = () => {
    const index = this.props.match.params.index || 0;
    // console.log('index in fetchUsers', index);
    // console.log('props in fetchUsers', this.props);
    return axios
      .get(`https://acme-users-api.herokuapp.com/api/users/${index}`)
      .then(response => response.data)
      .then(({ count, users }) => this.setState({ count, users }))
      .catch(e => console.log(e));
  };

  render() {
    const users = this.state.users;
    const count = this.state.count;
    const index = 1 * this.props.match.params.index || 0;
    return (
      <Container>
        <Row>
          {count} total users
          <Pager index={index} count={count} />
          <Search />
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
