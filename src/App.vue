<template>
  <div class=" d-flex flex-column justify-content-center">
    <Header/>
    <Heroes/>
    <Catalog/>
    <ButtonTop/>
  </div>
</template>

<script>
import Header from './components/core/Header'
import ButtonTop from './components/core/ButtonTop'
import Heroes from './components/pages/Heroes'
import Catalog from './components/pages/Katalog'
export default {
  name: 'App',
  components: {
    Header,
    Heroes,
    Catalog,
    ButtonTop
  }
}
</script>

<style>

</style>
