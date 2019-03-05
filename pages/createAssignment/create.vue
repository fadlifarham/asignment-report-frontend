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
                <b-form-input v-model="assignment_class" id="assignmentClass" type="text"></b-form-input>
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
                        v-model="rating"
                        v-bind:increment="0.5"
                        v-bind:max-rating="5"
                        inactive-color="#000"
                        active-color="#cc1166"
                        v-bind:star-size="90"
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
                        track-by="code"
                        :options="options"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag">
                    </multiselect>
                </div>
            </b-form-group>
            <!-- <b-row style="width: 100%; margin-left: auto; margin-right: auto; padding-top: 10px">
                <b-col>
                    <b-row>
                        <label><strong>Dispose Team</strong></label>
                    </b-row>
                    <b-row>
                        <b-col>
                            <template>
                                <img src="/img/user.png">
                            </template>
                        </b-col>
                        <b-col>
                            <b-row>
                                <div class="multiselect">
                                    <multiselect
                                        v-model="value"
                                        tag-placeholder="Add this as new tag"
                                        placeholder="Search or add a tag"
                                        label="name"
                                        track-by="code"
                                        :options="options"
                                        :multiple="true"
                                        :taggable="true"
                                        @tag="addTag">
                                    </multiselect>
                                </div>
                                <label class="typo__label form__label" v-show="isInvalid">
                                    Must have at least one value
                                </label>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row> -->
            <b-input-group>
                <!-- <b-col cols="6"></b-col> -->
                <b-col cols="12" class="text-right" style="padding: 10px">
                    <b-button @click="create" size="lg" variant="primary" style="margin: 10px">Submit for Approval</b-button>
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
    import StarRating from 'vue-star-rating'
    import Multiselect from 'vue-multiselect'

    export default {
    components: {
        Multiselect,
        StarRating
    },
    data () {
        return {
            users: '',
            errors: [],
            value: [],
            options: [
                // { name: 'Vue.js', code: 'vu' },
                // { name: 'Javascript', code: 'js' },
                // { name: 'Open Source', code: 'os' }
            ],
            rating: 0
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
          assignment_tittle: this.assignment_title,
          assignment_desc: this.assignment_desc,
          engineer: this.value,
        //   sum_engineer: 1,
        //   user_id_0: 1,
        }).then(response => {
             // this.assignment.push(response.data.task);
          this.status = 'Create Assignment Success!';
          console.log(this.status);
          swal('Success', this.status, 'success');
          this.reset();
        }, response => {
            console.log(this.project_number);
        })
      },
      engineer() {
          var temp;
          this.$axios.get('/engineers').then(response => {
            //   this.options = response.data;
              for(let i=0;i<response.data.length;i++){
                //   console.log(response.data[i]);
                temp = { id: response.data[i].id, name: response.data[i].full_name,
                  code: response.data[i].id };
                this.options.push(temp);
              }
            //   this.options = temp;
            console.log(this.options);
          })
      },
      reset() {
        this.project_number = "";
        this.io_number = "";
        this.assignment_title = "";
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
      setRating: function(rating){
        this.rating= rating;
        console.log(this.rating);
      },
    },
	}
</script>
