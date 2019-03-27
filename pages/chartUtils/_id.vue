<template>
<b-row>
  <b-col sm="6">
  <b-card header="Performance Member">
    <b-row>
      <b-col>
        <b-row style="padding: 2px">
                            <b-col cols="6"><strong> Name</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{id}}</b-col>
                        </b-row>
      </b-col>
    </b-row>
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
    validate(params) {
      // return /^\d+$/.test(params.id)]
      // console.log("params " + params)
      return true
    },
    props: ['id'],
    data () {
        return {
          id:'',
        }
    },
    mounted(){
        this.getID();
    },
    methods: {
        getID() {
          
        }
    }
    
}
</script>
