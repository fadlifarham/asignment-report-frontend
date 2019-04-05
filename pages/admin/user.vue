<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn">
          <div class="card">
            <b-card-header>
              <h5 id="traffic" class="card-title mb-0" style="padding : 5px">All User</h5>
            </b-card-header>
              <div id="people">
                <v-table 
                    :data="users"
                    :config="tableConfig"
                    :height="500"
                    :itemHeight="55"
                    :minWidth="1500"
                    :selectable="true"
                    :hoverHighlight="true"
                    :enableExport="true"
                    :language="'en'"
                    :bordered="true"
                    v-on:changeSelection="handleSelectionChange">
                   <img :src="'//' + picture" class="img-avatar" slot="picture">
                    <b-button v-b-modal.show variant="primary" style="border-radius: 5px" slot="edit" slot-scope="props" target="_blank" @click="showEdit(props.row.id)">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <!-- <b-button variant="danger" style="border-radius: 5px" slot="delete" slot-scope="props" target="_blank" @click="deleteAss(props.row.id)">
                        <i class="fa fa-trash-o"></i>
                    </b-button> -->
                </v-table >
              </div>
          </div>
        <!-- <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button> -->
        </div>
        <b-modal id="show" size="lg" title="Edit User"  @ok="edit()">
           <form @submit.prevent ="edit()">
             <div class="form-group">
                <label>Full Name :</label>
                <input type="text" style="border-radius: 5px" placeholder="Full Name" class="form-control" v-model="full_name">
            </div>
            <div class="form-group">
                <label>Email :</label>
                <input type="text" style="border-radius: 5px" placeholder="IO Number" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <b-row style="margin: 3px">
                <label>Position :</label> 
                <h6 style="color : blue ">*please select again</h6>
              </b-row>
                  <b-form-select id="role_id"
                    :plain="true"
                    :options="select"
                    value="Select Position" 
                    v-model="role_id">
                  </b-form-select>
            </div>
            <div class="form-group">
                <label>Phone Number :</label>
                <input type="text" style="border-radius: 5px" placeholder="Phone Number" class="form-control" v-model="phone_number">
            </div>
            <div class="form-group">
                <label>Address :</label>
                <input type="text" style="border-radius: 5px" placeholder="Address" class="form-control" v-model="address">
            </div>
            <div class="form-group">
                <label>Date Birth :</label>
                <input type="date" style="border-radius: 5px" placeholder="Date Birth" class="form-control" v-model="date_birth">
            </div>
            <div class="form-group">
                <label>Place Birth :</label>
                <input type="text" style="border-radius: 5px" placeholder="Place Birth" class="form-control" v-model="place_birth">
            </div>
            <div class="form-group">
                <label>Motto :</label>
                <textarea v-model="motto" class="form-control" rows="4" id="motto"></textarea>
            </div>
            <!-- <div class="form-group">
                <label>Start Date :</label>
                <b-form-input type="date" id="date" v-model="start_date"> </b-form-input>
            </div> -->
           </form>
         </b-modal>
    </b-col>
  </b-row>
</template>
<script>
// import VueVirtualTable from '~/plugins/vue-virtual-table'
  import VueVirtualTable from 'vue-virtual-table'
  import Vue from 'vue';
    export default {
      components: {
            VueVirtualTable
        },
    data () {
        return {
            name: 'people',
            id:'',
            full_name:'',
            email:'',
            position: '',
            phone_number: '',
            address:'',
            place_birth:'',
            date_birth:'',
            motto:'',
            start_date:'',
            users: [],
            edits: false,
            errors: [],
            roles:[],
            role_id: null,
            selected: null,
            select: [
                { value: null, text: 'Select Position', disabled: true },
            ],
             tableConfig: [
                {prop: '_index', name: 'No ', numberFilter: true, summary: 'COUNT', width: 40},
                {prop: 'id', name: 'ID', numberFilter: true, sortable: true, width: 40},
                {prop: 'full_name', name: 'Name', searchable: true, sortable: true, width: 120},
                {prop: 'email', name: 'Email', searchable: true, sortable: true, width: 150},
                {prop: 'position', name: 'Potition', filterable: true, width: 70},
                {prop: 'phone_number', name: 'Phone Number', searchable: true, width: 75},
                {prop: 'address', name: 'Address', searchable: true, width: 100},
                {prop: 'place_birth', name: 'Place Birth', searchable: true, width: 70},
                {prop: 'date_birth', name: 'Date Birth', searchable: true, width: 80},
                {prop: 'motto', name: 'Motto', width: 150},
                {prop: 'picture', name: 'Picture', actionName: 'picture',width: 100},
                {prop: '_action', name: 'Edit', actionName: 'edit', width: 40},
                // {prop: '_action', name: 'Delete', actionName: 'delete', width: 40}
            ],
        }
    },
    mounted(){
        this.readUser();
        this.getRole();
    },
    methods: {
        readUser() {
          var temp;
          this.$axios.get('admin/users').then(response => {
              for(let i=0;i<response.data.length;i++){
                  temp = { id: response.data[i].id,
                            full_name: response.data[i].full_name,
                            email: response.data[i].email,
                            position: response.data[i].role.name,
                            phone_number: response.data[i].phone_number,
                            address: response.data[i].address,
                            place_birth: response.data[i].place_birth,
                            date_birth: response.data[i].date_birth,
                            motto: response.data[i].motto,
                            picture: response.data[i].picture,};
                this.users.push(temp);
              }
            console.log(this.users);
          })
        },
        getRole() {
            this.$axios.get('/admin/role')
            .then(response => {
              console.log(response.data)
                response.data.forEach(element => {
                    this.select.push({
                        value: element.id,
                        text: element.name
                    })
                });
                console.log("ll : " + this.select)
            })
        },
        showEdit(id){
            this.edits = true;
            console.log("id : " + id);
            this.$axios.get('/admin/edit_user/'+ id)
              .then(response => {
                  this.id = response.data.id
                  this.full_name = response.data.full_name
                  this.email = response.data.email
                  this.position = response.data.role.name
                  this.phone_number = response.data.phone_number
                  this.address = response.data.address
                  this.place_birth = response.data.place_birth
                  this.date_birth = response.data.date_birth
                  this.motto = response.data.motto
                  this.start_date = response.data.start_date
                  // this.value = response.data.assignment_user
                  console.log(response.data)
              })
              .catch(e => {
                  (error) => console.log(error)
              });
        },
        edit(users) {
            const fd = new FormData();
            fd.append('_method', 'POST');
            fd.set('id', this.id);
            fd.set('full_name', this.full_name);
            fd.set('email', this.email);
            fd.set('role_id', this.role_id);
            fd.set('phone_number', this.phone_number);
            fd.set('address', this.address);
            fd.set('date_birth', this.date_birth);
            fd.set('place_birth', this.place_birth);
            fd.set('motto', this.motto);
            fd.set('start_date', this.start_date);
            this.$axios.post('/admin/edit_user/', fd)
            .then(response => {
                 this.status = 'Update Profile Success!';
                // console.log(this.status);
                swal('Success', this.status, 'success');
                this.$router.push('/')
            }).catch(error => {
                console.log(error.response.data.error);
                this.status = 'Please Fill in All Data!';
                // console.log(this.status);
                 swal('Failed', this.status, 'warning');
            })
        },
        scrollIntoView(evt) {
          evt.preventDefault()
          const href = evt.target.getAttribute('href')
          const el = href ? document.querySelector(href) : null
          if (el) {
            this.$refs.content.scrollTop = el.offsetTop
          }
        },
        deleteAss(id){
          console.log("id : " + id)
          if (confirm("Are you sure you want to delete this item?")) {
                this.$axios.post('assignment/delete/' + id)
                .then(response => {
                    this.status = 'Delete Success!';
                    console.log(this.status);
                    swal('Success', this.status, 'success');
                    this.readPtls();
                }).catch(error => {
                    console.log(error.response.data.error);
                })
            }
        },
      },

      exportToExcel() {
        this.$axios.get('assignment/all/export').then(response => {
          this.apply = response.data
          let blob = new Blob([response.data], { type: 'application/xlsx'})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = 'All_Assignment.xlsx'
          link.click()
          // console.log(response.data)
        });
      },

      middleware: "admin"
    }
</script>
<style>
  table {
    counter-reset: section;
  }

  .no:before {
    counter-increment: section;
    content: counter(section);
  }
</style>

