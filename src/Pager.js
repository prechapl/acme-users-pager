import React, { Component, Fragment } from 'react';
import { Badge, Button, ButtonGroup } from 'react-bootstrap';

class Pager extends Component {
  render() {
    const { index, count } = this.props;
    const lastPage = Math.ceil(count / 50);
    return (
      <Fragment>
        <ButtonGroup aria-label="pager buttons" size="sm">
          <Button variant="secondary" size="sm" href="/#/users">
            First
          </Button>
          <Button variant="secondary" size="sm" href={`/#/users/${index - 1}`}>
            Prev
          </Button>
          <Button variant="secondary">
            <Badge variant="secondary">{index}</Badge>
          </Button>
          <Button variant="secondary" size="sm" href={`/#/users/${index + 1}`}>
            Next
          </Button>
          <Button
            variant="secondary"
            size="sm"
            href={`/#/users/${lastPage - 1}`}
          >
            Last
          </Button>
        </ButtonGroup>
      </Fragment>
    );
  }
}

export default Pager;
