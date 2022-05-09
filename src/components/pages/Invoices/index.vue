<template>
  <div class="container mt-5 mb-3">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8">
        <div class="invoice card">
          <div class="d-flex flex-row p-2">
            <img style="max-width: 48px" :src="require('@/assets/images/travel.png')" />
            <div class="d-flex flex-column">
              <span class="font-weight-bold">BOOKING CONFIRMATION</span>
              <small>KJASUSJJSHU</small>
            </div>
          </div>
          <hr />
          <div class="table-responsive p-2">
            <table class="table table-borderless">
              <tbody>
                <tr class="add">
                  <td>Name</td>
                  <td>Destination</td>
                  <td>Trip Date</td>
                  <td>Book Date</td>
                </tr>
                <tr class="content">
                  <td class="font-weight-bold"><strong>Welldy Rosman</strong></td>
                  <td class="font-weight-bold">
                    <strong>{{ datatour.trip_nm }}</strong>
                  </td>
                  <td class="font-weight-bold">
                    <strong>{{ getdatetrip(tripdate) }}</strong>
                  </td>
                  <td class="font-weight-bold">
                    <strong>{{ getdatetrip(new Date()) }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div class="products p-2">
            <table class="table table-borderless">
              <tbody>
                <tr class="add">
                  <td>Description</td>
                  <td>Package Quantity</td>
                  <td>Price</td>
                  <td class="text-center">Total</td>
                </tr>
                <tr class="content">
                  <td>Trip Package ({{ datatour.trip_nm }})</td>
                  <td>{{ qty }}</td>
                  <td>Rp.{{ $func.toCurrency(datatour.price) }}</td>
                  <td class="text-center">
                    Rp.{{ $func.toCurrency(datatour.price * qty) }}
                  </td>
                </tr>
                <tr class="content">
                  <td>Discount</td>
                  <td>{{ discount }}%</td>
                  <td></td>
                  <td class="text-center">
                    Rp.{{ $func.toCurrency((datatour.price * qty * discount) / 100) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div class="products p-2">
            <table class="table table-borderless">
              <tbody>
                <tr class="add">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-center"><h3>TOTAL</h3></td>
                </tr>
                <tr class="content">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-center">
                    <h1>
                      Rp.{{
                        $func.toCurrency(
                          datatour.price * qty - (datatour.price * qty * discount) / 100
                        )
                      }}
                    </h1>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div class="address p-2">
            <table class="table table-borderless">
              <tbody>
                <tr class="add">
                  <td>
                    Bank Details
                    <br />
                    <img src="../../../assets/images/bca.png" width="100px" />
                  </td>
                </tr>
                <tr class="content">
                  <td>
                    Bank Name : BCA <br />
                    Account Holder : MUHAMMAD GHANI <br />
                    Account Number : 32434534534 <br />
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <div @click="confirmorder" class="chatwa">Confirm Order</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
      datatour: {},
      discountcd: "",
      discount: 0,
      tripdate: null,
      qty: 0,
    };
  },
  mounted() {
    this.tripdate = atob(this.$route.params.dateid);
    this.qty = atob(this.$route.params.qty);
    this.$http
      .get("/gettripbyid/" + atob(this.$route.params.tourid))
      .then((ret) => {
        console.log(ret.data.data);
        this.datatour = ret.data.data;
        this.loading = false;
        this.setimageactive();
      })
      .catch((e) => {
        this.$toasted.error(e.response.data.data);
        this.$router.push("/");
      });
  },
  methods: {
    confirmorder() {},
    getdatetrip(d) {
      var dt = new Date(d);
      const date = ("0" + dt.getDate()).slice(-2);
      const year = dt.getFullYear();
      return this.days[dt.getDay()] + `, ${date} ${this.month[dt.getMonth()]} ${year}`;
    },
  },
};
</script>

<style scoped>
.invoice {
  margin-top: 25px;
}
</style>
