import React, { Component } from 'react';

class Hilite extends Component {
  render() {
    const input = this.props.input;
    const searchTerm = this.props.searchTerm;

    if (input && !searchTerm) return input;

    if (input && searchTerm) {
      let inputSplit = input.toUpperCase().split(' ');
      const match = inputSplit.filter(word => word === searchTerm);

      return inputSplit.map(text => {
        return match.length ? (
          <span className="bg-warning">{match[0]}</span>
        ) : (
          <span>{text}</span>
        );
      });
    }
  }
}
export default Hilite;
