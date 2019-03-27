<template>
<b-row>
  <div class="chart-wrapper">
      <bar-example/>
    </div>
</b-row>
</template>
  
<script>
import BarExample from '~/components/charts/BarExample'
export default {
    name: 'charts',
      components: {
        BarExample,
    },
    data () {
        return {
        }
    },
    mounted(){
        // this.getID();
    },
    methods: {
        // getID() {
          
        // }
    }
    
}
</script>
