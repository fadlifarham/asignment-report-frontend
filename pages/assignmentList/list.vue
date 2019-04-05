<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn">
          <div class="card">
            <b-card-header>
              <h5 id="traffic" class="card-title mb-0" style="padding : 5px">All Assignment</h5>
            </b-card-header>
            <!-- <b-card-body
              id="nav-scroller"
              ref="content"
              style="position:relative; height:500px;"> -->
              <div id="people">
                <!-- <vue-virtual-table
                    :config="tableConfig"
                    :data="alls"
                    :height="500"
                    :itemHeight="55"
                    :minWidth="1500"
                    :selectable="true"
                    :hoverHighlight="true"
                    :enableExport="true"
                    :language="'en'"
                    v-on:changeSelection="handleSelectionChange"/> -->


                <virtual-table
                    :config="tableConfig"
                    :data="alls"
                    :height="500"
                    :itemHeight="55"
                    :minWidth="1500"
                    :selectable="true"
                    :hoverHighlight="true"
                    :enableExport="true"
                    :language="'en'"
                    v-on:changeSelection="handleSelectionChange">
                    <!-- :columns="columns" :options="options"> -->
                    <!-- <template slot-scope="scope" slot="actionCommon">
                        <button @click="edit(scope.index, scope.row)">Edit</button>
                        <button @click="del(scope.index, scope.row)">Delete</button>
                    </template> -->
                    </virtual-table>
                    <!-- <vue-virtual-table/> -->
              </div>
            <!-- </b-card-body> -->
          </div>
        </div>
        <!-- <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" > -->

          <!-- <download-excel
            class="btn btn-primary btn-xs pull-right"
            :data="alls"
            :fields="json_fields"
            worksheet="Data"
            name="AllAssignment.xls">

            Export to Excel
          </download-excel> -->


        <!-- </b-button> -->
    </b-col>
  </b-row>
</template>
<script>
    // import VirtualTable from 'vue-virtual-table'
    // import Vue from 'vue';
    // Vue.use(require('vue-moment'));

    import VirtualTable from '~/components/Tables/VirtualTable.vue'
    // import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    // Vue.use(ClientTable, {}, false, 'bootstrap4');
    // import JsonExcel from 'vue-json-excel'
    // Vue.component('downloadExcel', JsonExcel)

    export default {
        components: {
            VirtualTable
        },
    data () {
        return {
            name: 'people',
            alls: [],
            json_fields: {
                'ID'                      : 'ID',
                'PTL'                     : 'PTL',
                'Project Number'          : 'project_Number',
                'IO Number'               : 'IO_Number',
                'Assignment Class'        : 'assignment_Class',
                'Assignment Title'        : 'assignment_Title',
                'Assignment Description'  : 'assignment_Desc',
                'Status'                  : 'status'
            },
            errors: [],
            tableConfig: [
                {prop: '_index', name: 'No ', numberFilter: true, summary: 'COUNT', width: 40},
                {prop: 'id', name: 'ID', numberFilter: true, sortable: true, width: 120},
                {prop: 'ptl', name: 'PTL', filterable: true, width: 150},
                {prop: 'project_number', name: 'Project Number', searchable: true, sortable: true, width: 150},
                {prop: 'io_number', name: 'IO Number', searchable: true, sortable: true, width: 150},
                {prop: 'assignment_class', name: 'Assignment Class', filterable: true, width: 170},
                {prop: 'assignment_tittle', name: 'Assignment Title', width: 150},
                {prop: 'assignment_desc', name: 'Description', width: 180},
                {prop: 'status', name: 'Status', filterable: true, width: 90},
                {prop: 'team_name', name: 'Team Name', searchable: true, width: 150},
                // {prop: 'age', name: 'Age', numberFilter: true},
                // {prop: '_action', name: 'Action', actionName: 'actionCommon'}
            ],
        }
    },
    mounted(){
        this.readAlls();
    },
    methods: {
        readAlls() {
          var temp;
          this.$axios.get('assignment/all').then(response => {
              for(let i=0;i<response.data.length;i++){
                  let teams = ''
                  for(let j=0; j<response.data[i].user.length;j++){
                      teams += response.data[i].user[j].full_name+', ';
                  }
                  temp = {
                      'id'              : response.data[i].id,
                      'ptl'             : response.data[i].ptl.full_name,
                      'project_number'  : response.data[i].project_number,
                      'io_number'       : response.data[i].io_number,
                      'assignment_class': response.data[i].assignment_class,
                      'assignment_tittle': response.data[i].assignment_tittle,
                      'assignment_desc' : response.data[i].assignment_desc,
                      'team_name'       : teams,
                      'status'          : response.data[i].status
                  };
                  this.alls.push(temp);
              }
              console.log(this.alls);
          })
        },
        handleSelectionChange(rows){
            console.log(rows)
        },
          getBadge (status) {
          return status === 'On Progress' ? 'success'
            : status === 'Close' ? 'secondary'
              : status === 'Waiting Approvement' ? 'warning'
                : status === 'Cancel' ? 'danger' : 'primary'
        },
        scrollIntoView(evt) {
          evt.preventDefault()
          const href = evt.target.getAttribute('href')
          const el = href ? document.querySelector(href) : null
          if (el) {
            this.$refs.content.scrollTop = el.offsetTop
          }
        }
      },

      exportToExcel() {
        this.$axios.get('assignment/all/export').then(response => {
          this.apply = response.data
          let blob = new Blob([response.data], { type: 'application/xlsx'})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = 'All_Assignment.xlsx'
          link.click()
          // console.log(response.data)
        });
      }
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

