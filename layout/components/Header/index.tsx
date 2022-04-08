import Switch from '@mui/material/Switch';
import React from 'react';

import { useTheme } from '../../../hooks/theme';

import { Container } from './styles';

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  
  return (
    <Container>
      <main>
        <aside>
          <Switch
            onChange={toggleTheme}
            name="loading"
            color="primary"
            checked={theme === 'dark' && true}
          />
        </aside>
        <div>2222</div>
        <div>3333</div>
      </main>
    </Container>
  );
}

export default Header;