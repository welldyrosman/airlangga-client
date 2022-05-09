<template>
  <div class="container-fluid">
    <loader
      object="#ff9633"
      color1="#ffffff"
      color2="#17fd3d"
      size="17"
      speed="1.1"
      bg="#343a40"
      v-if="loading"
      objectbg="#999793"
      opacity="80"
      disableScrolling="false"
      name="dots"
    ></loader>
    <div style="margin-top: 100px" class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="containers">
            <div class="mySlides">
              <div class="numbertext">1 / 6</div>
              <img class="imgdisplay" :src="servername + getimage()" />
            </div>
            <a class="prev" @click="onleft"
              ><font-awesome-icon icon="fa-solid fa-angle-left"
            /></a>
            <a class="next" @click="onright"
              ><font-awesome-icon icon="fa-solid fa-angle-right"
            /></a>

            <div class="caption-container">
              <p id="caption"></p>
            </div>
            <div style="overflow-x: auto; width: 100%" class="d-flex">
              <div class="columnt" v-for="(obj, index) in datatour.images" :key="index">
                <img
                  class="demo cursor"
                  :class="{ active: index == indexactive }"
                  :src="servername + getimage(obj)"
                  @click="setactiveimg(obj, index)"
                  onclick="currentSlide(1)"
                  alt="The Woods"
                />
              </div>
            </div>
            <div class="tripcontent"></div>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-lg-8">
          <h1 style="font-weight: 900">{{ datatour.trip_nm }}</h1>
          <h4>{{ datatour.city }}</h4>
          <hr />
          <p>{{ datatour.trip_desc }}</p>
          <hr />
          <h4>Fasilitas</h4>
          <ul>
            <li v-for="i in datatour.facilities" :key="i.id">{{ i.facility }}</li>
          </ul>
        </div>

        <div class="col-lg-4">
          <p>PICK YOUR DATE</p>
          <div class="datescon">
            <div
              @click="pickdate(i.id)"
              :class="{ active: i.id == activedate }"
              v-for="i in datatour.trip_dates"
              :key="i.id"
              class="d-flex justify-content-between date-item"
            >
              <h4 style="margin-bottom: 0">
                <i class="fa-solid fa-calendar-days"></i> {{ getdatetrip(i.trip_date) }}
              </h4>
              <p style="margin-bottom: 0"><i class="fas fa-user"></i>35</p>
            </div>
          </div>
          <div class="d-flex qtycont text-center">
            <h2><font-awesome-icon icon="fa-solid fa-users" /> Person</h2>
            <input class="form-control" v-model="qty" type="number" />
          </div>
          <button @click="booknow" class="btn-book">BOOK NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
      month: [
        "Januari",
        "Febuary",
        "Maret",
        "April",
        "May",
        "Juni",
        "July",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
      qty: 1,
      datatour: {},
      servername: process.env.VUE_APP_SERVHOST,
      imgactive: "",
      indexactive: 0,
      activedate: null,
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    this.$http
      .get("/gettripbyid/" + this.$route.params.id)
      .then((ret) => {
        this.datatour = ret.data.data;
        this.loading = false;
        this.setimageactive();
      })
      .catch((e) => {
        this.loading = false;
        this.$toasted.error(e.response.data.data);
        this.$router.push("/");
      });
  },
  methods: {
    booknow() {
      if (!this.activedate) {
        this.$toasted.error("Please Select Date");
      } else if (this.qty < 1) {
        this.$toasted.error("Package must more than 0");
      } else {
        this.$router.push(
          "/preinvoice/" +
            btoa(this.$route.params.id) +
            "/" +
            btoa(this.qty) +
            "/" +
            btoa(this.activedate)
        );
      }
    },
    pickdate(i) {
      this.activedate = i;
    },
    getdatetrip(d) {
      var dt = new Date(d);
      const date = ("0" + dt.getDate()).slice(-2);
      const year = dt.getFullYear();
      return this.days[dt.getDay()] + `, ${date} ${this.month[dt.getMonth()]} ${year}`;
    },
    setimageactive() {
      this.imgactive = this.datatour.images[this.indexactive].url;
    },
    getimage(obj) {
      if (obj) {
        return obj.url;
      } else {
        return this.imgactive;
      }
    },
    getImgUrl(obj) {
      if (obj) {
        return obj.url;
      } else {
        return this.imgactive;
      }
    },
    setactiveimg(obj, index) {
      this.indexactive = index;
      this.imgactive = obj.url;
      this.setimageactive();
    },
    onleft() {
      if (this.indexactive > 0) {
        this.indexactive--;
      }
      this.setimageactive();
    },
    onright() {
      if (this.indexactive < this.datatour.images.length) {
        this.indexactive++;
      }
      this.setimageactive();
    },
  },
};
</script>

<style scoped>
.imgdisplay {
  min-height: 250px !important;
  max-height: 600px !important;
  width: -webkit-fill-available;
  max-width: 100%;
}
.tripimgcontent {
  width: 100%;
  overflow: auto;
}
.btn-book {
  background: #171717;
  width: 100%;
  padding: 10px;
  color: white;
  border-radius: 20px;
  border: #fff;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
.qtycont {
  margin-top: 2rem;
  border: solid 2px #171717;
  padding: 10px;
}
.datescon {
  width: 100%;
  height: 500px;
  overflow: auto;
}
.date-item {
  border: solid 1px #171717;
  width: 100%;
  margin-bottom: 1rem;
  padding: 10px;
  cursor: pointer;
}
.date-item.active {
  background: rgb(0, 153, 255);
  color: #fff;
}
.date-item:hover {
  background: #171717;
  color: #fff;
}
</style>
