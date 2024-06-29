import { app } from '../index';
import request from 'supertest';

describe('GET /api/', () => {
  it('Deve retornar uma lista de dados', async () => {

    await request(app)
      .get('/api/')
      .expect(200);

  });
});

describe('GET /api/:search', () => {
  it('Deve retornar dados específicos para a pesquisa', async () => {
    const searchTerm = 'termo de busca';

    await request(app)
      .get(`/api/${searchTerm}`)
      .expect(200);

  });

});
