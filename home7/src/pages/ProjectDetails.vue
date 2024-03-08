<template>
  <div>
    <HeaderComponent />

    <ProjectDetailsBanner />
    <ProjectDetailsContent />
    <FooterComponent />

  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ProjectDetailsBanner from '../components/pagesComponents/ProjectDetailsPage/ProjectDetailsBanner.vue'
import ProjectDetailsContent from '../components/pagesComponents/ProjectDetailsPage/ProjectDetailsContent.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  components: {
    HeaderComponent,
    ProjectDetailsBanner,
    ProjectDetailsContent,
    FooterComponent
  },
  name: 'ProjectDetails',
  

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