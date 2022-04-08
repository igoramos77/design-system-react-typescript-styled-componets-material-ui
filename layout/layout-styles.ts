
import styled from 'styled-components';

export const MENU_WIDTH ='290px';
export const HEADER_HEIGHT = '88px';

export const Grid = styled.section`
  position: relative;
  display: grid; 
  grid-template-columns: ${MENU_WIDTH} 1fr; 
  grid-template-rows: ${HEADER_HEIGHT} 1fr; 
  gap: 0px 0px; 
  width: 100%; 
  height: 100vh; 
`;
