import { app } from '../index';
import request from 'supertest';

describe('POST /api/favorites', () => {
  it('Deve adicionar um vídeo aos favoritos', async () => {
    const videoId = 'tHOgxY1U7DE';

    const response = await request(app)
      .post('/api/favorites')
      .send({ id: videoId });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'Video added to favorites' });
  });

  it('Deve retornar 400 se o ID do vídeo estiver ausente', async () => {
    const response = await request(app)
      .post('/api/favorites')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Missing video ID' });
  });

  it('Deve retornar 400 se o vídeo já estiver nos favoritos', async () => {
    const videoId = 'tHOgxY1U7DE';

    const response = await request(app)
      .post('/api/favorites')
      .send({ id: videoId });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Video already in favorites' });
  });
});

describe('GET /api/favorites', () => {
  it('Deve retornar uma lista de vídeos favoritos', async () => {
    const response = await request(app)
      .get('/api/favorites');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object));
  });
});

describe('DELETE /api/favorites', () => {
  it('Deve remover um vídeo dos favoritos', async () => {
    const videoId = 'tHOgxY1U7DE';

    const response = await request(app)
      .delete('/api/favorites')
      .send({ id: videoId });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Video removed from favorites' });
  });

  it('Deve retornar 400 se o ID do vídeo estiver ausente', async () => {
    const response = await request(app)
      .delete('/api/favorites')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Missing video ID' });
  });

});
