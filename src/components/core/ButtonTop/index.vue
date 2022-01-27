<template>
  <div @click="tothetop" class="d-flex button-to-top  align-items-center justify-content-center">
      <h1 class="text-light"><i class="fas fa-arrow-up"></i></h1>
  </div>
</template>

<script>
export default {
    methods:{
        tothetop(){
             window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
.button-to-top{
    position: fixed;
    bottom: 0;
    right: 0;
    min-height: 50px;
    min-width: 70px;
    border-radius: 15px 15px 0 0;
    background-image: linear-gradient(to bottom right,#023d8a 0,rgba(0,165,151,.69) 84%);
    z-index: 1000;
}
</style>