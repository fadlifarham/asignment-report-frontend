<template>
    <b-row>
    <b-col lg="12">
        <div class="animated fadeIn">
            <b-col sm="0"><h4>General Assignment Information</h4></b-col>
        </div>
    </b-col>
    <b-col lg="8">
        <div class="animated fadeIn">
            <b-form-group
                label="Project Number"
                label-for="project_number"
                :label-cols="4"
                :horizontal="true">
                <b-form-input v-model="project_number" id="project_number" type="text" style="border-radius: 5px"></b-form-input>
            </b-form-group>
            <b-form-group
                label="IO Number"
                label-for="io_number"
                :label-cols="4"
                :horizontal="true">
                <b-form-input v-model="io_number" id="io_number" type="text" style="border-radius: 5px"></b-form-input>
            </b-form-group>
            <b-form-group
                label="Assigment Class"
                label-for="assignment_class"
                :label-cols="4"
                :horizontal="true">
                <b-form-select id="assignment_class"
                    :plain="true"
                    :options="['Testcomm','Survey','Installation','QC','BERTest','Supervise Vendor','Migration','Integration',
                    'Integration','Technical Meeting','Sales Activity','Asplan Drawing','Administration']"
                    value="Assignment Class"
                    style="border-radius: 5px"
                    v-model="assignment_class">
                </b-form-select>
            </b-form-group>
            <b-form-group
                label="Assignment Title"
                label-for="assignment_tittle"
                :label-cols="4"
                :horizontal="true">
                <b-form-input v-model="assignment_tittle" id="assignment_tittle" type="text" style="border-radius: 5px"></b-form-input>
            </b-form-group>
            <b-form-group
                label="Assignment Description"
                label-for="assignment_desc"
                :label-cols="4"
                :horizontal="true">
                <textarea v-model="assignment_desc" id="assignment_desc" type="text" style="border-radius: 5px" class="form-control" rows="6"></textarea>
            </b-form-group>
            <b-form-group
                label="Difficult Level"
                label-for="difficulty_level"
                :label-cols="4"
                :horizontal="true">
                    <div id="app">
                        <star-rating
                        v-model="difficulty_level"
                        v-bind:increment="1"
                        v-bind:max-rating="5"
                        inactive-color="#000"
                        active-color="orange"
                        v-bind:star-size="50"
                        @rating-selected ="setRating"
                        >
                        </star-rating>
                    </div>
            </b-form-group>
            <!-- <b-form-group
                label="Dispose Team"
                label-for="disposeTeam"
                :label-cols="4"
                :horizontal="true">
                <div>
                    <multiselect
                        v-model="assignment_user.user_id"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="name"
                        track-by="id"
                        :options="options"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag">
                    </multiselect>
                </div>
            </b-form-group> -->
            <b-input-group>
                <b-button @click="approve" size="lg" variant="primary" style="margin: 10px">Approve & Save</b-button>
            </b-input-group>
        </div>
    </b-col>
    </b-row>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<script>
import StarRating from 'vue-star-rating';
import Multiselect from 'vue-multiselect';

export default {
    components: {
        Multiselect,
        StarRating
    },
    validate(params) {
      return true
    },
    props: ['id'],
    data () {
        return {
            assignments:[],
            assignment_id: '',
            assignment_class: '',
            assignment_desc: '',
            project_number: '',
            io_number: '',
            difficulty_level: '',
            details:[],
            assignment_user:[],
            assignment_report:[],
            user_id:[],
            // rating: 0,
            errors: [],
        }
    },
    mounted(){
        this.getAssignment();
    },
    methods: {
        getAssignment() {
            console.log("id : " + this.$route.params.id);
            this.$axios.get('assignment/detail/' + this.$route.params.id).then(response => {
                this.assignment_id = response.data.id
                this.assignment_class = response.data.assignment_class
                this.assignment_tittle = response.data.assignment_tittle
                this.assignment_desc = response.data.assignment_desc
                this.project_number = response.data.project_number
                this.io_number = response.data.io_number
                this.difficulty_level = response.data.difficulty_level
                this.assignment_user = response.data.assignment_user
                this.assignment_report = response.data.assignment_report
                console.log(response.data)
            }
            );
        },
        approve(){
            this.$axios.post('/assignment/edit', {
                id: this.$route.params.id,
                project_number: this.project_number,
                assignment_class: this.assignment_class,
                assignment_tittle: this.assignment_tittle,
                assignment_desc: this.assignment_desc,
                io_number: this.io_number,
                
                difficulty_level: this.difficulty_level,
               
            }).then(response => {
                this.status = 'Assignment Approved Success!';
                console.log(this.status);
                swal('Success', this.status, 'success');
                this.reset();
            }, response => {
                this.status = 'Failed';
                console.log("ass : " + this.assignment_id);
                console.log(this.project_number);
                swal('Failed', this.status, 'warning');
            })
        },
        addTag (newTag) {
            const tag = {
                id: newTag,
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.options.push(tag)
            this.value.push(tag)
            console.log(this.value);
        },
        setRating: function(difficulty_level){
            this.difficulty_level= difficulty_level;
            // console.log(this.rating);
        },
    }
}
</script>