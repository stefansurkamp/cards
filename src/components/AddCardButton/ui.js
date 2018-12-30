import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  right: 35px;
  bottom: 25px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #a421a8;
  color: white;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  line-height: 48px;
  user-select: none;
  box-shadow: 2px 2px #282c3466;

  :hover {
    transition: all 0.25s ease-out;
    box-shadow: 2px 2px #282c3422;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
