import express from 'express';

import rutas_leishmania from './routes/rutas_leishmania.js';
import rutas_index from './routes/rutas_index.js';
import {PORT} from './config.js';

const app=express();

app.use(rutas_index);
app.use('/api',rutas_leishmania);

app.use((req,res,next)=>{
    res.status(404).json({
        mensaje:'ruta no existe en este servidor'
    })
})

export default app;