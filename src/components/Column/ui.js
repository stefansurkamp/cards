import styled from 'styled-components';
import { ellipsis } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
  float: left;
  border: 3px solid #282c3422;
  border-radius: 15px;
  margin: 10px;
`;

export const Title = styled.div`
  width: 100%;
  color: rgba(250, 250, 250, 0.3);
  text-align: center;
  ${ellipsis()};
  font-size: 18px;
  margin-top: 15px;
`;
