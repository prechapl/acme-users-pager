import React, { Component, Fragment } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class Search extends Component {
  render() {
    console.log("in search", this.props);
    return (
      <Fragment>
        <Form inline>
          <FormControl
            size="sm"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-info" size="sm" onClick={}>
            Search
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default Search;
