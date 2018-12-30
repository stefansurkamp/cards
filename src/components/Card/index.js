import React, { PureComponent } from 'react';
import { Wrapper, TitleBar, Title, DragHandle, Description } from './ui';

export default class Card extends PureComponent {
  handleDragHandleClick = e => {
    e.stopPropagation();
    alert('handle drag');
  };

  handleCardClick = () => {
    console.log('noice');
  };

  render() {
    const { size, title, children } = this.props;
    return (
      <Wrapper size={size} onClick={this.handleCardClick}>
        <TitleBar>
          <Title isEmpty={!title} size={size}>
            {title || '(No title)'}
          </Title>
          <DragHandle onClick={this.handleDragHandleClick}>⠿</DragHandle>
        </TitleBar>
        {/* <Image size={size}>asdadas</Image> */}
        <Description isEmpty={!children}>{children || '(Empty)'}</Description>
      </Wrapper>
    );
  }
}
