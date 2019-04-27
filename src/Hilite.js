import React, { Component } from 'react';

// const Hilite = ({ input, match }) => {
//   const query = match.params.searchTerm;
//   const split = input.split(query);
//   return (
//     <td>
//       {split.length > 1
//         ? split.map((word, idx) => (
//             <span key={word}>
//               {word}
//               {idx !== split.length - 1 ? (
//                 <span className="bg-warning">{query}</span>
//               ) : (
//                 ''
//               )}
//             </span>
//           ))
//         : split[0]}
//     </td>
//   );
// };

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

      console.log('props in Hilite render', this.props);
      console.log('inputSplit', inputSplit);

      const match = inputSplit.filter(word => word === searchTerm);

      return inputSplit.forEach(text => {
        match.includes(text) ? (
          <span className="bg-warning">{text}</span>
        ) : null;
      });
    }
    return input;
  }
}

export default Hilite;
