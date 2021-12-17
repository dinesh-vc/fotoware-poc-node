import {Router } from 'express';
import archiveController from '../controllers/user/archive.controller';

const router = Router();

// Get Archive Data API
router.get('/', archiveController.getArchives);
router.get('/:id', archiveController.getArchivesById);


module.exports = router;