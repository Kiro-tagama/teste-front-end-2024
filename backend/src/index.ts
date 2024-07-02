import express, {Request,Response} from 'express';
import session from 'express-session';
import cors from 'cors'
import bodyParser from "body-parser";

import { getFavVideos, getVideos, searchVideos } from './api';

export const app = express();
const port = 3000;

app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: true
}));

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 
}))
app.use(bodyParser.json());

app.get('/', (req, res:Response) => {
  req.session.id
  res.send('Hello World from Express with TypeScript! '+req.session.id);
});

app.get('/api/', (req, res:Response) => {
  try {
    getVideos()
    .then(videos=>videos.length== 0 ? res.status(404) : res.status(200).json(videos))
    .catch(err =>console.log(err));
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get('/api/:search', (req:Request, res:Response) => {
  try {
    const search = req.params.search

    searchVideos(search)
    .then(videos=>videos.length== 0 ? res.status(404) : res.status(200).json(videos))
    
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//////

interface Favorite {
  userId: string;
  videoIds: string[];
};

let favoriteOfUsers: Favorite[] = [];

app.post('/favorite', async (req: Request, res: Response) => {
  try {
    const userId = req.session.id;
    const videoId = req.body.id;

    if (!videoId) {
      return res.status(400).json({ error: 'Missing video ID' });
    }

    const userFavorites = favoriteOfUsers.find((favorite) => favorite.userId === userId);

    if (!userFavorites) {
      favoriteOfUsers.push({ userId, videoIds: [videoId] });
      return res.status(201).json({ message: 'Video added to favorites' });
    }

    if (userFavorites.videoIds.includes(videoId)) {
      return res.status(400).json({ error: 'Video already in favorites' });
    }

    userFavorites.videoIds.push(videoId);

    favoriteOfUsers = favoriteOfUsers.map((favorite) => {
      if (favorite.userId === userId) {
        return userFavorites;
      }
      return favorite;
    });

    res.status(201).json({ message: 'Video added to favorites' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get('/favorite', async (req: Request, res: Response) => {
  try {
    const userId = req.session.id;
    const userFavorites = favoriteOfUsers.find((favorite) => favorite.userId === userId);

    if (!userFavorites) {
      return res.status(404).json({ message: 'No favorites found for this user' });
    }

    const videoData =  userFavorites.videoIds

    if (videoData.length === 0) {
      return res.status(404).json({ message: 'No videos found for the given IDs' });
    }

    getFavVideos(videoData)
    .then(videos=>videos.length== 0 ? res.status(404) : res.status(200).json(videos))

  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.delete('/favorite', async (req: Request, res: Response) => {
  try {
    const userId = req.session.id;
    const videoId = req.body.id;

    if (!videoId) {
      return res.status(400).json({ error: 'Missing video ID' });
    }

    const userFavorites = favoriteOfUsers.find((favorite) => favorite.userId === userId);

    if (!userFavorites) {
      return res.status(404).json({ message: 'No favorites found for this user' });
    }

    if (!userFavorites.videoIds.includes(videoId)) {
      return res.status(404).json({ message: 'Video not found in favorites' });
    }

    userFavorites.videoIds = userFavorites.videoIds.filter((id) => id !== videoId);

    favoriteOfUsers = favoriteOfUsers.map((favorite) => {
      if (favorite.userId === userId) {
        return userFavorites;
      }
      return favorite;
    });

    res.status(200).json({ message: 'Video removed from favorites' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});


app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});