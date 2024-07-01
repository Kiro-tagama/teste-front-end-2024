# Teste front-end icasei

## Como usar
  ```bash
  npm install
  npm start
  ```
  O Lerna cuidará de iniciar os servidores
  
- mf_drawer: `http://localhost:3001/`
- mf_videos: `http://localhost:3002/`
- backend: `http://localhost:3000/`
  - `api/` - videos 
  - `api/:search` - videos pesquisa

### notas
  usei `npx create-single-spa` para criar 2 micro-frontends
  
  *preciso de controle de sessão e BFF no backend
    bff se conecta com a api do yt 
    sessão salva o usuario
    docker para salvar a lista de fav do usuario?

### Task
  - [] backend
    - [] save list fav ?
    - [x] get list do yt
    - [] get filter list do yt

  - [] front-end
    - [x] create menu lateral (mf drawer) que será a raiz/route sendo a base do front
    - [x] create conteudo