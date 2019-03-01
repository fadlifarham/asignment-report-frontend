// import Vue from 'vue';
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);

export default {
  items: [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'icon-speedometer',
    },
    {
      name: 'Assignment List',
      url: '/assignmentList/list',
      icon: 'icon-puzzle',
    },
    {
      name: 'Create Assignment',
      url: '/createAssignment',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'List Assignment',
          url: '/createAssignment/listCreated',
          icon: 'icon-puzzle'
        },
        {
          name: 'Create Assignment',
          url: '/createAssignment/create',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      name: 'Assignment Report',
      path: '/report/listReport',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'List Report',
          url: '/report/listReport',
          icon: 'icon-puzzle'
        },
        {
          name: 'Submit Report',
          path: '/report/submitReport/:id',
          component: '/pages/report/submitReport.vue',
          props: true,
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      name: 'Team Utilization',
      url: '/utilization',
      icon: 'icon-puzzle',
    },
    {
      name: 'Form',
      url: '/form',
      icon: 'icon-puzzle',
      children: [

        {
          name: 'Toko',
          url: '/form/toko',
          icon: 'icon-puzzle'
        },
        {
          name: 'Produk',
          url: '/form/produk',
          icon: 'icon-puzzle'
        },
        {
          name: 'Galeri Toko',
          url: '/form/galeri',
          icon: 'icon-puzzle'
        },
        {
          name: 'Iklan Toko',
          url: '/form/iklan',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tipe Toko',
          url: '/form/tipe-toko',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Tabel',
      url: '/tabel',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Tabel Toko',
          url: '/tabel/tabel-toko',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabel Produk',
          url: '/tabel/tabel-produk',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabel Galeri Toko',
          url: '/tabel/tabel-galeri',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabel Iklan Toko',
          url: '/tabel/tabel-iklan',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabel Tipe Toko',
          url: '/tabel/tabel-tipe-toko',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabel User',
          url: '/tabel/tabel-user',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabel Review',
          url: '/tabel/tabel-review',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabel Favorite',
          url: '/tabel/tabel-favourite',
          icon: 'icon-puzzle'
        },
      ]
    },

    {
      name: 'ex',
      url: '/form',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'in',
          url: '/form/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'tab',
          url: '/form/table',
          icon: 'icon-puzzle',
        },
        {
          name: 'tabs',
          url: '/form/tables',
          icon: 'icon-puzzle',
        },
      ]
    },

  ]
}

// let router = new VueRouter({
//   items
// });
