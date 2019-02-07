<template>
    <b-col sm="12">
        <b-card>
          <div slot="header">
            <strong>Produk</strong> <small> Form</small>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="product_name">Nama Produk</label>
                <b-form-input type="text" id="product_name" v-model="product_name" placeholder="Nama Produk"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
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
              <b-form-group>
                <label for="category">Kategori Produk</label>
                <b-form-select id="category"
                    :plain="true"
                    :options="options"
                    value="Pilih Kategori Produk"
                    v-model="category">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
              <b-col sm="12">
                  <b-form-group label="Harga Produk" label-for="price">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text>Rp.</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input id="price" type="text"  v-model="price" placeholder="30000"></b-form-input>
                </b-input-group>
              </b-form-group>
              </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
                <b-form-group
                    v-model="picture"
                    label="Gambar Produk"
                    label-for="picture"
                    :label-cols="2"
                    :horizontal="true">
                    <b-form-file id="picture" :plain="true" @change="onFileSelected"></b-form-file>
                </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group :max-rows="6">
                <label for="description">Deskripsi Produk</label>
                <b-form-textarea id="description" v-model="description"
                     :rows="3"
                     placeholder="Deskripsi Produk..."></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button @click="addProduct" size="lg" variant="primary"><i class="fa fa-dot-circle-o"></i> Simpan</b-button>
            <b-button @click="reset" size="lg" variant="danger"><i class="fa fa-ban"></i> Batal</b-button>
          </div>
        </b-card>
      </b-col>
</template>

<script>
export default {
  name: 'produk',
  data () {
    return {
      product_id: '',
      product_name: '',
      store_id: null,
      category: null,
      price: '',
      picture: '',
      description: '',
      selected: null,
      options: [
        { value: null, text: 'Pilih Kategori Produk', disabled: true },
      ],
      stores: [
        { value: null, text: 'Pilih Toko', disabled: true },
      ],
    }
  },
  mounted() {
    this.getStores();
    this.getCategory();
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
      })
    },
    getCategory() {
      this.$axios.get('/category')
      .then(response => {
        response.data.categories.forEach(element => {
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
    addProduct() {
      const fd = new FormData();
      fd.append('picture', this.selectedFile, this.selectedFile.name);
      fd.set('name', this.product_name);
      fd.set('store_id', this.store_id);
      fd.set('category_id', this.category);
      fd.set('price', this.price);
      fd.set('description', this.description);
      this.$axios.post('/product', fd)
      .then(response => {
          alert(response.data.message);
          this.resetForm();
      }).catch(error => {
          console.log(error.response.data.error);
      })
    },
    reset () {
      Object.assign(this.$data, this.$options.data());
    },
    resetForm() {
      this.product_name = this.price = this.picture = this.description = '',
      this.store_id = this.category = null;
    }
  }
}
</script>
