<template>
  <b-row>
      <!-- <b-col sm="4"></b-col>
      <b-col><h1>COMING SOON</h1></b-col>
      <center></center> -->
    <b-col lg="12">
        <div class="animated fadeIn">
          <div class="card">
            <b-card-header>
              <h5 id="traffic" class="card-title mb-0" style="padding : 5px">All Permission</h5>
            </b-card-header>
              <div id="people">
                <vue-virtual-table 
                    :data="permissions"
                    :config="tableConfig"
                    :height="500"
                    :itemHeight="55"
                    :minWidth="1000"
                    :selectable="true"
                    :hoverHighlight="true"
                    :enableExport="true"
                    :language="'en'"
                    :bordered="true"
                    v-on:changeSelection="handleSelectionChange">
                </vue-virtual-table>
              </div>
          </div>
        </div>
    </b-col>
  </b-row>
</template>
<script>
  import VueVirtualTable from 'vue-virtual-table'
  import Vue from 'vue';
  Vue.use(require('vue-moment'));
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');
    export default {
      components: {
            VueVirtualTable
        },
    data () {
        return {
            name: 'people',
            id:'',
            full_name:'',
            position:'',
            start_date:'',
            end_date:'',
            ket:'',
            permissions: [],
            edits: false,
            errors: [],
            roles:[],
            role_id: null,
            selected: null,
            select: [
                { value: null, text: 'Select Position', disabled: true },
            ],
             tableConfig: [
                {prop: '_index', name: 'No ', numberFilter: true, summary: 'COUNT', width: 40},
                {prop: 'id', name: 'ID', numberFilter: true, sortable: true, width: 40},
                {prop: 'full_name', name: 'Name', searchable: true, sortable: true, width: 120},
                {prop: 'position', name: 'Position', filterable: true, sortable: true, width: 100},
                {prop: 'start_date', name: 'Start Date', sortable: true, width: 120},
                {prop: 'end_date', name: 'End Date', sortable: true, width: 120},
                {prop: 'ket', name: 'Keterangan', width: 120},
            ],
        }
    },
    mounted(){
        // this.readPermission();
    },
    methods: {
        // readPermission() {
        //   var temp;
        //   this.$axios.get('admin/users').then(response => {
        //       for(let i=0;i<response.data.length;i++){
        //           temp = { id: response.data[i].id,
        //                     full_name: response.data[i].full_name,
        //                     email: response.data[i].email,
        //                     position: response.data[i].role.name,
        //                     start_date: response.data[i].start_date,
        //                     end_date: response.data[i].end_date,
        //                     ket: response.data[i].ket,};
        //         this.permissions.push(temp);
        //       }
        //     console.log(this.permissions);
        //   })
        // },
        scrollIntoView(evt) {
          evt.preventDefault()
          const href = evt.target.getAttribute('href')
          const el = href ? document.querySelector(href) : null
          if (el) {
            this.$refs.content.scrollTop = el.offsetTop
          }
        },
      },

      middleware: "admin"
    }
</script>
<style>
  table {
    counter-reset: section;
  }

  .no:before {
    counter-increment: section;
    content: counter(section);
  }
</style>

