import { Router } from 'express';

import {personaController} from '../controllers';
import {tokenValidation} from '../libs/token.middleware';

const router = Router();

router.get('/', tokenValidation, personaController.getPersonaAll);

router.post('/', tokenValidation, personaController.post);

router.get('/:ruc', tokenValidation, personaController.getRuc);
    
export default router;