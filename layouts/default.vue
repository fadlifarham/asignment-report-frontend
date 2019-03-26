<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <div class="container-fluid">
          <nuxt />
        </div>
      </main>
      <!-- <AppAside/> -->
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import nav from './menu'
import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from '~/components/'
// import store from './store/index.js'

// function requireAuth() {
//   function proceed() {
//     if (store.getters.getUserLoadStatus() == 2) {

//     }
//   }
// }

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    // AppAside,
    AppFooter,
  },
  data () {
    return {
      nav: nav.items,
      user: null,
      role: null,
    }
  },

  mounted() {
    this.getUserInfo()
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    },
  },
  methods: {
    getUserInfo() {
      this.$axios.get('profile').then(response => {
        this.user = response;
        this.role = response.data.role_id;
        // console.log('role : ' + this.role);
        $store.state.role = response.data.role_id
      });
    },
  },
}
</script>
