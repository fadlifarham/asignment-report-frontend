<script>
import { Bar } from 'vue-chartjs'
import setChart from '~/pages/utilization'

export default {
  data() {
    return {
      // chartData: ''
      // work_load:'',
      // work_quality:'',
      // sppd:'',
      // complete_assignment:'',
    }
  },
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Work Load', 'Work Quality', 'SPPD', 'Complete Assign'],
      datasets: [
        {
          label: 'Performance',
          backgroundColor: '#538cc6',
          data: [10,20,30,40]
          // data: () => ({
          //   loaded: false,
          //   chartdata: null
          // }),
        }
      ]
    })
    // axios.get('/utilization/all')
    //   .then(response => {
    //     // JSON responses are automatically parsed.
    //     const responseData = response.data
    //     this.chartData = {
    //       labels: ['Work Load', 'Work Quality', 'SPPD', 'Complite Assignment'],
    //       datasets: [
    //          label: 'Performance',
                // backgroundColor: '#538cc6',
    //          data: responseData.map(item => item.work_load, item => item.work_quality, item => item.sppd, item => item.complete_assignment)
    //       ]
    //     }
    //   })
    //   .catch(e => {
    //     this.errors.push(e)
    //   })
  },
}
</script>


// import { Bar } from 'vue-chartjs'

// export default {
//   extends: Bar,
//   data: () => ({
//     chartdata: {
//       datacollection: {
//         labels: ['Work Load', 'Work Quality', 'SPPD', 'Complite Assignment'],
//         datasets: [
//           {
//             label: 'Performance',
//             backgroundColor: '#538cc6',
//             data: [40, 20, 12, 39]
//           }
//         ]
//       }
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false
//     }
//   }),
//   mounted () {
//     this.renderChart(this.datacollection, this.options)
//   }
// }
// </script>
