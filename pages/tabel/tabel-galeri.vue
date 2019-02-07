<template>
  <b-row>
    <b-col lg="12">
        <div><label><b>TABEL GALERI TOKO</b></label>
            <b-button variant="primary" to="/form/galeri" class="btn btn-primary btn-xs pull-right" >+ Tambah Data</b-button>
        </div>
        <!-- <b-table >Tabel Toko</b-table> -->
        <table class="table table--middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Toko</th>
              <th>Picture</th>
              <th>Aksi</th>
            </tr>
            <tr v-for="gallery in galleries" :key="gallery.id">
              <td>{{ gallery.id }}</td>
              <td>{{ gallery.store_id }}</td>
              <td><img :src="gallery.picture" width="200" height="150"></td>
              <td><button v-b-modal.update class="btn btn-success btn-xs" @click="showItem(gallery)">Edit</button>
                  <button @click="deleteGallery(gallery)" class="btn btn-danger btn-xs">Delete</button></td>
            </tr>
          </thead>
        </table>
        <div>
            <b-modal id="update" size="lg" title="Edit Galeri Toko" @ok="editGallery(edit)">
                 <form @submit.prevent ="editGallery(edit)">
                     <div class="form-group">
                            <label for="store_id">ID Toko :</label>
                            <b-form-select id="store_id"
                              :plain="true"
                              :options="stores"
                              value="Pilih Toko"
                              v-model="edit.store_id">
                            </b-form-select></div>
                    <div class="form-group">
                            <label for="picture">Picture :</label>
                            <b-form-file id="picture" :plain="true" v-model="edit.picture" @change="onFileSelected"></b-form-file><br>
                            <img :src="edit.picture" width="100" height="100"></div>
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
            galleries: '',
            edit: '',
            errors: [],
            stores: [
                {value: null, text: 'Pilih Toko', disabled: true},
            ],
        }
    },
    mounted(){
        this.readGalleries();
        this.getStores();
    },
    methods: {
        readGalleries() {
            this.$axios.get('/gallery')
            .then(response => {
                this.galleries = response.data.galleries;
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
        deleteGallery(gallery) {
            if (confirm("Apakah Anda Ingin Menghapus data ini?")) {
                this.$axios.delete('/gallery/' + gallery.id)
                .then(response => {
                    let conf = alert("Berhasil terhapus");
                    this.readGalleries();
                }).catch(error => {
                    console.log(error.response.data.error);
                })
            }
        },
        showItem(gallery) {
                this.edits = true;
                this.$axios.get('/gallery/' + gallery.id)
                .then(response => { 
                    this.edit = response.data.gallery;
                    console.log(response.data.gallery);
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
                this.editGallery(gallery)
            }
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        editGallery (gallery) {
            const fd = new FormData();
            fd.append('_method', 'PUT');
            fd.append('picture', this.selectedFile, this.selectedFile.name);
            fd.set('store_id', this.edit.store_id);
            this.$axios.post('/gallery/' + gallery.id, fd)
            .then(response => {
                let conf = alert(response.data.message);
                this.readGalleries();
            }).catch(error => {
                console.log(error.response.data.message);
            })
        }
    }
    }
</script>
