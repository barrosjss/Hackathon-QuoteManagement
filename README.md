# Quote management system

## Database

Database created with [Firebase](https://firebase.google.com/docs/database?hl=es-419), a non-relational database based on the tables requested to display in the forntend, these are:

| Pedido  | Cliente | Producto |
| ------------- | ------------- | ------------- |
| id_cliente  | nit  | id  |
| fecha  | razon_social  | nombre  |
| producto  | direccion  | unidad  |
| cantidad  | estado  | precio  |

## Development setup

To test the project, just clone and execute the following commands in the console.

```sh
npm install
npm run dev
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
