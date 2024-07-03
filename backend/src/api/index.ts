import 'dotenv/config'
const apiYtKey = process.env.API_YT
const urlBaseApiYt = (params:string)=>`https://www.googleapis.com/youtube/v3/${params}&key=${apiYtKey}`

export async function getVideos(){
  const maxResults = 20
  const params = `search?maxResults=${maxResults}&order=date&part=snippet&type=video`
  try {
    const response = await fetch(urlBaseApiYt(params))
    return await response.json()
  } catch (error) {
    return console.error('Error:', error)
  }
}

export async function searchVideos(searchTerm:string){
  const maxResults = 20
  const params = `search?q=${searchTerm}}&part=snippet&maxResults=${maxResults}&type=video`
  try {
    const response = await fetch(urlBaseApiYt(params))
    return await response.json()
  } catch (error) {
    return console.error('Error:', error)
  }
}

export async function getFavVideos(favList:string[]) {
  const params = `videos?id=${favList.join(',')}&part=snippet&type=video`
  try {
    const response = await fetch(urlBaseApiYt(params))
    return await response.json()
  } catch (error) {
    return console.error('Error:', error)
  }
}