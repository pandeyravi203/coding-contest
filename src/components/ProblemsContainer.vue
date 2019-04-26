<template>
  <div>
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add Problem</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Upload Problem Text File</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12 >
                <v-text-field v-model="problemName" label="Enter Problem Name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
               <input type="file" ref="problemFile">
              </v-flex>
              <v-flex xs12 sm6 md4>
               <input type="file" ref="inputFile">
              </v-flex>
              <v-flex xs12 sm6 md4>
               <input type="file" ref="outputFile">
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="uploadProblem()">Upload</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
   <v-layout>
    <v-card>
      <ol>
     
          <li v-for="problemLink in this.$store.state.problemsArray" :key="problemLink">
          <router-link to="/problemPage" v-on:click.native="setProblemData(problemLink)">{{problemLink.problemName}}</router-link>  
        </li>
      </ol>
    </v-card>
   </v-layout>  
       
        <!-- Enter Problem Name
       <input type="text" v-model="problemName">
       <input type="file"  ref="problemFile">
      <button @click="uploadProblem()">click</button> -->
  </div>
</template>
<script>
import {mapState} from 'vuex' //here {} means we can import more than one properties

export default {
  data() {
    return {
     problemName:'',
     dialog:false,
    }
  },
  methods:{
      setProblemData(data){
           this.problemData=data;
         
      },
      uploadProblem(){
     
        let fd = new FormData();
        fd.append('file',this.$refs.problemFile.files[0])
        fd.append('file',this.$refs.inputFile.files[0])
        fd.append('file',this.$refs.outputFile.files[0])
        this.$store.dispatch('uploadProblem',fd);
           
      },
      getProblemArray(){

        this.$store.dispatch('getProblemArray');
        
      }
  },
  mounted(){
     this.getProblemArray();
  },
  computed:{
    ...mapState(['problemsArray']),
    problemData:{
      get(){
             return this.$store.state.problemData
      },
      set(val){
            this.$store.state.problemData=val 
      }
    }
  }

}
</script>