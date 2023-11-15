import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Title from '../components/Title';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function NuevoPedido(props) {
  const [state, setState] = React.useState('');
  const [lista, setLista] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const ChangeList = (event) => {
    setLista(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <React.Fragment>
              <Title >Cotización</Title>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="nit"
                    name="nit"
                    label="Nit"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="razonsocial"
                    name="razonsocial"
                    label="Razon Social"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="direction"
                    name="direction"
                    label="Dirección"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">Estado</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={state}
                      onChange={handleChange}
                      label="Estado"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Activo</MenuItem>
                      <MenuItem value={20}>Inactivo</MenuItem>
                      <MenuItem value={30}>Pendiente</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="product"
                    name="product"
                    label="Producto"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="cantidad"
                    name="cantidad"
                    label="Cantidad"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">Lista</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={lista}
                      onChange={ChangeList}
                      label="Lista"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Lista 1</MenuItem>
                      <MenuItem value={20}>Lista 2</MenuItem>
                      <MenuItem value={30}>Lista 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Link to="/pedidos" style={{ textDecoration: 'none', color: "black" }}>
                    <Button variant="contained" endIcon={<SendIcon />}>
                      Send
                    </Button>
                  </ Link>
                </Grid>
              </Grid>
            </React.Fragment>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NuevoPedido;