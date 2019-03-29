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
              <div id="admin" style="width: 1500px">
                <v-client-table :data="users" :columns="columns" :options="options">
                    <b-button variant="primary" style="border-radius: 5px" slot="edit" slot-scope="props" target="_blank" :href="'/createAssignment/editReport/' + props.row.id">
                        <i class="fa fa-edit"></i>
                    </b-button>
                    <b-button variant="danger" style="border-radius: 5px" slot="delete" slot-scope="props" target="_blank" @click="deleteAss(props.row.id)">
                        <i class="fa fa-trash-o"></i>
                    </b-button>
                </v-client-table>
              </div>
            </b-card-body>
          </div>
        </div>
        <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
    </b-col>
  </b-row>
</template>
<script>
export default {
    data(){
        return{
            name: 'admin',
            users:[],
            errors: [],
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
                  full_name: 'Full Name',
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
                    'id','email','full_name','position',
                    'phone_number','address','place_birth',
                    'date_birth','motto','picture'
                ],
                filterable: [
                    'id','email','full_name','position',
                    'phone_number','address','place_birth',
                    'date_birth','motto','picture'
                ],
                texts: {
                //   filterPlaceholder: 'filter'
                }
            },
            mounted(){
                this.readUsers();
            },
            methods: {
              readUsers(){
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
                                  picture: response.data[i].picture,
                                  status: response.data[i].status};
                      this.users.push(temp);
                    }
                  console.log(this.users);
                })
              },
              scrollIntoView(evt) {
                evt.preventDefault()
                const href = evt.target.getAttribute('href')
                const el = href ? document.querySelector(href) : null
                if (el) {
                  this.$refs.content.scrollTop = el.offsetTop
                }
              }
            },
        }
    }
}
</script>
