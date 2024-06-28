import { app } from '../index';
import request from 'supertest';

describe('GET /api/', () => {
  it('Deve retornar uma lista de dados', async () => {

    const response = await request(app)
      .get('/api/')
      .expect(200);

    expect(response.body);
  });
});

describe('GET /api/:search', () => {
  it('Deve retornar dados específicos para a pesquisa', async () => {
    const searchTerm = 'termo de busca';

    const response = await request(app)
      .get(`/api/${searchTerm}`)
      .expect(200);

    expect(response.body);
  });

  it('Deve retornar 404 para pesquisa não encontrada', async () => {
    const searchTerm = 'termo não existente';

    const response = await request(app)
      .get(`/api/${searchTerm}`)
      .expect(404);

    expect(response.body).toEqual({ message: 'Pesquisa não encontrada' });
  });
});
