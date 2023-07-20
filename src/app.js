console.log('hello world');
import express from 'express';
import indexRoutes from './routes/index.routes.js';
import empleadosRoutes from './routes/empleados.routes.js'
import {PORT} from'./config.js'



const app =  express()
app.use(express.json());
app.use('/api',empleadosRoutes)
app.use(indexRoutes);


app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;