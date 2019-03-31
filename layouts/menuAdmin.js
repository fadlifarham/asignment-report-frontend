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
            meta: {
              engineer: true,
            }
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
        name: 'Register',
        url: '/utilization',
        icon: 'icon-chart',
      },
      {
        name: 'Register',
        url: '/utilization',
        icon: 'icon-chart',
      },
      {
        name: 'Register',
        url: '/Register',
        icon: 'icon-user',
      },
      {
        name: 'Setting',
        url: '/admin/setting',
        icon: 'icon-settings',
      },
      {
        name: 'All Assignment',
        url: '/admin/listAll',
        icon: 'icon-list',
      },
      {
        name: 'All User',
        url: '/admin/user',
        icon: 'icon-list',
      },
      {
        name: 'All Report',
        url: '/admin/allReport',
        icon: 'icon-list',
      },
  
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
  