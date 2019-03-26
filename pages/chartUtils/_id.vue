<template>
<b-row>
  <b-col sm="6">
  <b-card header="Performance Member">
  <div class="chart-wrapper">
      <bar-example/>
    </div>
  </b-card>
  </b-col>
</b-row>
</template>
  
<script>
import BarExample from '~/components/charts/BarExample'
export default {
    name: 'charts',
      components: {
        BarExample,
    },
    
}
</script>
