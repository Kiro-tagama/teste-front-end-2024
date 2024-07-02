import { useFavoriteStore } from '../store/storeVideoIds';

export function updateFavoriteCount() {
  const countElement = document.querySelector('.favorite-count');

  if (!countElement) {
    console.error('Element with class "favorite-count" not found!');
    return;
  }

  const { favoriteIds } = useFavoriteStore.getState();

  countElement.textContent = favoriteIds.length.toString();

  useFavoriteStore.subscribe((state) => {
    countElement.textContent = state.favoriteIds.length.toString();
  });
}
