import React from 'react';

import Header from './components/Header';
import Aside from './components/Aside';
import Content from './components/Content';

import { Grid } from './layout-styles';

const Layout: React.FC = ({children}) => {

  return(
    <Grid>
      <Header />
      <Aside />
      <Content>
        {children}
      </Content>
    </Grid>
  );
}

export default Layout;