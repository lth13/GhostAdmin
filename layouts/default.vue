<template>
  <div class="container">
<!--    <div v-if="loading==true">loadingg...</div>-->
<!--    <div v-else>-->
    <div class="header">
      <div class="title">
        <p>GHOST.ORG</p>
      </div>
      <div class="contact">
        <Icon type="logo-facebook" />
        <Icon type="logo-instagram" />
      </div>
      <div class="navbar">
        <nav>
          <ul>
            <li>HOME</li>
            <li>TRAVEL</li>
            <li>BOOKS</li>
            <li>POSTS</li>
            <li>ABOUT</li>
          </ul>
        </nav>
      </div>
      <div class="content">
        <div class="content-body">
          <div class="info">
              <div class="image-info">
                <img
                  src="https://i.pinimg.com/originals/ea/98/9e/ea989effd5461fbb2ccd7e549515719d.jpg">
              </div>
            <div class="info-author">
              <div class="authorName1">Le Thanh Huyen</div>
              <div class="introAuthor">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur"</div>
            </div>

          </div>
          <div class="others">
            <div class="other1"></div>
            <nuxt></nuxt>
          </div>
        </div>
        <div class="sidebar">
            <div class="instagram">
              <div class="igTitle">
                <p>INSTAGRAM</p>
              </div>
              <div class="igImage">
                <div class="image1">
                  <div class="imageIntro">
                    <img src="https://i.pinimg.com/236x/a4/ee/2b/a4ee2b8855014d0310a06a8629ee5d06.jpg">
                  </div>
                  <div class="imageIntro">
                    <img src="https://i.pinimg.com/236x/f8/48/45/f8484552ebf373b533bf19760b3caff7.jpg">
                  </div>
                  <div class="imageIntro">
                    <img src="https://i.pinimg.com/236x/98/d6/20/98d620d6844ab80cd9f0230ae213e83d.jpg">
                  </div>
                </div>
                <div class="image1">
                  <div class="imageIntro">
                    <img src="https://i.pinimg.com/236x/62/9d/60/629d6098a55fba92c2478c1239c9803b.jpg">
                  </div>
                  <div class="imageIntro">
                    <img src="https://i.pinimg.com/236x/a9/09/b8/a909b863751c93654e6b8e5146de6f63.jpg">
                  </div>
                  <div class="imageIntro">
                    <img src="https://i.pinimg.com/236x/e5/44/f8/e544f838196f06ea60c5821cc0dfef32.jpg">
                  </div>
                </div>
                <div class="image1">
                  <div class="imageIntro">
                    <img src="https://i.pinimg.com/236x/a6/f8/31/a6f8316634cee7c4b82640ad9440f727.jpg">
                  </div>
                  <div class="imageIntro">
                    <img src="https://i.pinimg.com/236x/63/80/9d/63809d7fc4bdef112e9519f9d45e2808.jpg">
                  </div>
                  <div class="imageIntro">
                    <img src="https://i.pinimg.com/236x/bc/f8/79/bcf879dd7e8b71e6e4abefe356e58a92.jpg">
                  </div>
                </div>
              </div>
              <div class="igTitle" style="margin-top: -20px">
                <p>TAGS</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
<!--  </div>-->
</template>
<script>
  export default{
    name: "default",
    created() {
      this.getData()
    },
    data (){
      return {
        loading: false
      }
    },
    methods: {
      getData: function () {
        this.loading= true
        // axios.get("http://localhost:3004").then(response => {
        //   console.log(response)
        // })
      }
    }
  }
</script>
<style>
  @font-face {
    src: url("../font/Kodchasan-Regular.ttf");
    font-family: Kod-Regular;
  }
  @font-face {
    src: url("../font/static/Quicksand-SemiBold.ttf");
    font-family: Quick-Med;
  }
  @font-face {
    src: url("../font/static/Quicksand-Light.ttf");
    font-family: Quick-Regular;
  }
html {
  font-family: Arial, sans-serif;
  font-size: 24px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
  .container{
    width: 80%;
    margin: 0px auto;
    /*display: flex;*/
    /*background: #7F828B;*/
  }
  .title{
    /*height: 30px;*/
    /*background: orange;*/
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: Kod-Regular;
    font-size: 38px;
  }
  .title p {
    color: darkblue;
    margin-top: 20px;
  }
  .contact {
    font-size: 18px;
    text-align: center;
    color: #47494e;
    border-bottom: 1px solid #7F828B;
    padding-bottom: 20px;
  }
  .navbar {
    display: flex;
    justify-content: center;
    font-size: 16px;
    /*background: orangered;*/
  }
  ul {
    display: flex;
  }
  li{
    list-style: none;
    padding: 15px 30px;
    font-family: Quick-Med;
    font-weight: bold;
    color: #47494e;
  }
  .content{
    display: flex;
    justify-content: space-between;
  }
  .content-body{
    width: 65%;
    /*background: orangered;*/
    height: 40px;
  }
  .info{
    width: 100%;
    border: 1px solid #7F828B;
    height: 250px;
    display: flex;
  }
  .sidebar{
    width: 30%;

  }
  .others {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: -110px;
    /*height: 40px;*/
  }
  .others1{
    width: 30%;
    height: 236px;
    border: 1px solid #7F828B;

  }
  .image-info {
    width: 198px;
    height: 198px;
    /*border:  1px solid #7F828B;*/
    border-radius: 140px;
    margin-top: 25px;
    margin-left: 25px;
  }
  .image-info img{
    width: 100%;
    border-radius: 50%;
  }
  .info-author{
    width: 65%;
    margin-left: 30px;
    margin-top: 25px;
  }
  .authorName1{
    color: darkblue;
    font-size: 25px;
    font-family: Kod-Regular;
  }
  .introAuthor{
    font-family: Quick-Regular;
    line-height: 25px;
    font-size: 17px;
    margin-top: 15px;
  }
  .igImage {
    margin-top: 50px;
  }
  .image1{
    height: 160px;
    display: flex;
    justify-content: space-between;
    margin-top: -35px;
  }
  .imageIntro{
    width: 31%;
    height: 160px;
  }
  .imageIntro img{
    width: 100%;
    height: 113px;
  }
  .igTitle{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Kod-Regular;
    width: 100%;
    /*background: #47494e;*/
    height: 40px;
    border: 1px solid #7F828B;
  }

</style>
