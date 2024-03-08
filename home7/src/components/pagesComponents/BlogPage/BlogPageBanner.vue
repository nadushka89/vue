<template>
    <section class="blog_banner center">
      <div class="blog_banner_intro">
        <h1 class="blog_banner_intro-title">Articles & News</h1>
        <p class="blog_banner_intro-text">Home / Blog</p>
      </div>
    </section>
</template>

<script>
export default {
    name: 'BlogPageBanner',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.blog_banner {
  background-image: url('../../../assets/blog_banner.jpg');
  background-position: left -1050px top -1200px;
  background-repeat: repeat-x;
  height: 356px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 200px;
  &_intro {
    width: 503px;
    height: 178px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 41px 78px 41px 78px;
    border-radius: 37px 37px 0px 0px;
    background: rgb(255, 255, 255);
    &-title {
      color: rgb(41, 47, 54);
      font-family: DM Serif Display;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0%;
      text-align: left;
    }
    &-text {
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 1%;
      text-align: left;
    }
  }
}
</style>