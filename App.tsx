import React, { useState } from 'react';

import Layout from '../src/layout';

//import { Container } from './styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { Container, Grid, Card, CardHeader, CardContent, Divider } from '@mui/material';
import ModalCard from './components/ModalCard';

function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Layout>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Dashboard" />
                <Divider />
                <CardContent>
                  <h1>Modal Example</h1>
                  <br />
                  <Button variant="outlined" onClick={handleOpen}>
                    Open modal
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Layout>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalCard size="md">
          <h1>dsadasda</h1>
        </ModalCard>
      </Modal>
    </>
  );
}


export default App;
