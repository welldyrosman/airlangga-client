<template>
    <div class="container">
        <h1 class="head" style="border-bottom:solid 1px">WHY US</h1>
        <div id="shape-container">
  <div class="grid">
    <ul id="hexGrid">
      <li v-for="i in 14" :key="i" class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <div class='img' style='background-image:url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42);'></div>
            <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
    
    </ul>
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