const baseUrl = "https://mediumpostapi.herokuapp.com/?usermedium=";

export async function getArticles(userName) {
  return await fetch(baseUrl + userName).then(res => res.json())
}
