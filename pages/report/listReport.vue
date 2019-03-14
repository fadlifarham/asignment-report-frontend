<template>
  <b-row>
        <div v-for="list in lists" :key="list.id" class="animated fadeIn" style="padding: 0px">
            <b-col lg="12" sm="6">
                <b-card style="width: 525px">
                        <b-col>
                            <b-row style="padding: 2px"><strong>{{list.assignment.assignment_class}}</strong></b-row><br>
                            <b-row style="padding: 2px">
                                <b-col cols="4">Assignment ID  </b-col>
                                <b-col cols="0">:</b-col>
                                <b-col cols="7">{{list.assignment_id}}</b-col>
                            </b-row>
                            <b-row style="padding: 2px">
                                <b-col cols="4">Assignment Title</b-col>
                                <b-col cols="0">:</b-col>
                                <b-col sm="7">{{list.assignment.assignment_tittle}}</b-col>
                            </b-row>
                            <b-row style="padding: 2px">
                                <b-col cols="4">Assignment Desc</b-col>
                                <b-col cols="0">:</b-col>
                                <b-col cols="7">{{list.assignment.assignment_desc}}</b-col>
                            </b-row>
                            <b-col style="padding: 10px" class="text-right">
                                <b-button :to="'/report/submitReport/' + list.assignment_id" size="sm" variant="primary" style="margin: 10px">
                                <!-- <router-link :to="'/report/submitReport/' + list.assignment_id" > -->
                                    See More
                                <!-- </router-link> -->
                                </b-button>
                            </b-col>
                        </b-col>
                </b-card>
            </b-col>
        </div>
  </b-row>
</template>
<script>
    export default {
    data :() => ({
        lists: [],
        errors: [],
        showReports: false,
    }),
    mounted(){
        this.readList();
    },
    methods: {
        readList() {
            this.$axios.get('assignment/list')
            .then(response => {
                this.lists = response.data;
                console.log(this.lists);
            })
        },
        showReport(list){
            this.showReports = true;
            this.$axios.get('assignment/list/' + list.id)
            .then(response => {
                this.showReports = response.data;
                console.log(response.data);
                this.$router.push('/submitReport');
            })
            .catch(e => {
                (error) => console.log(error)
            });
        },
    }
    }
</script>
