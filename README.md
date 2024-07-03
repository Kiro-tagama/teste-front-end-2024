# Teste front-end icasei
Teste de micro front-end vanilla ts

## Como usar

  execute na raiz do projeto usando npm  
  ```bash
  npm install
  npm start
  ```
  O Lerna cuidará de iniciar os servidores
  
- mf_drawer: `http://localhost:3001/`
- mf_videos: `http://localhost:3002/`

- backend: `http://localhost:3000/`
  - `api/videos` - vídeos 
  - `api/videos/:search` - vídeos pesquisa
  - `api/favorite`, `{id:String}` - get,post,delete
  
obs: o backend usa o express session para salvar o id do usuário assim pegado o is do browser para fazer a manipulação e controle de sessão

## OBS
  foi usado lerna para iniciar o servidor mas tu pode entrar nas 3 pastas e iniciar normalmente usando `npm i` e `npm run dev` ou o de sua preferência como yarn, pnpm

  o projeto foi configurado com webpack e ts, zustand para controle de estado e é html,js/ts e css puro