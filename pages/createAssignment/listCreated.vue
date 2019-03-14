<template>
  <b-row>
    <b-col lg="12">
        <div>
          <b-input-group>
            <b-col sm="4">
            <b-button variant="primary" to="/createAssignment/create" class="form-actions" > + Create New Assignment</b-button>
            </b-col>
            <b-col sm="8">
              <b-input-group>
                <b-form-input type="text" placeholder="Search"></b-form-input>
                <b-input-group-prepend>
                  <b-button variant="primary"><i class="fa fa-search"></i></b-button>
                </b-input-group-prepend>
              </b-input-group>
            </b-col>
          </b-input-group>
            <br><br>
        </div>
    <div class="animated fadeIn">
      <b-card>
        <b-card-header>
          <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Assignment List</h5>
        </b-card-header>
        <b-card-body
        id="nav-scroller"
          ref="content"
          style="position:relative; height:300px; overflow-y:scroll;"
        >
          <div id="demo" style="width: 1500px">
            <v-client-table :data="ptls" :columns="columns" :options="options">
              <span slot="action" slot-scope="{row}"> 
                  <button v-b-modal.update v-on:click="show(row.id)" class="btn btn-success btn-xs"><i class="fa fa-eye"></i></button>
                  <button v-b-modal.update v-on:click="edit(row.id)" class="btn btn-primary"><i class="fa fa-edit"></i></button>
                  <button v-on:click="delete(row.id)" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i></button>
              </span>
            </v-client-table>
          </div>
        </b-card-body>
        <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
      </b-card>
        </div>
    </b-col>
  </b-row>
</template>
<script>
  import Vue from 'vue';
  Vue.use(require('vue-moment'));
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');
    export default {
    data () {
        return {
          name: 'demo',
          ptls: [],
          errors: [],
          columns: [
            'ID', 'PTL_ID', 'project_Number', 'IO_Number', 'assignment_Class', 'assignment_Title',
            'assignment_Status', 'action'
          ],   
          options: {
                filterByColumn: true,
                listColumns: {
                },
                headings: {
                  ID: 'ID',
                  PTL_ID: 'PTL_ID',
                  project_Number: 'project_Number',
                  IO_Number: 'IO_Number',
                  assignment_Class: 'assignment_Class',
                  assignment_Title: 'assignment_Title',
                  assignment_Status: 'assignment_Status',
                  action: 'action'
                },
                sortable: [
                  'ID', 'PTL_ID', 'project_Number', 'IO_Number', 'assignment_Class', 'assignment_Title', 'assignment_Status'
                ],
                texts: {
                  filterPlaceholder: 'filter'
                }
            }
        }
    },
    mounted(){
        this.readPtls();
    },
    methods: {
        readPtls() {
          var temp;
          this.$axios.get('assignment/ptl').then(response => {
              for(let i=0;i<response.data.length;i++){
                  temp = { ID: response.data[i].id, PTL_ID: response.data[i].ptl_id, project_Number: response.data[i].project_number,
                  IO_Number: response.data[i].io_number, assignment_Class: response.data[i].assignment_class, assignment_Title: response.data[i].assignment_tittle,
                  assignment_Desc: response.data[i].assignment_desc, assignment_Status: response.data[i].status};
                this.ptls.push(temp);
              }
            console.log(this.ptls);
          })
        },
        getBadge (status) {
        return status === 'On Progress' ? 'success'
          : status === 'Close' ? 'secondary'
            : status === 'Waiting Approvement' ? 'warning'
              : status === 'Cancel' ? 'danger' : 'primary'
        },
        scrollIntoView(evt) {
          evt.preventDefault()
          const href = evt.target.getAttribute('href')
          const el = href ? document.querySelector(href) : null
          if (el) {
            this.$refs.content.scrollTop = el.offsetTop
          }
        }
    }
    }
</script>
<style>
  table {
    counter-reset: section;
  }

  .no:before {
    counter-increment: section;
    content: counter(section);
  }
</style>
