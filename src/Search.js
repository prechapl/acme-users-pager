import React, { Component, Fragment } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class Search extends Component {
  render() {
    return (
      <Fragment>
        <Form inline>
          <FormControl
            size="sm"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-info" size="sm">
            Search
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default Search;
