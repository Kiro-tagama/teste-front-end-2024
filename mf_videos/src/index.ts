import './style.css';

const appElement = document.getElementById('mf_videos');
const videosContainer = document.createElement('div');
videosContainer.id = 'videos-container';

const favoriteId = window.location.hash.slice(1) === 'favorite' ? 'favorite' : ''; // Assuming logic for favorite filtering

if (!appElement) {
    console.error('Element with ID "mf_videos" not found!');
} else {
    appElement.innerHTML = `
      <h2>Título Vídeos</h2>
      ${favoriteId ? '<h3>Favoritos</h3>' : `<input type="text" placeholder="Buscar vídeos"/>`} 
    `;
    appElement.appendChild(videosContainer);
}

fetch('http://localhost:3000/api') // Add favorite ID as query param if applicable
  .then(response => response.json())
  .then(videos => {
    if (!videos || videos.length === 0 || videos.error.code == 403) {
        videosContainer.innerHTML = `<p>${videos.error.code == 403? "Api excedido, tentar em outro momento":"Nenhum vídeo encontrado."}</p>`;
        return;
    }
    
    videos.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.id = `video-${index}`;

        videoItem.innerHTML = `
          <img src="${video.snippet.thumbnails.medium.url || 'placeholder.jpg'}" alt="${video.title}">
        `;
    
        videosContainer.appendChild(videoItem);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar vídeos:', error);
    videosContainer.innerHTML = '<p>Erro ao carregar vídeos. Tente novamente mais tarde.</p>';
  });
