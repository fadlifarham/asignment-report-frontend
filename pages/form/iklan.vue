<template>
    <b-col sm="12">
        <b-card>
          <div slot="header">
            <strong>Iklan Toko</strong> <small> Form</small>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="store_id">Toko</label>
                <b-form-select id="store_id"
                  :plain="true"
                  :options="stores"
                  value="Pilih Toko"
                  v-model="store_id">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
                <b-form-group
                    label="Banner"
                    label-for="banner"
                    :label-cols="2"
                    :horizontal="true">
                    <b-form-file id="banner" :plain="true" v-model="banner" @change="onFileSelected"></b-form-file>
                </b-form-group>
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button @click="addAdv" size="lg" variant="primary"><i class="fa fa-dot-circle-o"></i> Simpan</b-button>
            <b-button @click="reset" size="lg" variant="danger"><i class="fa fa-ban"></i> Batal</b-button>
          </div>
          <div></div>
        </b-card>
      </b-col>
</template>

<script>
export default {
  name: 'iklan',
  data () {
    return {
      selectedFile: null,
      store_id: null,
      banner: '',
      stores: [
          {value: null, text: 'Pilih Toko', disable: true}
      ]
    }
  },
  mounted(){
    this.getStores();
  },
  methods: {
    getStores() {
      this.$axios.get('/store')
      .then(response => {
        response.data.stores.forEach(element => {
          this.stores.push({
            value: element.id,
            text: element.name
          })
        });
        console.log(response.data.stores);
        console.log(this.stores);
      })
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    addAdv() {
      const fd = new FormData();
      fd.append('banner', this.selectedFile, this.selectedFile.name);
      fd.set('store_id', this.store_id);
      this.$axios.post('/advertisement', fd)
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
      this.picture = '',
      this.store_id = null;
    }
  }
}
</script>
