/*
  .add 11-Mar-20
*/

import styled from 'styled-components';

const DetailHeader = styled.div`
  background: #69d4ff;
  background: ${props => props.background};
  width: 50%;
  height: 50px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export default DetailHeader;
