import React, { Component } from 'react';

class Hilite extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const input = this.props.input;
    const searchTerm = this.props.searchTerm;

    if (searchTerm) {
      // const inputSplit = this.props.input
      //   .split(' ')
      //   .join(',')
      //   .split('.')
      //   .join(',')
      //   .split(',');

      let inputSplit = input.split(searchTerm);

      // console.log('props in Hilite render', this.props);
      // console.log('inputSplit', inputSplit);

      const match = inputSplit.filter(word => word === searchTerm);

      return inputSplit.forEach(text => {
        return <span className="bg-warning">{text}</span>;
      });
    }

    return input;
  }
}

export default Hilite;
