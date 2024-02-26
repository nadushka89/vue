<template>
    <div>
        <HeaderComponent />
        <BlogPageBanner />
        <BlogPageLastPost />
        <BlogPageBlogs />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import BlogPageBanner from './pages/BlogPage/BlogPageBanner.vue'
import BlogPageLastPost from './pages/BlogPage/BlogPageLastPost.vue'
import BlogPageBlogs from './pages/BlogPage/BlogPageBlogs.vue'
import FooterComponent from './FooterComponent.vue'
export default {
    name: 'BlogPage',
    components: {
        HeaderComponent,
        BlogPageBanner,
        BlogPageLastPost,
        BlogPageBlogs,
        FooterComponent
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

</style>