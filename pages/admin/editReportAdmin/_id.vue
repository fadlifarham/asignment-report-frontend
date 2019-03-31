<template>
  <b-row>
    <b-col lg="7">
        <b-form-group
            label="Assignment ID "
            label-for="assignment_id"
            :label-cols="4"
            :horizontal="true"> : {{assignment_id}}
            <!-- <b-form-input  id="assignmentId" type="text"></b-form-input> -->
          </b-form-group>
        <b-form-group
            label="Assignment Class"
            label-for="assignment_class"
            :label-cols="4"
            :horizontal="true"> : {{assignment_class}}
            <!-- <b-form-input  id="assignmentClass" type="text"></b-form-input> -->
          </b-form-group>
        <b-form-group
            label="Assignment Title"
            label-for="assignment_title"
            :label-cols="4"
            :horizontal="true">  : {{assignment_title}}
            <!-- <b-form-input  id="assignmentTitle" type="text"></b-form-input> -->
          </b-form-group>
    </b-col>
    <b-col lg="12">
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px"><strong>System Status</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Assignment Type</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-select id="assignment_type"
                                    :plain="true"
                                    :options="['Pre-Sales','Aktivasi','Pembangunan','Pemeliharaan']"
                                    value="Assignment Type"
                                    style="border-radius: 5px"
                                    v-model="assignment_type">
                                </b-form-select>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Project Number</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="project_number"
                                    v-model="project_number"
                                    placeholder="project number"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">IO Number</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="io_number"
                                    v-model="io_number"
                                    placeholder="IO number"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><strong>Time record</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Working Date</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="date"
                                    id="date_work"
                                    v-model="date_work"
                                    style="border-radius: 5px; vertical-align: center">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Start</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time"
                                    id="time_start"
                                    v-model="time_start"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Arrived at location</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time"
                                    id="time_at"
                                    v-model="time_at"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Job Finish</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time"
                                    id="time_job_finish"
                                    v-model="time_job_finish"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">End</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time"
                                    id="time_end"
                                    v-model="time_end"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 4px">
                    <b-col>
                        <b-row style="padding: 2px"><strong>Customer Information</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Company</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="company"
                                    v-model="company"
                                    placeholder="company"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Address</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="address"
                                    v-model="address"
                                    placeholder="address"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Contact Person</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="cp"
                                    v-model="cp"
                                    placeholder="contact person"
                                    style="border-radius: 5px">
                                </b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">PIC Onsite</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text"
                                    id="pic"
                                    v-model="pic"
                                    placeholder="PIC onsite"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><br></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4"><strong>SPPD Status</strong></b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-radio-group id="basicInlineRadios"
                                :plain="true"
                                :options="[
                                    {text: 'YA ',value: '1'},
                                    {text: 'TIDAK ',value: '2'}
                                ]"
                                :checked="2">
                                </b-form-radio-group>
                            </b-col>
                        </b-row>
                        <b-row style="padding-top: 25px; padding-bottom: 25px; padding-left: 2px; padding-right: 2px">
                            <b-col sm="4">Number of day</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="number"
                                    id="day_number"
                                    v-model="day_number"
                                    placeholder="number of day"
                                    style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Type</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-select
                                    :plain="true"
                                    :options="['Daily','Continue day']"
                                    style="border-radius: 5px">
                                </b-form-select>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                <b-col>
                    <b-form-group>
                        <label for="brief_work"><strong>Brief of Work Carried Out</strong></label>
                        <textarea class="form-control"
                            id="brief_work"
                            v-model="brief_work"
                            placeholder="Brief of Work Carried Out"
                            rows="6" ></textarea>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group>
                        <label for="result"><strong>Result of Assignment & Further Action</strong></label>
                        <textarea class="form-control"
                            id="result"
                            v-model="result"
                            placeholder="Result of Assignment & Further Action"
                            rows="6"></textarea>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 10px">
                <b-col>
                    <b-row style="padding: 6px"><strong>Attachment</strong></b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">BAI</b-col>
                        <b-col sm="5"><b-form-file id="bai" :plain="true" v-model="bai" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">TNC</b-col>
                        <b-col sm="5"><b-form-file id="tnc" :plain="true" v-model="tnc" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">Selfie/Wefie at Site with time/location stamp</b-col>
                        <b-col sm="5"><b-form-file id="photo" :plain="true" v-model="photo" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">Other</b-col>
                        <b-col sm="5"><b-form-file id="photo" :plain="true" v-model="photo" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row>
            <b-col style="padding: 10px" class="text-right">
                    <b-button @click="addStore" size="lg" variant="primary" style="margin: 10px">Submit for Approval</b-button>
                    <b-button @click="reset" size="lg" variant="danger" style="margin: 10px">Delete and back</b-button>
            </b-col>
            </b-row>
        </div>
        <br>
        <table class="table table-striped table--middle table-responsive">
          <thead>
            <tr>

            </tr>
            <!-- <tr v-for="assignment_report in assignment_report" :key="assignment_report.id">
              <td>{{ assignment_report.id }}</td>
              <td>{{ assignment_report.name }}</td>
              <td>{{ assignment_report.email }}</td>
              <td><img :src="user.foto" width="100" height="100"></td>
            </tr> -->
          </thead>
        </table>
    </b-col>
  </b-row>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
    components: {
        StarRating
    },
    validate(params) {
      // return /^\d+$/.test(params.id)]
      // console.log("params " + params)
      return true
    },
    props: ['id'],
    data () {
        return {
            assignment_id: '',
            assignment_type: '',
            time_record_id: '',
            customer_info_id: '',
            sppd_status: '',
            day_number: '',
            brief_work: '',
            other: '',
            result: '',
            ptl_id: '',
            assignment_class: '',
            assignment_tittle: '',
            assignment_desc: '',
            project_number: '',
            io_number: '',
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
            // assignment_user:[],
            // assignment_report:[],
            // user_id:[],
            // rating: 0,
            errors: [],
        }
    },
    mounted(){
        this.getAssignment();
    },
    methods: {
        getAssignment() {
            console.log("id : " + this.$route.params.id);
            this.$axios.get('/admin/edit_assignment_report/' + this.$route.params.id).then(response => {
                this.assignment_id = response.data.id
                this.assignment_type = response.data.assignment_type
                this.time_record_id = response.data.time_record_id
                this.customer_info_id = response.data.customer_info_id
                this.sppd_status = response.data.sppd_status
                this.day_number = response.data.day_number
                this.brief_work = response.data.brief_work
                this.other = response.data.other
                this.result = response.data.result
                this.ptl_id = response.data.assignment.ptl_id
                this.assignment_class = response.data.assignment.assignment_class
                this.assignment_tittle = response.data.assignment.assignment_tittle
                this.assignment_desc = response.data.assignment.assignment_desc
                this.project_number = response.data.assignment.project_number
                this.io_number = response.data.assignment.io_number
                // this.difficulty_level = response.data.difficulty_level
                // this.assignment_user = response.data.assignment_user
                // this.assignment_report = response.data.assignment_report
                this.date_work = response.data.time_record.date_work
                this.time_start = response.data.time_record.time_start
                this.time_at = response.data.time_record.time_at
                this.time_job_finish = response.data.time_record.time_job_finish
                this.time_end = response.data.time_record.time_end
                this.company = response.data.customer_info.company
                this.address = response.data.customer_info.address
                this.pic = response.data.customer_info.pic
                this.cp = response.data.customer_info.cp
                this.files = response.data.file
                console.log(response.data)
            }
            );
        },
        approve(){
            this.$axios.post('/assignment/edit', {
                assignment_id: this.assignment_id,
                assignment_type:  this.assignment_type,
                time_record_id: this.time_record_id,
                customer_info_id: this.customer_info_id,
                sppd_status: this.sppd_status,
                day_number: this.day_number,
                brief_work: this.brief_work,
                other: this.other,
                result: this.result,
                ptl_id: this.ptl_id,
                assignment_class: this.assignment_class,
                assignment_tittle: this.assignment_tittle,
                assignment_desc: this.assignment_desc,
                project_number: this.project_number,
                io_number: this.io_number,
                // this.difficulty_level = response.data.difficulty_level
                // this.assignment_user = response.data.assignment_user
                // this.assignment_report = response.data.assignment_report
                date_work: this.date_work,
                time_start: this.time_start,
                time_at: this.time_at,
                time_job_finish: this.time_job_finish,
                time_end: this.time_end,
                company: this.company,
                address: this.address,
                pic: this.pic,
                cp: this.cp,
                files: this.files
            }).then(response => {
                this.status = 'Assignment Approved Success!';
                console.log(this.status);
                swal('Success', this.status, 'success');
                this.reset();
            }, response => {
                this.status = 'Failed';
                console.log("ass : " + this.assignment_id);
                console.log(this.project_number);
                swal('Failed', this.status, 'warning');
            })
        },
        setRating: function(rating){
            this.rating= rating;
            // console.log(this.rating);
      },
    },

    middleware: "admin"
}
</script>
