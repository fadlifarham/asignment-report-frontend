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
import navAll from './menu'
import navEngineer from './menuEngineer'
import navAdmin from './menuAdmin'
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
      nav: null,
      navEngineer: navEngineer.items,
      navAll: navAll.items,
      navAdmin: navAdmin.items,
      user: null,
      role: null,
    }
  },

  mounted() {
    this.getUserInfo()
    // this.defineRoutes()
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
        this.defineRoutes()
      });
    },

    defineRoutes() {
      console.log('Role : ' + this.role)
      if (this.role == 4)
        this.nav = this.navEngineer
      else
        this.nav = this.navAll
    }
  },
}
</script>
