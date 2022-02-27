<template>
  <nav :class="{change_color: scrollPosition > 50,'navbar-dark':scrollPosition > 50}" class="navbar  fixed-top navbar-expand-lg navbar-light head-bg">
  <div class="container-fluid">
    <router-link to="/" :class="{change_font: scrollPosition > 50}" class="navbar-brand" href="#">AIRLANGGA
      </router-link>
    <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span :class="{change_font: scrollPosition > 50}" class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
            <div :class="{change_font: scrollPosition > 50}" class="nav-link active" >Home</div>
          </li>
          <li class="nav-item">
            <div :class="{change_font: scrollPosition > 50}" @click="toTrip" class="nav-link active" >Our Fun Trip</div>
          </li>
          <li class="nav-item">
            <div :class="{change_font: scrollPosition > 50}" @click="toAbout" class="nav-link active" >About Us</div>
          </li>
          <li class="nav-item">
            <div :class="{change_font: scrollPosition > 50}" class="nav-link active" >Our Best Team</div>
          </li>        
      </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li class="nav-item">
            <div @click="onlogmenu" :class="{change_font: scrollPosition > 50}" class="nav-link active" ><i class="fas fa-user"></i> Member Login</div>
          </li>
        </ul>
        <div v-if="showlogin"  class="dropdownlog">
          <div class="loginform d-flex flex-column">
            <input class="login-form" placeholder="Email"/>
            <input class="login-form" type="password" placeholder="Password"/>
            <div class="d-flex justify-content-between">
              <button class="btn-login"><font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" />Login</button>
              <button class="btn-login google"><font-awesome-icon icon="fa-brands fa-google" />Google</button>
            </div>
            <div class="register">Dont Have Account?</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      showlogin:false,
      scrollPosition: null,
      tolerance:90
    }
  },
  methods: {
    onlogmenu(){
      this.showlogin=!this.showlogin
    },
    toTrip(){
       window.scrollTo(0, $('.our-trip').offset().top-this.tolerance);
    },
    toAbout(){
      window.scrollTo(0, $('.about').offset().top-75);
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
.register{
  margin-top:1rem ;
  cursor: pointer;
  color: #eee;
}
.register:hover{
  color: yellowgreen;
}
.google{
  background: rgb(180, 0, 0) !important;
}
.google:hover{
   background: rgb(134, 3, 3) !important;
   color: white !important;
}
.btn-login{
  background: #171717;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 20px;
  width: fit-content;
  padding: 5px 20px;
  right: 0;
}
.btn-login:hover{
   color: #171717;
   background: #fff;
}
.login-form{
  border:0;
  border-radius: 20px;
  padding: 5px 20px;
  margin-bottom: 1rem;
}
.dropdownlog{
  background: #171717;
  padding: 1rem;
  border-radius: 20px;
  position: absolute;
  right: 0;
  top: 50px;
}
.nav-link{
  color: #171717 !important;
  transition: transform 0.2s;
  cursor: pointer;
}
.nav-link:hover{
  transform: scale(1.1);
  color: aqua !important;
}
.navbar{
  font-size: 1rem !important;
}
.head-bg{
  background-color: #fff;
}
.change_color{
   background-color: #171717;
   color: #fff;
}
.change_font{
  color: white !important;
}

.btn-grad {background-image: linear-gradient(to right, #005C97 0%, #363795  51%, #005C97  100%)}
.btn-grad {
  margin: 10px;
  padding: 5px 20px !important;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
         
</style>