<template>
  <div class="foot-con">
    <div class="row">
      <div class="col-md-4 text-center">
        <img style="max-width: 30%" :src="require('@/assets/images/travel.png')" />
      </div>
      <div class="col-md-4 text-center"></div>
      <div class="col-md-4">
        <div>
          <h3>CONTACT US</h3>
          <hr />
          <p>
            <a
              class="chatwa"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=62811121143"
            >
              <font-awesome-icon icon="fa-brands fa-whatsapp" /> &nbsp; +62-811-121-143</a
            >
          </p>

          <p class="addr">Perumahan Puri Anggrek Blok F5 No 4 - Serang - Banten</p>
          <div class="btn-sos">
            <font-awesome-icon icon="fa-brands fa-instagram" />Airlangga_travel
          </div>
          <div class="btn-sos">
            <font-awesome-icon icon="fa-brands fa-facebook" />Airlangga_travel
          </div>
          <div class="btn-sos">
            <font-awesome-icon icon="fa-solid fa-envelope" />info@airlanggasejahtera.com
          </div>
        </div>
      </div>
      <div class="col-md-12 text-center">
        <p>Copyright rosmantama.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.foot-con {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 1)),
    url("../../../assets/images/footer.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  padding: 1rem;
}
</style>
