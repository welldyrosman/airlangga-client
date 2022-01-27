<template>
  <nav :class="{change_color: scrollPosition > 50}" class="navbar fixed-top navbar-expand-lg navbar-light head-bg">
  <div class="container-fluid">
    <a :class="{change_font: scrollPosition > 50}"  class="navbar-brand" href="#">AIRLANGGA SEJAHTERA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <div :class="{change_font: scrollPosition > 50}" class="nav-link active" >Home</div>
        </li>
         <li class="nav-item">
          <div :class="{change_font: scrollPosition > 50}"  @click="toTrip" class="nav-link active" >Our Fun Trip</div>
        </li>
         <li class="nav-item">
          <div :class="{change_font: scrollPosition > 50}" @click="toAbout" class="nav-link active" >About Us</div>
        </li>
         <li class="nav-item">
          <div :class="{change_font: scrollPosition > 50}" class="nav-link active" >Our Best Team</div>
        </li>
          <li class="nav-item">
          <div :class="{change_font: scrollPosition > 50}" class="nav-link active" >Our Services</div>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      scrollPosition: null,
      tolerance:90
    }
  },
  methods: {
    toTrip(){
       window.scrollTo(0, $('.our-trip').offset().top-this.tolerance);
    },
    toAbout(){
      window.scrollTo(0, $('.about').offset().top-this.tolerance);
    },
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
},
mounted() {
    window.addEventListener('scroll', this.updateScroll);
}

}
</script>

<style scoped>
.head-bg{
  background-color: #74aae6a6;
}
.change_color{
   background-color: #004ca3f6;
}
.change_font{
  color: white !important;
}
</style>