<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Work Load', 'Work Quality', 'SPPD', 'Complite Assignment'],
      datasets: [
        {
          label: 'Performance',
          backgroundColor: '#538cc6',
          data: [40, 20, 12, 30]
        }
      ]
    })
  }
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