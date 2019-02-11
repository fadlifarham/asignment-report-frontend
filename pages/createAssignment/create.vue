<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn" style="padding: 0px">
            <b-col sm="0"><h4>General Assignment Information</h4></b-col>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; margin-top: 5px">
                <b-col sm="3">Project Number</b-col>
                <b-col sm="4">
                    <b-form-input type="text" style="width: 515px; height: 30px; border-radius: 3px"></b-form-input>
                </b-col>
            </b-row>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; margin-top: 5px">
                <b-col sm="3">IO Number</b-col>
                <b-col sm="4">
                    <b-form-input type="text" style="width: 515px; height: 30px; border-radius: 3px"></b-form-input>
                </b-col>
            </b-row>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; margin-top: 5px">
                <b-col sm="3">Assignment Class</b-col>
                <b-col sm="4">
                    <b-form-input type="text" style="width: 515px; height: 30px; border-radius: 3px"></b-form-input>
                </b-col>
            </b-row>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; margin-top: 5px">
                <b-col sm="3">Assignment Title</b-col>
                <b-col sm="4">
                    <b-form-input type="text" style="width: 515px; height: 30px; border-radius: 3px"></b-form-input>
                </b-col>
            </b-row>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; margin-top: 5px">
                <b-col sm="3">Assignment Detail Instruction</b-col>
                <b-col sm="4">
                    <b-form-input type="text" style="width: 515px; height: 120px; border-radius: 3px"></b-form-input>
                </b-col>
            </b-row>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 10px">
                <b-col>
                    <b-row style="padding: 4px"><strong>Attachment</strong></b-row>
                    <b-row style="padding: 4px">
                        <b-col sm="4">BAI</b-col>
                        <b-col sm="5"><b-form-file id="bai" :plain="true" v-model="bai" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                    <b-row style="padding: 4px">
                        <b-col sm="4">TNC</b-col>
                        <b-col sm="5"><b-form-file id="tnc" :plain="true" v-model="tnc" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                    <b-row style="padding: 4px">
                        <b-col sm="4">Selfie/Wefie at Site with time/location stamp</b-col>
                        <b-col sm="5"><b-form-file id="photo" :plain="true" v-model="photo" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                </b-col>
                <b-col style="padding: 10px">
                    <b-button @click="addStore" size="lg" variant="primary" style="margin: 50px">Submit for Approval</b-button>
                    <b-button @click="reset" size="lg" variant="danger">Delete and back</b-button>
                </b-col>
            </b-row>
        </div>
        <br>
        <table class="table table-striped table--middle table-responsive">
          <thead>
            <tr>
              
            </tr>
            <!-- <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td><img :src="user.foto" width="100" height="100"></td>
            </tr> -->
          </thead>
        </table>
    </b-col>
  </b-row>
</template>
<script>
    export default {
    data () {
        return {
            users: '',
            errors: [],
        }
    },
    mounted(){
        this.readUsers();
    },
    methods: {
        readUsers() {
            this.$axios.get('/user')
            .then(response => {
                this.users = response.data.users;
                console.log(response.data.users);
            })
        }
    }
    }
</script>
