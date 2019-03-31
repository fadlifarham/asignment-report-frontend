<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn">
          <div class="card">
            <b-card-header>
              <h5 id="traffic" class="card-title mb-0" style="padding : 5px">All User</h5>
            </b-card-header>
            <b-card-body
              id="nav-scroller"
              ref="content"
              style="position:relative; height:500px; overflow-y:scroll;">
              <div id="people" style="width: 1500px">
                <v-client-table :data="users" :columns="columns" :options="options">
                    <b-button v-b-modal.show variant="primary" style="border-radius: 5px" slot="edit" slot-scope="props" target="_blank" @click="show(props.row.id)">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <b-button variant="danger" style="border-radius: 5px" slot="delete" slot-scope="props" target="_blank" @click="deleteAss(props.row.id)">
                        <i class="fa fa-trash-o"></i>
                    </b-button>
                </v-client-table>
              </div>
            </b-card-body>
          </div>
        <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
        </div>
        <b-modal id="show" size="lg" title="Edit Assignmnet"  @ok="edit()">
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
                <label>Position :</label>
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
           </form>
         </b-modal>
    </b-col>
  </b-row>
</template>
<script>
  import Vue from 'vue';
  Vue.use(require('vue-moment'));
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');
    export default {
    data () {
        return {
            name: 'people',
            users: [],
            errors: [],
            roles:[],
            role_id: null,
            selected: null,
            select: [
                { value: null, text: 'Select Position', disabled: true },
            ],
            columns: ['id', 
                        'email', 
                        'full_name', 
                        'position',
                        'phone_number', 
                        'address', 
                        'place_birth', 
                        'date_birth',
                        'motto',
                        'picture',
                        'edit',
                        'delete',
                        ],
            options: {
                filterByColumn: true,
                listColumns: {
                },
                headings: {
                  id: 'ID',
                  email: 'Email',
                  full_name: 'Name',
                  position: 'Position',
                  phone_number: 'Phone Number',
                  address: 'Address',
                  place_birth: 'Place Birth',
                  date_birth: 'Date Birth',
                  motto: 'Motto',
                  picture: 'Picture',
                  edit: 'edit',
                  delete: 'delete'
                },
                sortable: [
                  'id', 'email', 'full_name', 
                  'position','phone_number', 'address', 
                  'place_birth', 'date_birth','motto','picture',
                ],
                filterable:[
                  'id', 'email', 'full_name', 
                  'position','phone_number', 'address', 
                  'place_birth',  'date_birth'
                ],
                texts: {
                //   filterPlaceholder: 'filter'
                }
            }
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
                            email: response.data[i].email,
                            full_name: response.data[i].full_name,
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
      }
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

