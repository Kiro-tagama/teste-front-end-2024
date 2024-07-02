import { videosContainer } from "../..";
import { Video } from "../../types";
import { handleFavorite } from "./handleFavorite";

export function renderVideos(videos: Video[]) {
  videosContainer.innerHTML = ''; // Clear previous content

  videos.forEach((video, index) => {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.id = `video-${index}`;

    videoItem.innerHTML = `
      <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
      <button class="favorite-btn" data-video-id="${video.id}">⭐</button>
    `;

    videosContainer.appendChild(videoItem);
  });

  document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', handleFavorite);
  });
}