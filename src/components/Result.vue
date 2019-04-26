<template>
    <div>
        {{resultData.data.status.description}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            resultData:this.$store.state.resultData
        }
    }
}
</script>
