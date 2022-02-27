<template>
  <div  class="container-fluid">
      <div style="margin-top:100px" class="container">
        <div  class="row">
              <div class="col-lg-12">
                  <div class="containers">
                        <div class="mySlides">
                            <div class="numbertext">1 / 6</div>
                            <img class="imgdisplay" :src="getImgUrl()"/>
                        </div>
                        <a class="prev" @click="onleft"><font-awesome-icon icon="fa-solid fa-angle-left" /></a>
                        <a class="next" @click="onright"><font-awesome-icon icon="fa-solid fa-angle-right" /></a>

                        <div class="caption-container">
                            <p id="caption"></p>
                        </div>
                         <div style="overflow-x:auto;width:100%" class="d-flex ">
                            <div class="columnt" v-for="(obj,index) in imglist" :key="index">
                                <img class="demo cursor" :class="{active:index==indexactive}" :src="getImgUrl(obj)" @click="setactiveimg(obj,index)" onclick="currentSlide(1)" alt="The Woods">
                            </div>
                        </div>
                        <div class="tripcontent">

                        </div>
                  </div>
                  
              </div>
            
        </div>
        <hr/>
        <div  class="row">
          <div class="col-lg-8">
            <h1 style="font-weight:900">DUFAN</h1>
            <h4>JAKARTA</h4>
            <hr/>
            <p> kjasvhd asjd askjd asjkd ajs dajs djkas hdkja dka skjbsabdask</p>
            <hr/>
            <h4>Fasilitas</h4>
            <ul>
                <li v-for="i in 10" :key="i">1asasndlasdlaks</li>
            </ul>
          </div>
            
              <div class="col-lg-4">
                  <p>PICK YOUR DATE</p>
                  <div class="datescon">
                      <div v-for="i in 100" :key="i" class="d-flex justify-content-between date-item">
                          <h4 style="margin-bottom:0"><i class="fa-solid fa-calendar-days"></i> Senin, 24 Juni 1991</h4>
                          <p style="margin-bottom:0"><i class="fas fa-user"></i>35</p>
                      </div>
                  </div>
                  <div class="d-flex qtycont text-center">
                     <h2><font-awesome-icon icon="fa-solid fa-users" /> Person </h2>
                     <input class="form-control" v-model="qty" type="number">
                  </div>
                  <button class="btn-book">BOOK NOW</button>
              </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            qty:1,
            imglist:[
                {
                    url:"tour-01.png"
                },
                {
                    url:"airlanggagroup.png"
                },
                {
                    url:"tour-01.png"
                },
                {
                    url:"airlanggagroup.png"
                },
                {
                    url:"tour-01.png"
                },
                {
                    url:"tour-01.png"
                },
                {
                    url:"tour-01.png"
                },
                {
                    url:"tour-01.png"
                },
                {
                    url:"tour-01.png"
                },
                {
                    url:"tour-01.png"
                },

            ],
            servername:"http://localhost:8082/img/Tours",
            imgactive:"tour-01.png",
            indexactive:0,
        }
    },
    mounted(){
      this.setimageactive();
    },
    methods:{
        setimageactive(){
            this.imgactive=this.imglist[this.indexactive].url;
        },
        getImgUrl(obj){
            if(obj){
                return require('../../../assets/images/Tours/'+obj.url);
            }else{
                return require('../../../assets/images/Tours/'+this.imgactive);
            }
        },
        setactiveimg(obj,index){
            this.indexactive=index
            this.imgactive=obj.url
             this.setimageactive();
        },
        onleft(){
            if(this.indexactive>0){
                this.indexactive--
            }
            this.setimageactive();
        },
        onright(){
            if(this.indexactive<this.imglist.length){
                this.indexactive++
            }
            this.setimageactive();
        }

    }
}
</script>

<style scoped>
.imgdisplay{
    min-height: 250px!important;
    max-height: 100% !important;
    width: -webkit-fill-available;
    max-width: 100%;
}
.tripimgcontent{
    width: 100%;
    overflow: auto;
}
.btn-book{
    background: #171717;
    width: 100%;
    padding: 10px;
    color: white;
    border-radius: 20px;
    border: #fff;
    margin-top: 2rem;
    margin-bottom:4rem;
}
.qtycont{
    margin-top:2rem;
    border: solid 2px #171717;
    padding: 10px;
}
.datescon{
    width: 100%;
    height: 500px;
    overflow: auto;
}
.date-item{
    border: solid 1px #171717;
    width: 100%;
    margin-bottom: 1rem;
    padding: 10px;
    cursor: pointer;
}
.date-item:hover{
    background: #171717;
    color: #fff;
}
</style>