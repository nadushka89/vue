<template>
  <div id="app">
    <HomePage />

    <BlogPage />

    <BlogDetailsPage />
    
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import BlogPage from './components/BlogPage.vue'
import BlogDetailsPage from './components/BlogDetailsPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    BlogPage,
    BlogDetailsPage
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@600;700;800&family=Roboto:ital,wght@0,500;1,100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Open+Sans:wght@600;700;800&family=Roboto:ital,wght@0,500;1,100&display=swap");

#app {
  font-family: DM Serif Display, Jost;

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
