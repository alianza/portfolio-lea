const baseUrl = "https://mediumpostsapi.vercel.app/api/";

export async function getArticles(userName) {
  return await fetch(baseUrl + userName).then(res => res.json())
}
