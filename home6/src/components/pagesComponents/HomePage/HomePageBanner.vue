<template>
    <div class="banner center">
      <img src="../../../assets/Banner.png" alt="Banner" class="banner_img" />
      <div class="banner_content">
        <h1 class="banner_title">Let Your Home Be Unique</h1>
        <h3 class="banner_text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</h3>
        <button class="banner_button">
          Get Started
          <svg width="17.151062" height="16.005859" viewBox="0 0 17.1511 16.0059" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>Created with Pixso.</desc>
            <defs />
            <path id="Vector" d="M1.00992 7.93823L14.7331 7.80151M9.62808 1.41431L16.1511 7.93726L9.49667 14.5918" stroke="#CDA274" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'HomePageBanner',

    data() {
        return {
            
        };
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.banner {
  margin-top: 57px;
  height: 758px;
  margin-bottom: 96px;
  &_img {
    max-width: 1200px;
    height: 758px;
  }
  &_content {
    max-width: 434px;
    height: 342px;
    margin-top: -550px;
    margin-left: 52px;
    display: flex;
    flex-direction: column;
  }
  &_title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 65px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: left;
    max-width: 434px;
    height: 162px;
    margin-bottom: 18px;
  }
  &_text {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
    margin-bottom: 21px;
  }
  &_button {
    width: 220.14px;
    height: 75px;
    border-radius: 18px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: rgb(41, 47, 54);

    color: rgb(255, 255, 255);
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: center;
  }
}
</style>