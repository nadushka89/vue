<template>
  <div>
      <HeaderComponent />
      <HomePageBanner />
      <HomePageProject />
      <HomePageCounter />
      <HomePageArticles />
      <FooterComponent />
  </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import HomePageBanner from '../components/pagesComponents/HomePage/HomePageBanner.vue'
  import HomePageProject from '../components/pagesComponents/HomePage/HomePageProject.vue'
  import HomePageCounter from  '../components/pagesComponents/HomePage/HomePageCounter.vue'
  import HomePageArticles from '../components/pagesComponents/HomePage/HomePageArticles.vue'
  import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: 'HomePage',
    components: {
      HeaderComponent,
      HomePageBanner,
      HomePageProject,
      HomePageCounter,
      HomePageArticles,
      FooterComponent
    }
  }
  </script>
  
  <style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .center {
    padding-left: calc(50% - 1200px / 2);
    padding-right: calc(50% - 1200px / 2);
  }
  a {
    text-decoration: none;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  </style>
  