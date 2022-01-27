<template>
   <div ref="about" class="about">
       <div class="row">
           <div class="col-md-6 text-center">
               <img style="max-width:30%" :src="require('@/assets/images/travel.png')"/>
           </div>
            <div class="col-md-6">
                <h1>ABOUT US</h1>
                <h3>Simpan segala kesedihanmu bila belum sempat lihat balon udara langsung di Cappadocia. Di Jawa Barat, tepatnya di Subang, ada wisata balon udara tak kalah menarik lho. Balon udara menarik itu berada di kawasan Sari Ater, Kecamatan Ciater, Subang.

Saat wisata balon udara di Subang, kamu berkesempatan menikmati saujana menawan. Mulai dari kebun teh nan hijau, pegunungan, hingga Gunung Tangkuban Perahu legendaris tersebut. Pastikan kamu datang di pagi hari ya bila ingin naik balon udara di sini, 
karena operasional balon udara hanya sampai sekitar pukul 09.00 pagi.</h3>
           </div>
       </div>
      
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
.about{
    width:100%;
    background-image: linear-gradient(to bottom right,#0056c7 0,rgba(0,165,151,.69) 74%);
    color: whitesmoke;
    padding: 2rem;
}
.about h1{
    font-size: 5rem;
}
</style>