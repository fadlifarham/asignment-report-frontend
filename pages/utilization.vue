<template>
<div class="animated fadeIn">
          <b-card header="Team Utilzation">
            <b-card-body
            id="nav-scroller"
            ref="content"
            style="position:relative; height:500px; overflow-y:scroll;">
              <div id="utils">
                <v-client-table :data="utils" :columns="columns" :options="options">
                  <b-button v-b-modal.chart variant="primary" style="border-radius: 5px" slot="show" @click="setData(props.row.work_load, props.row.work_quality, props.row.sppd, props.row.complete_assignment)"
                    slot-scope="props">
                    <i class="fa fa-bar-chart"></i>
                  </b-button>
                </v-client-table>
              </div>
            </b-card-body>
          </b-card>
          <b-button variant="secondary" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
    <div>
      <b-modal id="chart" size="md" title="Performance Member">
        <b-card> 
            <div class="chart-wrapper">
              <utilization-bar
                :chart-data="dataCollection"
              />
            </div>
          </b-card>
      </b-modal>
    </div>
</div>

</template>
<script>
  // import BarExample from '~/components/charts/BarExample'
  import UtilizationBar from '~/components/charts/UtilizationBar'
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
        UtilizationBar,
      },
    data () {
        return {
            chartData: '',
            name: 'utils',
            id:'',
            utils: [],
            errors: [],
            dataCollection: [],
            opsi: ['Work Load', 'Work Quality', 'SPPD', 'Complite Assignment'],
            columns: ['user_id', 'full_name', 'work_load', 'work_quality', 'sppd', 'complete_assignment', 'show'],
            options: {
                filterByColumn: true,
                listColumns: {
                },
                headings: {
                  id: '',
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
                    temp = {
                      id: response.data[i].id,
                      user_id: response.data[i].user_id,
                      full_name: response.data[i].user.full_name,
                      work_load: response.data[i].work_load,
                      work_quality: response.data[i].work_quality,
                      sppd: response.data[i].sppd,
                      complete_assignment: response.data[i].complete_assignment
                    };
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

        setData(work_load, work_quality, sppd, complete_assignment) {
          // console.log("WL : " + work_load)
          this.dataCollection = {
            // labels: ['Work Load', 'Work Quality', 'SPPD', 'Complite Assignment'],
            datasets: [
              {
                label: 'Work Load',
                backgroundColor: '#9999ff',
                data: [work_load]
              },
              {
                label: 'Work Quality',
                backgroundColor: '#79d2a6',
                data: [work_quality]
              },
              {
                label: 'SPPD',
                backgroundColor: '#ff8080',
                data: [sppd]
              },
              {
                label: 'Complete Assignment',
                backgroundColor: '#ffff4d',
                data: [complete_assignment]
              }

            ]
          }
        }
      }
    }
</script>
