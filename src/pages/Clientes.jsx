import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Generate Order Data
function createData(id, name, direction, state) {
  return { id, name, direction, state };
}

const rows = [
  createData(
    0,
    'Elvis Presley',
    'Calle 55 #27-13',
    'Activo',
  ),
  createData(
    1,
    'Paul McCartney',
    'Calle 55 #27-13',
    'Activo',
  ),
  createData(
    2,
    'Tom Scholz',
    'Calle 55 #27-13',
    'Activo',
  ),
  createData(
    3,
    'Michael Jackson',
    'Calle 55 #27-13',
    'Activo',
  ),
  createData(
    4,
    'Bruce Springsteen',
    'Calle 55 #27-13',
    'Activo',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

function Clientes(props) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <React.Fragment>
              <Title>Clientes</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Nit</TableCell>
                    <TableCell>Razon Social</TableCell>
                    <TableCell>Dirección</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.direction}</TableCell>
                      <TableCell>{row.state}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                Ver más
              </Link>
            </React.Fragment>
          </Paper>
        </Grid>
      </Grid>

    </Container>

  );
}

export default Clientes;