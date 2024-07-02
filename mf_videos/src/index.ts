import './style.css';

import { renderHeader } from './components/headerContent/headerContent';
import { fetchVideos } from './components/videosAreaContent/videosContainer';

export const baseUrl = (complement:string)=> 'http://localhost:3000/api' + complement

const appElement = document.getElementById('mf_videos');
export const videosContainer = document.createElement('div');
videosContainer.id = 'videos-container';

const favoriteId = window.location.hash.slice(1) === 'favorite' ? 'favorite' : ''; // Assuming logic for favorite filtering

if (!appElement) {
  console.error('Element with ID "mf_videos" not found!');
} else {
  renderHeader(appElement, favoriteId);
  appElement.appendChild(videosContainer);
  fetchVideos(favoriteId);
}