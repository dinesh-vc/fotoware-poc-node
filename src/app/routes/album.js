import {Router } from 'express';
import albumController from '../controllers/user/album.controller';

const router = Router();

// Get Albums Data API
router.get('/', albumController.getAlbums);
router.get('/mine', albumController.getMyAlbums);
router.get('/shared-with-me', albumController.getSharedWithMeAlbums);
router.get('/archived', albumController.getArchivedAlbums);
router.get('/deleted', albumController.getDeletedAlbums);
router.get('/contribute', albumController.getContributeAlbums);

module.exports = router;