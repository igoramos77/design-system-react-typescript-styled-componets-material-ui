import styled from 'styled-components';

import { MENU_WIDTH } from '../../layout-styles';

export const Container = styled.aside`
  position: relative;
  grid-area: 1 / 1 / 3 / 1;
  width: ${MENU_WIDTH}; 
  height: auto; 
  background: ${props => props.theme.sidebar.background};
  border-right: 1px solid ${props => props.theme.sidebar.dividerBg};

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
