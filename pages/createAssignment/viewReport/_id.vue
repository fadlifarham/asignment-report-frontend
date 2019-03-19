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
                            <b-col sm="4">{{assignment_id}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong>Assignment Class</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{assignment_class}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col cols="4"><strong>Assignment Title</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{assignment_tittle}}</b-col>
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
            assignment_id: null,
            assignment_class: null,
            assignment_tittle: null,
        }
    },
    mounted(){
        this.getAssignment();
    },
    methods: {
        getAssignment() {
          console.log("id : " + this.$route.params.id);
          this.$axios.get('/assignment/detail/' + this.$route.params.id).then( response => {
            console.log(response.data);
            this.assignment_id = response.data.id;
            this.assignment_class = response.data.assignment_class;
            this.assignment_tittle = response.data.assignment_tittle;
          })
        },
    }
}
</script>


            
            