export function renderHeader(element: HTMLElement, favoriteId: string) {
  element.innerHTML = `
    <h2>Título Vídeos</h2>
    ${favoriteId ? '<h3>Favoritos</h3>' : `<input type="text" placeholder="Buscar vídeos" id="search-input"/>`} 
  `;
}