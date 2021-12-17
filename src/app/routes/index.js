import { Router } from 'express';
import authRoute from './auth';
import albumRoute from './album'
import albumSharingRoute from './albumSharing'
import archiveRoute from './archive'
import metadataRoute from './metadata'

const router = Router();

router.use('/fotoweb', authRoute);
router.use('/fotoweb/me/albums', albumRoute);
router.use('/fotoweb', albumSharingRoute);
router.use('/fotoweb/archives', archiveRoute);
router.use('/fotoweb', metadataRoute);
module.exports = router;