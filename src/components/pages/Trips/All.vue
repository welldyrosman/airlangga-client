<template>
<div class="container">
    <h1 class="our-trip all" style="border-bottom:solid 1px">OUR FUN TRIP</h1>
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
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.our-trip.all{
    margin-top:90px !important;
}

</style>