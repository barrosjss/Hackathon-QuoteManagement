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
function createData(id, name, shipTo, amount) {
  return { id, name, shipTo, amount };
}

const rows = [
  createData(
    0,
    'Elvis Presley',
    25,
    312.44,
  ),
  createData(
    1,
    'Paul McCartney',
    25,
    866.99,
  ),
  createData(
    2,
    'Tom Scholz',
    25,
    100.81
  ),
  createData(
    3,
    'Michael Jackson',
    25,
    654.39,
  ),
  createData(
    4,
    'Bruce Springsteen',
    25,
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

function Productos(props) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <React.Fragment>
              <Title>Productos</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Unidad x (m)</TableCell>
                    <TableCell align="right">Precio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.shipTo}</TableCell>
                      <TableCell align="right">{`$${row.amount}`}</TableCell>
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

export default Productos;