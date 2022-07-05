const app = Vue.createApp({
    data: function(){
        return{ 
            show:false,
            text:"You pressed a/A key"
         }
       
    },
    methods:{
        keyPress(e){
          if(e.code= 'KeyA'){
            this.show= true
            console.log(e)
          }
          if(e.code != 'KeyA'){
            this.show = false
          }
        }
    }
});

app.mount('#app')