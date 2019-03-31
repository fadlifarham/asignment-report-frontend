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
              <div id="admin" style="width: 1500px">
                <v-client-table :data="assignments" :columns="columns" :options="options">
                    <b-button v-b-modal.show variant="primary" style="border-radius: 5px" slot="edit" slot-scope="props" target="_blank" @click="showEdit(props.row.id)">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <b-button variant="danger" style="border-radius: 5px" slot="delete" slot-scope="props" target="_blank" @click="deleteAss(props.row.id)">
                        <i class="fa fa-trash-o"></i>
                    </b-button>
                </v-client-table>
              </div>
            </b-card-body>
          </div>
        <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
        </div>

         <b-modal id="show" size="lg" title="Edit Assignmnet"  @ok="edit()">
           <form @submit.prevent ="edit()">
             <div class="form-group">
                <label>Project Number :</label>
                <input type="text" style="border-radius: 5px" placeholder="Project Number" class="form-control" v-model="project_number">
            </div>
            <div class="form-group">
                <label>IO Number :</label>
                <input type="text" style="border-radius: 5px" placeholder="IO Number" class="form-control" v-model="io_number">
            </div>
            <div class="form-group">
                <label>Assigment Class :</label>
                <b-form-select id="assignment_class"
                    :plain="true"
                    :options="['Testcomm','Survey','Installation','QC','BERTest','Supervise Vendor','Migration','Integration',
                    'Integration','Technical Meeting','Sales Activity','Asplan Drawing','Administration']"
                    value="Assignment Class"
                    style="border-radius: 5px"
                    v-model="assignment_class">
                </b-form-select>
            </div>
            <div class="form-group">
                <label>Assignment Title :</label>
                <input type="text" style="border-radius: 5px" placeholder="Assignment Title" class="form-control" v-model="assignment_tittle">
            </div>
            <div class="form-group">
                <label>Assignment Detail Instruction :</label>
                <textarea v-model="assignment_desc" class="form-control" rows="4" id="detail"></textarea>
            </div>
            <div class="form-group">
                <label>Difficult Level :</label>
                <div id="app">
                        <star-rating
                        v-model="difficulty_level"
                        v-bind:increment="1"
                        v-bind:max-rating="5"
                        inactive-color="#000"
                        active-color="orange"
                        v-bind:star-size="50"
                        @rating-selected ="setRating"
                        >
                        </star-rating>
                </div>
            </div>
            <div class="form-group">
                <label>Dispose Team :</label>
                <div>
                    <multiselect
                        v-model="value"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="name"
                        track-by="id"
                        :options="multi"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag">
                    </multiselect>
                </div>
            </div>
           </form>
         </b-modal>
    </b-col>
  </b-row>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
  import StarRating from 'vue-star-rating'
  import Multiselect from 'vue-multiselect'

  import Vue from 'vue';
  Vue.use(require('vue-moment'));
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');
    export default {
    components: {
        Multiselect,
        StarRating
    },
    validate(params) {
      return true
    },
    props: ['id'],
    data () {
        return {
            name: 'admin',
            assignments: [],
            errors: [],
            value: [],
            multi: [
                // { name: 'Vue.js', code: 'vu' },
                // { name: 'Javascript', code: 'js' },
                // { name: 'Open Source', code: 'os' }
            ],
            edits: false,
            project_number: '',
            io_number: '',
            assignment_class: '',
            assignment_tittle: '',
            assignment_desc: '',
            difficulty_level: '',
            assignment_user: [],
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
        // this.showEdit(id);
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
        showEdit(id){
        this.edits = true;
        console.log("id : " + id);
            this.$axios.get('/admin/edit_assignment/'+ id)
            .then(response => {
                this.project_number = response.data.project_number
                this.io_number = response.data.io_number
                this.assignment_class = response.data.assignment_class
                this.assignment_tittle = response.data.assignment_tittle
                this.assignment_desc = response.data.assignment_desc
                this.difficulty_level = response.data.difficulty_level
                this.value = response.data.assignment_user
                console.log(response.data)
            })
            .catch(e => {
                (error) => console.log(error)
            });
      },
      edit(){
        const fd = new FormData();
            fd.append('_method', 'POST');
            fd.set('project_number', this.project_number);
            fd.set('io_number', this.io_number);
            fd.set('assignment_class', this.assignment_class);
            fd.set('assignment_tittle', this.assignment_tittle);
            fd.set('assignment_desc', this.assignment_desc);
            fd.set('difficulty_level', this.difficulty_level);
            this.$axios.post('/admin/edit_assignment', fd)
            .then(response => {
                 this.status = 'Update Profile Success!';
                // console.log(this.status);
                swal('Success', this.status, 'success');
                this.readAssignment();
            })
      },
      addTag (newTag) {
        const tag = {
            id: newTag,
            name: newTag,
            code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        }
        this.options.push(tag)
        this.value.push(tag)
        console.log(this.value);
      },
      setRating: function(difficulty_level){
        this.difficulty_level= difficulty_level;
        // console.log(this.rating);
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
</style>

