import express, { Response } from 'express';
import { getVideos, searchVideos } from '../api';

const router = express.Router();

router.get('/', async (req, res: Response) => {
  try {
    const videos = await getVideos();
    res.status(videos.length == 0 ? 404 : 200).json(videos);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/:search', async (req, res: Response) => {
  try {
    const { search } = req.params;
    const videos = await searchVideos(search);
    res.status(videos.length == 0 ? 404 : 200).json(videos);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;