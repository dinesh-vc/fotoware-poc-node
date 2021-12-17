

import {
    Router
} from 'express';
import userAuthController from '../controllers/user/auth.controller';

const router = Router();

// Generate Token API
router.post('/auth/token', userAuthController.generateToken);

module.exports = router;