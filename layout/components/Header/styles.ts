import styled from 'styled-components';
import { MENU_WIDTH } from '../../layout-styles';

export const Container = styled.header`
  position: relative;
  grid-area: 1 / 2 / 2 / 3;
  width: 100%; 
  height: auto; 
  background: ${props => props.theme.sidebar.background};
  border-bottom: 1px solid ${props => props.theme.sidebar.dividerBg};
  padding: 1rem;

  > main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    color: #fff;

    > aside {
      background: purple;
      display: flex;
      justify-content: center;
      width: ${MENU_WIDTH};
    }
  }
`;