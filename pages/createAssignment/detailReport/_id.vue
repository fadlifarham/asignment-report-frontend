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
            :horizontal="true">  : {{assignment_tittle}}
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
                                {{assignment_type}}
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Project Number</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{project_number}}
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">IO Number</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{io_number}}
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><strong>Time record</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Working Date</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{date_work}}
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Start</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{time_start}}
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Arrived at location</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{time_at}}
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Job Finish</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{time_job_finish}}
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">End</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{time_end}}
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
                                {{company}}
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Address</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{address}}
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Contact Person</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{cp}}
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">PIC Onsite</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{pic}}
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><br></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4"><strong>SPPD Status</strong></b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{sppd_status}}
                            </b-col>
                        </b-row>
                        <b-row style="padding-top: 25px; padding-bottom: 25px; padding-left: 2px; padding-right: 2px">
                            <b-col sm="4">Number of day</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{day_number}}
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Type</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                {{assignment_type}}
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
            <b-row style="width: 100%;">
                <b-col>
                    <b-form-group>
                        <label for="brief_work"><strong>Brief of Work Carried Out</strong></label>
                        <b-card>{{brief_work}}</b-card>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group>
                        <label for="result"><strong>Result of Assignment & Further Action</strong></label>
                        <b-card>{{result}}</b-card>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 10px">
                <b-col>
                    <b-row style="padding: 6px"><strong>Attachment</strong></b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">BAI</b-col>
                        <b-col>
                             <b-button @click="download" size="sm" style="margin: 10px">Download</b-button>
                        </b-col>
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">TNC</b-col>
                        <!-- <b-col sm="5"><b-form-file id="tnc" :plain="true" v-model="tnc" @change="onFileSelected"></b-form-file></b-col> -->
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">Selfie/Wefie at Site with time/location stamp</b-col>
                        <!-- <b-col sm="5"><b-form-file id="photo" :plain="true" v-model="photo" @change="onFileSelected"></b-form-file></b-col> -->
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">Other</b-col>
                        <!-- <b-col sm="5"><b-form-file id="photo" :plain="true" v-model="photo" @change="onFileSelected"></b-form-file></b-col> -->
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
            this.$axios.get('/ar/' + this.$route.params.id).then(response => {
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
                console.log(response.data)
            }
            );
        },
        approve(){
            this.$axios.get('/ar/' + this.$route.params.id, {
                responseType: 'blob'
            }).then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.pdf');
                document.body.appendChild(link);
                link.click();
            });
        },
        setRating: function(rating){
            this.rating= rating;
            // console.log(this.rating);
      },
    }
}
</script>