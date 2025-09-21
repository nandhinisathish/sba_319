// Imports
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import globalErr from "./middlewares/globalErr.js";
import loggingMiddleware from "./middlewares/loggingMiddleware.js";
import zipRoutes from './routes/zipRoutes.js';
import db from './db/conn.js';

// Environment Set up
dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

// Middlerware
app.use(morgan('tiny'));
app.use(express.json());
app.use(loggingMiddleware);

// Routes
app.use('/api/test', zipRoutes);


// Global Error Handling
app.use(globalErr);

// Server Listener
app.listen(PORT, ()=>{
    console.log(`Server running on the PORT: ${PORT}`);
})
