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