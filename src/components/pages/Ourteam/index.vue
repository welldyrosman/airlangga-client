<template>
  <div class="bg-team">
    <div class="container-fluid">
      <h1 data-aos="fade-down">OUR PROFESSIONAL TEAM</h1>
      <hr />
      <div class="diamond-grid">
        <div v-for="i in 10" :key="i" class="item">
          <img :src="require('@/assets/images/Teams/akbar.jpeg')" />
          <div class="label-team">
            <p>ABDUL GANI</p>
            <p>OWNER</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.$(".diamond-grid").diamonds({
      size: 250, // Size of diamonds in pixels. Both width and height.
      gap: 10, // Pixels between each square.
      hideIncompleteRow: false, // Hide last row if there are not enough items to fill it completely.
      autoRedraw: true, // Auto redraw diamonds when it detects resizing.
      itemSelector: ".item", // the css selector to use to select diamonds-items.
    });
  },
};
</script>

<style scoped>
@import "../../../assets/css/diamonds.css";
.label-team {
  position: absolute;
  color: white;
  transform: rotate(45deg);
  top: 60%;
  padding: 5px;
  left: -10px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.719);
  width: 100%;
}
.label-team p {
  margin-bottom: 0;
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
.diamond-grid {
  width: 70%;
  margin: 100px auto 0;
}
.item {
  width: 250px;
  height: 250px;
  background: #000;
  opacity: 0.8;
  transition: 0.5s;
  cursor: pointer;
}
.item:hover {
  opacity: 1;
}
.item img {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
@media (max-width: 767px) {
  .diamond-grid {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
