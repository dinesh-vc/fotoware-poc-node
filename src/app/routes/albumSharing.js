import {Router } from 'express';
import albumSharingController from '../controllers/user/albumSharing.controller';

const router = Router();

// Get Albums Sharing API
router.get('/me/people', albumSharingController.getPeople);
router.get('/users/:userId/albums/:albumId', albumSharingController.getAlbumsByByUserId);
router.get('/users/:userId/albums/:albumId/.shares/', albumSharingController.getShareAlbumsByByUserId);
router.patch('/users/:userId/albums/:albumId/.shares/', albumSharingController.updateShareAlbumsByByUserId);

module.exports = router;