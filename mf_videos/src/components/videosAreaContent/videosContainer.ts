import { baseUrl, videosContainer } from "../..";
import { ApiError, Video } from "../../types";
import { renderVideos } from "./videosCard";

import axios from "axios"

export function fetchVideos(favoriteId: string) {
  const url = favoriteId ? baseUrl('/favorites') : baseUrl('/videos');
  console.log('url: '+url)
  
  axios.get(url)
    .then(response => response.data.items)
    .then((data: Video[] | ApiError) => {
      if ('error' in data && data.error.code === 403) {
        videosContainer.innerHTML = `<p>Api excedido, tentar em outro momento</p>`;
        return;
      }

      if (Array.isArray(data) && data.length === 0) {
        videosContainer.innerHTML = `<p>Nenhum vídeo encontrado.</p>`;
        return;
      }

      renderVideos(data as Video[]);
    })
    .catch(error => {
      console.error('Error fetching videos:', error);
      videosContainer.innerHTML = '<p>Erro ao carregar vídeos.</p>';
    });
}
