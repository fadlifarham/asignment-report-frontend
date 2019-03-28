<template>
  <b-row>
    <b-col lg="12">
    <div class="animated fadeIn">
        <b-card-header>
          <b-input-group>
            <b-col sm="4">
              <h5 id="label" class="card-title mb-0" style="padding : 5px">Assignment List</h5>
            </b-col>
            <b-col sm="4">
            </b-col>
            <b-col sm="4">
              <b-button variant="primary" to="/createAssignment/create" class="btn btn-primary btn-xs pull-right"> + Create New Assignment</b-button>
            </b-col>
          </b-input-group>
        </b-card-header>
        <b-card-body
          class="card"
          id="nav-scroller"
          ref="content"
          style="position:relative; height:500px; overflow-y:scroll;">
          <div id="demo" style="width: 1500px" >
            <v-client-table :data="ptls" :columns="columns" :options="options">
                <b-button variant="success" style="border-radius: 5px" slot="view" slot-scope="props" :href="'/createAssignment/viewReport/' + props.row.id">
                  <i class="fa fa-eye"></i>
                </b-button>
                <b-button variant="primary" style="border-radius: 5px" slot="edit" slot-scope="props" target="_blank" :href="'/createAssignment/editReport/' + props.row.id">
                  <i class="fa fa-edit"></i>
                </b-button>
                <b-button variant="danger" style="border-radius: 5px" slot="delete" slot-scope="props" target="_blank" @click="deleteAss(props.row.id)">
                  <i class="fa fa-trash-o"></i>
                </b-button>
                  <!-- <a slot="edit" slot-scope="props" class="fa fa-edit" :href="edit(props.row.columns)"></a> -->
                  <!-- <b-button v-on:click="edit(row.id)" class="btn btn-primary"><i class="fa fa-edit"></i></b-button> -->
                  <!-- <b-button v-on:click="delete(props.id)" class="btn btn-danger btn-xs"><i class="fa fa-trash-o"></i></b-button> -->
            </v-client-table>
          </div>
        </b-card-body>
        <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
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
                  io_number: response.data[i].io_number, assignment_class: response.data[i].assignment_class, assignment_tittle: response.data[i].assignment_tittle,
                  assignment_desc: response.data[i].assignment_desc, assignment_status: response.data[i].status};
                this.ptls.push(temp);
              }
            console.log(this.ptls);
          })
        },
        // read() {
        //     this.$axios.get('assignment/ptl')
        //     .then(response => {
        //         this.ptls = response.data;
        //         console.log(this.ptls);
        //     })
        // },
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
        deleteAss(id){
          console.log("id : " + id)
          if (confirm("Are you sure you want to delete this item?")) {
                this.$axios.post('assignment/delete/' + id)
                .then(response => {
                    this.status = 'Delete Success!';
                    console.log(this.status);
                    swal('Success', this.status, 'success');
                    this.readPtls();
                }).catch(error => {
                    console.log(error.response.data.error);
                })
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
    },

    middleware: "forPtl"

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
