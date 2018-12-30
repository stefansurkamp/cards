import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';

const emptyStyle = `color: gray; font-style: italic;`;

const wrapperStyles = {
  s: css`
    width: 100px;
    height: 150px;
    font-size: 9px;
    padding: 5px;
    border-radius: 7px;
  `,
  m: css`
    width: 200px;
    height: 300px;
    font-size: 12px;
    padding: 10px;
    border-radius: 10px;
  `
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  ${({ size }) => wrapperStyles[size] || wrapperStyles['m']};
  margin: 20px;
  box-shadow: 4px 4px #282c3466;
  border: 0.1px solid #282c34;
  transition: all 0.25s ease-out;

  :hover {
    transition: all 0.25s ease-out;
    box-shadow: 2px 2px #282c3422;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const titleBarStyles = {
  s: css`
    height: 16px;
    margin-bottom: 5px;
  `,
  m: css`
    height: 19px;
    margin-bottom: 10px;
  `
};

const titleStyles = {
  s: css`
    font-size: 13px;
  `,
  m: css`
    font-size: 16px;
  `
};

export const TitleBar = styled.div`
  display: flex;
  ${({ size }) => titleBarStyles[size] || titleBarStyles['m']};
  justify-content: space-around;
`;

export const Title = styled.div`
  height: 100%;
  flex: 1;
  ${({ size }) => titleStyles[size] || titleStyles['m']};
  text-align: center;
  transition: all 0.25s ease-out;
  ${ellipsis()};
  ${({ isEmpty }) => isEmpty && emptyStyle}
`;

export const DragHandle = styled.div`
  flex: 0 0 20px;
  background-color: #add8e655;
  cursor: move;
  font-size: 15px;
  text-align: center;
  border-radius: 5px;
  margin-left: 5px;

  :hover {
    background-color: #add8e688;
  }
`;

const imageStyles = {
  s: css`
    min-height: 50px;
    margin-bottom: 5px;
  `,
  m: css`
    min-height: 100px;
    margin-bottom: 10px;
  `
};

export const Image = styled.div`
  width: 100%;
  height: auto;
  ${({ size }) => imageStyles[size] || imageStyles['m']};
  transition: all 0.25s ease-out;
`;

export const Description = styled.div`
  flex: 1;
  overflow: hidden;
  ${({ isEmpty }) => isEmpty && emptyStyle}
`;
