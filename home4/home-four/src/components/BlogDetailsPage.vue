<template>
    <div>
        <HeaderComponent />
        <BlogDetailsPageBaner />
        <BlogDetailsPageArticles />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import BlogDetailsPageBaner from './pages/BlogDetailsPage/BlogDetailsPageBaner.vue'
import BlogDetailsPageArticles from './pages/BlogDetailsPage/BlogDetailsPageArticles.vue'

import FooterComponent from './FooterComponent.vue'

export default {
    name: 'BlogDetailsPage',
    components:{
        HeaderComponent,
        BlogDetailsPageBaner,
        BlogDetailsPageArticles,
        FooterComponent
    },
    data() {
        return {
           
    };
  },
  methods: {
    
  },
  
};
</script>

<style lang="scss" scoped>

</style>