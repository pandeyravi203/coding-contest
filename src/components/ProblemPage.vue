<template>
    <div>
        <span v-html="problemData.problemData"></span>
        <router-link to="/problemSubmission"><v-btn>Submit</v-btn></router-link>
    </div>
</template>

<script>
export default {
  

computed:{
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
