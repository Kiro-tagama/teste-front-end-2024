//import './style.css';

const videosContainer = document.createElement('div');
videosContainer.id = 'videos-container';

const appElement = document.getElementById('app');

const favoriteId = window.location.hash.slice(1) === 'favorite' ? 'favorite' : ''; // Assuming logic for favorite filtering

!appElement ? console.error('Element with ID "app" not found!') :
appElement.innerHTML = `
  <div>
    <main>
      <h2>Título Vídeos</h2>
      <br/>
      ${favoriteId ? '' : `<input type="text" placeholder="Buscar vídeos"/>`} <br/>
      ${videosContainer}
    </main>
  </div>
`;

fetch('http://localhost:3000/api' + (favoriteId ? `?favorite=${favoriteId}` : '')) // Add favorite ID as query param if applicable
  .then(response => response.json())
  .then(videos => {
    // Filter videos based on favorite ID logic (if applicable)

    videos.forEach((video) => {
      const videoItem = document.createElement('div');
      videoItem.className = 'video-item';
      videoItem.innerHTML = `
        <h3>${video.title}</h3> <a href="${video.url}">Ver Vídeo</a> `;
      videosContainer.appendChild(videoItem);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar vídeos:', error);
    // Handle fetch errors gracefully (e.g., display an error message)
  });
