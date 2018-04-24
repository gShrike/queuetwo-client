import React, { Component } from 'react';

class Form extends Component {
  onSubmit = event => {
    event.preventDefault();
    const formdata = new FormData(this.refs.form);
    const question = {
      question: formdata.get('question')
    };
    this.props.onSubmit(question);
    this.refs.form.reset();
  };
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <label htmlFor="question">Question</label>
        <input name="question" type="text" />
        <button type="submit">Submit!</button>
      </form>
    );
  }
}

Form.defaultProps = {
  items: [],
  onSubmit() {}
};

export default Form;
