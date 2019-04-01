<template>
  <b-row>
    <b-col lg="12">
        <div class="animated fadeIn">
          <div class="card">
            <b-card-header>
              <h5 id="traffic" class="card-title mb-0" style="padding : 5px">All Assignment</h5>
            </b-card-header>
            <b-card-body
              id="nav-scroller"
              ref="content"
              style="position:relative; height:500px; overflow-y:scroll;">
              <div id="people" style="width: 1500px">
                <v-client-table :data="alls" :columns="columns" :options="options"></v-client-table>
              </div>
            </b-card-body>
          </div>
        </div>
        <!-- <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" > -->

          <download-excel
            class="btn btn-primary btn-xs pull-right"
            :data="alls"
            :fields="json_fields"
            worksheet="Data"
            name="AllAssignment.xls">

            Export to Excel
          </download-excel>


        <!-- </b-button> -->
    </b-col>
  </b-row>
</template>
<script>
    import Vue from 'vue';
    Vue.use(require('vue-moment'));
    import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');
    import JsonExcel from 'vue-json-excel'
    Vue.component('downloadExcel', JsonExcel)

    export default {
    data () {
        return {
            name: 'people',
            // components: {
            //     JsonExcel
            // },
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
            columns: ['ID', 'PTL', 'project_Number', 'IO_Number', 'assignment_Class', 'assignment_Title', 'assignment_Desc', 'team_name','status'],
            options: {
                filterByColumn: true,
                listColumns: {
                },
                headings: {
                  ID: 'ID',
                  PTL: 'PTL',
                  project_Number: 'Project Number',
                  IO_Number: 'IO Number',
                  assignment_Class: 'Assignment Class',
                  assignment_Title: 'Assignment Title',
                  assignment_Desc: 'Assignment Description',
                  team_name: 'Team Name',
                  status: 'Status'
                },
                sortable: [
                  'ID', 'PTL', 'project_Number', 'IO_Number', 'assignment_Class', 'assignment_Desc', 'assignment_Title', 'team_name','status'
                ],
                filterable:['ID', 'PTL', 'project_Number', 'IO_Number', 'assignment_Class', 'assignment_Desc', 'assignment_Title', 'team_name', 'status'],
                texts: {
                  filterPlaceholder: 'filter'
                }
            }
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
                  temp = {
                      'ID'              : response.data[i].id,
                      'PTL'             : response.data[i].ptl.full_name,
                      'project_Number'  : response.data[i].project_number,
                      'IO_Number'       : response.data[i].io_number,
                      'assignment_Class': response.data[i].assignment_class,
                      'assignment_Title': response.data[i].assignment_tittle,
                      'assignment_Desc' : response.data[i].assignment_desc,
                      'status'          : response.data[i].status
                  };
                  this.alls.push(temp);
              }
              console.log(this.alls);
          })
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

