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
            start:'',
            end:'',
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
                {prop: 'full_name', name: 'Name', searchable: true, sortable: true, width: 120},
                {prop: 'start', name: 'Start Permission', sortable: true, width: 120},
                {prop: 'end', name: 'End Permission', sortable: true, width: 120},
            ],
        }
    },
    mounted(){
        this.readPermission();
    },
    methods: {
        readPermission() {
          var temp;
          this.$axios.get('admin/permission').then(response => {
              for(let i=0;i<response.data.length;i++){
                  temp = { id: response.data[i].id,
                            full_name: response.data[i].user.full_name,
                            start: response.data[i].start,
                            end: response.data[i].end,};
                this.permissions.push(temp);
              }
            console.log(this.permissions);
          })
        },
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

