import './style.css';
import("app2/App")
.then(res=>res.default)
.catch(err=>console.log("mf_video err:"+err))

import { updateFavoriteCount } from './utils/updateFavoriteCount.ts';

const appElement = document.getElementById('app');

function initializeApp() {
  if (!appElement) {
    console.error('Element with ID "app" not found!');
    return;
  }

  appElement.innerHTML = `
    <div>
      <aside>
        <h2>Título da Seção</h2> 
        <a href="#videos" class="navLink">VÍDEOS</a> 
        <a href="#favorite" class="navLink">FAVORITOS <div class="favorite-count">0</div></a> 
      </aside>
      <main id="mf_videos"></main>
    </div>
  `;

  updateFavoriteCount();
}

window.addEventListener('DOMContentLoaded', initializeApp);