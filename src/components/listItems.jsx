import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/pedidos" style={{ textDecoration: 'none', color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Pedidos" />
      </ListItemButton>
    </Link>
    <Link to="/clientes" style={{ textDecoration: 'none', color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItemButton>
    </Link>
    <Link to="/productos" style={{ textDecoration: 'none', color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Cerrar Sesión" />
    </ListItemButton>
  </React.Fragment>
);