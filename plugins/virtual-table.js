import Vue from 'vue'
import VirtualTable from 'vue-virtual-table'
// import VirtualTable from '~/components/Tables/VirtualTable.vue'

Vue.component('virtual-table', VirtualTable)
// Vue.component('virtual-table', VirtualTable.extend({
//   props: ['data'],
//   mounted() {
//     this.renderTable(this.data)
//   },
// }))
// console.log("from plugins")
// Vue.use(VirtualTable)
// export default () => {
//   Vue.component('virtual-table', VirtualTable.default)
// }
