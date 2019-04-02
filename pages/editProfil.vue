<template>
<b-col>
  <b-row lg="12">
    <b-col sm="4">
        <br><br><br><br>
        <img :src="'//' + picture" class="img-avatar" alt="Photo Profile" width="300" height="300">
        <b-button v-b-modal.picture size="md" variant="primary" style="margin: 10px; border-radius: 10px" class="fa fa-pencil"></b-button>
        <br>
        <b-col style="padding: 10px" class="text-right">
            
        </b-col>
    </b-col>
    <!-- <b-col sm="2"></b-col> -->
    <b-col sm="6">
        <div class="animated fadeIn" style="padding: 0px">
            <br><br>
            <br><br>
            <b-card style="border-radius: 8px" >
             <b-row style="width: 100%; margin-center: auto">
                    <b-col>
                        <b-row style="padding: 2px">
                            <b-col>Nama Lengkap</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col cols="7">{{full_name}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col>Tempat Lahir</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col cols="7">{{place_birth}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col>Tanggal Lahir</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col cols="7">{{date_birth}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col>Telepon</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col cols="7">{{phone_number}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col>Alamat</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col cols="7">{{address}}</b-col>
                        </b-row>
                        <b-row style="padding: 2px">
                            <b-col>Motto</b-col>
                            <b-col cols="0">:</b-col>
                            <b-col cols="7">{{motto}}</b-col>
                        </b-row>
                    </b-col>
             </b-row>
             <br><br>
             <b-col style="padding: 10px" class="text-right">
                 <b-button variant="link"  v-b-modal.password class="px-0">Change Password</b-button> or
                <b-button v-b-modal.update size="md" variant="primary" style="margin: 10px" @click="showItem()">
                    Edit
                </b-button>
            </b-col>
            </b-card>
            
        </div>
    </b-col>
    <b-col lg="2"></b-col>
  </b-row>
  <div>
    <b-modal id="update" size="lg" title="Edit Profile" @ok="editProfile()">
        <form @submit.prevent ="editProfile()">
            <div class="form-group">
                <label>Nama Lengkap :</label>
                <input type="text" placeholder="Nama Lengkap" class="form-control" v-model="full_name">
            </div>
            <div class="form-group">
                <label>Tempat Lahir :</label>
                <input type="text" placeholder="Tempat Lahir" class="form-control" v-model="place_birth">
            </div>
            <div class="form-group">
                <label>Tanggal Lahir :</label>
                <input type="date" placeholder="Tanggal Lahir" class="form-control" v-model="date_birth">
            </div>
            <div class="form-group">
                <label>Telepon :</label>
                <input type="text" placeholder="Telepon" class="form-control" v-model="phone_number">
            </div>
            <div class="form-group">
                <label>Alamat :</label>
                <input type="text" placeholder="Alamat" class="form-control" v-model="address">
            </div>
            <div class="form-group">
                <label>Motto :</label>
                <textarea name="motto" id="motto" cols="30" rows="5" class="form-control" 
                            placeholder="Motto" v-model="motto"></textarea>
            </div>
            <!-- <div class="form-group">
                <label>Password :</label>
                <input type="password" placeholder="Password" class="form-control" v-model="password">
            </div> -->
            <!-- <div class="form-group">
                <label>Konfirmasi Password :</label>
                <input type="password" placeholder="Konfirmasi Password" class="form-control">
            </div> -->
        </form>
    </b-modal>
  </div>
  <div>
    <b-modal id="picture" size="md" title="Edit Photo Profile" @ok="submit()">
        <form @submit.prevent ="submit()">
            <div class="form-group">
                <label for="picture">Photo Profile :</label>
                    <b-form-file id="other" v-model="other" :plain="true" ref="other" @change="otherHandler"></b-form-file>
                    <!-- <img :src="'//' + picture" class="img-avatar" alt="Photo Profile" width="100" height="100"> -->
                    <!-- <img :src="picture" width="100" height="100"> -->
            </div>
        </form>
    </b-modal>
    <b-modal id="password" size="md" title="Edit Password" @ok="editPassword()">
        <form @submit.prevent ="editPassword()">
            <div class="form-group">
                <label>Password :</label>
                <input type="password" v-validate="'required'" placeholder="Password" 
                class="form-control" v-model="password" ref="password">
                <!-- <span>{{ errors.first('password') }}</span> -->
            </div>
            <div class="form-group">
                <label>Confirm Password :</label>
                <input type="password" v-validate="'required|confirmed:password'" placeholder="Confirm Password" 
                class="form-control" v-model="password_confirmation" data-vv-as="password">
                <!-- <span>{{ errors.first('confirm_password') }}</span> -->
            </div>
            <div class="alert alert-danger" v-show="errors.any()">
                <div v-if="errors.has('password')">
                    {{ errors.first('password') }}
                </div>
                Confirm Password is Not Match
                <div v-if="errors.has('password_confirmation')">
                    {{ errors.first('password_confirmation') }}
                </div>
            </div>
        </form>
    </b-modal>
  </div>
  </b-col>
</template>
<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate);
import VModal from 'vue-js-modal'

    export default {
        component: {
            VeeValidate
        },
    data :() => ({
        full_name: '',
        place_birth: '',
        date_birth: '',
        phone_number: '',
        address: '',
        motto: '',
        password: '',
        picture:"",
        // errors: [],
        edits: false,
        edit: '',
        status:'',

    }),
    mounted(){
        this.showItem();
        this.readPicture();
    },
    methods: {
        readPicture() {
            this.$axios.get('/profile').then( response => {
                this.picture = response.data.picture;
            })
        },
        showItem() {
            this.edits = true;
            this.$axios.get('/profile')
            .then(response => {
                this.full_name = response.data.full_name;
                this.place_birth = response.data.place_birth;
                this.date_birth = response.data.date_birth;
                this.phone_number = response.data.phone_number;
                this.address = response.data.address;
                this.motto = response.data.motto;
                // console.log(response.data.profiles);
            })
            .catch(e => {
                (error) => console.log(error)
            });
        },
        submit(){
          let formData = new FormData();
        //   formData.append('picture', this.picture);

          this.$axios.post('/dp', {
              picture: this.other

          }).then(response => {
              // this.assignment.push(response.data.task);
              this.status = 'Upload success';
              console.log(this.status);
              swal('Success, Please Reload Your Page', this.status, 'success');
              this.$router.push('/');
              this.reset();
          }, response => {
          })
        },
        editPassword(){
            const fd = new FormData();
            fd.append('_method', 'POST');
            fd.set('password', this.password);
            this.$axios.post('/password', fd)
            .then(response => {
                 this.status = 'Change Password Success!';
                // console.log(this.status);
                swal('Success', this.status, 'success');
            })
        },
        editProfile(profiles) {
            const fd = new FormData();
            fd.append('_method', 'POST');
            fd.set('full_name', this.full_name);
            fd.set('place_birth', this.place_birth);
            fd.set('date_birth', this.date_birth);
            fd.set('phone_number', this.phone_number);
            fd.set('address', this.address);
            fd.set('motto', this.motto);
            this.$axios.post('/profile', fd)
            .then(response => {
                 this.status = 'Update Profile Success!';
                // console.log(this.status);
                swal('Success', this.status, 'success');
                this.showItem();
            })
        },
        showPicture() {
            this.edits = true;
            this.$axios.get('/profile')
            .then(response => {
                this.picture = response.data.picture;
                // console.log(response.data.profiles);
            })
            .catch(e => {
                (error) => console.log(error)
            });
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        editPicture() {
            const fd = new FormData();
            fd.append('_method', 'POST');
            if(this.selectedFile) {
                fd.append('picture', this.selectedFile, this.selectedFile.name);
            }
            his.$axios.post('/profile', fd)
            .then(response => {
                 this.status = 'Success, Please Reload Your Page!';
                // console.log(this.status);
                swal('Success', this.status, 'success');
                this.$router.push('/');
            }).catch(error => {
                console.log(error.response.data.error);
            })
        },
        otherHandler(e) {
          let files = e.target.files || e.dataTransfer.files;
          if (!files.length)
            return;
          this.createOther(files[0]);
        },

        createOther(file) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.other = e.target.result;
            // console.log(this.other)
          };
          reader.readAsDataURL(file);
        },
    },
    }
</script>
