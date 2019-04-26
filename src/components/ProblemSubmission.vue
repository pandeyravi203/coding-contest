<template>
  <div class="hello">
  <v-container>
    <v-layout row wrap align-center>
     <v-card>
       <v-layout>
         <v-flex>
    <h1 class="text-sm-left"> Source Code:</h1>

    <v-textarea  outline class="text-area" v-model="userCode" name="sourcecode" rows="30" cols="100">write your code here</v-textarea><br>
         </v-flex>
       </v-layout>
       <v-layout>
         <v-flex>
    <h2 class="text-sm-left">Select your Language</h2>
    <v-select
        v-model="languageSelected"
        item-text="languageName"
        item-value="languageCode"
        :items="languages"
        flat
        outline
       style="width:100px;height:5px"
     ></v-select>
    <v-btn color="submit" @click="submitCode()">Submit Code</v-btn>
         </v-flex>
       </v-layout>
     </v-card>
   </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
 data(){
   return{
   waitingDialouge:false,
  
   userCode:'',
   languages:[
     {languageName:"C",
     languageCode:4},
     {languageName:"C++",
     languageCode:10},
     {languageName:"Python",
     languageCode:35},
   ],
   languageSelected:{},
   }
 },
 computed:{
  problemData:{
      get(){
             return this.$store.state.problemData;
           
      },
      set(val){
            this.$store.state.problemData=val 
      }
    }

 },
 methods:{

       submitCode(){
                   
                  var params = {
       
                "source_code": this.userCode,
                "language_id": this.languageSelected,
                "number_of_runs": "1",
                "stdin": this.problemData.inputFile,
                "expected_output": this.problemData.outputFile,
                 "cpu_time_limit": "2",
                 "cpu_extra_time": "0.5",
                "wall_time_limit": "5",
                "memory_limit": "128000",
                 "stack_limit": "64000",
                   "max_processes_and_or_threads": "30",
                  "enable_per_process_and_thread_time_limit": 'False',
                "enable_per_process_and_thread_memory_limit": 'True',
                  "max_file_size": "1024"
    }
                  this.waitingDialouge=true
                   this.$store.dispatch('judgeApiCall',{data:params,callBack:()=>{
                             this.waitingDialouge=false
                             vm.$router.push('/submissionresult');  
                  }});
                  
                 
 
}
 }
}
</script>
<style>
.text-area{

  height: 70%;
  width: 70%;
  margin: 300px;

}
</style>


