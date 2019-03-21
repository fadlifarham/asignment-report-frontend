<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 3px">
                            <b-col cols="3"><strong>Assignment ID</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{projects.id}}</b-col>
                        </b-row>
                        <b-row style="padding: 3px">
                            <b-col cols="3"><strong>Assignment Class</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{projects.assignment_class}}</b-col>
                        </b-row>
                        <b-row style="padding: 3px">
                            <b-col cols="3"><strong>Assignment Title</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{projects.assignment_tittle}}</b-col>
                        </b-row>
                        <b-row style="padding: 3px">
                            <b-col cols="3"><strong>Assignment Description</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{projects.assignment_desc}}</b-col>
                        </b-row>
                        <b-row style="padding: 6px">
                        </b-row>
                        <b-row style="padding: 3px">
                            <b-col cols="3"><strong>Project Number</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{projects.project_number}}</b-col>
                        </b-row>
                        <b-row style="padding: 3px">
                            <b-col cols="3"><strong>IO Number</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{projects.io_number}}</b-col>
                        </b-row>
                        <b-row style="padding: 3px">
                            <b-col cols="3"><strong>Difficulty Level</strong></b-col>
                            <b-col cols="0">:</b-col>
                            <b-col sm="4">{{projects.difficulty_level}}</b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
        </div>
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-card-header align="center">
                    <strong>TEAM</strong>
                </b-card-header>
                <b-card-body>
                    <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                        <b-row v-for="project in projects" :key="project.assignment_user" style="padding: 2px">
                            <b-col sm="4">
                                <b-row>Gambar</b-row>
                                <b-row>{{project.assignment_user.user_id}}</b-row>
                            </b-col>
                        </b-row>
                    </b-row>
                </b-card-body>
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
        <div class="animated fadeIn" style="padding: 0px">            
            <b-row>
                <b-col style="padding: 10px" class="text-right">
                    <b-button @click="submit" size="lg" variant="primary" style="margin: 10px">Approve</b-button>
                </b-col>
            </b-row>
        </div>
    </b-col>
  </b-row>
</template>
<script>
    export default {
    data () {
        return {
          projects: [],
          errors: [],
        }
    },
    mounted(){
        this.readProjects();
    },
    methods: {
        readProjects() {
          var temp;
          this.$axios.get('assignment/detail').then(response => {
                this.recents = response.data;
                console.log(this.projects);
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
        show: function (event, id) {
          // window.location.href="sample.html";
          // alert('Anda yakin ingin melihat detail ' + message + '?')
          console.log(id)
        }
    }
    }
</script>