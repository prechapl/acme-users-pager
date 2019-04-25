import React, { Component, Fragment } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class Pager extends Component {
  constructor(props) {
    super(props);
    console.log('props in Pager constructor', props);
  }

  render() {
    const { index, count } = this.props;
    const lastPage = Math.ceil(count / 50);
    // console.log('lastPage in Pager render', typeof lastPage);
    // console.log('in Pager render', this.props.match);
    console.log('index in pager', typeof index);
    return (
      <Fragment>
        <ButtonGroup aria-label="pager buttons" size="sm">
          <Button variant="secondary" size="sm" href="/users/0">
            First
          </Button>
          <Button variant="secondary" size="sm" href={`/#/users/${index - 1}`}>
            Prev
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
