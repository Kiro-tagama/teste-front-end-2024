import './style.css';

import { renderHeader } from './components/headerContent/headerContent';
import { fetchVideos } from './components/videosAreaContent/videosContainer';
import { updateContent } from './utils/updateContent';

export const baseUrl = (complement:string)=> 'http://localhost:3000/api' + complement

const navLink = document.querySelectorAll('.navLink'); 
const appElement = document.getElementById('mf_videos');

export const videosContainer = document.createElement('div');
videosContainer.id = 'videos-container';

const favoriteId = window.location.hash.slice(1) === 'favorite' ? 'favorite' : ''; 

if (!appElement) {
  console.error('Element with ID "mf_videos" not found!');
} else {
  renderHeader(appElement, favoriteId);
  appElement.appendChild(videosContainer);
  fetchVideos(favoriteId,'');

  const input = document.getElementById('search-input') as HTMLInputElement;
  if (input) input.addEventListener('keyup', () => fetchVideos(favoriteId,input.value));
  
  if (navLink) navLink.forEach(btn=>{
    if (btn) btn.addEventListener('click', ()=>updateContent(appElement, btn));
  })
}
