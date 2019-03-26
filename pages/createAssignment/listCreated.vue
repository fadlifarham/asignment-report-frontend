<template>
  <b-row>
    <b-col lg="12">
        <!-- <div>
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
        </div> -->
    <div class="animated fadeIn">
      <b-card>
        <b-card-header>
          <b-input-group>
            <b-col sm="4">
              <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Assignment List</h5>
            </b-col>
            <b-col sm="4">
            </b-col>
            <b-col sm="4">
              <b-button variant="primary" to="/createAssignment/create" class="btn btn-primary btn-xs pull-right"> + Create New Assignment</b-button>
            </b-col>
          </b-input-group>
        </b-card-header>
        <b-card-body
          id="nav-scroller"
          ref="content"
          style="position:relative; height:300px; overflow-y:scroll;">
          <div id="demo" style="width: 1500px" >
            <v-client-table :data="ptls" :columns="columns" :options="options">
                <a slot="view" slot-scope="props" :href="'/createAssignment/viewReport/' + props.row.id">
                  <i class="fa fa-eye"></i>
                </a>
                <a slot="edit" slot-scope="props" target="_blank" :href="'/createAssignment/editReport/' + props.row.id">
                  <i class="fa fa-edit"></i>
                </a>
                <a slot="delete" slot-scope="props" target="_blank" :href="'/createAssignment/viewReport/' + props.row.id">
                  <i class="fa fa-trash-o"></i>
                </a>
                  <!-- <a slot="edit" slot-scope="props" class="fa fa-edit" :href="edit(props.row.columns)"></a> -->
                  <!-- <b-button v-on:click="edit(row.id)" class="btn btn-primary"><i class="fa fa-edit"></i></b-button> -->
                  <!-- <b-button v-on:click="delete(props.id)" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i></b-button> --> 
            </v-client-table>
          </div>
        </b-card-body>
        <br>
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
            'id', 'ptl_id', 'project_number', 'io_number', 'assignment_class', 'assignment_tittle',
            'assignment_status', 'view', 'edit', 'delete'
          ],   
          options: {
                filterByColumn: true,
                listColumns: {
                },
                headings: {
                  id: 'ID',
                  ptl_id: 'PTL ID',
                  project_number: 'Project Number',
                  io_number: 'IO Number',
                  assignment_class: 'Assignment Class',
                  assignment_tittle: 'Assignment Title',
                  assignment_status: 'Assignment Status',
                  view: 'View',
                  edit: 'Edit',
                  delete: 'Delete',
                },
                sortable: [
                  'id', 'ptl_id', 'project_number', 'io_number', 'assignment_class', 'assignment_tittle', 'assignment_status'
                ],
                filterable: [
                  'id', 'ptl_id', 'project_number', 'io_number', 'assignment_class', 'assignment_tittle', 'assignment_status'
                ],
                texts: {
                  filterPlaceholder: 'filter'
                },
                perPage: 10,
                perPageValues: [10,25,50,100]
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
                  temp = { id: response.data[i].id, ptl_id: response.data[i].ptl_id, project_number: response.data[i].project_number,
                  IO_number: response.data[i].io_number, assignment_class: response.data[i].assignment_class, assignment_tittle: response.data[i].assignment_tittle,
                  assignment_desc: response.data[i].assignment_desc, assignment_status: response.data[i].status};
                this.ptls.push(temp);
              }
            console.log(this.ptls);
          })
        },
        read() {
            this.$axios.get('assignment/ptl')
            .then(response => {
                this.ptls = response.data;
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
        },
        // show:function () {
        //         this.ID = 'GET COW ID HERE'
        //       var data = new FormData()
        //       data.append('function','show')
        //         data.append('ID',this.ID)
        //       axios.post(this.url,data)
        //           .then( function (response ) {
        //       }.bind(this)).catch(function (error) {

        //       })

        //     },
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
  .glyphicon.glyphicon-eye-open {
    width: 16px;
    display: block;
    margin: 0 auto;
  }
</style>
