<template>
    <b-row>
    <b-col lg="12">
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col cols="6"><strong> Assignment ID</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{assignment_id}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="6"><strong>Assignment Class</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{assignment_class}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="6"><strong>Assignment Description</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{assignment_desc}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="6"><strong>Project Number</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{project_number}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="6"><strong>IO Number</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{io_number}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="6"><strong>Difficulty Level</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4"><strong>{{difficulty_level}} </strong>/5</b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
        </div>
        <div class="animated fadeIn">
            <b-row>
                <b-col sm="6">
                    <b-card no-body style="width: 100%; height: 200px">
                        <b-card-header align="center">
                            <h5 id="traffic" class="card-title mb-0" style="padding : 5px">TEAM</h5>
                        </b-card-header>
                        <b-card-body
                            id="nav-scroller"
                            ref="content"
                            style="position:relative; height:300px; overflow-y:scroll;">
                            <!-- v-for="detail in details" :key="detail.id" -->
                            <b-row v-for="detail in assignment_user" :key="detail.id" style="padding: 5px">
                                <b-col cols="4"><i class="fa fa-user fa-3x" aria-hidden="true"></i></b-col>
                                <!-- <b-col sm="2">{{detail.user_id}}</b-col> -->
                                <b-col sm="0">{{detail.user.full_name}}</b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col sm="6">
                    <b-card no-body style="width: 100%; height: 200px">
                        <b-card-header>
                            <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Assignment Report List</h5>
                        </b-card-header>
                        <b-card-body
                            id="nav-scroller"
                            ref="content"
                            style="position:relative; height:300px; overflow-y:scroll;">
                            <b-row>
                                <b-col cols="4"></b-col>
                                <b-col sm="0"><strong>AR ID </strong></b-col>
                            </b-row>
                            <b-row v-for="detail in assignment_report" :key="detail.id" style="padding: 5px">
                                <b-col cols="4"><a class="fa fa-folder-open fa-3x" :href="'/createAssignment/detailReport/'+ detail.id" aria-hidden="true"><i></i></a></b-col>
                                <b-col sm="0">  {{detail.id}}</b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </div>
        <div class="animated fadeIn">
            <b-row>
                <b-col sm="12">
                    <b-card no-body style="width: 100%; height: 200px">
                        <b-card-header align="center">
                            <h5 id="traffic" class="card-title mb-0" style="padding : 5px">TEAM RATING</h5>
                        </b-card-header>
                        <b-card-body
                            id="nav-scroller"
                            ref="content"
                            style="position:relative; height:300px; overflow-y:scroll;">
                            <b-row v-for="detail in assignment_user" :key="detail.id" style="padding: 5px">
                                <b-col cols="2"><i class="fa fa-user fa-3x" aria-hidden="true"></i></b-col>
                                <b-col sm="0"><strong>{{detail.user.full_name}}</strong></b-col>
                                <b-col sm="2"></b-col>
                                <b-col sm="6"><b-form-group>
                                        <div id="app">
                                            <star-rating
                                                v-model="rating"
                                                v-bind:increment="1"
                                                v-bind:max-rating="10"
                                                inactive-color="#111"
                                                active-color="orange"
                                                v-bind:star-size="25"
                                                @rating-selected ="setRating(rating, detail.id)">
                                            </star-rating>
                                        </div>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </div>
        <b-input-group>
                <b-col cols="12" class="text-right" style="padding: 10px">
                    <b-button @click="approve" size="lg" variant="primary" style="margin: 10px">Approve & Save</b-button>
                </b-col>
            </b-input-group>
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
      return true
    },
    props: ['id'],
    data () {
        return {
            assignments:[],
            assignment_id: '',
            assignment_class: '',
            assignment_desc: '',
            project_number: '',
            io_number: '',
            difficulty_level: '',
            
            assignment_user:[],
            assignment_report:[],
            user_id:[],
            
            errors: [],
        }
    },
    mounted(){
        this.getAssignment();
    },
    methods: {
        getAssignment() {
            console.log("id : " + this.$route.params.id);
            this.$axios.get('assignment/detail/' + this.$route.params.id).then(response => {
                this.assignment_id = response.data.id
                this.assignment_class = response.data.assignment_class
                this.assignment_desc = response.data.assignment_desc
                this.project_number = response.data.project_number
                this.io_number = response.data.io_number
                this.difficulty_level = response.data.difficulty_level
                this.assignment_user = response.data.assignment_user
                this.assignment_report = response.data.assignment_report
                console.log(response.data)
            }, response => {
              this.status = response.data;
              console.log(this.status);
              swal('Failed', "this.status", 'warning');
            });
        },
        approve(){
            this.$axios.post('/assignment/approve', {
                assignment_id: this.assignment_id,
                user_id: this.user_id,
            }).then(response => {
                this.status = 'Assignment Approved Success!';
                console.log(this.status);
                swal('Success', this.status, 'success');
                this.reset();
            }, response => {
                this.status = 'Failed';
                console.log("ass : " + this.assignment_id);
                console.log("user : " + this.user_id);
                swal('Failed', this.status, 'warning');
            })
        },
        setRating: function(rating){
            this.rating= rating;
      },
      setEngineers() {

      }
    },

    middleware: ['viewReport', 'forPtl']
}
</script>   
