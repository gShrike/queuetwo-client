import React, { Component } from 'react';
import moment from 'moment';

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => {
          return (
            <li key={item._id}>
              {item.question}
              <small>{moment(item.createdAt).fromNow()}</small>
            </li>
          );
        })}
      </ul>
    );
  }
}

List.defaultProps = { items: [] };

export default List;
