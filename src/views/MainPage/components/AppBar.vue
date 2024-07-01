<template>
  <div class="app">
    <div class="app-bar">
      <div class="app-label" @click="toTop">
        VDTLV
      </div>
      <div class="app-info">
        <div class="contacts" @click="toContacts">
          Contacts
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data () {
    return {}
  },
  methods:{
    toTop(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    toContacts(){
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 768px){
  .app{
    justify-content: center;
    display: flex; 
    position: fixed;
    width: calc(100% - 32px);
    height: 24px;
    padding: 16px 32px;
    background-color: rgba(0, 0, 0, 0.00);
    background-image: url(~@/assets/appbar.png);
    background-size: cover;
    z-index: 10001;
  }
  .app-bar{
    position: fixed;
    max-width: 1280px;
    display: flex;
    width: calc(100% - 32px);
    /* margin: 16px 32px; */
    justify-content: space-between;
    z-index: 1000;
  }
  .app-label{
    cursor: pointer;
    align-items: center; 
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #333333;
  }
  .app-info{
    display: flex;
    height: 24px;
    align-items: center;  
  }
  .contacts{
    padding: 2px 6px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: rgba(51, 51, 51, 0.5);
    border-radius: 4px;
  }
  .contacts:hover{
    cursor: pointer;
    background-color: rgba(51, 51, 51, 0.1);
    color: rgba(51, 51, 51, 0.75)
  }
  .contacts:active{
    cursor: pointer;
    background-color: rgba(51, 51, 51, 0.16);
    color: rgba(51, 51, 51, 0.75)
  }
  .contact{
    padding: 2px 6px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: rgba(51, 51, 51, 0.5);
    border-radius: 4px;
  }
  .line{
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #3333331a;
  }
}
@media screen and (max-width: 768px){
  .app{
    justify-content: center;
    display: flex; 
    position: fixed;
    width: calc(100% - 32px);
    height: 24px;
    padding: 16px 16px;
    background-color: rgba(0, 0, 0, 0.00);
    background-image: url(~@/assets/appbar-mobile.png);
    background-size: cover;
    z-index: 10001;
  }
  .app-bar{
    position: fixed;
    display: flex;
    width: calc(100% - 32px);
    justify-content: space-between;
    z-index: 1000;
    align-items: center;
  }
  .app-label{
    align-items: center; 
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #333333;
  }
  .app-info{
    display: flex;
    height: 24px;
    align-items: center;  
  }
  .contacts{
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #33333380;
  }
  .contacts:active{
    cursor: pointer;
    background-color: rgba(51, 51, 51, 0.16);
    color: rgba(51, 51, 51, 0.75)
  }
  .line{
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #3333331a;
  }
  .contact{
    padding: 2px 6px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: rgba(51, 51, 51, 0.5);
    border-radius: 4px;
  }
}

</style>