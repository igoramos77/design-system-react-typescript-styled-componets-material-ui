import styled from 'styled-components';

import { MENU_WIDTH } from '../../layout-styles';

export const Container = styled.aside`
  position: relative;
  grid-area: 2 / 1 / 2 / 1;
  width: ${MENU_WIDTH}; 
  height: auto; 
  background: ${props => props.theme.sidebar.background};

  .menu-icons {
    width: 28px;
    height: 28px;
  }

  > main {
    padding: 1rem;

    > ul {
      list-style: none;

      > li {

        > a {
          
        }
      }
    }
  }
`;
