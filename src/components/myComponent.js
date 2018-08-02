import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}



class MyComponent extends Component {
  render() {
   const { title, name, onClick } = this.props;
    return (
      <div className="component">
        <h1>
          Title {title } 
          <br/>
          Name {name } 
        </h1>
        <div onClick={onClick}> click Me</div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;

export default MyComponent;
