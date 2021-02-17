<template>
  <div class="container">
    <main>
      <ul>
        <li v-for="item in posts" :key="index" >
          <div>
            <div class="image-content">
              <img :src="item.feature_image">
            </div>
            <span class="authorName">{{item.authors[0].name}}</span>
            <div class="titleContent">{{item.title}}</div>
            <div class="introContent">{{item.excerpt}}</div>

          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import {getPosts} from "../api/post";

export default {
  async asyncData () {
    const posts = await getPosts()
    return {posts: posts}
  }
}
</script>

<style>
  .image-content{
    width: 225px;
    height: 150px;
  }
  .image-content img{
    width: 100%;
  }
  .titleContent{
    font-size: 16px;
  }
  .authorName{
    color: #7F828B;
  }
  .introContent{
    font-size: 14px;
    font-family: Quick-Regular;
    color: darkgray;
    font-weight: 200;
  }
</style>
