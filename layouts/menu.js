export default {
  items: [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'icon-speedometer',
    },
    {
      name: 'All Assignment',
      url: '/assignmentList/list',
      icon: 'icon-list',
    },
    {
      name: 'Assignment',
      url: '/createAssignment',
      icon: 'icon-paper-clip',
      children: [
        {
          name: 'Assignment List',
          url: '/createAssignment/listCreated',
          icon: 'icon-list',
        },
        {
          name: 'Create Assignment',
          url: '/createAssignment/create',
          icon: 'icon-plus'
        },
      ]
    },
    {
        name: 'Assignment Report',
        url: '/report/listReport',
        icon: 'icon-book-open',
    },
    {
      name: 'Team Utilization',
      url: '/utilization',
      icon: 'icon-chart',
    },
    {
      name: 'test ',
      url: '/createAssignment/viewReport',
      icon: 'icon-chart',
    },
    // {
    //   name: 'Form',
    //   url: '/form',
    //   icon: 'icon-puzzle',
    //   children: [

    //     {
    //       name: 'Toko',
    //       url: '/form/toko',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Produk',
    //       url: '/form/produk',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Galeri Toko',
    //       url: '/form/galeri',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Iklan Toko',
    //       url: '/form/iklan',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tipe Toko',
    //       url: '/form/tipe-toko',
    //       icon: 'icon-puzzle'
    //     }
    //   ]
    // },
    // {
    //   name: 'Tabel',
    //   url: '/tabel',
    //   icon: 'icon-puzzle',
    //   children: [
    //     {
    //       name: 'Tabel Toko',
    //       url: '/tabel/tabel-toko',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tabel Produk',
    //       url: '/tabel/tabel-produk',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tabel Galeri Toko',
    //       url: '/tabel/tabel-galeri',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tabel Iklan Toko',
    //       url: '/tabel/tabel-iklan',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tabel Tipe Toko',
    //       url: '/tabel/tabel-tipe-toko',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tabel User',
    //       url: '/tabel/tabel-user',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tabel Review',
    //       url: '/tabel/tabel-review',
    //       icon: 'icon-puzzle'
    //     },
    //     {
    //       name: 'Tabel Favorite',
    //       url: '/tabel/tabel-favourite',
    //       icon: 'icon-puzzle'
    //     },
    //   ]
    // },

    // {
    //   name: 'ex',
    //   url: '/form',
    //   icon: 'icon-puzzle',
    //   children: [
    //     {
    //       name: 'in',
    //       url: '/form/forms',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'tab',
    //       url: '/form/table',
    //       icon: 'icon-puzzle',
    //     },
    //     {
    //       name: 'tabs',
    //       url: '/form/tables',
    //       icon: 'icon-puzzle',
    //     },
    //   ]
    // },

  ],
}
