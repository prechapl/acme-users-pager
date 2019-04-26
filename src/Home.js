import React, { Component, Fragment } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron fluid>
          <Container>
            <h1>ACME USERS</h1>
            <hr />
            <p> by Preston </p>
            <hr />
            <img src="http://i65.tinypic.com/hvrxgp.jpg" alt="...Loading" />
          </Container>
        </Jumbotron>
      </Fragment>
    );
  }
}

export default Home;
