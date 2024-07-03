import { videosContainer } from "..";
import { renderHeader } from "../components/headerContent/headerContent";
import { fetchVideos } from "../components/videosAreaContent/videosContainer";

export function updateContent(appElement: HTMLElement, btn?: Element, input?: string){
  const link= btn? btn.getAttribute('href') : null;
  const favoriteId = link && link.slice(1) === 'favorite' ? 'favorite' : '';

  const inputText = input ? input : '';

  appElement.innerHTML = '';

  renderHeader(appElement, favoriteId);
  appElement.appendChild(videosContainer);
  fetchVideos(favoriteId,inputText);
}