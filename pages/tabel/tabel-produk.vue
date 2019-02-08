<template>
  <b-row>
    <b-col lg="12">
        <div><label><b>TABEL PRODUK</b></label>
            <b-button variant="primary" to="/form/produk" class="btn btn-primary btn-xs pull-right" >+ Tambah Data</b-button>
        </div>
        <table class="table table-striped table--middle">
          <thead>
            <tr>
              <th>id</th>
              <th>product_name</th>
              <th>category</th>
              <th>price</th>
              <th>picture</th>
              <th>description</th>
              <th>Aksi</th>
            </tr>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.category.name }}</td>
              <td>{{ product.price }}</td>
              <td><img :src="product.picture" width="100" height="100"></td>
              <td>{{ product.description }}</td>
              <td><button v-b-modal.update class="btn btn-success btn-xs"  @click="showItem(product)">Edit</button>
                  <button @click="deleteProduct(product)" class="btn btn-danger btn-xs">Delete</button></td>
            </tr>
          </thead>
        </table>

         <div>
            <b-modal id="update" size="lg" title="Edit Data Toko" ref="modal" @ok="editProduct(edit)">
                 <form @submit.prevent ="editProduct(edit)">
                     <div class="form-group">
                            <label>Nama Produk :</label>
                            <input type="text" placeholder="Nama Toko" class="form-control"
                                   v-model="edit.name"></div>
                    <div class="form-group">
                            <label for="category">Kategori Produk :</label>
                            <b-form-select id="category"
                              :plain="true"
                              :options="categories"
                              value="Pilih Kategori Produk"
                              v-model="edit.category_id">
                            </b-form-select></div>
                    <div class="form-group">
                            <label for="price">Harga Produk :</label>
                            <b-input-group>
                            <b-input-group-prepend>
                              <b-input-group-text>Rp.</b-input-group-text>
                            </b-input-group-prepend>
                            <b-form-input id="price" type="text"  v-model="edit.price" placeholder="30000"></b-form-input>
                          </b-input-group></div>
                    <div class="form-group">
                            <label for="picture"><Picture></Picture> Gambar Produk :</label>
                            <b-form-file id="picture" :plain="true" v-model="edit.picture" @change="onFileSelected"></b-form-file><br>
                            <img :src="edit.picture" width="100" height="100"></div>
                    <div class="form-group">
                            <label for="description"><Picture></Picture>Deskripsi Produk :</label>
                            <textarea name="description" id="description" cols="30" rows="5" class="form-control" 
                            placeholder="Description Toko..." v-model="edit.description"></textarea></div>
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
        product_name: '',
        store_id: null,
        category: null,
        price: '',
        picture: '',
        description: '',
      errors: [],
      products: null,
      edits: false,
      edit: '',
      categories: [
          {value: null, text: 'Pilih Kategori Produk', disable: true},
      ],
      stores: [
          {value: null, text: 'Pilih Toko', disable: true},
      ],
    }
  },
  mounted(){
      this.getProducts();
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
          this.categories.push({
            value: element.id,
            text: element.name
          })
        });
      })
    },
    getProducts() {
        this.$axios.get('/product')
        .then(response => {
            this.products = response.data.products; 
            console.log(response.data.products);
        });
    },
    deleteProduct(product) {
        if (confirm("Apakah Anda Ingin Menghapus data ini?")) {
            this.$axios.delete('/product/' + product.id)
            .then(response => {
                let conf = alert("Berhasil terhapus");
                this.getProducts();
            }).catch(error => {
                console.log(error.response.data.error);
            })
        }
    },
    showItem(product) {
        this.edits = true;
        this.$axios.get('/product/' + product.id)
        .then(response => {
            this.edit = response.data.product;
            console.log(response.data.product);
        })
        .catch(e => {
            (error) => console.log(error)
        });
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    editProduct (product) {
        const fd = new FormData();
        fd.append('_method', 'PUT');
        fd.append('picture', this.selectedFile, this.selectedFile.name);
        fd.set('name', this.edit.name);
        fd.set('category_id', this.edit.category_id);
        fd.set('price', this.edit.price);
        fd.set('description', this.edit.description);
        this.$axios.post('/product/' + product.id, fd)
        .then(response => {
            alert(response.data.message);
            this.getProducts();
        }).catch(error => {
            console.log(error.response.data.error);
        })
    },
  }
}
</script>