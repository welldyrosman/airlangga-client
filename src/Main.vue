<template>
   <div class="">
    <Heroes/>
    <Catalog :loading='loading' :datas="alldata" />
    <ButtonTop/>
  </div>
</template>

<script>

import ButtonTop from './components/core/ButtonTop'
import Heroes from './components/pages/Heroes'
import Catalog from './components/pages/Katalog'
export default {
 components: {
    Heroes,
    Catalog,
    ButtonTop
  },
  data() {
    return {
      loading:true,
      alldata:{}
    }
  },
  mounted(){
      this.$http.get('/airlanggadata').then((ret)=>{
        this.alldata=ret.data.data;
        this.loading=false;
           console.log(this.alldata)
      })
  }
}
</script>

<style>

</style>