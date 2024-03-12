<template>
  <div>
    Flow页面
    <button @click="getData">获取</button>
  </div>
</template>

<script>
import netSegStatus from "@/api/netSegStatus";
export default {
  name: "Flow",
  methods:{
    getData() {
      netSegStatus.getAlertFlow().then(resp => {
        console.log("222")
        console.log(resp)
      });
    }
  }
}
</script>

<style scoped>

</style>
