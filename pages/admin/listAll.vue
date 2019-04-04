<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn">
          <div class="card">
            <b-card-header>
              <h5 id="traffic" class="card-title mb-0" style="padding : 5px">All Assignment</h5>
            </b-card-header>
            <div id="people"
              >
                <vue-virtual-table 
                    :config="columns"
                    :data="assignments"
                    :height="500"
                    :itemHeight="55"
                    :minWidth="1500"
                    :selectable="true"
                    :hoverHighlight="true"
                    :enableExport="true"
                    :borderedHeadings="true"
                    :language="'en'"
                    v-on:changeSelection="handleSelectionChange"
                    >
                    <b-button v-b-modal.show variant="primary" style="border-radius: 5px" slot="edit" slot-scope="props" target="_blank" @click="showEdit(props.row.id)">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <!-- <b-button variant="danger" style="border-radius: 5px" slot="delete" slot-scope="props" target="_blank" @click="deleteAss(props.row.id)">
                        <i class="fa fa-trash-o"></i>
                    </b-button>  -->
                </vue-virtual-table>
            </div>
          </div>
        <!-- <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button> -->
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
            <!-- <div class="form-group">
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
            </div> -->
           </form>
         </b-modal>
    </b-col>
  </b-row>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
  import StarRating from 'vue-star-rating'
  import Multiselect from 'vue-multiselect'
  import VueVirtualTable from 'vue-virtual-table'
    import Vue from 'vue';
    Vue.use(require('vue-moment'));
    import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');
    import JsonExcel from 'vue-json-excel'
    Vue.component('downloadExcel', JsonExcel)
    export default {
    components: {
        Multiselect,
        StarRating,
        VueVirtualTable
    },
    validate(params) {
      return true
    },
    props: ['id'],
    data () {
        return {
            name: 'people',
            assignments: [],
            errors: [],
            value: [],
            multi: [
            ],
            edits: false,
            assignment_id: '',
            project_number: '',
            io_number: '',
            assignment_class: '',
            assignment_tittle: '',
            assignment_desc: '',
            difficulty_level: '',
            status:'',
            is_deleted: '',
            engineer: [],
            assignment_user: [],
            columns: [
              { prop: '_index', name: ' ', summary: 'COUNT', width: 40},
              { prop: 'id', name: 'ID', numberFilter: true, sortable: true,searchable: true, width: 120 },
              { prop: 'project_number', name: 'Project Number', numberFilter: true, sortable: true,searchable: true, width: 150 },
              { prop: 'io_number', name: 'IO Number', numberFilter: true ,searchable: true, sortable: true, width: 150},
              { prop: 'assignment_class', name: 'Class', filterable: true, sortable: true, width: 170},
              { prop: 'assignment_tittle', name: 'Title',searchable: true, width: 150},
              { prop: 'assignment_desc', name: 'Description',searchable: true, width: 180},
              { prop: 'difficulty_level', name: 'Level', numberFilter: true, sortable: true, searchable: true, width: 50},
              { prop: 'name_created', name: 'Name Created', sortable: true, filterable: true, width: 170},
              // { prop: 'update_at', name: 'Update At', sortable: true, searchable: true, width: 100},
              { prop: 'team_name', name: 'Team Name', sortable: true, searchable: true, width: 150},
              { prop: 'status', name: 'Status', filterable: true, sortable: true, width: 90},
              { prop: '_action', name: 'Edit', actionName: 'edit', width: 50},
              // { prop: '_action', name: 'Delete', actionName: 'delete', width: 50}
            ],
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
                            // update_at: response.data[i].update_at,
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
                this.id = response.data.id
                this.assignment_id = response.data.assignment_id
                this.project_number = response.data.project_number
                this.io_number = response.data.io_number
                this.assignment_class = response.data.assignment_class
                this.assignment_tittle = response.data.assignment_tittle
                this.assignment_desc = response.data.assignment_desc
                this.difficulty_level = response.data.difficulty_level
                this.status = response.data.status
                this.is_deleted = response.data.is_deleted
                // this.value = response.data.assignment_user
                console.log(response.data)
            })
            .catch(e => {
                (error) => console.log(error)
            });
      },
      edit(){
        const fd = new FormData();
            fd.append('_method', 'POST');
            fd.set('id', this.id);
            fd.set('project_number', this.project_number);
            fd.set('io_number', this.io_number);
            fd.set('assignment_class', this.assignment_class);
            fd.set('assignment_tittle', this.assignment_tittle);
            fd.set('assignment_desc', this.assignment_desc);
            fd.set('difficulty_level', this.difficulty_level);
            fd.set('status', this.status);
            fd.set('is_deleted', this.is_deleted);
            this.$axios.post('/admin/edit_assignment/', fd)
            .then(response => {
                 this.status = 'Edit Success!';
                // console.log(this.status);
                swal('Success', this.status, 'success');
                this.$router.push('/');
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

