import create from 'zustand';

interface FavoriteState {
  favoriteIds: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favoriteIds: [],
  addFavorite: (id: string) => set((state) => ({
    favoriteIds: [...state.favoriteIds, id],
  })),
  removeFavorite: (id: string) => set((state) => ({
    favoriteIds: state.favoriteIds.filter((favId) => favId !== id),
  })),
}));
