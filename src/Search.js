import React, { Component, Fragment } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class Search extends Component {
  render() {
    const { clear, change, searchTerm } = this.props;
    return (
      <Fragment>
        <Form inline>
          <FormControl
            size="sm"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={change}
            value={searchTerm}
          />
          <Button
            variant="outline-secondary"
            size="sm"
            type="button"
            onClick={() => {
              this.props.history.push(
                `/users/search/${searchTerm.toUpperCase()}`
              );
            }}
          >
            Search
          </Button>
          <Button
            variant="outline-secondary"
            size="sm"
            type="button"
            onClick={clear}
          >
            Clear
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default Search;
