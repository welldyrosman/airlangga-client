<template>
  <div class="bg-team">
    <div class="container-fluid">
      <h1 data-aos="fade-down">OUR PROFESSIONAL TEAM</h1>
      <hr />
      <div class="rowteam">
        <div
          v-for="(i, index) in 10"
          :key="i"
          class="card-team"
          :data-aos="index % 2 == 0 ? 'fade-down' : 'fade-up'"
          :class="{ active: i == 5 }"
        >
          <img :src="require('@/assets/images/Teams/akbar.jpeg')" />
          <p class="name">ABDUL GHANI</p>
          <p>OWNER</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rowteam {
  width: 100%;
  display: flex;
  height: 600px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 100px;
}
p.name {
  font-weight: bold;
}
.card-team p {
  color: #000;
}
.card-team {
  flex-basis: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 300px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 10px;
  padding: 30px;
  margin: 15px;
}
.card-team img {
  width: 100%;
  border-radius: 100%;
}
.bg-team {
  background: #000;
  color: white;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 1)),
    url("../../../assets/images/aboutus.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
