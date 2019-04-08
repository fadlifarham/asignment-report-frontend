<template>
  <b-row>
    <b-col lg="12">
    <div class="animated fadeIn">
        <b-card-header>
          <b-input-group>
            <b-col sm="4">
              <h5 id="label" class="card-title mb-0" style="padding : 5px">List Report</h5>
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
          style="position:relative; height:600px;">
          <div id="demo">
            <no-ssr placeholder="Loading...">
            <virtual-table
              :config="columns"
              :data="ars"
              :height="500"
              :itemHeight="55"
              :minWidth="1700"
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
                </b-button> -->
            </virtual-table>
            </no-ssr>
          </div>
        </b-card-body>
        <!-- <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button> -->
        </div>
        <b-modal id="show" size="md" title="Edit Report" @ok="edit()">
           <form @submit.prevent ="edit()">
             <b-form-group
              label="Assignment ID "
              label-for="assignment_id"
              :label-cols="4"
              :horizontal="true"> : {{assignment_id}}
            </b-form-group>
            <b-form-group
              label="Assignment Type"
              label-for="assignment_type">
              <b-form-select
                :plain="true"
                :options="['Pre-Sales','Aktivasi','Pembangunan','Pemeliharaan']"
                value="Assignment Type"
                style="border-radius: 5px"
                v-model="assignment_type">
              </b-form-select>
            </b-form-group>
            <b-form-group
              label="Date Work"
              label-for="date_work">
              <b-form-input
                type="date"
                label="Date work"
                label-for="date_work"
                v-model="date_work"
                style="border-radius: 5px; vertical-align: center">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="Time Start"
              label-for="time_start">
              <b-form-input type="time"
                v-model="time_start"
                style="border-radius: 5px">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="Time At"
              label-for="time_at">
              <b-form-input type="time"
                v-model="time_at"
                style="border-radius: 5px">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="Time Job Finish"
              label-for="time_job_finish">
              <b-form-input type="time"
                v-model="time_job_finish"
                style="border-radius: 5px">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="Time End"
              label-for="time_end">
              <b-form-input type="time"
                v-model="time_end"
                style="border-radius: 5px">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="Company"
              label-for="company">
              <b-form-input type="text"
                v-model="company"
                style="border-radius: 5px">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="Address"
              label-for="address">
              <b-form-input type="text"
                v-model="address"
                style="border-radius: 5px">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="Contact Person"
              label-for="cp">
              <b-form-input type="text"
                v-model="cp"
                style="border-radius: 5px">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="PIC Onsite"
              label-for="pic">
              <b-form-input type="text"
                v-model="pic"
                style="border-radius: 5px">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="SPPD Status"
              label-for="sppd_status">
              <b-form-radio-group id="basicInlineRadios"
                :plain="true"
                :options="[
                    {text: 'YA ',value: '1'},
                    {text: 'TIDAK ',value: '2'}
                ]"
                :checked="2"
                v-model="sppd_status">
              </b-form-radio-group>
            </b-form-group>
            <b-form-group
              label="Day Number"
              label-for="day_number">
              <b-form-input type="number"
                v-model="day_number"
                style="border-radius: 5px">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="Brief of Work Carried Out"
              label-for="brief_work">
              <textarea class="form-control"
                v-model="brief_work"
                rows="6" >
              </textarea>
            </b-form-group>
            <b-form-group
              label="Result of Assignment & Further Action"
              label-for="result">
              <textarea class="form-control"
                v-model="result"
                rows="6">
              </textarea>
            </b-form-group>
           </form>
        </b-modal>
    </b-col>
  </b-row>
</template>
<script>
  import Vue from 'vue';
  Vue.use(require('vue-moment'));
  // import VueVirtualTable from 'vue-virtual-table'
  // import {ServerTable, ClientTable, Event} from 'vue-tables-2';
  //   Vue.use(ClientTable, {}, false, 'bootstrap4');
    export default {
    components: {
        // VueVirtualTable,
    },
    data () {
        return {
            id: '',
            assignment_id: '',
            assignment_type: '',
            time_record_id: '',
            customer_info_id: '',
            sppd_status: '',
            day_number: '',
            brief_work: '',
            other: '',
            result: '',
            // ptl_id: '',
            // assignment_class: '',
            // assignment_tittle: '',
            // assignment_desc: '',
            // project_number: '',
            // io_number: '',
            date_work: '',
            time_start: '',
            time_at: '',
            time_job_finish: '',
            time_end: '',
            company: '',
            address: '',
            cp: '',
            pic: '',
            files: [],
          name: 'demo',
          ars: [],
          errors: [],
          columns: [
              { prop: '_index', name: 'No', summary: 'COUNT', width: 40},
              { prop: 'assignment_id', name: 'ID', numberFilter: true, sortable: true, width: 120 },
              { prop: 'assignment_type', name: 'Type', filterable: true, sortable: true, width: 150 },
              { prop: 'sppd_status', name: 'SPPD Status', numberFilter: true, sortable: true, width: 80 },
              { prop: 'day_number', name: 'Day', numberFilter: true, sortable: true, width: 50 },
              // { prop: 'brief_work', name: 'Brief Work',searchable: true, width: 40 },
              // { prop: 'result', name: 'Result',searchable: true, width: 40 },
              { prop: 'ptl_id', name: 'PTL ID', numberFilter: true, sortable: true, width: 60 },
              { prop: 'project_number', name: 'Project Number', numberFilter: true, sortable: true, width: 130 },
              { prop: 'io_number', name: 'IO Number', numberFilter: true , sortable: true, width: 150},
              { prop: 'assignment_class', name: 'Class', filterable: true, sortable: true, width: 150},
              { prop: 'assignment_tittle', name: 'Title',searchable: true, width: 150},
              { prop: 'assignment_desc', name: 'Description',searchable: true, width: 170},
              { prop: 'difficulty_level', name: 'Level', numberFilter: true, sortable: true, width: 50},
              { prop: 'status', name: 'Status', filterable: true, sortable: true, width: 90},
              // { prop: 'attachment', name: 'Attachment',width: 120},
              { prop: '_action', name: 'Edit', actionName: 'edit', width: 50},
              // { prop: '_action', name: 'Delete', actionName: 'delete', width: 50}
          ],
        }
    },

    mounted(){
        this.readArs();
    },
    methods: {
        readArs() {
          var temp;
          this.$axios.get('admin/ar/').then(response => {
              for(let i=0;i<response.data.length;i++){
                  let files = ''
                  temp = {
                    id: response.data[i].id,
                    assignment_id: response.data[i].assignment_id,
                    assignment_type: response.data[i].assignment_type,
                    sppd_status: response.data[i].sppd_status,
                    day_number: response.data[i].day_number,
                    // brief_work: response.data[i].brief_work,
                    // other: response.data[i].other,
                    // result: response.data[i].result,
                    ptl_id: response.data[i].assignment.ptl_id,
                    project_number: response.data[i].assignment.project_number,
                    io_number: response.data[i].assignment.io_number,
                    assignment_class: response.data[i].assignment.assignment_class,
                    assignment_tittle: response.data[i].assignment.assignment_tittle,
                    assignment_desc: response.data[i].assignment.assignment_desc,
                    difficulty_level: response.data[i].assignment.difficulty_level,
                    status: response.data[i].assignment.status,
                    file: response.data[i].file };
                this.ars.push(temp);
              }
            console.log(this.ars);
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
        showEdit(id){
        this.edits = true;
        console.log("id : " + id);
            this.$axios.get('/admin/edit_assignment_report/' + id).then(response => {
                this.id = response.data.id
                this.assignment_id = response.data.assignment_id
                this.time_record_id = response.data.time_record_id
                this.customer_info_id = response.data.customer_info_id
                this.assignment_type = response.data.assignment_type
                this.date_work = response.data.time_record.date_work
                this.time_start = response.data.time_record.time_start
                this.time_at = response.data.time_record.time_at
                this.time_job_finish = response.data.time_record.time_job_finish
                this.time_end = response.data.time_record.time_end
                this.company = response.data.customer_info.company
                this.address = response.data.customer_info.address
                this.pic = response.data.customer_info.pic
                this.cp = response.data.customer_info.cp
                this.sppd_status = response.data.sppd_status
                this.day_number = response.data.day_number
                this.brief_work = response.data.brief_work
                this.result = response.data.result
                this.other = response.data.other
                console.log(response.data)
            }
            );
        },
        edit(){
          const fd = new FormData();
              fd.append('_method', 'POST');
              fd.set('id', this.id);
              fd.set('date_work', this.date_work);
              fd.set('time_start', this.time_start);
              fd.set('time_at', this.time_at);
              fd.set('time_job_finish', this.time_job_finish);
              fd.set('time_end', this.time_end);
              fd.set('company', this.company);
              fd.set('address', this.address);
              fd.set('cp', this.cp);
              fd.set('pic', this.pic);
              fd.set('assignment_type', this.assignment_type);
              fd.set('sppd_status', this.sppd_status);
              fd.set('day_number', this.day_number);
              fd.set('brief_work', this.brief_work);
              fd.set('result', this.result);

              this.$axios.post('/admin/edit_assignment_report', fd)
              .then(response => {
                  this.status = 'Update Profile Success!';
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
        removeFile(file) {
          this.$refs.vue_clip.removeFile(file)
        }
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
