<template>
<div>
  <div class="project-details_content center">
    
    <h2 class="project-details__header">Minimal Look Bedrooms</h2>
    <p class="project-details__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
    </p>
    </div>
    <ProjectDetailsSlider />
</div>
</template>

<script>
import ProjectDetailsSlider from './ProjectDetailsSlider.vue'
export default {
    components:{
       ProjectDetailsSlider
    },
  name: 'ProjectDetailsContent',

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
.project-details{
    &_content{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 200px;
        margin-bottom: 200px;
        height: 437px;
    }
    &__header{
        width: 55%;
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        text-align: left;
    }
    &__text{
        margin-top: 11px;
        color: rgb(77, 80, 83);
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
        width: 55%;
    }
}

</style>