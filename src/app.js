import express from 'express';
import morgan from 'morgan';

const app = express();

//imports de routes
import usersRoutes from './routes/users.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import authRoutes from './routes/auth.routes.js';
import { authenticateToken } from './middlewares/authenticate.middleware.js';


//Midlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/PamelaLoayza/users', usersRoutes);
app.use('/PamelaLoayza/tasks', authenticateToken, tasksRoutes);
app.use('/PamelaLoayza/login', authRoutes);


export default app;
