import express, {Request,Response} from 'express';
import cors from 'cors'
import bodyParser from "body-parser";

import { getVideos, searchVideos } from './api';

export const app = express();
const port = 3000;

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 // Some browsers choke on 204
}))
app.use(bodyParser.json());

app.get('/', (req, res:Response) => {
  res.send('Hello World from Express with TypeScript!');
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

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});