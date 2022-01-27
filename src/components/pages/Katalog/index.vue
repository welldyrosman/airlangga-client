<template>
    <div class="position-absolute katalog">
        <div class="container">
            <div class="container our-trip">
                <h1 style="border-bottom:solid 1px">OUR FUN TRIP</h1>
                <div class="row">
                    <div v-for="i in 6" :key="i" class="col-md-3">
                        <div class="cat-con">
                            <img :src="require('@/assets/images/Tours/tour-01.png')"/>
                            <div class="cat-content">
                                <div class="lopigon"></div>
                                <div class="title-box">
                                    DUNIA FANTASI
                                </div>
                                <div class="contentbox">
                                    <div class="row">
                                        <div class="col-6">
                                    <div v-for="i in data.facilities" :key="i.id" class="">
                                        <i style="color:orange;margin-right:4px" class="fas fa-certificate"></i>{{i.fac_nm}}
                                    </div>
                                        </div>
                                        <div class="col-6">
                                            <div v-for="i in data.facilities" :key="i.id" class="">
                                        <i style="color:orange;margin-right:4px" class="fas fa-certificate"></i>{{i.fac_nm}}
                                    </div>
                                        </div>
                                    </div>
                                    <div class="price"><i class="fas fa-shopping-cart"></i> IDR.200.000/<small style="font-size:1rem">pax</small></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="enddiv">SHOW MORE</div>
            </div>
        </div>
        <About/>
        <Services/>
        <Teams/>
        <Footer/>
    </div>

</template>

<script>
import About from "../About"
import Teams from "../Teams"
import Services from "../Services"
import Footer from "../../core/Footer"
export default {
    components:{About,Teams,Services,Footer},
    data() {
        return {
            data:{
                facilities:[
                    {id:1,fac_nm:'Fasilitas 1'},
                    {id:2,fac_nm:'Fasilitas 2'},
                    {id:3,fac_nm:'Fasilitas 3'},
                ]
            }
        }
    },
}
</script>

<style scoped>
.enddiv{
    margin-top: 2rem;
    text-align: center;
    cursor: pointer;
    font-size: 2rem;
}
.enddiv:hover{
    color: #0056c7;
}
.price{
    background-color: #0056c7;
    width: max-content;
    color: white;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    right: 0;
    justify-content: end;
    float: right;
    cursor: pointer;
}
.price:hover{
    background-color: #03387c;
}
.lopigon{
    transform: rotate(-6deg) skew(-6deg);
    height: 3rem;
    background: whitesmoke;
    position: absolute;
    width: 100%;
    top: -1.5rem;
}
.cat-content{
     /* transform: rotate(-6deg) skew(-6deg); */
    background: whitesmoke;
    margin-top: -3rem;
    min-height: 10rem;
    position: relative;
    padding-top: 2rem;
}
.contentbox{
    margin: 1rem;
    width: 100%;
}
.place-box{
    transform: rotate(-6deg) skew(-6deg);
    font-size: 2rem;
    width: 50%;
    text-align: center;
    position: absolute;
    right: 0;
    background-color: var(--bs-blue);
    color: white;
}
.title-box{
  transform: rotate(354deg) skew(353deg);
    font-size: 1.8rem;
    width: 80%;
    text-align: center;
    position: absolute;
    right: 0;
    background-image: linear-gradient(to bottom right,#0056c7 0,rgba(0,165,151,.69) 84%);
    top: -3rem;
    color: white;
}
.katalog{
    top:60%;
    width:100%;
    padding: 2rem 0rem 0rem 0rem;
}
.cat-con{
    border-radius: 0vw 5vw 0vw 5vw;
    margin: 1rem;
    position: relative;
     transition: transform .2s;
      box-shadow: 3px 4px 10px 3px #aeabab;
    cursor: pointer;
}
.cat-con:hover{
    transform: scale(1.1);
    z-index: 1000; 
}
.cat-con img{
    max-width:100%;
    max-height:100%;
    border-radius: 0vw 5vw 0vw 0vw;
}
</style>