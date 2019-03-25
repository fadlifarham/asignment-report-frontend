<script>
import { Bar } from 'vue-chartjs'

export default {
  data() {
    return {
      // chartData: ''
    }
  },
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Work Load', 'Work Quality', 'SPPD', 'Complite Assignment'],
      datasets: [
        {
          label: 'Performance',
          backgroundColor: '#538cc6',
          data: [40, 20, 12, 30],
          // data: () => ({
          //   loaded: false,
          //   chartdata: null
          // }),
        }
      ]
    })
    // axios.get(`https://localhost:44379/api/DailyStudents`)
    //   .then(response => {
    //     // JSON responses are automatically parsed.
    //     const responseData = response.data
    //     this.chartData = {
    //       labels: responseData.map(item => item.day),
    //       datasets: [
    //          label: 'Performance',
                // backgroundColor: '#538cc6',
    //          data: responseData.map(item => item.totalStudents)
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