<template>
    <div>
        <section class="blog blog__page center">
            <h2 class="blog__title_left">Articles & News</h2>
            <ArticleComponent :quantity="6" />

        </section>
        <section class="count_page center">
        <div class="count_page_wrap">
          <a href="#" class="count_page-number">
            <p class="count_page-number-text">01</p>
          </a>
          <a href="#" class="count_page-number">
            <p class="count_page-number-text">02</p>
          </a>
          <a href="#" class="count_page-number">
            <p class="count_page-number-text">03</p>
          </a>
          <a href="#">
            <svg class="count_page-svg" width="52.000000" height="52.000000" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                  Created with Pixso.
              </desc>
              <defs/>
              <circle id="Ellipse 4" cx="26.000000" cy="26.000000" r="25.500000" stroke="#CDA274" stroke-opacity="1.000000" stroke-width="1.000000"/>
              <path id="Vector" d="M23.0571 32L29 25.3143L23.0571 18.6286" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
            </svg>
            
          </a>
        </div>

    </section>
    </div>
</template>

<script>
import ArticleComponent from '@/components/ArticleComponent.vue';
export default {
    name: 'BlogPageBlogs',
    components:{
        ArticleComponent
    },
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
.count_page {
  margin-bottom: 200px;
  &_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  &-number {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 52px;
    height: 52px;
    border: 1px solid rgb(205, 162, 116);
    border-radius: 52px;

    &-text {
      color: rgb(41, 47, 54);
      font-family: Jost;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      text-align: left;
      text-transform: capitalize;
    }
    &:hover {
      background: rgb(244, 240, 236);
      border: none;
      width: 52px;
      height: 52px;
      border-radius: 52px;
    }
  }
  &-svg:hover {
    fill: rgb(244, 240, 236);
    & circle {
      stroke: none;
    }
  }
}
.blog {
  &__title_left {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
    padding-bottom: 30px;
  }
}
.blog__page {
    margin-bottom: 51px;
}
</style>