<template>
    <b-col sm="12">
        <b-card>
          <div slot="header">
            <strong>Tipe Toko</strong> <small> Form</small>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="name">Tipe Toko</label>
                <b-form-input type="text" id="name" v-model="name" placeholder="Nama Tipe Toko"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button @click="addStoreType" size="lg" variant="primary"><i class="fa fa-dot-circle-o"></i> Simpan</b-button>
            <b-button @click="reset" size="lg" variant="danger"><i class="fa fa-ban"></i> Batal</b-button>
          </div>
          <div></div>
        </b-card>
      </b-col>
</template>

<script>
export default {
  name: 'tipeToko',
  data () {
    return {
      name: '',
    }
  },
  methods: {
    addStoreType() {
      this.$axios.post('/store-type', {
          name: this.name
      })
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
      this.name = '';
    }
  }
}
</script>
