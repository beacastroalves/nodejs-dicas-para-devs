import React from 'react';

class TestClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello world!",
    };
  };

  componentDidMount() {
    console.log("É EXECUTADO QUANTO O USUÁRIO ACESSA PELA PRIMEIRA VEZ");
  };

  render() {
    return <h1>{this.state.message}</h1>;
  };
};

export default TestClassComponent;
