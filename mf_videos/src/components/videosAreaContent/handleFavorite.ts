import axios from 'axios';
import { baseUrl } from '../..';
import { useFavoriteStore } from 'mf_drawer/src/store/storeVideoIds';

export function handleFavorite(event: Event) {
  const button = event.target as HTMLButtonElement;
  const videoId = button.dataset.videoId;

  if (!videoId) return;

  const url = baseUrl('/favorites');
  const method = button.classList.contains('favorited') ? 'DELETE' : 'POST';

  axios({
    method: method,
    url: url,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    data: {
      id: videoId,
    },
  })
  .then(response => {
    const data = response.data;

    if (data.message) {
      const addFavorite = useFavoriteStore.getState().addFavorite;
      const removeFavorite = useFavoriteStore.getState().removeFavorite;

      if (method === 'POST') {
        addFavorite(videoId);
        button.classList.add('favorited');
      } else {
        removeFavorite(videoId);
        button.classList.remove('favorited');
      }
    }
  })
  .catch(error => {
    console.error('Error handling favorite:', error);
  });
}
