import './style.css';

import("app2/App")
.then(res=>res.default)
.catch(err=>console.log("mf_video err:"+err))

const appElement = document.getElementById('app');
!appElement?console.error('Element with ID "app" not found!')
:appElement.innerHTML = `
  <div>
    <aside>
      <h2>Título da Seção</h2> 
      <a href="#videos">VÍDEOS</a> 
      <a href="#favorite">FAVORITOS <div>3</div></a> 
    </aside>
    <main id="mf_videos"></main>
  </div>
`