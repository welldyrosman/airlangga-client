<template>
  <div class="bg-team">
    <div class="container-fluid text-center text-white">
      <h1
        v-animate-onscroll="{
          down: 'animate__animated animate__bounceInRight',
          up: 'animate__animated animate__bounceInLeft',
        }"
      >
        TESTIMONI
      </h1>
      <hr />
      <div class="d-flex slider">
        <figure
          v-for="i in 5"
          v-animate-onscroll="{
            down: 'animate__animated animate__fadeInRight',
            up: 'animate__animated animate__fadeInLeft',
          }"
          :key="i"
          class="snip1197"
        >
          <figcaption>
            <blockquote>
              Sometimes I think the surest sign that intelligent life exists elsewhere in
              the universe is that none of it has tried to contact us.
            </blockquote>
            <div class="arrow"></div>
          </figcaption>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample10.jpg"
            alt="sq-sample10"
          />
          <div class="author">
            <h5>Pelican Steve <span>- LittleSnippets</span></h5>
          </div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.slider {
  overflow-x: auto;
  height: auto;
  width: 100%;
  padding: 60px;
}
.bg-team {
  background-color: rgb(46, 46, 46);
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.testimoni {
  width: 100%;
}
</style>
