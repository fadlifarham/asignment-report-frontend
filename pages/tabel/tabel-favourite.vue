<template>
  <b-row>
    <b-col lg="12">
        <div><label><b>TABEL TOKO FAVORIT</b></label></div>
        <table class="table table-striped table--middle table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name User</th>
              <th>Name Toko</th>
            </tr>
            <tr v-for="favourite in favourites" :key="favourite.id">
              <td>{{ favourite.id }}</td>
              <td>{{ favourite.user_id }}</td>
              <td>{{ favourite.store_id }}</td>
            </tr>
          </thead>
        </table>
    </b-col>
  </b-row>
</template>
<script>
export default {
    data(){
        return {
            favourites:'',
            errors:[],
        }
    },
    mounted(){
        this.readFavourites();
    },
    methods: {
        readFavourites() {
            this.$axios.get('/favourite')
            .then(response => {
                this.favourites = response.data.favourites;
                console.log(response.data.favourites);
            })
        },
    }
}
</script>

