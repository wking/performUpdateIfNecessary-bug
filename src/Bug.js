import React, { Component } from 'react';

var calls = {};

class Bug extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var _this = this;
    this.props.slugs.map(function getNode(key) {
      _this.setState(function (prevState) {
        if (calls[key]) {
          throw new Error('duplicate call for ' + key);
        }
        calls[key] = true;
        Promise.resolve().then(function () {
          _this.setState(function (prevState) {
            return prevState;
          });
        });
        return prevState;
      });
    });
  }

  render() {
    return <p>Bug</p>
  }
}

export default Bug;
