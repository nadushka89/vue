<template>
<section class="blog-details-page center">
    <div class="blog-details__wrap">
        <div class="blog-details">
            <div class="article" v-for="article in filterArticle" :key="article.id">
            <h2 class="article__title">{{ article.title }}</h2>
            <img class="article__img" :src="require('../../../assets/' + article.img)" :alt="article.img">
            <div class="article__info">
                <p class="article__info-data">26 December,2022</p>
                <p class="article__info-link">Interior / Home / Decore</p>
            </div>
            <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
            <br>
            <p class="article__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            <div class="info-block">
                <p class="info-block__quotation-marks">&#8221;</p>
                <p class="info-block__text">The details are not the details. They make the design.</p>
            </div>
            <h2 class="article__title">Design sprints are great</h2>
            <p class="article__text"> Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. </p>
            <div class="article__list">
                <div class="article__list-num">
                <p class="article__list-num-text">1</p>
                <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div class="article__list-num">
                <p class="article__list-num-text">2</p>
                <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                <div class="article__list-num">
                <p class="article__list-num-text">3</p>
                <p class="article__list-item">Contrary to popular belief.There are many ariations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
            </div>
            <img class="article__img article__img__2" src="../../../assets/article_1_1.jpg" alt="article 1_1">
            <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            </div>
        </div>
        <div class="tags">
            <div class="tags__buttons-wrap">
            <h2 class="tags__title">Tags</h2>
            <div class="tags__buttons">
                <button v-for="(btn, index) in buttonList" @click="filterClick(btn)" class="tags__buttons-item" :key="index">{{ btn }}</button>
            </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'BlogDetailsPageArticles',

    data() {
        return {
            findElement: '',
      contentArticles: [
        {
            id: 0,
            title: 'Let’s Get Solution for Building Construction Work',
            img: 'article.jpeg',
            tag: 'Kitchen',
        },
        {   
            id: 1,
            title: 'Bedroom design trends 2025: Conservatism and symmetry',
            img: 'bedroom.jpg',
            tag: 'Bedroom',
        },
        {
            id: 2,
            title: 'Interior Designs: The Spice of Life!',
            img: 'interier_3.png',
            tag: 'Building',
        },
        {
            id: 3,
            title: 'Designing Your Dreams into Reality',
            img: 'interier_1.png',
            tag: 'Architecture',
        },
        {
            id: 4,
            title: 'Make Life Beautiful',
            img: 'blog_2.jpg',
            tag: 'Kitchen Planning',
        },
        {
            id: 5,
            title: 'Design a Life You Love.',
            img: 'blog_5.jpg',
            tag: 'Bedroom',
        },
      ],
      buttonList: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom'],
    };
  },
  methods: {
    filterClick(item) {
      this.findElement = item;
    },
  },
  computed: {
    filterArticle() {
      return this.findElement ? this.contentArticles.filter((el) => el.tag.includes(this.findElement)) : this.contentArticles;
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  padding-left: calc(50% - 1200px / 2);
  padding-right: calc(50% - 1200px / 2);
}
.article {
  &__img {
    max-width: 799px;
    height: 539px;
    margin-bottom: 46px;
    border-radius: 50px;
    &__2 {
      height: 365px;
    }
  }
  &__title {
    max-width: 684px;
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
    margin-bottom: 11px;
  }
  &__info {
    display: flex;
    gap: 409px;
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
    text-transform: capitalize;
    margin-bottom: 48px;
  }
  &__text {
    max-width: 799px;
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
  }
  &__list {
    margin-top: 24px;
    margin-bottom: 44px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 732.39px;
    &-num {
      display: flex;
      gap: 14px;
      &-text {
        color: rgb(205, 162, 116);
        font-family: DM Serif Display;
        font-size: 20px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
      }
    }
    &-item {
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
.info {
  &-block {
    margin-bottom: 27px;
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 267px;
    border-radius: 50px;
    background: rgb(244, 240, 236);
    gap: 10px;
    &__quotation-marks {
      margin-top: 40px;
      margin-bottom: -40px;
      width: 106px;
      height: 133px;
      color: rgb(205, 162, 116);
      font-family: DM Serif Display;
      font-style: italic;
      font-size: 200px;
      font-weight: 400;
      line-height: 125%;
      text-align: center;
    }
    &__text {
      color: rgb(205, 162, 116);
      font-family: DM Serif Display;
      font-style: italic;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      width: 345px;
      height: 70px;
      text-align: center;
    }
  }
}
.tags {
    display: flex;
    
  &__title {
    color: rgb(41, 47, 54);
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
    margin-bottom: 24px;
  }
  &__buttons{
    display: flex;
    gap: 30px;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    &-item{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 9px 30px 9px 30px;
        border-radius: 10px;
        background: rgb(244, 240, 236);
        color: rgb(41, 47, 54);
        font-family: Jost;
        font-size: 18px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: center;
        border: none;
        &:hover{
            background: rgb(41, 47, 54);
            color: rgb(255, 255, 255);
    
        }
      }

  }
}
.blog-details {
  &__wrap {
    display: flex;
    gap: 57px;
  }
}
</style>