import { Router } from 'express';

import {authController} from '../controllers';

const router = Router();

router.post('/signin', authController.signin);
router.post('/', authController.create);
    
export default router;