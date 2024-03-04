<template>
    <section class="banner center">
      <div class="banner_intro">
        <h1 class="banner_intro-title">Our Project</h1>
        <p class="banner_intro-text">Home / Project</p>
      </div>
    </section>
</template>

<script>

export default {
    name: 'ProjectPageBanner',
  
    data () {
      return {
      }
    },
  
    mounted () {
    },
  
    methods: {
    }
  }
  </script>
<style lang="scss" scoped>
    .banner{
        background-image: url('../../../assets/ProjectBanner.jpeg');
        height: 356px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
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
