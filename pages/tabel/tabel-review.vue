<template>
  <b-row>
    <b-col lg="12">
        <div><label><b>TABEL REVIEW</b></label></div>
        <table class="table table-striped table--middle table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID User</th>
              <th>ID Store</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Aksi</th>
            </tr>
            <tr v-for="review in reviews" :key="review.id">
              <td>{{ review.id }}</td>
              <td>{{ review.user_id }}</td>
              <td>{{ review.store_id }}</td>
              <td>{{ review.rating }}</td>
              <td>{{ review.description }}</td>
              <td><button @click="deleteReview(review)" class="btn btn-danger btn-xs">Delete</button></td>
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
            reviews:'',
            errors:[],
        }
    },
    mounted(){
        this.readReviews();
    },
    methods: {
        readReviews() {
            this.$axios.get('/review')
            .then(response => {
                this.reviews = response.data.reviews;
                console.log(response.data.reviews);
            })
        },
        deleteReview(review) {
            if (confirm("Apakah Anda Ingin Menghapus data ini?")) {
                this.$axios.delete('/review/' + review.id)
                .then(response => {
                    let conf = alert("Berhasil terhapus");
                    this.readReviews();
                }).catch(error => {
                    console.log(error.response.data.error);
                })
            }
        }
    }
}
</script>

