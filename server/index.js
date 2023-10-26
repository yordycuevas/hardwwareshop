import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes  from './routes/index.routes.js';
import clientesRoutes from './routes/clientes.routes.js';
import empleadosRoutes from './routes/empleados.routes.js';

const app = express();

app.use(express.json());

app.use(cors());
app.use(indexRoutes);
app.use(clientesRoutes);
app.use(empleadosRoutes);
app.listen(PORT)
console.log(`Server listening on port ${PORT}`);