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


router.post('/', async (req, res) => {
    const { titulo, descripcion } = req.body;
  
    try {
      const nuevaTarea = await db('tareas').insert({
        titulo,
        descripcion
      }).returning('*'); 
  
      res.status(201).json(nuevaTarea[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear tarea' });
    }
  });

export default router;