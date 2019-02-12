<template>
  <b-row>
    <b-col lg="12">
        <div>
            <label>Assignment ID      : </label>
        </div>
        <div>
            <label>Assignment Class   : </label>
        </div>
        <div>
            <label>Assignment Title   : </label>
        </div>
        <div class="animated fadeIn" style="padding: 0px">
            <b-card style="border-radius: 3px">
                <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                    <b-col>
                        <b-row style="padding: 2px"><strong>System Status</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Assignment Type</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-select
                                    :plain="true"
                                    :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                                    style="border-radius: 5px">
                                </b-form-select>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Project Number</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text" style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">IO Number</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text" style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><strong>Time record</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Working Date</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="date" style="border-radius: 5px; vertical-align: center"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Start</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time" style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Arrived at location</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time" style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Job Finish</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time" style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">End</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="time" style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 4px">
                    <b-col>
                        <b-row style="padding: 2px"><strong>Customer Information</strong></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Company</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col><b-form-input type="text" style="border-radius: 5px"></b-form-input></b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Address</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text" style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Contact Person</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text" style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">PIC Onsite</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text" style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col>
                        <b-row style="padding: 2px"><br></b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4"><strong>SPPD Status</strong></b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-radio-group id="basicInlineRadios"
                                :plain="true"
                                :options="[
                                    {text: 'YA ',value: '1'},
                                    {text: 'TIDAK ',value: '2'}
                                ]"
                                :checked="2">
                                </b-form-radio-group>
                            </b-col>
                        </b-row>
                        <b-row style="padding-top: 25px; padding-bottom: 25px; padding-left: 2px; padding-right: 2px">
                            <b-col sm="4">Number of day</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-input type="text" style="border-radius: 5px"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="4">Type</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col>
                                <b-form-select
                                    :plain="true"
                                    :options="['Daily','Continue day']"
                                    style="border-radius: 5px">
                                </b-form-select>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto">
                <b-col>
                    <b-row><b-col sm="0"><strong>Brief of Work Carried Out</strong></b-col></b-row>
                    <b-row>
                        <b-col sm="4">
                            <b-form-input type="text" style="width: 515px; height: 100px; border-radius: 3px"></b-form-input>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col>
                    <b-row><b-col sm="0"><strong>Result of Assignment & Further Action</strong></b-col></b-row>
                    <b-row>
                        <b-col sm="4">
                            <b-form-input type="text" style="width: 495px; height: 100px; border-radius: 3px"></b-form-input>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 10px">
                <b-col>
                    <b-row style="padding: 6px"><strong>Attachment</strong></b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">BAI</b-col>
                        <b-col sm="5"><b-form-file id="bai" :plain="true" v-model="bai" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">TNC</b-col>
                        <b-col sm="5"><b-form-file id="tnc" :plain="true" v-model="tnc" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">Selfie/Wefie at Site with time/location stamp</b-col>
                        <b-col sm="5"><b-form-file id="photo" :plain="true" v-model="photo" @change="onFileSelected"></b-form-file></b-col>
                    </b-row>
                    <b-row style="padding: 6px">
                        <b-col sm="4">Other</b-col>
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
