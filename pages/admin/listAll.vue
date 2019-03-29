<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn">
          <div class="card">
            <b-card-header>
              <h5 id="traffic" class="card-title mb-0" style="padding : 5px">All Assignment</h5>
            </b-card-header>
            <b-card-body
              id="nav-scroller"
              ref="content"
              style="position:relative; height:500px; overflow-y:scroll;">
              <div id="people" style="width: 1500px">
                <v-client-table :data="assignments" :columns="columns" :options="options">
                    <b-button variant="primary" style="border-radius: 5px" slot="edit" slot-scope="props" target="_blank" :href="'/createAssignment/editReport/' + props.row.id">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <b-button variant="danger" style="border-radius: 5px" slot="delete" slot-scope="props" target="_blank" @click="deleteAss(props.row.id)">
                        <i class="fa fa-trash-o"></i>
                    </b-button>
                </v-client-table>
              </div>
            </b-card-body>
          </div>
        </div>
        <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
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
            name: 'people',
            assignments: [],
            errors: [],
            columns: ['id', 
                        'project_number', 
                        'io_number', 
                        'assignment_class', 
                        'assignment_tittle', 
                        'assignment_desc', 
                        'difficulty_level',
                        'name_created',
                        'created_at',
                        'update_at',
                        'team_name',
                        'status',
                        'edit',
                        'delete',
                        ],
            options: {
                filterByColumn: true,
                listColumns: {
                },
                headings: {
                  id: 'ID',
                  project_number: 'Project Number',
                  io_number: 'IO Number',
                  assignment_class: 'Assignment Class',
                  assignment_tittle: 'Assignment Title',
                  assignment_desc: 'Assignment Description',
                  difficulty_level: 'Difficulty Level',
                  name_created: 'Name Created',
                  created_at: 'Created Add',
                  update_at: 'Update at',
                  team_name: 'Team Name',
                  status: 'Status',
                  edit: 'edit',
                  delete: 'delete'
                },
                sortable: [
                  'id', 'project_number', 'io_number', 
                  'assignment_class', 'assignment_tittle', 'assignment_desc', 
                  'difficulty_level','name_created','created_at',
                  'update_at','team_name','status'
                ],
                filterable:[
                    'id', 'project_number', 'io_number', 
                    'assignment_class', 'assignment_tittle', 'assignment_desc', 
                    'difficulty_level','name_created','created_at',
                    'update_at','team_name','status'
                ],
                texts: {
                //   filterPlaceholder: 'filter'
                }
            }
        }
    },
    mounted(){
        this.readAssignment();
        // this.readTeam();
    },
    methods: {
        readAssignment() {
          var temp;
          this.$axios.get('admin/assignment').then(response => {
              for(let i=0;i<response.data.length;i++){
                  let teams = ''
                  for(let j=0; j<response.data[i].user.length;j++){
                      teams += response.data[i].user[j].full_name+', ';
                  }
                //   response.data.forEach(element=>{
                //     element.user.forEach(item => {
                //         teams += item.full_name + ', '
                //     })
                // })
                // this.assignments.push(teams)

                  temp = { id: response.data[i].id,
                            project_number: response.data[i].project_number,
                            io_number: response.data[i].io_number, 
                            assignment_class: response.data[i].assignment_class, 
                            assignment_tittle: response.data[i].assignment_tittle,
                            assignment_desc: response.data[i].assignment_desc,
                            difficulty_level: response.data[i].difficulty_level,
                            name_created: response.data[i].ptl.full_name,
                            created_at: response.data[i].created_at,
                            update_at: response.data[i].update_at,
                            team_name: teams,
                            status: response.data[i].status};
                this.assignments.push(temp);
              }
            console.log(this.assignments);
          })
        },
        readTeam(){
            var teams='';
            this.$axios.get('admin/assignment').then(response => {
                response.data.forEach(element=>{
                    element.user.forEach(item => {
                        teams += item.full_name + ', '
                    })
                })
                this.assignments.push(teams)
            //   for(let i=0; i<response.data.user.length; i++){
            //       teams={team_name: response.data.user[i].user.full_name +' '};
            //       console.log(i)
            //   this.assignments.push(teams);
            //   }
            // console.log(this.assignments);
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

      exportToExcel() {
        this.$axios.get('assignment/all/export').then(response => {
          this.apply = response.data
          let blob = new Blob([response.data], { type: 'application/xlsx'})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = 'All_Assignment.xlsx'
          link.click()
          // console.log(response.data)
        });
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

