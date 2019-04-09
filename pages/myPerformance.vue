<template>
<b-row>
    <b-col sm="6">
        <div class="animated fadeIn" style="">
            <b-card header="Work Load Performance">
                <div class="chart-wrapper">
                <performance-bar
                    :chart-data="dataCollectionLoad"
                />
                </div>
            </b-card>
        </div>
    </b-col>
    <b-col sm="6">
        <div class="animated fadeIn" style="">
            <b-card header="Work Quality Performance">
                <div class="chart-wrapper">
                <performance-bar
                    :chart-data="dataCollectionQuality"
                />
                </div>
            </b-card>
        </div>
    </b-col>
    <b-col sm="6">
        <div class="animated fadeIn" style="">
            <b-card header="SPPD Performance">
                <div class="chart-wrapper">
                    <b-row align-h="center"><h3>{{sppd}} Days</h3>
                    </b-row>
                </div>
            </b-card>
        </div>
    </b-col>
    <b-col sm="6">
        <div class="animated fadeIn" style="">
            <b-card header="Complete Assignment Performance">
                <div class="chart-wrapper">
                    <b-row align-h="center"><h3>{{complete_assignment}} Units</h3></b-row>
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
            dataCollectionLoad: [],
            dataCollectionQuality: [],
            dataCollectionSppd: [],
            dataCollectionComplete: [],
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
                this.dataCollectionLoad = {
                    datasets: [
                    {
                        label: 'Work Load',
                        backgroundColor: '#9999ff',
                        data: [this.work_load]
                    },
                    ]
                },
                this.dataCollectionQuality = {
                    datasets: [
                    {
                        label: 'Work Quality',
                        backgroundColor: '#79d2a6',
                        data: [this.work_quality]
                    },
                    ]
                },
                this.dataCollectionSppd = {
                    datasets: [
                    {
                        label: 'SPPD',
                        backgroundColor: '#ff8080',
                        data: [this.sppd]
                    },
                    ]
                },
                this.dataCollectionComplete = {
                    datasets: [
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

