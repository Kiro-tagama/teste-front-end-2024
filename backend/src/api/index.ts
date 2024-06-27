const apiYtKey = process.env.API_YT
const urlBaseApiYt = (params:string)=>`https://www.googleapis.com/youtube/v3/${params}&key=${apiYtKey}`

export function getVideos(){
  const maxResults = 20
  const params = `search?maxResults=${maxResults}&order=date&part=snippet&type=video`
  return fetch(urlBaseApiYt(params))
   .then(response => response.json())
   .then(data => data.items)
   .catch(error => console.error('Error:', error))
}

export function searchVideos(searchTerm:string){
  const maxResults = 20
  const params = `search?q=${searchTerm}&part=snippet&maxResults=${maxResults}&type=video`
  return fetch(urlBaseApiYt(params))
   .then(response => response.json())
   .then(data => data.items)
   .catch(error => console.error('Error:', error))
}

export function getFavVideos() {
  const favList = ["7lCDEYXw3mM","7lCDEYXw3mM"]
  const params = `videos?id=${favList.join(',')}`
  return fetch(urlBaseApiYt(params))
   .then(response => response.json())
   .then(data => data.items)
   .catch(error => console.error('Error:', error))
}