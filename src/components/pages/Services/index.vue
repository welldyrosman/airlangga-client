<template>
  <div class="container servicecon">
    <h1 class="head" style="border-bottom: solid 1px">WHY US</h1>
    <div class="row">
      <div v-for="(i, index) in services" :key="i.id" class="col-md-3">
        <div
          class="servcon text-center"
          v-animate-onscroll="{
            down: 'animate__animated animate__fadeInRight',
            up: 'animate__animated animate__fadeInLeft',
          }"
        >
          <div
            class="services"
            :style="{
              background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1)),url(${require('@/assets/images/services/s' +
                (index + 1) +
                '.jpg')})`,
            }"
          >
            <h1><font-awesome-icon :icon="'fa-solid fa-' + (index + 1)" /></h1>
            <h4>{{ i.head }}</h4>
          </div>
          <hr />
          <p>{{ i.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          head: "HEAD 1",
          desc:
            ";iasdjf apdja padf apdkfapdkf apdf ;ámkfaskdf-ref;amsdpfamsdkfnmasodfnaldfnas;ldf nadnfoan",
        },
        {
          id: 2,
          head: "HEAD 1",
          desc:
            ";iasdjf apdja padf apdkfapdkf apdf ;ámkfaskdf-ref;amsdpfamsdkfnmasodfnaldfnas;ldf nadnfoan",
        },
        {
          id: 3,
          head: "HEAD 1",
          desc:
            ";iasdjf apdja padf apdkfapdkf apdf ;ámkfaskdf-ref;amsdpfamsdkfnmasodfnaldfnas;ldf nadnfoan",
        },
        {
          id: 4,
          head: "HEAD 1",
          desc:
            ";iasdjf apdja padf apdkfapdkf apdf ;ámkfaskdf-ref;amsdpfamsdkfnmasodfnaldfnas;ldf nadnfoan",
        },
      ],
    };
  },
};
</script>

<style scoped>
.servicecon {
  margin-bottom: 100px;
}
.services {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
}
.servcon {
  width: 100%;
  background-color: black;
  color: white;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
