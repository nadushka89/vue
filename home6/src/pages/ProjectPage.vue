<template>
    <div>
        <HeaderComponent />
        <ProjectPageBanner />
        <ProjectPageContent />
        <FooterComponent />

    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ProjectPageBanner from '../components/pagesComponents/ProjectPage/ProjectPageBanner'
import ProjectPageContent from '../components/pagesComponents/ProjectPage/ProjectPageContent'
import FooterComponent from '../components/FooterComponent.vue'
export default {
    name: 'BlogPage',
    components: {
        HeaderComponent,
        ProjectPageBanner,
        ProjectPageContent,
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