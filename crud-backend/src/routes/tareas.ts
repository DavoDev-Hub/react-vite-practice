import { Router } from 'express';
import db from '../db/knex';
const router = Router();


router.get('/', async (req, res) => {
    try {
        const tareas = await db('tareas').select('*');
        res.json(tareas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
});

export default router;