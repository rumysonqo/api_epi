import {Router} from 'express'
import {pool} from '../db.js'
import {ping} from '../controlador/ctrl_index.js'

const router =Router()

router.get('/ping',ping);

export default router