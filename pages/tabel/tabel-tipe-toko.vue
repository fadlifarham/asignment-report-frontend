<template>
  <b-row>
    <b-col lg="12">
        <div><label><b>TABEL TIPE TOKO</b></label>
            <b-button variant="primary" to="/form/tipe-toko" class="btn btn-primary btn-xs pull-right" >+ Tambah Data</b-button>
        </div>
        <!-- <b-table >Tabel Toko</b-table> -->
        <table class="table table--middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Aksi</th>
            </tr>
            <tr v-for="store_type in store_types" :key="store_type.id">
              <td>{{ store_type.id }}</td>
              <td>{{ store_type.name }}</td>
              <td><button v-b-modal.update class="btn btn-success btn-xs" @click="showItem(store_type)">Edit</button>
                  <button @click="deleteStoreType(store_type)" class="btn btn-danger btn-xs">Delete</button></td>
            </tr>
          </thead>
        </table>
        <div>
            <b-modal id="update" size="lg" title="Edit Tipe Toko" @ok="editStoreType(edit)">
                 <form @submit.prevent ="editStoreType(edit)">
                     <div class="form-group">
                            <label>Nama Tipe Toko :</label>
                            <input type="text" placeholder="Nama Tipe" class="form-control"
                                   v-model="edit.name"></div>
                </form>
            </b-modal>
        </div>
    </b-col>
</b-row>
</template>
<script>
    export default {
        data () {
            return {
                store_types: '',
                edit: '',
                errors: [],
            }
        },
        mounted(){
            this.readStoreTypes();
        },
        methods: {
            readStoreTypes() {
                this.$axios.get('/store-type')
                .then(response => {
                    this.store_types = response.data.store_types;
                })
            },
            deleteStoreType(store_type) {
                if (confirm("Apakah Anda Ingin Menghapus data ini?")) {
                    this.$axios.delete('/store-type/' + store_type.id)
                    .then(response => {
                        let conf = alert("Berhasil terhapus");
                        this.readStoreTypes();
                    }).catch(error => {
                        console.log(error.response.data.error);
                    })
                }
            },
            showItem(store_type) {
                    this.edits = true;
                    this.$axios.get('/store-type/' + store_type.id)
                    .then(response => { 
                        this.edit = response.data.store_type;
                    })
                    .catch(e => {
                        (error) => console.log(error)
                    });
            },
            handleOk (evt) {
                evt.preventDefault()
                if (!this.edit.name) {
                    alert('Lengkapi data toko anda')
                }
                else {
                    this.editStoreType(advertisement)
                }
            },
            onFileSelected(event) {
                this.selectedFile = event.target.files[0]
            },
            editStoreType (store_type) {
                const fd = new FormData();
                fd.append('_method', 'PUT');
                fd.set('name', this.edit.name);
                this.$axios.post('/store-type/' + store_type.id, fd)
                .then(response => {
                    let conf = alert(response.data.message);
                    this.readStoreTypes();
                }).catch(error => {
                    console.log(error.response.data.message);
                })
            }
        }
    }
</script>
