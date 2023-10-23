import {Router} from 'express';
import { pool } from '../database.js';


const indexRoutes = Router();

indexRoutes.get("/ping", async (req, res) => {
    const result = await pool.query('SELECT 1 + 1 as result');
    console.log(result);
    res.json('ping');
        });

export default indexRoutes;