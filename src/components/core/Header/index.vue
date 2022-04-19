<template>
  <nav
    :class="{ change_color: scrollPosition > 50, 'navbar-dark': scrollPosition > 50 }"
    class="navbar fixed-top navbar-expand-lg navbar-light head-bg"
  >
    <loader
      object="#ff9633"
      color1="#ffffff"
      color2="#17fd3d"
      size="5"
      speed="2"
      bg="#343a40"
      objectbg="#999793"
      opacity="80"
      disableScrolling="false"
      name="circular"
      v-if="loading"
    ></loader>
    <div class="container-fluid">
      <router-link
        to="/"
        :class="{ change_font: scrollPosition > 50 }"
        class="navbar-brand"
        href="#"
        >AIRLANGGA
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          :class="{ change_font: scrollPosition > 50 }"
          class="navbar-toggler-icon"
        ></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <div :class="{ change_font: scrollPosition > 50 }" class="nav-link active">
              Home
            </div>
          </li>
          <li class="nav-item">
            <div
              :class="{ change_font: scrollPosition > 50 }"
              @click="toTrip"
              class="nav-link active"
            >
              Our Fun Trip
            </div>
          </li>
          <li class="nav-item">
            <div
              :class="{ change_font: scrollPosition > 50 }"
              @click="toAbout"
              class="nav-link active"
            >
              About Us
            </div>
          </li>
          <li class="nav-item">
            <div :class="{ change_font: scrollPosition > 50 }" class="nav-link active">
              Our Best Team
            </div>
          </li>
        </ul>
        <div class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <div
                v-if="!user"
                :class="{ change_font: scrollPosition > 50 }"
                class="nav-link active dropdown"
              >
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-user"></i> Member Login
                </button>
                <ul
                  class="dropdown-menu droplog dropdown-menu-end"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li class="dropdownlog">
                    <div class="loginform d-flex flex-column">
                      <input
                        class="login-form"
                        v-model="form.username"
                        placeholder="User ID / Email"
                      />
                      <input
                        class="login-form"
                        v-model="form.password"
                        type="password"
                        placeholder="Password"
                      />
                      <div class="d-flex justify-content-between">
                        <button @click="handleLogin" class="btn-login">
                          <font-awesome-icon
                            icon="fa-solid fa-arrow-right-to-bracket"
                          />Login
                        </button>
                      </div>
                      <div @click="toRegist" class="register">Dont Have Account?</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                v-else
                :class="{ change_font: scrollPosition > 50 }"
                class="nav-link active dropdown"
              >
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-user"></i> Hallo,
                  {{ ` ${user.firstname} ${user.lastname}` }}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><div class="dropdown-item" href="#">My Book</div></li>
                  <li><div class="dropdown-item" @click="logout">Logout</div></li>
                </ul>
              </div>
            </li>
          </ul>
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
      loading: false,
      form: {
        username: "Welldy34",
        password: "qwer1234",
      },
      showlogin: false,
      scrollPosition: null,
      tolerance: 90,
      user: null,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    logout() {
      this.$toasted.success("Logout Success");
      this.$store.dispatch("auth/logout");
      window.location.reload();
    },
    handleLogin() {
      this.loading = true;

      this.$store.dispatch("auth/login", this.form).then(
        () => {
          this.loading = false;
          this.$toasted.success("Login Success");
          window.location.reload();
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response && error.response.data) || error.message || error.toString();
        }
      );
    },
    login() {
      this.loading = true;
      var data = new FormData();
      data.append("username", this.form.username);
      data.append("password", this.form.password);
      this.$http
        .post("loginclient", data)
        .then(() => {
          this.loading = false;
          this.$toasted.success("Login Success");
          this.$router.push("/");
        })
        .catch(() => {
          this.loading = false;
        });
    },
    onlogmenu() {
      this.showlogin = !this.showlogin;
    },
    toTrip() {
      window.scrollTo(0, $(".our-trip").offset().top - this.tolerance);
      this.showlogin = false;
    },
    toAbout() {
      window.scrollTo(0, $(".about").offset().top - 75);
      this.showlogin = false;
    },
    toRegist() {
      window.scrollTo(0, $(".regForm").offset().top - 75);
      this.showlogin = false;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.showlogin = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log("user", this.user);
  },
};
</script>

<style scoped>
.droplog {
  border: none;
  background: none;
}
.register {
  margin-top: 1rem;
  cursor: pointer;
  color: #eee;
}
.register:hover {
  color: yellowgreen;
}
.google {
  background: rgb(180, 0, 0) !important;
}
.google:hover {
  background: rgb(134, 3, 3) !important;
  color: white !important;
}
.btn-login {
  background: #171717;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 20px;
  width: fit-content;
  padding: 5px 20px;
  right: 0;
}
.btn-login:hover {
  color: #171717;
  background: #fff;
}
.login-form {
  border: 0;
  border-radius: 20px;
  padding: 5px 20px;
  margin-bottom: 1rem;
}
.dropdownlog {
  background: #171717;
  padding: 1rem;
  border-radius: 20px;
  width: 100%;
}
.nav-link {
  color: #171717 !important;
  transition: transform 0.2s;
  cursor: pointer;
}
.nav-link:hover {
  transform: scale(1.1);
  color: aqua !important;
}
.navbar {
  font-size: 1rem !important;
}
.head-bg {
  background-color: #fff;
}
.change_color {
  background-color: #171717;
  color: #fff;
}
.change_font {
  color: white !important;
}

.btn-grad {
  background-image: linear-gradient(to right, #005c97 0%, #363795 51%, #005c97 100%);
}
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
