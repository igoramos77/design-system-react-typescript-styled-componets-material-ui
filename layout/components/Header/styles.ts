import styled from 'styled-components';
import { MENU_WIDTH } from '../../layout-styles';

export const Container = styled.header`
  position: relative;
  grid-area: 1 / 1 / 2 / 3;
  width: 100%; 
  height: auto; 
  background: ${props => props.theme.sidebar.background};

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