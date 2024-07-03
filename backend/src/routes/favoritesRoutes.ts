import express, { Request, Response } from 'express';
import { getFavVideos } from '../api';
import { Favorite } from '../types';

const router = express.Router();

let favoriteOfUsers: Favorite[] = [];

router.get('/all',(req,res)=> res.status(200).json(favoriteOfUsers))

router.post('/', async (req: Request, res: Response) => {
  try {
    const userId = req.session.id;
    const videoId = req.body.id;

    if (!videoId) {
      return res.status(400).json({ error: 'Missing video ID' });
    }

    const userFavorites = favoriteOfUsers.find(favorite => favorite.userId === userId);

    if (!userFavorites) {
      favoriteOfUsers.push({ userId, videoIds: [videoId] });
      return res.status(201).json({ message: 'Video added to favorites' });
    }

    if (userFavorites.videoIds.includes(videoId)) {
      return res.status(400).json({ error: 'Video already in favorites' });
    }

    userFavorites.videoIds.push(videoId);

    res.status(201).json({ message: 'Video added to favorites' });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const userId = req.session.id;
    const userFavorites = favoriteOfUsers.find(favorite => favorite.userId === userId);

    if (!userFavorites) {
      return res.status(404).json({ message: 'No favorites found for this user' });
    }

    const videoData = userFavorites.videoIds;

    if (videoData.length === 0) {
      return res.status(404).json({ message: 'No videos found for the given IDs' });
    }

    const videos = await getFavVideos(videoData);
    res.status(videos.length == 0 ? 404 : 200).json(videos);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete('/', async (req: Request, res: Response) => {
  try {
    const userId = req.session.id;
    const videoId = req.body.id;

    if (!videoId) {
      return res.status(400).json({ error: 'Missing video ID' });
    }

    const userFavorites = favoriteOfUsers.find(favorite => favorite.userId === userId);

    if (!userFavorites) {
      return res.status(404).json({ message: 'No favorites found for this user' });
    }

    if (!userFavorites.videoIds.includes(videoId)) {
      return res.status(404).json({ message: 'Video not found in favorites' });
    }

    userFavorites.videoIds = userFavorites.videoIds.filter(id => id !== videoId);

    res.status(200).json({ message: 'Video removed from favorites' });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
