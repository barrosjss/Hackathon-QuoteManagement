import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../components/Title';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

// Generate Order Data
function createData(id_cliente, date, producto, cantidad) {
  return { id_cliente, date, producto, cantidad };
}

const rows = [
  createData(
    0,
    '00/00/2023',
    'Tela Esmeril',
    2,
  ),
  createData(
    1,
    '00/00/2023',
    'Tela Esmeril',
    8,
  ),
  createData(
    2,
    '00/00/2023',
    'Tela Esmeril',
    1,
  ),
  createData(
    3,
    '00/00/2023',
    'Tela Esmeril',
    6,
  ),
  createData(
    4,
    '00/00/2023',
    'Tela Esmeril',
    2,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

function Pedidos(props) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Link to="/nuevo" style={{ textDecoration: 'none', color: "black" }}>
            <Button variant="contained" startIcon={<AddIcon />}>Nuevo pedido</Button>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <React.Fragment>
              <Title>Pedidos</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Id Cliente</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Producto</TableCell>
                    <TableCell>Cantidad</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id_cliente}>
                      <TableCell>{row.id_cliente}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.producto}</TableCell>
                      <TableCell>{row.cantidad}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </React.Fragment>
          </Paper>
        </Grid>
      </Grid>
    </Container>

  );
}

export default Pedidos;