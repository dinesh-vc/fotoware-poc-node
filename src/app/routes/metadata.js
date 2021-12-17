import {Router } from 'express';
import metadataController from '../controllers/user/metadata.controller';

const router = Router();

// metadata API
router.get('/editors/:id', metadataController.getEditorsById);
router.get('/archives/:archiveId/:folderId/:asset', metadataController.getMetadataByAsset);


module.exports = router;