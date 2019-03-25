<template>
<div class="animated fadeIn">
    <b-card-group columns class="card-columns cols-2">
          <b-card header="Team Utilization">
            <b-card-body>
              <div id="people">
                <v-client-table :data="users" :columns="columns" :options="options"></v-client-table>
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
              />
            </div>
          </b-card>
    </b-card-group>
</div>
</template>
<script>
  import BarExample from '~/components/charts/BarExample'
  import Vue from 'vue';
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
      name: 'charts',
      components: {
        BarExample,
      },
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
