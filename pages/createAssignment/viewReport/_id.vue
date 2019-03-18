<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong> ID</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{ id }}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong>Assignment Class</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{ assignment_class }}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong>Assignment Title</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{ assignment_tittle }}</b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
        </div>
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px"><strong>System Status</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Assignment Type</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Project Number</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">IO Number</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><strong>Time record</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Working Date</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Start</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Arrived at location</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Job Finish</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">End</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 4px">
                    <b-col>
                        <b-row style="padding: 2px"><strong>Customer Information</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Company</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Address</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Contact Person</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">PIC Onsite</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><br></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4"><strong>SPPD Status</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding-top: 25px; padding-bottom: 25px; padding-left: 2px; padding-right: 2px">
                            <b-col sm="4">Number of day</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Type</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
        </div>
        <div class="animated fadeIn">
            <b-row>
                <b-col sm="6">
                    <b-card no-body style="width: 100%; height: 200px">
                        <b-card-header>
                            <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Brief of Work Carried Out</h5>
                        </b-card-header>
                        <b-card-body
                            id="nav-scroller"
                            ref="content"
                            style="position:relative; height:300px; overflow-y:scroll;"> 
                            <b-row style="padding: 2px">
                                <b-col sm="12">isi </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col sm="6">
                    <b-card no-body style="width: 100%; height: 200px">
                        <b-card-header>
                            <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Result of Assignment & Further Action</h5>
                        </b-card-header>
                        <b-card-body
                            id="nav-scroller"
                            ref="content"
                            style="position:relative; height:300px; overflow-y:scroll;"> 
                            <b-row style="padding: 2px">
                                <b-col sm="12">isi </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </div>
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col sm="4">BAI</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">TNC</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Selfie/Wefie at Site with time/location stamp</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Other</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">isi</b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
            
            <b-row>
                <b-col style="padding: 10px" class="text-right">
                    <b-button v-b-modal.rating @click="submit" size="lg" variant="primary" style="margin: 10px">Approve</b-button>
                </b-col>
            </b-row>
            <div>
                <b-modal id="rating" size="lg" title="Rating" @ok="rating()">
                    <form @submit.prevent ="rating()">
                        <b-form-group
                        style=""
                            label-for="rating"
                            :label-cols="4"
                            :horizontal="true">
                                <div id="app">
                                    <star-rating
                                        v-model="rating"
                                        v-bind:increment="0.5"
                                        v-bind:max-rating="5"
                                        inactive-color="#000"
                                        active-color="orange"
                                        v-bind:star-size="70"
                                        @rating-selected ="setRating">
                                    </star-rating>
                                </div>
                        </b-form-group>
                    </form>
                </b-modal>
            </div>
        </div>
    </b-col>
  </b-row>
</template>
<script>
    import StarRating from 'vue-star-rating'
    export default {
        components: {
            StarRating,
        },
    validate(params) {
      // return /^\d+$/.test(params.id)]
      // console.log("params " + params)
      return true
    },

    name: 'approveReport',

    props: ['id'],

    data () {
        return {
            assignment_id: null,
            assignment_class: null,
            assignment_tittle: null,
            errors: [],
        }
    },
    mounted(){
        this.getAssignment();
    },
    methods: {
        getAssignment() {
          console.log("id : " + this.$route.params.id);
          this.$axios.get('/assignment/detail/' + this.$route.params.id).then( response => {
            // console.log(response.data);
            this.assignment_id = response.data.id;
            this.assignment_class = response.data.assignment_class;
            this.assignment_tittle = response.data.assignment_tittle;
          })
        },
        submit(){

        },
        setRating: function(rating){
            this.rating= rating;
            console.log(this.rating);
        },
    }
    }
</script>
    