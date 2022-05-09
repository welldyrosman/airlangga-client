<template>
  <div
    class="hero-image"
    :style="{ backgroundImage: `url(${require('@/assets/images/banner-04.jpg')})` }"
  >
    <div class="hero-text">
      <img
        style="height: 150px"
        data-aos="flip-left"
        src="../../../assets/images/travel.png"
      />
      <h1 style="font-size: 50px" data-aos="fade-right">AIRLANGGA SEJAHTERA</h1>
      <p style="font-size: 30px" data-aos="fade-left">TRAVEL AGENCY</p>
      <button
        @click="toTrip"
        data-aos="zoom-in"
        class="btn-grad animate__animated animate__headShake animate__infinite"
      >
        Start Your Trip
      </button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      tolerance: 10,
    };
  },
  methods: {
    toTrip() {
      window.scrollTo(0, $(".our-trip").offset().top - this.tolerance);
    },
  },
};
</script>

<style>
.btn-grad {
  background-image: linear-gradient(to right, #000000 0%, #434343 51%, #000000 100%);
}
.btn-grad {
  margin: 10px;
  padding: 15px 45px !important;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white !important;
  box-shadow: 0 0 20px #eee;
  border-radius: 30px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
