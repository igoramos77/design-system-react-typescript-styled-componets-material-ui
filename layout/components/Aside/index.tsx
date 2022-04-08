import React from 'react';

import { Container } from './styles';

import Button from '@mui/material/Button';

const Aside: React.FC = () => {
  return (
    <Container>
      <main>
        <ul>
          <li>
            <Button 
              variant="contained"
              href="/dash"
              color="primary" 
            >
              Dashboard
            </Button>
          </li>
          <li>
            <Button 
              variant="text"
              href="/dash"
              color="primary" 
            >
              Dashboard
            </Button>
          </li>
          <li>
            <Button 
              variant="outlined"
              href="/dash"
              color="primary" 
            >
              Dashboard
            </Button>
          </li>
          <li>
            <Button 
              href="/dash"
              color="primary" 
            >
              Dashboard
            </Button>
          </li>
        </ul>
      </main>
    </Container>
  );
}

export default Aside;