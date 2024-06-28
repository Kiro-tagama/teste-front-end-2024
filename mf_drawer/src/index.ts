import './style.css';

import mf_videos from 'http://localhost:3002/remoteEntry.js'

const appElement = document.getElementById('app');
!appElement?console.error('Element with ID "app" not found!')
:appElement.innerHTML = `
  <div>
    <aside>
      <h2>Título da Seção</h2> 
      <a href="#videos">VIDEOS</a> 
      <a href="#favorite">FAVORITOS <div>3</div></a> 
    </aside>
  </div>
`