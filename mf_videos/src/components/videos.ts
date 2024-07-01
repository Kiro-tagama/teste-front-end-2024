export const videosContainer = document.createElement('div');
videosContainer.id = 'videos-container';

export const fetchRenderVideo=()=>fetch('http://localhost:3000/api') // Add favorite ID as query param if applicable
  .then(response => response.json())
  .then(videos => {
    if (!videos || videos.length === 0) {
        videosContainer.innerHTML = '<p>Nenhum vídeo encontrado.</p>';
        return;
    }
    
    console.log(videos[0])
    videos.forEach((video: { snippet: { thumbnails: { medium: { url: any; }; }; }; title: any; }, index: any) => {
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
