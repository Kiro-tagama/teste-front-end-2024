import './style.css';
import("app2/App")
.then(res=>res.default)
.catch(err=>console.log("mf_video err:"+err))

import { useFavoriteStore } from './store/storeVideoIds';
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
        <a href="#videos">VÍDEOS</a> 
        <a href="#favorite">FAVORITOS <div class="favorite-count">0</div></a> 
      </aside>
      <main id="mf_videos"></main>
    </div>
  `;

  const { updateFromBackFavorite } = useFavoriteStore();

  updateFromBackFavorite();
  updateFavoriteCount();
}

window.addEventListener('DOMContentLoaded', initializeApp);