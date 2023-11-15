import * as React from 'react';
import Container from '@mui/material/Container';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Footer sx={{ pt: 4 }} />
      </Container>
    </>
  );
}