<template>
  <b-row>
    <b-col lg="12">
        <div><label><b>TABEL TOKO</b></label>
            <b-button variant="primary" to="/form/toko" class="btn btn-primary btn-xs pull-right" >+ Tambah Data</b-button>
        </div>
        <!-- <b-table >Tabel Toko</b-table> -->
        <table class="table table-striped table--middle table-responsive">
          <thead>
            <tr>
              <th>id</th>
              <th>uid</th>
              <th>name</th>
              <th>location</th>
              <th>phone</th>
              <th>store_type</th>
              <th>open</th>
              <th>close</th>
              <th>logo</th>
              <th>Aksi</th>
            </tr>
            <tr v-for="store in stores" :key="store.id">
              <td>{{ store.id }}</td>
              <td>{{ store.uid }}</td>
              <td>{{ store.name }}</td>
              <td>{{ store.location }}</td>
              <td>{{ store.phone }}</td>
              <td>{{ store.store_type.name }}</td>
              <td>{{ store.open }}</td>
              <td>{{ store.close }}</td>
              <td><img :src="store.logo" width="100" height="100"></td>
              <td><button v-b-modal.update class="btn btn-success btn-xs" @click="showItem(store)">Edit</button>
                  <button @click="deleteStore(store)" class="btn btn-danger btn-xs">Delete</button></td>
            </tr>
          </thead>
        </table>
        <div>
            <b-modal id="update" size="lg" title="Edit Data Toko" @ok="editStore(edit)">
                 <form @submit.prevent ="editStore(edit)">
                     <div class="form-group">
                            <label>UID :</label>
                            <input type="text" placeholder="UID" class="form-control"
                                   v-model="edit.uid">
                    </div>
                    <div class="form-group">
                            <label>Nama Toko:</label>
                            <input type="text" placeholder="Nama Toko" class="form-control"
                                   v-model="edit.name">
                    </div>
                    <div class="form-group">
                            <label for="location">Lokasi Toko :</label>
                            <input type="text" placeholder="Lokasi Toko" class="form-control"
                                   v-model="edit.location"></div>
                    <div class="form-group">
                            <label for="phone">No. Telp :</label>
                            <input type="text" placeholder="+628xxx" class="form-control"
                                   v-model="edit.phone"></div>
                    <div class="form-group">
                            <label for="store_type">Kategori Toko :</label>
                            <b-form-select id="store_type"
                              :plain="true"
                              :options="options"
                              value="Pilih Kategori Toko"
                              v-model="edit.store_type_id">
                            </b-form-select></div>
                    <div class="form-group">
                            <label for="open">Jam Buka :</label>
                            <input type="time" placeholder="08:00" class="form-control"
                                   v-model="edit.open"></div>
                    <div class="form-group">
                            <label for="close" :label-cols="2" :horizontal="true">Jam Tutup :</label>
                            <input type="time" placeholder="21:00" class="form-control"
                                   v-model="edit.close"></div>
                    <div class="form-group">
                            <label for="logo">Logo :</label>
                            <b-form-file id="logo" :plain="true" v-model="edit.logo" @change="onFileSelected"></b-form-file><br>
                            <img :src="edit.logo" width="100" height="100"></div>
                    <div class="form-group">
                            <label for="promo">Promo :</label>
                            <b-form-select id="promo"
                              :plain="true"
                              :options="promo"
                              value="Pilih Kategori Toko"
                              v-model="edit.promo">
                            </b-form-select></div>
                    <!-- <button type="submit">Submit</button> -->
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
            id: '',
            uid: '',
            name: '',
            location: '',
            phone: '',
            store_type: '',
            open: '',
            close: '',
            logo: '',
            selected: null,
            selectedFile: null,
            options: [
            { value: null, text: 'Pilih Kategori Toko', disabled: true },
            ],
            promo: [
                {value: false, text: 'Tidak Ada'},
                {value: true, text: 'Ada'},
            ],
            errors: [],
            stores: '',
            edits: false,
            edit: '',
        }
    },
    mounted(){
        this.readStores();
        this.getStoreType();
    },
    methods: {
        getStoreType() {
        this.$axios.get('/store-type')
        .then(response => {
            response.data.store_types.forEach(element => {
            this.options.push({
                value: element.id,
                text: element.name
            })
            });
        })
        },
        readStores() {
            this.$axios.get('/store')
            .then(response => {
                this.stores = response.data.stores;
                console.log(response.data.stores);
            })
        },
        deleteStore(store) {
            if (confirm("Apakah Anda Ingin Menghapus data ini?")) {
                this.$axios.delete('/store/' + store.id)
                .then(response => {
                    let conf = alert("Berhasil terhapus");
                    this.readStores();
                }).catch(error => {
                    console.log(error.response.data.error);
                })
            }
        },
        showItem(store) {
            this.edits = true;
            this.$axios.get('/store/' + store.id)
            .then(response => { 
                this.edit = response.data.store;
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
                this.editStore(store)
            }
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        editStore (store) {
            const fd = new FormData();
            fd.append('_method', 'PUT');
            if(this.selectedFile) {
                fd.append('logo', this.selectedFile, this.selectedFile.name);
            }
            fd.set('uid', this.edit.uid);
            fd.set('name', this.edit.name);
            fd.set('location', this.edit.location);
            fd.set('phone', this.edit.phone);
            fd.set('store_type_id', this.edit.store_type_id);
            fd.set('open', this.edit.open);
            fd.set('close', this.edit.close);
            fd.set('promo', this.edit.promo);
            this.$axios.post('/store/' + store.id, fd)
            .then(response => {
                let conf = alert(response.data.message);
                this.readStores();
            }).catch(error => {
                console.log(error.response.data.message);
            })
        }
    }
    }
</script>
