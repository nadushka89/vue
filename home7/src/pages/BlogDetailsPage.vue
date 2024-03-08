<template>
    <div>
        <HeaderComponent />
        <BlogDetailsPageBaner />
        <BlogDetailsPageArticles />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import BlogDetailsPageBaner from '../components/pagesComponents/BlogDetailsPage/BlogDetailsPageBaner.vue'
import BlogDetailsPageArticles from '../components/pagesComponents/BlogDetailsPage/BlogDetailsPageArticles.vue'
import FooterComponent from '../components/FooterComponent.vue'

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