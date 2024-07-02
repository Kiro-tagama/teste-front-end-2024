export function handleFavorite(event: Event) {
  const button = event.target as HTMLButtonElement;
  const videoId = button.dataset.videoId;

  if (!videoId) return;

  const url = window.location.hash.slice(1) === 'favorite'
    ? 'http://localhost:3000/favorite'
    : 'http://localhost:3000/favorite';

  const method = button.classList.contains('favorited') ? 'DELETE' : 'POST';

  fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: videoId }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.message) {
      button.classList.toggle('favorited');
    }
  })
  .catch(error => {
    console.error('Error handling favorite:', error);
  });
}