import React, { PureComponent } from 'react';
import { Wrapper, Title } from './ui';

export default class Column extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Title>{this.props.title || '(Untitled)'}</Title>
        {this.props.children}
      </Wrapper>
    );
  }
}
