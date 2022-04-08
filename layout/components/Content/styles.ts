import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  grid-area: 2 / 2 / 2 / 2;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: ${props => props.theme.palette.background.default};
  border-top: 1px solid #adafca20;
  border-left: 1px solid #adafca20;
`;
