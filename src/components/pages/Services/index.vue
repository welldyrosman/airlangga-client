<template>
<div class="container">
   <h1 class="head" style="border-bottom:solid 1px">WHY US</h1>
   <div class="row">
       <div class="col-md-4" v-for="i in services" :key="i.id">
           <div class="service-box text-center">
               <h3>{{i.head}}</h3>
               <p >{{i.desc}}</p>
           </div>
       </div>
   </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            services:[
                {
                    id:1,
                    head:"HEAD 1",
                    desc:";iasdjf apdja padf apdkfapdkf apdf ;ámkfaskdf-ref;amsdpfamsdkfnmasodfnaldfnas;ldf nadnfoan"
                },
                {
                    id:2,
                    head:"HEAD 1",
                    desc:";iasdjf apdja padf apdkfapdkf apdf ;ámkfaskdf-ref;amsdpfamsdkfnmasodfnaldfnas;ldf nadnfoan"
                }
                ,{
                    id:3,
                    head:"HEAD 1",
                    desc:";iasdjf apdja padf apdkfapdkf apdf ;ámkfaskdf-ref;amsdpfamsdkfnmasodfnaldfnas;ldf nadnfoan"
                },{
                    id:4,
                    head:"HEAD 1",
                    desc:";iasdjf apdja padf apdkfapdkf apdf ;ámkfaskdf-ref;amsdpfamsdkfnmasodfnaldfnas;ldf nadnfoan"
                },{
                    id:5,
                    head:"HEAD 1",
                    desc:";iasdjf apdja padf apdkfapdkf apdf ;ámkfaskdf-ref;amsdpfamsdkfnmasodfnaldfnas;ldf nadnfoan"
                },{
                    id:6,
                    head:"HEAD 1",
                    desc:";iasdjf apdja padf apdkfapdkf apdf ;ámkfaskdf-ref;amsdpfamsdkfnmasodfnaldfnas;ldf nadnfoan"
                }
            ]
        }
    },
}
</script>

<style scoped>
.service-box{
    margin-bottom: 2rem;
    padding:1rem;
    border-radius: 1rem;
     background-image: linear-gradient(to bottom right,#0056c767 0,rgba(0,165,151,.19) 84%);
      transition: transform .2s;
}
.service-box:hover{
     background-image: linear-gradient(to bottom right,#0056c7 0,rgba(0,165,151,.69) 84%);
    color: white;
    transform: scale(1.1);
}
</style>