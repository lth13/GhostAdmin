import GhostContentAPI from "@tryghost/content-api";

const api= new GhostContentAPI({
  url: 'http://localhost:2368',
  key:'d06dd07ad8eb1a74cace3527aa',
  version:'v2'
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 3,
      include: "tags,authors",
    })
    .catch(err =>{
      console.error(err)
    })
}
