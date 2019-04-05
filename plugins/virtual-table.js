import Vue from 'vue'
// import VirtualTable from 'vue-virtual-table'
import VirtualTable from '~/components/Tables/VirtualTable.vue'

Vue.component('virtual-table', VirtualTable.default)
// console.log("from plugins")
// Vue.use(VirtualTable)
// export default () => {
//   Vue.component('virtual-table', VirtualTable.default)
// }
