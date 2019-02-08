<template>
  <b-row>
    <b-col lg="12">
        <div><label><b>TABEL IKLAN TOKO</b></label>
            <b-button variant="primary" to="/form/iklan" class="btn btn-primary btn-xs pull-right" >+ Tambah Data</b-button>
        </div>
        <!-- <b-table >Tabel Toko</b-table> -->
        <table class="table table--middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Toko</th>
              <th>Banner</th>
              <th>Aksi</th>
            </tr>
            <tr v-for="adv in advs" :key="adv.id">
              <td>{{ adv.id }}</td>
              <td>{{ adv.store_id }}</td>
              <td><img :src="adv.banner" width="200" height="150"></td>
              <td><button v-b-modal.update class="btn btn-success btn-xs" @click="showItem(adv)">Edit</button>
                  <button @click="deleteAdv(adv)" class="btn btn-danger btn-xs">Delete</button></td>
            </tr>
          </thead>
        </table>
        <div>
            <b-modal id="update" size="lg" title="Edit Iklan Toko" @ok="editAdv(edit)">
                 <form @submit.prevent ="editAdv(edit)">
                     <div class="form-group">
                            <label for="store_id">ID Toko :</label>
                            <b-form-select id="store_id"
                              :plain="true"
                              :options="stores"
                              value="Pilih Toko"
                              v-model="edit.store_id">
                            </b-form-select></div>
                    <div class="form-group">
                            <label for="banner">Banner :</label>
                            <b-form-file id="banner" :plain="true" v-model="edit.banner" @change="onFileSelected"></b-form-file><br>
                            <img :src="edit.banner" width="100" height="100"></div>
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
            advs: '',
            edit: '',
            errors: [],
            stores: [
                {value: null, text: 'Pilih Toko', disabled: true},
            ],
        }
    },
    mounted(){
        this.readAdvs();
        this.getStores();
    },
    methods: {
        readAdvs() {
            this.$axios.get('/advertisement')
            .then(response => {
                this.advs = response.data.advertisements;
            })
        },
        getStores() {
            this.$axios.get('/store')
            .then(response => {
                response.data.stores.forEach(element => {
                    this.stores.push({
                        value: element.id,
                        text: element.name
                    })
                });
            })
        },
        deleteAdv(advertisement) {
            if (confirm("Apakah Anda Ingin Menghapus data ini?")) {
                this.$axios.delete('/advertisement/' + advertisement.id)
                .then(response => {
                    let conf = alert("Berhasil terhapus");
                    this.readAdvs();
                }).catch(error => {
                    console.log(error.response.data.error);
                })
            }
        },
        showItem(advertisement) {
                this.edits = true;
                this.$axios.get('/advertisement/' + advertisement.id)
                .then(response => { 
                    this.edit = response.data.advertisement;
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
                this.editAdv(advertisement)
            }
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        editAdv (adv) {
            const fd = new FormData();
            fd.append('_method', 'PUT');
            fd.append('banner', this.selectedFile, this.selectedFile.name);
            fd.set('store_id', this.edit.store_id);
            this.$axios.post('/advertisement/' + adv.id, fd)
            .then(response => {
                let conf = alert(response.data.message);
                this.readAdvs();
            }).catch(error => {
                console.log(error.response.data.message);
            })
        }
    }
    }
</script>
