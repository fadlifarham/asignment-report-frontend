<template>
  <b-row>
    <b-col lg="12">
    <div class="animated fadeIn">
      <div class="card">
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
          <div id="demo">
            <vue-virtual-table
                    :data="ptls"
                    :config="tableConfig"
                    :height="500"
                    :itemHeight="55"
                    :minWidth="1500"
                    :selectable="true"
                    :hoverHighlight="true"
                    :enableExport="true"
                    :language="'en'"
                    :bordered="true"
                    v-on:changeSelection="handleSelectionChange">
                <b-button variant="success" style="border-radius: 5px" slot="view" slot-scope="props" :href="'/createAssignment/viewReport/' + props.row.id">
                  <i class="fa fa-eye"></i>
                </b-button>
                <b-button v-b-modal.show variant="primary" style="border-radius: 5px" slot="edit" slot-scope="props" target="_blank" @click="showEdit(props.row.id)">
                  <i class="fa fa-edit"></i>
                </b-button>
                <b-button variant="danger" style="border-radius: 5px" slot="delete" slot-scope="props" target="_blank" @click="deleteAss(props.row.id)">
                  <i class="fa fa-trash-o"></i>
                </b-button>
            </vue-virtual-table >
          </div>
        <!-- <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right">Export to Excel</b-button> -->
        </div>
        <b-modal id="show" size="lg" title="Edit Assignmnet" @ok="edit()">
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
                <label>Assignment Class :</label>
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
             <b-form-group
                label="Difficult Level"
                label-for="difficulty_level"
                :label-cols="4"
                :horizontal="true">
                    <div id="demo">
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
            </b-form-group>
            <!-- <div class="form-group">
                <label>Dispose Team :</label>
                <div>
                    <multiselect
                        v-model="assignment_user"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="name"
                        track-by="id"
                        :options="assignment_user"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag">
                    </multiselect>
                </div>
            </div> -->
           </form>
        </b-modal>
    </div>
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
          name: 'demo',
          ptls: [],
          errors: [],
          project_number: '',
          io_number: '',
          assignment_id: '',
          assignment_class: '',
          assignment_tittle: '',
          assignment_desc: '',
          difficulty_level: '',
          tableConfig: [
                {prop: '_index', name: 'No ', numberFilter: true, summary: 'COUNT', width: 50},
                {prop: 'id', name: 'ID', searchable: true, sortable: true, width: 120},
                {prop: 'project_number', name: 'Project Number', searchable: true, sortable: true, width: 120},
                {prop: 'io_number', name: 'IO Number', searchable: true, sortable: true , width: 120},
                {prop: 'assignment_class', name: 'Assignment Class', filterable: true , width: 150},
                {prop: 'assignment_tittle', name: 'Assignment Title', width: 200},
                {prop: 'assignment_desc', name: 'Description', width: 300},
                {prop: 'difficulty_level', name: 'Level', numberFilter: true , width: 40},
                {prop: 'status', name: 'Status', filterable: true, width: 90},
                // {prop: 'team_name', name: 'Team Name', searchable: true,},
                // {prop: 'age', name: 'Age', numberFilter: true},
                {prop: '_action', name: 'View', actionName: 'view', width: 50},
                {prop: '_action', name: 'Edit', actionName: 'edit', width: 50},
                {prop: '_action', name: 'Delete', actionName: 'delete', width: 50}
            ],
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
                  temp = { id: response.data[i].id,
                          ptl_id: response.data[i].ptl_id,
                          project_number: response.data[i].project_number,
                          io_number: response.data[i].io_number,
                          assignment_class: response.data[i].assignment_class,
                          assignment_tittle: response.data[i].assignment_tittle,
                          assignment_desc: response.data[i].assignment_desc,
                          difficulty_level: response.data[i].difficulty_level,
                          status: response.data[i].status};
                this.ptls.push(temp);
              }
            console.log(this.ptls);
          })
        },
        showEdit(id){
        this.edits = true;
        console.log("id : " + id);
            this.$axios.get('assignment/detail/' + id).then(response => {
                this.assignment_id = response.data.id
                this.assignment_class = response.data.assignment_class
                this.assignment_tittle = response.data.assignment_tittle
                this.assignment_desc = response.data.assignment_desc
                this.project_number = response.data.project_number
                this.io_number = response.data.io_number
                this.difficulty_level = response.data.difficulty_level
                // this.assignment_user = response.data.assignment_user
                // this.assignment_report = response.data.assignment_report
                console.log(response.data)
            }
            );
        },
        edit(ptls){
          const fd = new FormData();
              fd.append('_method', 'POST');
              fd.set('id', this.id);
              fd.set('project_number', this.project_number);
              fd.set('io_number', this.io_number);
              fd.set('assignment_class', this.assignment_class);
              fd.set('assignment_tittle', this.assignment_tittle);
              fd.set('assignment_desc', this.assignment_desc);
              fd.set('difficulty_level', this.difficulty_level);
              this.$axios.post('/assignment/edit', fd)
              .then(response => {
                  this.status = 'Edit Success!';
                  // console.log(this.status);
                  swal('Success', this.status, 'success');
                  this.$router.push('/')
              }).catch(error => {
                console.log(error.response.data.error);
                this.status = 'Please Fill in All Data!';
                // console.log(this.status);
                 swal('Failed', this.status, 'warning');
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
                    this.$router.push('/');
                    // this.readPtls();
                }).catch(error => {
                    console.log(error.response.data.error);
                })
            }
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
