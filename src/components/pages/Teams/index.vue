<template>
  <div :style="{ backgroundImage: `url(${require('@/assets/images/travel-01.jpg')})` }">
    <div class="container teams">
      <div class="header-banner">
        <h1 class="head" style="border-bottom: solid 1px">OUR PROFESSIONAL TEAMS</h1>

        <div class="row">
          <div v-for="i in 12" :key="i" class="col-xl-2">
            <div class="team-card">
              <img class="team-ava" :src="require('@/assets/images/Teams/akbar.jpeg')" />
              <div class="caption-tag position-relative text-center">
                <h3 class="team-name">AKBAR MAULANA</h3>
                <h3 class="sec-name">TOUR LEADER</h3>
                <div class="sosmed d-flex justify-content-around">
                  <div class="sosmed-item">
                    <i class="fab fa-instagram-square"></i>
                  </div>
                  <div class="sosmed-item">
                    <i class="fab fa-facebook-square"></i>
                  </div>
                  <div class="sosmed-item">
                    <i class="fab fa-whatsapp-square"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.team-card {
  cursor: pointer;
  transition: transform 0.2s;
}
.team-card:hover {
  transform: scale(1.1);
  z-index: 1000;
}
.sosmed-item {
  color: rgb(32, 51, 24);
}
.caption-tag {
  padding: 2rem 2rem 1rem 2rem;
  width: 100%;
  border-radius: 10%;
  box-shadow: 3px 4px 10px 3px #aeababab;
  margin-bottom: 2rem;
  background: white;
}
.sec-name {
  color: grey;
}
.team-name {
  background-image: linear-gradient(
    to bottom right,
    #1a3f20 0,
    rgba(123, 180, 31, 0.69) 84%
  );
  color: white;
  width: fit-content;
  padding: 1rem;
  transform: rotate(-6deg) skew(-6deg);
  position: absolute;
  left: 1rem;
  top: -2rem;
}
.team-ava {
  max-width: 50%;
  max-height: 500%;
  border-radius: 200%;
  box-shadow: 3px 4px 10px 3px #aeababab;
}
.teams {
  margin-top: 2rem;
}
</style>
