import React, { Component } from "react";
import axios from "axios";
import { Container, Table, Row, Col } from "react-bootstrap";
import Pager from "./Pager";
import Search from "./Search";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      count: 0,
      search: ""
    };
  }

  componentDidMount() {
    console.log("in users", this.props.match.params);
    this.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.index !== prevProps.match.params.index) {
      this.fetchUsers();
    }
  }

  handleChange = ({ target }) => {
    const searchTerm = target.value;
    this.setState({ search: searchTerm });
  };

  handleClear = () => {
    this.setState({ search: "" });
  };

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
    const { users, count, search } = this.state;
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
              searchTerm={search}
              change={this.handleChange}
              clear={this.handleClear}
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
