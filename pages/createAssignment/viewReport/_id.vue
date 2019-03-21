<template>
    <b-row>
    <b-col lg="12">
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong> Assignment ID</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{assignment_id}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong>Assignment Class</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{assignment_class}}</b-col>
                        </b-row>

                        <!-- <b-row style="padding: 2px">
                            <b-col cols="4"><strong>Assignment Description</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{assignment_desc}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong>Project Number</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{project_number}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong>IO Number</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{io_number}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong>Difficulty Level</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4"></b-col> -->
                    <!-- </b-row>
                </b-card-body> -->
            </b-card>
        </div>
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-card-header align="center">
                    <strong>Assignment Report List</strong>
                </b-card-header>
                <b-card-body>
                    <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                        <b-row v-for="project in projects" :key="project.assignment_user" style="padding: 2px">
                            <b-col sm="4">
                                <b-row>Gambar</b-row>
                                <b-row>{{project.assignment_report.assignment_id}}</b-row>
                            </b-col>
                        </b-row>
                    </b-row>
                </b-card-body>
            </b-card>
        </div>
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-card-header align="center">
                    <strong>Team Rating</strong>
                </b-card-header>
                <b-card-body>
                    <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                        <b-row v-for="project in projects" :key="project.assignment_user" style="padding: 2px">
                            <b-col sm="4">
                                <b-row>Gambar</b-row>
                                <b-row>
                                    <b-form-group
                                    label="Score"
                                    label-for="rating"
                                    :label-cols="4"
                                    :horizontal="true">
                                        <div id="app">
                                            <star-rating
                                            v-model="difficulty_level"
                                            v-bind:increment="0.5"
                                            v-bind:max-rating="5"
                                            inactive-color="#000"
                                            active-color="orange"
                                            v-bind:star-size="25"
                                            @rating-selected ="setRating"
                                            >
                                            </star-rating>
                                        </div>
                                    </b-form-group>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-row>
                </b-card-body>
            </b-card>
        </div>
    </b-col>
    </b-row>
</template>
<script>
export default {
    validate(params) {
      // return /^\d+$/.test(params.id)]
      // console.log("params " + params)
      return true
    },
    props: ['id'],
    data () {
        return {
            assignments:[],
            assignment_id: null,
            assignment_class: null,
            assignment_desc: null,
            project_number: null,
            io_number: null,
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
                // this.assignments = res
                console.log(response.data)
            }
            );
        },
    }
}
</script>


            
            