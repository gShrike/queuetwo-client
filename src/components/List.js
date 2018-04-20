import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => {
          return <li>{item.question}</li>;
        })}
      </ul>
    );
  }
}

List.defaultProps = { items: [] };

export default List;
