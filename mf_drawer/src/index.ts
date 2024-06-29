import './style.css';

const url_mf_videos = "http://localhost:3002/remoteEntry.js"
// const mf_videos = async () => await import("app2/App")
// .then(res=>res)

const appElement = document.getElementById('app');
!appElement?console.error('Element with ID "app" not found!')
:appElement.innerHTML = `
  <div>
    <aside>
      <h2>Título da Seção</h2> 
      <a href="#videos">VIDEOS</a> 
      <a href="#favorite">FAVORITOS <div>3</div></a> 
    </aside>
    <iframe src="http://localhost:3002/${window.location.hash}" width="100%" height="100%" frameBorder="0"></iframe>
  </div>
`