import React, { Component } from 'react';
import ButtonMD from '../buttons/button-md';

export default class FooterButton extends Component {
  render() {
    const {
      style, name, onClick, ...otherProps
    } = this.props;
    return (
      <div
        style={{
          position: 'absolute',
          top: '524px',
          alignSelf: 'center',
          justifyContent: 'center',
          width: '100%',
          display: 'flex',
          ...style,
        }}
        {...otherProps}
      >
        <ButtonMD onClick={onClick}>{name}</ButtonMD>
      </div>
    );
  }
}
