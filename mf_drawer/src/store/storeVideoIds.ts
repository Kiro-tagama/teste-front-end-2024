import { create } from 'zustand';
import axios from 'axios';

interface FavoriteState {
  favoriteIds: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  updateFromBackFavorite: () => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favoriteIds: [],
  addFavorite: (id: string) => set((state) => ({
    favoriteIds: [...state.favoriteIds, id],
  })),
  removeFavorite: (id: string) => set((state) => ({
    favoriteIds: state.favoriteIds.filter((favId) => favId !== id),
  })),
  updateFromBackFavorite: () => {
    axios.get('http://localhost:3000/api/favorites')
      .then(res => {
        if (res.data) {
          set(() => ({
            favoriteIds: res.data.videoIds || []
          }));
        }
      })
      .catch(error => {
        console.error('Failed to fetch favorite videos:', error);
      });
  }
}));
