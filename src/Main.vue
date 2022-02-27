<template>
   <div class="">
    <Heroes/>
    <Catalog/>
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
  }
}
</script>

<style>

</style>