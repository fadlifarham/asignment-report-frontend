<template>
  <div class="animated fadeIn">
    <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Recent Activity</h5> 
      <b-card no-body style="width: 100%; height: 300px">
        <b-card-body
          id="nav-scroller"
          ref="content"
          style="position:relative; height:300px; overflow-y:scroll;"
        >
          <!-- <b-table :small="small" responsive="sm" :items="recents">
          </b-table> -->
          <c-table small>
            <b-row v-for="recent in recents" :key="recent.id">
              <b-col sm="2"><strong>{{ recent.user.full_name }}</strong></b-col>
              <b-col sm="2">{{ recent.action }}</b-col>
              <b-col sm="4"><strong>{{ recent.assignment.assignment_tittle }}</strong></b-col>
              <!-- <b-col sm="0">at</b-col> -->
              <b-col sm="4">at <strong><span>{{ recent.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span></strong></b-col>
            </b-row>
          </c-table>
        </b-card-body>
      </b-card>
    <h5 id="traffic" class="card-title mb-0" style="padding : 5px">Idle Team This Day</h5>
    <b-card no-body style="width: 100%; height: 300px">
        <b-card-body
          id="nav-scroller"
          ref="content"
          style="position:relative; height:300px; overflow-y:scroll;"
        >
          <table class="table table--middle">
            <tr v-for="idle in idles" :key="idle.id">
              {{ idle.full_name }}
            </tr>
          </table>
        </b-card-body>
      </b-card>
  </div>
</template>

<script>
import Vue from 'vue';
// import CardLine1ChartExample from '~/components/dashboard/CardLine1ChartExample'
// import CardLine2ChartExample from '~/components/dashboard/CardLine2ChartExample'
// import CardLine3ChartExample from '~/components/dashboard/CardLine3ChartExample'
// import CardBarChartExample from '~/components/dashboard/CardBarChartExample'
// import MainChartExample from '~/components/dashboard/MainChartExample'
// import SocialBoxChartExample from '~/components/dashboard/SocialBoxChartExample'
// import CalloutChartExample from '~/components/dashboard/CalloutChartExample'
// import { Callout } from '~/components/'

Vue.use(require('vue-moment'));


export default {
  // name: 'c-table',
  //   props: {
  //     caption: {
  //       type: String,
  //       default: 'Table'
  //     },
  //     hover: {
  //       type: Boolean,
  //       default: false
  //     },
  //     striped: {
  //       type: Boolean,
  //       default: false
  //     },
  //     bordered: {
  //       type: Boolean,
  //       default: false
  //     },
  //     small: {
  //       type: Boolean,
  //       default: false
  //     },
  //     fixed: {
  //       type: Boolean,
  //       default: false
  //     }
  //   },
  data :() => ({
    recents: [],
    idles: [],
  }),
  mounted() {
    this.readRecent();
    this.readIdle();
  },
  methods: {
    readRecent() {
      // var temp;
      //     this.$axios.get('history/recent').then(response => {
      //         for(let i=0;i<response.data.length;i++){
      //             temp = { ID: response.data[i].id, user: response.data[i].user.full_name, project_Number: response.data[i].project_number,
      //             IO_Number: response.data[i].io_number, assignment_Class: response.data[i].assignment_class, assignment_Title: response.data[i].assignment_tittle,
      //             status: response.data[i].status, created_At: response.data[i].created_at, update_At: response.data[i].updated_at };
      //           this.alls.push(temp);
      //         }
      //       console.log(this.alls);
      // })
      this.$axios.get('history/recent').then(response => {
        this.recents = response.data;
        console.log(this.recents);
      })
    },
    readIdle() {
      this.$axios.get('history/idle').then(response => {
        this.idles = response.data;
        console.log(this.idles);
      })
    }
  }

  // middleware: 'auth',
//   name: 'dashboard',
//   components: {
//     Callout,
//     CardLine1ChartExample,
//     CardLine2ChartExample,
//     CardLine3ChartExample,
//     CardBarChartExample,
//     MainChartExample,
//     SocialBoxChartExample,
//     CalloutChartExample
//   },
//   data: function () {
//     return {
//       selected: 'Month',
//       tableItems: [
//         {
//           avatar: { url: 'img/avatars/1.jpg', status: 'success' },
//           user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
//           country: { name: 'USA', flag: 'us' },
//           usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
//           payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
//           activity: '10 sec ago'
//         },
//         {
//           avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
//           user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
//           country: { name: 'Brazil', flag: 'br' },
//           usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
//           payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
//           activity: '5 minutes ago'
//         },
//         {
//           avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
//           user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
//           country: { name: 'India', flag: 'in' },
//           usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
//           payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
//           activity: '1 hour ago'
//         },
//         {
//           avatar: { url: 'img/avatars/4.jpg', status: '' },
//           user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
//           country: { name: 'France', flag: 'fr' },
//           usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
//           payment: { name: 'PayPal', icon: 'fa fa-paypal' },
//           activity: 'Last month'
//         },
//         {
//           avatar: { url: 'img/avatars/5.jpg', status: 'success' },
//           user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
//           country: { name: 'Spain', flag: 'es' },
//           usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
//           payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
//           activity: 'Last week'
//         },
//         {
//           avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
//           user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
//           country: { name: 'Poland', flag: 'pl' },
//           usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
//           payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
//           activity: 'Last week'
//         }
//       ],
//       tableFields: {
//         avatar: {
//           label: '<i class="icon-people"></i>',
//           class: 'text-center'
//         },
//         user: {
//           label: 'User'
//         },
//         country: {
//           label: 'Country',
//           class: 'text-center'
//         },
//         usage: {
//           label: 'Usage'
//         },
//         payment: {
//           label: 'Payment method',
//           class: 'text-center'
//         },
//         activity: {
//           label: 'Activity'
//         }
//       }
//     }
//   },
//   methods: {
//     variant (value) {
//       let $variant
//       if (value <= 25) {
//         $variant = 'info'
//       } else if (value > 25 && value <= 50) {
//         $variant = 'success'
//       } else if (value > 50 && value <= 75) {
//         $variant = 'warning'
//       } else if (value > 75 && value <= 100) {
//         $variant = 'danger'
//       }
//       return $variant
//     },
//     flag (value) {
//       return 'flag-icon flag-icon-' + value
//     }
//   }
  }
</script>
