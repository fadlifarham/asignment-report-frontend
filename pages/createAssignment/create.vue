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
                label-for="projectNumber"
                :label-cols="4"
                :horizontal="true">
                <b-form-input v-model="project_number" id="projectNumber" type="text"></b-form-input>
            </b-form-group>
            <b-form-group
                label="IO Number"
                label-for="ioNumber"
                :label-cols="4"
                :horizontal="true">
                <b-form-input v-model="io_number" id="ioNumber" type="text"></b-form-input>
            </b-form-group>
            <b-form-group
                label="Assigment Class"
                label-for="assignmentClass"
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
                <!-- <b-form-input v-model="assignment_class" id="assignmentClass" type="text"></b-form-input> -->
            </b-form-group>
            <b-form-group
                label="Assignment Title"
                label-for="assignmentTitle"
                :label-cols="4"
                :horizontal="true">
                <b-form-input v-model="assignment_tittle" id="assignmentTitle" type="text"></b-form-input>
            </b-form-group>
            <b-form-group
                label="Assignment Detail Instruction"
                label-for="assignmentDetail"
                :label-cols="4"
                :horizontal="true">
                <textarea v-model="assignment_desc" class="form-control" rows="6" id="detail"></textarea>
            </b-form-group>
            <b-form-group
                label="Difficult Level"
                label-for="assignmentDetail"
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
            <b-form-group
                label="Dispose Team"
                label-for="disposeTeam"
                :label-cols="4"
                :horizontal="true">
                <div>
                    <multiselect
                        v-model="value"
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
            </b-form-group>

            <b-input-group>
                <!-- <b-col cols="6"></b-col> -->
                <b-col cols="12" class="text-right" style="padding: 10px">
                    <b-button @click="create" size="lg" variant="primary" style="margin: 10px">Create</b-button>
                    <b-button @click="reset" size="lg" variant="danger" style="margin: 10px">Delete and back</b-button>
                </b-col>
            </b-input-group>
        </div>
    </b-col>
    </b-row>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
    .checked {
        color: orange;
    }
</style>

<script>
    // import StarRating from '~/components/Rating/StarRating.vue'
    import Multiselect from 'vue-multiselect'

    export default {
    components: {
        Multiselect,
        // StarRating
    },
    data () {
        return {
            users: '',
            project_number: '',
            io_number: '',
            assignment_class: '',
            assignment_tittle: '',
            assignment_desc: '',
            errors: [],
            value: [],
            options: [
            ],
            difficulty_level: 0
        };
    },
    mounted(){
        this.engineer();
    },
    methods: {
      create() {
        this.$axios.post('/assignment/create', {
          project_number: this.project_number,
          io_number: this.io_number,
          assignment_class: this.assignment_class,
          assignment_tittle: this.assignment_tittle,
          assignment_desc: this.assignment_desc,
          engineer: this.value,
          difficulty_level: this.difficulty_level,
        }).then(response => {
          this.status = 'Create Assignment Success!';
          console.log(this.status);
          swal('Success', this.status, 'success');
          this.reset();
          this.$router.push('/')
        }, response => {
            this.status = 'Please Fill In All Data';
            console.log(this.status);
            swal('Failed', this.status, 'warning');
        })
      },
      engineer() {
          var temp;
          this.$axios.get('/engineers').then(response => {
              for(let i = 0; i < response.data.length; i++){
                temp = { id: response.data[i].id, name: response.data[i].full_name};
                this.options.push(temp);
              }
            console.log(this.options);
          })
      },
      reset() {
        this.project_number = "";
        this.io_number = "";
        this.assignment_tittle = "";
        this.assignment_class = "";
        this.assignment_desc = ""
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
      },
    },
    middleware: "forPtl"
	}
</script>
