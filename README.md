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
  - `api/videos` - videos 
  - `api/videos/:search` - videos pesquisa
  - `api/favorite`, `{id:String}` - get,post,delete
  o backend usa o express session para salvar o id do usuario assim pegado o is do browser para fazer a manipulação e controle de sessão

### notas
  usei `npx create-single-spa` para criar 2 micro-frontends
  
  *preciso de controle de sessão e BFF no backend
    bff se conecta com a api do yt 
    o usuario se mantem ativo com o servidor usando sua credencial do propria, registrada assim que faz o post de um id

  

### Task
  - [] backend
    - [x] save list fav
    - [x] get list do yt
    - [x] get filter list do yt
    - [] create tests

  - [] front-end
    - [x] create menu lateral (mf drawer) que será a raiz/route sendo a base do front
    - [x] create conteudo
    - [] add to fav button
    - [] search video
    - [] save info of fav and use
    - [] smart renderization
    - [] create tests