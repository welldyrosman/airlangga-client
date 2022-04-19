<template>
  <div
    class="position-absolute katalog"
    :style="{ backgroundImage: `url(${require('@/assets/images/banner-05.jpg')})` }"
  >
    <div class="container">
      <div class="container">
        <h1 class="our-trip" style="border-bottom: solid 1px">OUR FUN TRIP</h1>
        <div class="row">
          <div v-if="loading" class="col-12 d-flex justify-content-center">
            <orbit-spinner :animation-duration="1200" :size="155" color="#ff1d5e" />
          </div>
          <div v-else v-for="i in datas.trips" :key="i.id" class="col-md-3">
            <div
              class="cardcatalog"
              v-animate-onscroll="{
                down: 'animate__animated animate__fadeInLeft',
                up: 'animate__animated animate__fadeOutLeft',
              }"
            >
              <img class="imgcatalog" :src="servername + getimage(i)" />
              <h3 class="destination">{{ i.trip_nm }}</h3>
              <p class="tripcity"><i class="fas fa-map"></i> {{ i.city }}</p>
              <p class="tripdesc">{{ i.trip_desc }}</p>
              <div @click="showsingletrip(i)" class="conprice">
                <div class="d-flex align-items-between">
                  {{ i.price }}/<small>pax</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          @click="showalltrips"
          class="enddiv animate__animated animate__headShake animate__infinite"
        >
          SHOW MORE <font-awesome-icon icon="fa-solid fa-angle-right" />
        </div>
      </div>
    </div>
    <div v-if="loading" class="col-12 d-flex justify-content-center">
      <orbit-spinner :animation-duration="1200" :size="155" color="#ff1d5e" />
    </div>
    <About v-else />
    <Services />
    <Testimoni />
    <Gallery />
    <Ourteam />
    <Regist />
    <Footer />
  </div>
</template>

<script>
import { OrbitSpinner } from "epic-spinners";
import About from "../About";
import Ourteam from "../Ourteam/teamstwi.vue";
import Services from "../Services";
import Footer from "../../core/Footer";
import Gallery from "../Gallery";
import Regist from "../Regist";
import Testimoni from "../Testimoni";
export default {
  props: {
    loading: {
      default: true,
    },
    datas: {
      default: {},
    },
  },
  components: {
    About,
    Services,
    Footer,
    Gallery,
    Ourteam,
    Testimoni,
    Regist,
    OrbitSpinner,
  },
  data() {
    return {
      servername: process.env.VUE_APP_SERVHOST,
      trips: [],
      data: {
        facilities: [
          { id: 1, fac_nm: "Fasilitas 1" },
          { id: 2, fac_nm: "Fasilitas 2" },
          { id: 3, fac_nm: "Fasilitas 3" },
        ],
      },
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    getimage(i) {
      return i.images.length > 0 ? i.images[0].url : "images/trips/travel.png";
    },
    showalltrips() {
      this.$router.push("/alltrip");
    },
    showsingletrip(i) {
      this.$router.push("/detailtrip/" + i.id);
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.enddiv {
  margin-bottom: 50px;
}
</style>
