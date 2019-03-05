<template>
  <b-row>
    <b-col sm="4">
        <br><br><br><br>
        <img src="~/static/img/avatars/ss.jpg" class="rounded-circle" alt="Cinque Terre" width="304" height="236"> 
    </b-col>
    <b-col lg="8">
        <div class="animated fadeIn" style="padding: 0px">
            <br><br><br><br>
            <b-card style="border-radius: 8px" >
             <b-row style="width: 80%; margin-center: auto">
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col sm="6">Nama Depan  </b-col>
                            <b-col sm="0">:</b-col>
                            <b-col sm="7"></b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="6">Nama Belakang</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col sm="7"></b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="6">Tempat Lahir</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col sm="7"></b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="6">Tanggal Lahir</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col sm="7"></b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="6">Telepon</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col sm="7"></b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="6">Alamat</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col sm="7"></b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col sm="6">Motto</b-col>
                            <b-col sm="0">:</b-col>
                            <b-col sm="7"></b-col>
                        </b-row>
                    </b-col>
             </b-row>
            </b-card>
            <b-col style="padding: 10px" class="text-right">
                <b-button size="md" variant="primary" style="margin: 10px" v-b-modal.update>
                    Edit
                </b-button>
                <b-button size="md" variant="danger" style="margin: 10px" >
                    Kembali
                </b-button>
            </b-col>
        </div>
    </b-col>
  </b-row>
        <!-- <b-row>
            <b-col>
                <b-form-group
                    label="Nama depan"
                    label-for="namaDepan"
                    :label-cols="4"
                    :vertical="true">
                    <b-form-input  id="namaDepan" type="text" 
                    style="border-radius: 5px; vertical-align: center"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group
                    label="Nama Belakang"
                    label-for="namaBelakang"
                    :label-cols="4"
                    :vertical="true">
                    <b-form-input  id="namaBelakang" type="text" 
                    style="border-radius: 5px; vertical-align: center"></b-form-input>
                </b-form-group>
            </b-col>
        </b-row> -->
            <!-- <b-row>
                <b-col>
                    <b-form-group
                        label="Tempat Lahir"
                        label-for="tempatLahir"
                        :label-cols="4"
                        :vertical="true">
                        <b-form-input  id="tempatLahir" type="text"
                        style="border-radius: 5px; vertical-align: center"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                        label="Tanggal Lahir"
                        label-for="tanggalLahir"
                        :label-cols="4"
                        :vertical="true">
                        <b-form-input type="date"
                            id="tanggalLahir" 
                            style="border-radius: 5px; vertical-align: center">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row> -->
            <!-- <b-row>
                <b-col>
                    <b-form-group
                        label="Password"
                        label-for="password"
                        :label-cols="4"
                        :vertical="true">
                        <b-form-input  id="password" type="password" 
                        style="border-radius: 5px; vertical-align: center"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group
                        label="Konfirmasi Password"
                        label-for="konfirmasiPassword"
                        :label-cols="4"
                        :vertical="true">
                        <b-form-input type="password"
                            id="konfirmasiPassword"
                            style="border-radius: 5px; vertical-align: center">
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row> -->
            <!-- <b-row>
                <b-col>
                    <b-form-group
                        label="Telepon"
                        label-for="telp"
                        :label-cols="4"
                        :vertical="true">
                        <b-form-input  id="telp" type="text" 
                        style="border-radius: 5px; vertical-align: center"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row> -->
            <!-- <b-row>
                <b-col>
                    <b-form-group>
                        <label for="alamat">Alamat</label> 
                        <textarea class="form-control" rows="3" id="alamat" style="border-radius: 5px; vertical-align: center"></textarea>
                    </b-form-group>
                </b-col>
            </b-row> -->
            <!-- <b-row>
                <b-col>
                    <b-form-group>
                        <label for="motto">Motto</label>
                        <textarea class="form-control" rows="3" id="motto" style="border-radius: 5px; vertical-align: center"></textarea>
                    </b-form-group>
                </b-col>
            </b-row> -->
    <!-- </b-col>
  </b-row> -->
</template>
<script>
import VModal from 'vue-js-modal'

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
    },
    }
</script>
