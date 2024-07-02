import { videosContainer } from "../..";
import { Video } from "../../types";
import { handleFavorite } from "./handleFavorite";
import { useFavoriteStore } from "mf_drawer/src/store/storeVideoIds";

export function renderVideos(videos: Video[]) {
  const { favoriteIds } = useFavoriteStore.getState();

  videosContainer.innerHTML = ''; // Clear previous content

  videos.forEach((video, index) => {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.id = `video-${index}`;

    const isFavorite = favoriteIds.includes(video.id.videoId);
    const favoriteSymbol = isFavorite ? '⭐' : '☆';

    videoItem.innerHTML = `
      <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
      <button class="favorite-btn" data-video-id="${video.id.videoId}">${favoriteSymbol}</button>
    `;

    videosContainer.appendChild(videoItem);
  });

  document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', handleFavorite);
  });
}
