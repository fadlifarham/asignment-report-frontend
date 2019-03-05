<template>
  <b-row>
    <b-col lg="12">
      <div>
        <b-col cols="4">
          <label><b>ASSIGNMENT LIST</b></label>
        </b-col>
      </div>
        <div class="animated fadeIn">
          <div class="card" style="radius: 3px">
            <div class="card-body">
              <div id="people">
                <v-client-table :data="alls" :columns="columns" align="center"></v-client-table>
              </div>
              <b-button variant="secondary" to="" class="btn btn-primary btn-xs pull-right" >Export to Excel</b-button>
            </div>
          </div>
        </div>
    </b-col>
  </b-row>
</template>
<script>
  import Vue from 'vue';
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
    Vue.use(ClientTable, {}, false, 'bootstrap4');
    export default {
    data () {
        return {
            alls: [],
            errors: [],
            // columns: ['id', 'name', 'age'],
            // tableData: [
            //     { id: 1, name: "John", age: "20" },
            //     { id: 2, name: "Jane", age: "24" },
            //     { id: 3, name: "Susan", age: "16" },
            //     { id: 4, name: "Chris", age: "55" },
            //     { id: 5, name: "Dan", age: "40" },
            //     { id: 6, name: "John", age: "20" },
            //     { id: 7, name: "Jane", age: "24" },
            //     { id: 8, name: "Susan", age: "16" },
            //     { id: 9, name: "Chris", age: "55" },
            //     { id: 10, name: "Dan", age: "40" },
            //     { id: 11, name: "John", age: "20" },
            //     { id: 12, name: "Jane", age: "24" },
            //     { id: 13, name: "Susan", age: "16" },
            //     { id: 14, name: "Chris", age: "55" },
            //     { id: 15, name: "Dan", age: "40" },
            //     { id: 16, name: "John", age: "20" },
            //     { id: 17, name: "Jane", age: "24" },
            //     { id: 18, name: "Susan", age: "16" },
            //     { id: 19, name: "Chris", age: "55" },
            //     { id: 20, name: "Dan", age: "40" }
            // ],
            columns: ['ID', 'PTL', 'project_Number', 'IO_Number', 'assignment_Class', 'assignment_Title', 'status', 'created_At', 'update_At'],
            
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
                  temp = { ID: response.data[i].id, PTL: response.data[i].ptl.full_name, project_Number: response.data[i].project_number,
                  IO_Number: response.data[i].io_number, assignment_Class: response.data[i].assignment_class, assignment_Title: response.data[i].assignment_tittle,
                  status: response.data[i].status, created_At: response.data[i].created_at, update_At: response.data[i].updated_at };
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

