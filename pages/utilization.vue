<template>
<div class="animated fadeIn">
    <b-card-group columns class="card-columns cols-2">
          <b-card header="Team Utilzation">
            <b-card-body
            id="nav-scroller"
            ref="content"
            style="position:relative; height:500px; overflow-y:scroll;">
              <div id="utils" style="width: 800px">
                <v-client-table :data="utils" :columns="columns" :options="options">
                  <a slot="show" @click="setGraph(props.row.work_load, props.row.work_quality, props.row.sppd, props.row.complete_assignment)"
                    slot-scope="props">
                    <i class="fa fa-bar-chart"></i>
                  </a>
                </v-client-table>
              </div>
            </b-card-body>
          </b-card>
          <b-button variant="secondary" to="/form/toko" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
          <b-card header="Performance Member">
            <div class="chart-wrapper">
                <!-- v-if="loaded"
                :chartdata="chartdata"
                :options="options" -->
              <bar-example
                :chartData="chartData"
              />
            </div>
          </b-card>
    </b-card-group>
</div>
</template>
<script>
  import BarExample from '~/components/charts/BarExample'
  // import { Bar } from 'vue-chartjs'
  // import VueCharts from 'vue-chartjs'
  // import { Pie, Bar, mixins } from 'vue-chartjs'

  import Vue from 'vue';
  Vue.use(require('vue-moment'));
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');

    export default {
      // extends: Bar,
      // mixins: [mixins.reactiveData],
      name: 'charts',
      components: {
        BarExample,
      },
    data () {
        return {
            chartData: '',
            name: 'utils',
            utils: [],
            errors: [],
            columns: ['user_id', 'full_name', 'work_load', 'work_quality', 'sppd', 'complete_assignment', 'show'],
            options: {
                filterByColumn: true,
                listColumns: {
                },
                headings: {
                  // id: 'ID',
                  user_id: 'User ID',
                  full_name: 'Name',
                  work_load: 'Work Load',
                  work_quality: 'Work Quality',
                  sppd: 'SPPD',
                  complete_assignment: 'Complete Assignment',
                  show: 'Show',
                },
                sortable: ['user_id', 'full_name', 'work_load', 'work_quality', 'sppd', 'complete_assignment', 'show'],
                filterable: ['user_id', 'full_name', 'work_load', 'work_quality', 'sppd', 'complete_assignment', ],
                // texts: {
                //   filterPlaceholder: 'filter'
                // }
                // chartdata: null,
                // responsive: true,
                // maintainAspectRatio: false
            },
        }
    },
    // extends: Bar,
    mounted(){
        this.readUsers();
        // this.renderChart(this.chartData)
    },
    methods: {
        readUsers() {
            var temp;
            this.$axios.get('/utilization/all').then(response => {
                for(let i=0;i<response.data.length;i++){
                    temp = { user_id: response.data[i].user_id, full_name: response.data[i].user.full_name,
                    work_load: response.data[i].work_load +' %', work_quality: response.data[i].work_quality +' %', sppd: response.data[i].sppd,
                    complete_assignment: response.data[i].complete_assignment};
                  this.utils.push(temp);
                }
              console.log(this.utils);
            })
        },
        // chart(){
        //   axios.get('https://localhost:44379/api/DailyStudents')
        //   .then(response => {
        //     // JSON responses are automatically parsed.
        //     const responseData = response.data
        //     this.chartData = {
        //       labels: ['Work Load', 'Work Quality', 'SPPD', 'Complite Assignment'],
        //       datasets: [
        //         label: 'Performance',
        //         backgroundColor: '#538cc6',
        //         data: responseData.map(item => item.totalStudents)
        //       ]
        //     }
        //   })
        //   .catch(e => {
        //     this.errors.push(e)
        //   })
        // },
        getBadge (status) {
        return status === 'Approve' ? 'success'
          : status === 'Done' ? 'secondary'
            : status === 'On Progress' ? 'warning'
              : status === 'Cancel' ? 'danger' : 'primary'
        },

        setGraph(work_load, work_quality, sppd, complete_assignment) {
          console.log("WL : " + work_load)
        }
      }
    }
</script>
