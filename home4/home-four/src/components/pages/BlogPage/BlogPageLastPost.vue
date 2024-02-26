<template>
    <div class="latest_post center">
      <h1 class="latest_post_title">Latest Post</h1>
      <div class="latest_post_contents">
        <div class="latest_post_image">
          <img src="../../../assets/latest_post_img.jpg" alt="latest_post_img" class="latest_post_contents_img" />
        </div>
        <div class="latest_post_right">
          <div class="latest_post_right_title">Low Cost Latest Invented Interior Designing Ideas</div>
          <div class="latest_post_right_desc">
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
            <p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
            <div class="latest_post_right_item">
              <p class="latest_post_right_text">22 December,2022</p>
              <img src="../../../assets/row_left_blog.svg" alt="row_left_blog" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'BlogPageLastPost',

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
.latest_post {
  &_title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
    margin-bottom: 27px;
  }
  &_image {
    width: 569px;
    height: 478px;
    overflow: hidden;
    border-radius: 50px;
    background: rgb(196, 196, 196);
  }
  &_contents {
    display: flex;
    width: 1201px;
    height: 522px;
    box-sizing: border-box;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    padding-left: 16px;
    padding-top: 16px;
    gap: 65px;
    margin-bottom: 150px;
    &_img {
      width: 765px;
      height: 510px;
    }
  }
  &_right {
    max-width: 469px;
    &_text {
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 1%;
      text-align: left;
      text-transform: capitalize;
    }
    &_item {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 41px;
    }
    &_title {
      color: rgb(41, 47, 54);
      font-family: DM Serif Display;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      text-align: left;
      padding-top: 51.5px;
      margin-bottom: 22px;
    }

    &_desc {
      color: rgb(77, 80, 83);
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
    }
  }
}
</style>