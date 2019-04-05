<template>
<div class="animated fadeIn">
  <div class="card">
          <b-card-header>
              <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Team Utilization</h5>
          </b-card-header>
              <div id="utils">
                <vue-virtual-table 
                    :config="tableConfig"
                    :data="utils" 
                    :height="500"
                    :itemHeight="55"
                    :minWidth="1000"
                    :selectable="true"
                    :hoverHighlight="true"
                    :enableExport="true"
                    :language="'en'"
                    :bordered="true"
                    v-on:changeSelection="handleSelectionChange">
                    <b-button v-b-modal.chart variant="primary" style="border-radius: 5px" slot="show" @click="setData(props.row.work_load, props.row.work_quality, props.row.sppd, props.row.complete_assignment)"
                    slot-scope="props">
                    <i class="fa fa-bar-chart"></i>
                  </b-button>
                </vue-virtual-table>
              </div>
  </div>
          <!-- <b-button variant="secondary" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button> -->
    <div>
      <b-modal id="chart" size="lg" title="Performance Member">
        <b-card>
          <b-row>
            <b-col sm="6">
              <div class="chart-wrapper">
                <utilization-bar
                  :chart-data="dataCollectionLoad"
                />
              </div>
            </b-col>
            <b-col sm="6">
              <div class="chart-wrapper">
                <utilization-bar
                  :chart-data="dataCollectionQuality"
                />
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="6">
              <div class="chart-wrapper">
                <utilization-bar
                  :chart-data="dataCollectionSppd"
                />
              </div>
            </b-col>
            <b-col sm="6">
              <div class="chart-wrapper">
                <utilization-bar
                  :chart-data="dataCollectionComplete"
                />
              </div>
            </b-col>
          </b-row>
            
          </b-card>
      </b-modal>
    </div>
</div>

</template>
<script>
  import VueVirtualTable from 'vue-virtual-table'
  import UtilizationBar from '~/components/charts/UtilizationBar'

  import Vue from 'vue';
  Vue.use(require('vue-moment'));
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
  Vue.use(ClientTable, {}, false, 'bootstrap4');

    export default {
      // extends: Bar,
      // mixins: [mixins.reactiveData],
      name: 'charts',
      components: {
        VueVirtualTable,
        UtilizationBar,
      },
    data () {
        return {
            chartData: '',
            name: 'utils',
            id:'',
            utils: [],
            errors: [],
            dataCollectionLoad: [],
            dataCollectionQuality: [],
            dataCollectionSppd: [],
            dataCollectionComplete: [],
            opsi: ['Work Load', 'Work Quality', 'SPPD', 'Complite Assignment'],
            tableConfig: [
                {prop: '_index', name: 'No ', numberFilter: true, summary: 'COUNT', width: 40},
                {prop: 'full_name', name: ' Name', searchable: true, sortable: true, width: 120},
                {prop: 'user_id', name: ' User ID', numberFilter: true, sortable: true, width: 40},
                {prop: 'work_load', name: ' Work Load (%)', numberFilter: true, sortable: true, width: 60},
                {prop: 'work_quality', name: ' Work Quality (%)', numberFilter: true, sortable: true, width: 60},
                {prop: 'sppd', name: ' SPPD', numberFilter: true, sortable: true, width: 40},
                {prop: 'complete_assignment', name: ' Complite Assignment', numberFilter: true, sortable: true, width: 80},
                {prop: '_action', name: 'Show', actionName: 'show', width: 50}
            ],
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
          this.dataCollectionLoad = {
            datasets: [
              {
                
                label: 'Work Load (%)',
                backgroundColor: '#9999ff',
                data: [work_load],
                scales: {
                  yAxes: [{
                      ticks: {
                        stepSize: 50,
                        maxTicksLimit: 3
                      }
                  }]
                }
              },
            ],
          },
          this.dataCollectionQuality = {
            datasets: [
                {
                  label: 'Work Quality  (%)',
                  backgroundColor: '#79d2a6',
                  data: [work_quality]
                },
              ]
          },
          this.dataCollectionSppd = {
            datasets: [
                {
                  label: 'SPPD',
                  backgroundColor: '#ff8080',
                  data: [sppd]
                },
              ]
          },
          this.dataCollectionComplete = {
            datasets: [
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
