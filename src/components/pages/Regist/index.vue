<template>
  <div class="container regForm">
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
    <form data-aos="fade-left" id="regForm" action="">
      <h1>Register:</h1>

      <!-- One "tab" for each step in the form: -->
      <div class="tab" :class="{ active: tabactive == 0 }">
        Name:
        <p>
          <input
            placeholder="First name..."
            :class="{ invalid: !datadiri.firstname }"
            v-model="datadiri.firstname"
          />
        </p>
        <p>
          <input
            placeholder="Last name..."
            :class="{ invalid: !datadiri.lastname }"
            v-model="datadiri.lastname"
          />
        </p>
      </div>

      <div class="tab" :class="{ active: tabactive == 1 }">
        Contact Info:
        <p><input placeholder="E-mail..." v-model="datadiri.email" /></p>
        <p><input placeholder="Phone..." v-model="datadiri.phone" /></p>
      </div>

      <div class="tab" :class="{ active: tabactive == 2 }">
        Address:
        <p><input placeholder="City" v-model="datadiri.city" /></p>
        <p><input placeholder="Province" v-model="datadiri.province" /></p>
      </div>

      <div class="tab" :class="{ active: tabactive == 3 }">
        Login Info:
        <p><input placeholder="Username..." v-model="datadiri.username" /></p>
        <p>
          <input placeholder="Password..." type="password" v-model="datadiri.password" />
        </p>
        <p>
          <input
            placeholder="Re Type  Password..."
            type="password"
            v-model="datadiri.password_confirmation"
          />
        </p>
      </div>

      <div style="overflow: auto">
        <div style="float: right">
          <button
            type="button"
            class="btn-reg"
            id="prevBtn"
            v-if="tabactive > 0"
            @click="onback"
          >
            <font-awesome-icon icon="fa-solid fa-angles-left" />Previous
          </button>
          <button type="button" id="nextBtn" class="btn-reg" @click="onnext">
            Next<font-awesome-icon icon="fa-solid fa-angles-right" />
          </button>
        </div>
      </div>

      <!-- Circles which indicates the steps of the form: -->
      <div style="text-align: center; margin-top: 40px">
        <span
          v-for="(i, index) in 4"
          :key="i"
          class="step"
          :class="{ active: tabactive == index }"
        ></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      tabactive: 0,
      datadiri: {
        firstname: "Welldyww",
        lastname: "Rosman",
        username: "Welldy33",
        email: "asd@ghj.cwom",
        password: "client123",
        password_confirmation: "client123",
        phone: "234234234",
        city: "sdfsfg",
        province: "sdfgdfg",
      },
    };
  },
  methods: {
    onnext() {
      if (this.tabactive < 3) {
        this.tabactive++;
      } else {
        // var fd=new FormData();
        // for(var p in this.datadiri){
        //   fd.append(p,this.datadiri[p])
        // }
        this.loading = true;
        this.$http
          .post("/registerclient", this.datadiri)
          .then(() => {
            this.loading = false;
            this.$toasted.success(
              "You Have Been Success Registered, Please Login for Continue"
            );
          })
          .catch((err) => {
            this.loading = false;
            this.$toasted.error(err.response.data.data);
          });
      }
    },
    onback() {
      this.tabactive--;
    },
  },
};
</script>

<style scoped>
.btn-reg {
  background: black;
  color: #ffffff;
  padding: 10px 20px;
  margin-right: 10px;
  border: solid 1px #000;
}
.btn-reg:hover {
  background: #4d4d4d;
}
#regForm {
  background-color: #ffffff;
  margin: 100px auto;
  padding: 40px;
  width: 70%;
  min-width: 300px;
}

/* Style the input fields */
input {
  padding: 10px !important;
  width: 100% !important;
  font-size: 24px;
  font-family: Raleway;
  border: 1px solid #aaaaaa !important;
}

/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}

/* Hide all steps by default: */
.tab {
  display: none;
}
.tab.active {
  display: block;
}
/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

/* Mark the active step: */
.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #04aa6d;
}
</style>
