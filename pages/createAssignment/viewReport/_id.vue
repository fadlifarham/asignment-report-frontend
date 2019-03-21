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
                        <b-row style="padding: 2px">
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
                            <b-col sm="4"></b-col>
                        </b-row>
                    </b-col>
                </b-row>
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


            
            