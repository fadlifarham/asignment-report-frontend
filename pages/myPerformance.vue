<template>
<b-row>
    <b-col sm="6">
        <div class="animated fadeIn" style="">
            <b-card header="My Performance">
                <div class="chart-wrapper">
                <performance-bar
                    :chart-data="dataCollection"
                />
                </div>
            </b-card>
        </div>
    </b-col>
</b-row>
</template>
<script>
  import PerformanceBar from '~/components/charts/PerformanceBar'
export default {
    name: 'charts',
      components: {
        PerformanceBar,
    },
    data () {
        return {
            chartData: '',
            work_load:'',
            work_quality: '',
            sppd: '',
            complete_assignment: '',
            dataCollection: [],
            opsi: ['Work Load', 'Work Quality', 'SPPD', 'Complite Assignment'],
        }
    },
    mounted(){
        this.setData();
    },
    methods: {
        setData() {
            this.$axios.get('/performance')
            .then(response => {
                this.work_load = response.data.work_load;
                this.work_quality = response.data.work_quality;
                this.sppd = response.data.sppd;
                this.complete_assignment = response.data.complete_assignment;
                console.log('work_load : ' +this.work_load)
                this.dataCollection = {
                    datasets: [
                    {
                        label: 'Work Load',
                        backgroundColor: '#9999ff',
                        data: [this.work_load]
                    },
                    {
                        label: 'Work Quality',
                        backgroundColor: '#79d2a6',
                        data: [this.work_quality]
                    },
                    {
                        label: 'SPPD',
                        backgroundColor: '#ff8080',
                        data: [this.sppd]
                    },
                    {
                        label: 'Complete Assignment',
                        backgroundColor: '#ffff4d',
                        data: [this.complete_assignment]
                    }
                    ]
                }
            })
          // console.log("WL : " + work_load)
          
        }
    }
}
</script>

