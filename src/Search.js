import React, { Component, Fragment } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('in search', this.props);
    const { clear, change, search, searchTerm } = this.props;
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
              this.props.history.push(`/users/search/${searchTerm}`);
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
