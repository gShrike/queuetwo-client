import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch('http://localhost:3030/questions')
      .then(response => response.json())
      .then(response => {
        this.setState({ items: response.data });
      });
  }
  onQuestionSubmit = question => {
    return fetch('//localhost:3030/questions', {
      body: JSON.stringify(question),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
      .then(response => response.json())
      .then(item => {
        this.setState({ items: this.state.items.concat(item) });
      });
  };

  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <main>
        <Header />
        <List items={items} />
        <Form onSubmit={this.onQuestionSubmit} />
      </main>
    );
  }
}

export default App;
