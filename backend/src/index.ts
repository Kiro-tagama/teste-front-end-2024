import express, { Response } from 'express';
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';

import videoRoutes from './routes/videoRoutes';
import favoriteRoutes from './routes/favoriteRoutes';

export const app = express();
const port = 3000;

app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: true,
}));

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
}));

app.use(bodyParser.json());

app.get('/', (req, res: Response) => {
  res.send('Hello World from Express with TypeScript! ' + req.session.id);
});

app.use('/api/videos', videoRoutes);
app.use('/api/favorites', favoriteRoutes);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
