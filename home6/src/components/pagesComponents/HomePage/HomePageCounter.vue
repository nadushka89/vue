<template>
    <div class="counter center">
      <div class="counter_project">
        <div class="counter_num">
          <div class="counter_number">12</div>
          <div class="counter_text">Years Of Experiance</div>
        </div>
        <svg width="1.000000" height="130.000000" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <defs />
          <line id="Line" x1="0.500000" y1="0.000000" x2="0.500000" y2="130.000000" stroke="#CDA274" stroke-opacity="1.000000" stroke-width="1.000000" />
        </svg>
        <div class="counter_num">
          <div class="counter_number">85</div>
          <div class="counter_text">Success Project</div>
        </div>
        <svg width="1.000000" height="130.000000" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <defs />
          <line id="Line" x1="0.500000" y1="0.000000" x2="0.500000" y2="130.000000" stroke="#CDA274" stroke-opacity="1.000000" stroke-width="1.000000" />
        </svg>
        <div class="counter_num">
          <div class="counter_number">15</div>
          <div class="counter_text">Active Project</div>
        </div>
        <svg width="1.000000" height="130.000000" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Pixso.</desc>
          <defs />
          <line id="Line" x1="0.500000" y1="0.000000" x2="0.500000" y2="130.000000" stroke="#CDA274" stroke-opacity="1.000000" stroke-width="1.000000" />
        </svg>
        <div class="counter_num">
          <div class="counter_number">95</div>
          <div class="counter_text">Happy CUstomers</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'HomePageCounter',

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
.counter {
  background-color: rgb(244, 240, 236);
  height: 457px;
  margin-bottom: 96px;
  &_project {
    display: flex;
    justify-content: space-between;
    padding-top: 151px;
  }
  &_num {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  &_number {
    color: rgb(205, 162, 116);
    font-family: DM Serif Display;
    font-size: 85px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
  }

  &_text {
    color: rgb(77, 80, 83);
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;
  }
  &_line {
    width: 130px;
    height: 0;
    left: 246.5px;
    top: 18px;
    transform: rotate(90deg);
    border: 1px solid rgb(205, 162, 116);
  }
}
</style>