import {Router } from 'express';
import archiveController from '../controllers/user/archive.controller';

const router = Router();

// Get Archive Data API
router.get('/archives/', archiveController.getArchives);
router.get('/me/archives/', archiveController.getMyArchives);
router.get('/archives/:id', archiveController.getArchivesById);


module.exports = router;