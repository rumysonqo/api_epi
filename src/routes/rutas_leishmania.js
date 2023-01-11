import {Router} from 'express';
import {get_lei, get_por_micro} from '../controlador/ctrl_leishmania.js'

const router=Router();

router.get('/leishmania',get_lei);
router.get('/por_micro/:mr',get_por_micro);

export default router;