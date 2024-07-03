import express, { Response } from 'express';
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';

import videosRoutes from './routes/videosRoutes';
import favoritesRoutes from './routes/favoritesRoutes';

export const app = express();
const port = 3000;

app.use(session({
  secret: 'password',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(cors({
  origin: ['*','http://localhost:3001'],
  optionsSuccessStatus: 200,
  credentials: true
}));

app.use(bodyParser.json());

app.get('/', (req, res: Response) => {
  res.send('Hello World from Express with TypeScript! ' + req.session.id);
});

app.use('/api/videos', videosRoutes);
app.use('/api/favorites', favoritesRoutes);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });
}
