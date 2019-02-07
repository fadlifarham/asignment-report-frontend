<template>
    <b-col sm="12">
        <b-card>
          <div slot="header">
            <strong>Toko</strong> <small> Form</small>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="uid">UID</label>
                <b-form-input type="text" id="uid" v-model="uid" placeholder="UID Cubeacon"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="name">Nama Toko</label>
                <b-form-input type="text" id="name" v-model="name" placeholder="Nama Toko"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="location">Lokasi Toko</label>
                <b-form-input type="text" id="location" v-model="location" placeholder="TP x Lantai x"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="phone">No. Telp</label>
                <b-form-input type="text" id="phone" v-model="phone" placeholder="+628xxx"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="store_type">Kategori Toko</label>
                <b-form-select id="store_type"
                  :plain="true"
                  :options="options"
                  value="Pilih Kategori Toko"
                  v-model="store_type">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="6">
              <b-form-group>
                <label for="open">Jam Buka</label>
                <b-form-input type="time" id="open" v-model="open" placeholder="08:00"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group>
                <label for="close">Jam Tutup</label>
                <b-form-input type="time" id="close" v-model="close" placeholder="21:00"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
                <b-form-group
                    label="Logo"
                    label-for="logo"
                    :label-cols="2"
                    :horizontal="true">
                    <b-form-file id="logo" :plain="true" v-model="logo" @change="onFileSelected"></b-form-file>
                </b-form-group>
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button @click="addStore" size="lg" variant="primary"><i class="fa fa-dot-circle-o"></i> Simpan</b-button>
            <b-button @click="reset" size="lg" variant="danger"><i class="fa fa-ban"></i> Batal</b-button>
          </div>
          <div></div>
        </b-card>
      </b-col>
</template>

<script>
export default {
  name: 'toko',
  data () {
    return {
      selectedFile: null,
      uid: '',
      name: '',
      location: '',
      phone: '',
      store_type: null,
      open: '',
      close: '',
      logo: '',
      options: [
        { value: null, text: 'Pilih Kategori Toko', disabled: true }
      ]
    }
  },
  mounted(){
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
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    addStore() {
      const fd = new FormData();
      fd.append('logo', this.selectedFile, this.selectedFile.name);
      fd.set('uid', this.uid);
      fd.set('name', this.name);
      fd.set('location', this.location);
      fd.set('phone', this.phone);
      fd.set('store_type_id', this.store_type);
      fd.set('open', this.open);
      fd.set('close', this.close);
      this.$axios.post('/store', fd)
      .then(response => {
          alert(response.data.message);
          this.resetForm();
      }).catch(error => {
          console.log(error.response.data.error);
      })
    },
    reset() {
      Object.assign(this.$data, this.$options.data());
    },
    resetForm() {
      this.uid = this.name = this.location = this.phone = 
      this.open = this.close = this.logo = '',
      this.store_type = null;
    }
  }
}
</script>
