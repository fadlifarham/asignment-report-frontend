<template>
  <b-row>
    <b-col lg="6">
      <div>
        <h3>Team Utilization</h3>
          <!-- <b-input-group>
            <b-col cols="4">
              <label><b>Team Utilization</b></label>
            </b-col>
            <b-col cols="4"></b-col>
            <b-col cols="4">
              <b-input-group>
                <b-form-input type="text" placeholder="Search"></b-form-input>
                <b-input-group-prepend>
                  <b-button variant="primary"><i class="fa fa-search"></i></b-button>
                </b-input-group-prepend>
                </b-input-group>
            </b-col>
          </b-input-group> -->
            <br><br>
        </div>
        <div class="animated fadeIn">
          <b-card>
            <!-- <table class="table table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Work Load</th>
                  <th>Work Quality</th>
                  <th>SPPD</th>
                  <th>Complite Assignment</th>
                  <th>Aksi</th>
                </tr>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td><img :src="user.foto" width="100" height="100"></td>
                </tr>
              </thead>
            </table>
            <br><br>
            <nav>
              <b-pagination :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
            </nav> -->
            <b-card-body>
              <div id="people">
                <v-client-table :data="users" :columns="columns" :options="options"></v-client-table>
              </div>
            </b-card-body>
          </b-card>
          <b-button variant="secondary" to="/form/toko" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
          <br><br><br>
        </div>
    </b-col>
    <b-col lg="6">
      <b-card>
      <b-row>
        <b-col sm="5">
          <h4 id="traffic" class="card-title mb-0">Traffic</h4>
          <div class="small text-muted">November 2017</div>
        </b-col>
        <b-col sm="7" class="d-none d-md-block">
          <b-button type="button" variant="primary" class="float-right"><i class="icon-cloud-download"></i></b-button>
          <b-button-toolbar class="float-right" aria-label="Toolbar with buttons group">
            <b-form-radio-group class="mr-3" id="radiosBtn" buttons button-variant="outline-secondary" v-model="selected" name="radiosBtn">
              <b-form-radio class="mx-0" value="Day">Day</b-form-radio>
              <b-form-radio class="mx-0" value="Month">Month</b-form-radio>
              <b-form-radio class="mx-0" value="Year">Year</b-form-radio>
            </b-form-radio-group>
          </b-button-toolbar>
        </b-col>
      </b-row>
      <div id="app">
        <fusioncharts
            :type="type"
            :width="width"
            :height="height"
            :dataFormat="dataFormat"
            :dataSource="dataSource">
        </fusioncharts>
    </div>
      <!-- <main-chart-example class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></main-chart-example>
      <div slot="footer">
        <ul>
          <li>
            <div class="text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="success" :value="40"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="info" :value="20"></b-progress>
          </li>
          <li>
            <div class="text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="warning" :value="60"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" variant="danger" :value="80"></b-progress>
          </li>
          <li class="d-none d-md-table-cell">
            <div class="text-muted">Bounce Rate</div>
            <strong>40.15%</strong>
            <b-progress height={} class="progress-xs mt-2" :precision="1" :value="40"></b-progress>
          </li>
        </ul>
      </div> -->
    </b-card>
    </b-col>
  </b-row>
</template>
<script>
  import Vue from 'vue';
  import VueFusionCharts from 'vue-fusioncharts';
  import FusionCharts from 'fusioncharts';
  import Charts from 'fusioncharts/fusioncharts.charts';

  //import the theme
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

  // register VueFusionCharts component
  Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

  var dataSource = {
    "chart": {
      "caption": "Countries With Most Oil Reserves [2017-18]",
      "subCaption": "In MMbbl = One Million barrels",
      "xAxisName": "Country",
      "yAxisName": "Reserves (MMbbl)",
      "numberSuffix": "K",
      "theme": "gammel"
    },
    "data": [
      {
        "label": "Venezuela",
        "value": "290"
      },
      {
        "label": "Saudi",
        "value": "260"
      },
      {
        "label": "Canada",
        "value": "180"
      },
      {
        "label": "Iran",
        "value": "140"
      },
      {
        "label": "Russia",
        "value": "115"
      },
      {
        "label": "UAE",
        "value": "100"
      },
      {
        "label": "US",
        "value": "30"
      },
      {
        "label": "China",
        "value": "30"
      }
    ]
  };

  var app = new Vue({
      el: '#app',
      data: {
          width: '100%',
          height: '400',
          type: 'column2d',
          dataFormat: 'json',
          dataSource: dataSource
      }
  });

  // import Vue from 'vue';
  Vue.use(require('vue-moment'));
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');
  const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }
    export default {
    data () {
        return {
            name: 'people',
            users: [],
            errors: [],
            columns: ['id', 'user_id', 'name', 'work_load', 'work_quality', 'sppd', 'complite_assignment', 'show'],
            options: {
                filterByColumn: true,
                listColumns: {
                },
                headings: {
                  id: 'ID',
                  user_id: 'User ID',
                  name: 'Name',
                  work_load: 'Work Load',
                  work_quality: 'Work Quality',
                  sppd: 'SPPD',
                  complite_assignment: 'Complite Assignment',
                  show: 'Show',
                },
                sortable: ['id', 'user_id', 'name', 'work_load', 'work_quality', 'sppd', 'complite_assignment', 'show'],
                filterable: ['id', 'user_id', 'name', 'work_load', 'work_quality', 'sppd', 'complite_assignment', ],
                // texts: {
                //   filterPlaceholder: 'filter'
                // }
            },
        }
    },
    mounted(){
        this.readUsers();
    },
    methods: {
        readUsers() {
            // this.$axios.get('/user')
            // .then(response => {
            //     this.users = response.data.users;
            //     console.log(response.data.users);
            // })
            var temp;
            this.$axios.get('/utilization/all').then(response => {
                for(let i=0;i<response.data.length;i++){
                    temp = { id: response.data[i].user.id, user_id: response.data[i].user_id, project_Number: response.data[i].project_number,
                    IO_Number: response.data[i].io_number, assignment_Class: response.data[i].assignment_class, assignment_Title: response.data[i].assignment_tittle,
                    assignment_Desc: response.data[i].assignment_desc, status: response.data[i].status};
                  this.alls.push(temp);
                }
              console.log(this.alls);
            })
        },
        getBadge (status) {
        return status === 'Approve' ? 'success'
          : status === 'Done' ? 'secondary'
            : status === 'On Progress' ? 'warning'
              : status === 'Cancel' ? 'danger' : 'primary'
      },
    }
    }
</script>
