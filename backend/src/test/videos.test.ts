import { app } from '../index';
import request from 'supertest';

describe('GET /api/videos/', () => {
  it('Deve retornar uma lista de dados', async () => {

    await request(app)
      .get('/api/videos')
      .expect(200);

  });
});

describe('GET /api/videos/:search', () => {
  it('Deve retornar dados específicos para a pesquisa', async () => {
    const searchTerm = 'termo de busca';

    await request(app)
      .get(`/api/videos/${searchTerm}`)
      .expect(200);

  });

});
