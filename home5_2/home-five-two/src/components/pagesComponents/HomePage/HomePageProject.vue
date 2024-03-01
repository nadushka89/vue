<template>
    <div>
    <div class="project center">
      <h2 class="project_title">Follow Our Projects</h2>
      <h3 class="project_text">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</h3>
    </div>
    <div class="interier center">
        <div class="interier_cards">
            <div class="interier_card" v-for="interier in interierList" :key="interier.id">
                <img :src="require('../../../assets/' + interier.img)" :alt="interier.img" :class="interier.class">
            <div class="interier_description">
                <div class="interier_description_left">
                    <p class="interier_name">{{ interier.title }}</p>
                    <p class="interier_desc">{{ interier.text }}</p>
                </div>
            </div>
            <div class="interier_description_right">
              <button class="interier_button">
                <svg width="10.004051" height="20.008301" viewBox="0 0 10.0041 20.0083" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path id="Vector" d="M1.00405 19.0042L9.00405 10.0042L1.00405 1.00415" stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HomePageProject',

    data() {
        return {
            interierList: [
                {
                    id: 0,
                    img: 'interier_1.png',
                    class: 'interier__item-image image_1',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture'
                },
                {
                    id: 1,
                    img: 'interier_2.png',
                    class: 'interier__item-image image_2',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture'
                },
                {
                    id: 2,
                    img: 'interier_3.png',
                    class: 'interier__item-image image_3',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture'
                },
                {
                    id: 3,
                    img: 'interier_4.png',
                    class: 'interier__item-image image_4',
                    title: 'Modern Kitchan',
                    text: 'Decor / Artchitecture'
                }
       ]
        };
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  height: 137px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 93px;

  &_title {
    max-width: 747px;
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: center;
  }
  &_text {
    max-width: 747px;
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: center;
  }
}
.interier {
  margin-bottom: 96px;
  &_cards {
    margin-top: 93px;
    display: grid;
    column-gap: 100px;
    row-gap: 56px;
    grid-template-columns: repeat(2, 550px);
    margin-bottom: 58px;
  }
  &_card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 547px;
    height: 619px;
    overflow: hidden;
  }
  &__item-image {
    width: 547px;
    height: 525px;

    background: rgb(196, 196, 196);
    overflow: hidden;
    margin-bottom: 24px;
  }
  &_img {
    position: relative;
    width: 686px;
    height: 1031px;
    left: -101px;
    right: -60px;
    top: -267px;
    bottom: -216px;
    overflow: hidden;
  }
  &_description {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 260px;
    // margin-bottom: 96px;
  }
  &_name {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
    margin-bottom: 4px;
  }
  &_desc {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
  }
  &_button {
    background: rgb(244, 240, 236);
    width: 70px;
    height: 70px;
    border-radius: 45px;
    border: none;
  }
}
.image {
  &_1 {
    border-radius: 0px 80px 0px 0px;
  }
  &_2 {
    border-radius: 80px 0px 0px 0px;
  }
  &_3 {
    border-radius: 0px 0px 80px 0px;
  }
  &_4 {
    border-radius: 0px 0px 0px 80px;
  }
}
</style>