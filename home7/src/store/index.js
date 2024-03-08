import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slides: [],
  },
  getters: {
    slides(state) {
      return state.slides;
    },
  },
  mutations: {
    SET_SLIDES(state, slides) {
      state.slides = slides;
    },
  },
  actions: {
    fetchSlides({ commit }) {
      commit('SET_SLIDES', [
        {
          alt: 'image_1',
          url: 'project_details_photo_1.jpeg',
        },
        {
          alt: 'image_2',
          url: 'article_1_1.jpg',
        },
        {
          alt: 'image_3',
          url: 'latest_post_img.jpg',
        },
      ]);
    },
  },
});
