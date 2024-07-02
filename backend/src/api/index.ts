import 'dotenv/config'
const apiYtKey = process.env.API_YT
const urlBaseApiYt = (params:string)=>`https://www.googleapis.com/youtube/v3/${params}&key=${apiYtKey}`

export function getVideos(){
  const maxResults = 20
  const params = `search?maxResults=${maxResults}&order=date&part=snippet&type=video`
  return fetch(urlBaseApiYt(params))
   .then(response => response.json())
   .catch(error => console.error('Error:', error))
}

export function searchVideos(searchTerm:string){
  const maxResults = 20
  const params = `search?q=${searchTerm}&part=snippet&maxResults=${maxResults}&type=video`
  return fetch(urlBaseApiYt(params))
   .then(response => response.json())
   .catch(error => console.error('Error:', error))
}

export function getFavVideos(favList:string[]) {
  const params = `videos?id=${favList.join(',')}`
  return fetch(urlBaseApiYt(params))
   .then(response => response.json())
   .catch(error => console.error('Error:', error))
}