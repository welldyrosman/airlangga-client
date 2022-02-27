<template>
    <div class="position-absolute katalog" :style="{backgroundImage:`url(${require('@/assets/images/banner-05.jpg')})`}">
        <div class="container">
            <div class="container ">
                <h1 class="our-trip" style="border-bottom:solid 1px">OUR FUN TRIP</h1>
                <div class="row">
                    <div v-for="i in 8" :key="i" class="col-md-3">
                        <div class="cardcatalog">
                            <img class="imgcatalog" src="../../../assets/images/Tours/tour-01.png"/>
                            <h3 class="destination">DUFAN</h3>
                            <p class="tripcity"><i class="fas fa-map"></i>   JAKARTA</p>
                            <p class="tripdesc"> asdfioaj df asdpfiadsopias dflk;adf adkf lasdkf l;asdkfn l;adfnasd</p>
                            <div class="conprice">
                                <div class="d-flex align-items-between">
                                    500.000/<small>pax</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div @click="showalltrips" class="enddiv">SHOW MORE</div>
            </div>
        </div>
        <About/>
        <Services/>
        <Gallery/>
        <Ourteam/>
        <Footer/>
    </div>

</template>

<script>
import About from "../About"
import Ourteam from "../Ourteam"
import Services from "../Services"
import Footer from "../../core/Footer"
import Gallery from "../Gallery"
export default {
    components:{About,Services,Footer,Gallery,Ourteam},
    data() {
        return {
            servername: process.env.VUE_APP_SERVHOST,
            trips:[],
            data:{
                facilities:[
                    {id:1,fac_nm:'Fasilitas 1'},
                    {id:2,fac_nm:'Fasilitas 2'},
                    {id:3,fac_nm:'Fasilitas 3'},
                ]
            }
        }
    },
    methods:{
        showalltrips(){
             this.$router.push('/alltrip')
        }
    },
    mounted(){
        this.$http.get('/trip').then((ret)=>{
           this.trips=ret.data.data;
        })
    }
}
</script>

<style scoped>
.enddiv{
    margin-bottom:50px;
    
}
</style>