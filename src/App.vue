<template>
  <div class=""  :style="{backgroundImage:`url(${require('@/assets/images/banner-05.jpg')})`}">
     <Header/>
      <router-view />
      <Footer/>
  </div>
</template>

<script>
import Header from './components/core/Header'
import Footer from './components/core/Footer'
export default {
  name: 'App',
  components: {
    Header,Footer
  },
  mounted() {
    let themejs = document.createElement('script')
    themejs.setAttribute('src', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js')
    document.head.appendChild(themejs)
  },
  
}
</script>

<style>

</style>
