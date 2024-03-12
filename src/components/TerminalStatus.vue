<template>
  <div>
    TerminalStatus页面
    <button @click="getData">获取</button>
  </div>
</template>

<script>
import netSegStatus from "@/api/netSegStatus";
export default {
  name: "TerminalStatus",
  methods:{
    getData() {
      netSegStatus.getNetSegs().then(resp => {
        console.log("111")
        console.log(resp)
      });
    }
  }
}
</script>

<style scoped>

</style>
