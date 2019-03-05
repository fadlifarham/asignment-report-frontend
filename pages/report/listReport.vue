<template>
  <b-row>
    <b-col lg="12">
        <div v-for="list in lists" :key="list.id" class="animated fadeIn" style="padding: 0px">
            <b-col lg="6">
                <b-card style="border-radius: 3px">
                    <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                        <b-col>
                            <b-row style="padding: 2px"><strong>{{list.assignment.assignment_class}}</strong></b-row><br>
                            <b-row style="padding: 2px">
                                <b-col cols="4">PTL  </b-col>
                                <b-col cols="0">:</b-col>
                                <b-col cols="7">{{list.assignment.ptl.full_name}}</b-col>
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
                    </b-row>
                </b-card>
            </b-col>
        </div>
    </b-col>
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
