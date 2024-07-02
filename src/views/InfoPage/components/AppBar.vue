<template>
  <div class="app">
    <div class="app-bar">
      <div class="app-label" @click="toMain">
        VDTLV
      </div>
			<div class="app-navigator">
        <div class="back" @click="toMain">Back to projects</div>
        <transition name="slide-fade">
          <div class="divider" v-if="dividerVisible">|</div>
        </transition>
        <transition name="slide-fade">
          <div class="right-on-trek" @click="toFirst" v-if="dividerVisible">RightOnTrek</div>
        </transition>
        <transition name="slide-fade">
          <div class="right-on-trek" @click="toSecond" style="left: 252px;" v-if="titleFirst">Checkout update</div>
        </transition>
        <transition name="slide-fade">
          <div class="right-on-trek" style="left: 396px;" @click="toThird" v-if="titleSecond">Gear rental portal</div>
        </transition>
      </div>
      <div class="app-info">
        <div class="contacts" @click="toContacts">
          Contacts
        </div>
      </div>
    </div>
  </div>
  <div class="app-mobile">
    <div class="app-bar">
      <div class="app-label" @click="toMain">
        VDTLV
      </div>
      <div class="app-info">
        <div class="contacts" @click="toContacts">
          Contacts
        </div>
      </div>
    </div>
    <div class="divider" v-if="dividerVisible"></div>
    <div class="app-navigator-mobile">
        <div class="right-on-trek" @click="toFirst" v-if="dividerVisible">RightOnTrek</div>
        <div class="right-on-trek" @click="toSecond" v-if="titleFirst">Checkout update</div>
        <div class="right-on-trek" @click="toThird" v-if="titleSecond">Gear rental portal</div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    dividerVisible: Boolean,
    titleFirst: Boolean,
    titleSecond: Boolean,
  },
  data () {
    return {}
  },
  methods:{
    toFirst(){
      this.$emit('first')
    },
    toSecond(){
      this.$emit('second')
    },
    toThird(){
      this.$emit('third')
    },
    toMain(){
      this.$router.push({ name: 'mainPage', params: { scrollPosition: 'main' } })
    },
    toContacts(){
      this.$router.push({ name: 'mainPage', params: { scrollPosition: 'contacts' } })
    }
  },
  watch: {
    dividerVisible(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          document.querySelector('.right-on-trek').classList.add('bottom-0');
        });
      } else {
        document.querySelector('.right-on-trek').classList.remove('bottom-0');
      }
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
  .back{
    line-height: 20px;
    padding: 0px 6px;
    cursor: pointer;
    border-radius: 4px;
  }
  .back:hover{
    cursor: pointer;
    background-color: rgba(51, 51, 51, 0.1);
    color: rgba(51, 51, 51, 0.75)
  }
  .back:active{
    cursor: pointer;
    background-color: rgba(51, 51, 51, 0.16);
    color: rgba(51, 51, 51, 0.75)
  }
  .app-navigator{
    width: 748px;
    position: relative;
    font-size: 16px;
    font-weight: 700;
    color: rgba(51, 51, 51, 0.5);
    cursor: default;
    display: flex;
    overflow: hidden;
  }
  .divider{
    position: absolute;
    left: 132px;
    bottom: 4px;
    margin-left: 8px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
  }
  .right-on-trek{
    position: absolute;
    bottom: 4px;
    left: 145px;
    margin-left: 8px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: rgba(51, 51, 51, 1);
    cursor: pointer;
    transition: bottom 0.5s ease;
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
    color: #33333380;
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
  .line{
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #3333331a;
  }
  .app-mobile{
    display: none;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    bottom: 30px;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: bottom 0.5s ease;
  }
}
@media screen and (max-width: 768px){
  .app{
    display: none;
  }
  .app-mobile{
    justify-content: start;
    display: flex; 
    position: fixed;
    width: calc(100% - 32px);
    height: fit-content;
    padding: 16px 16px;
    background-color: rgba(0, 0, 0, 0.00);
    background-image: url(~@/assets/appbar-mobile.png);
    background-size: cover;
    z-index: 10001;
    flex-direction: column;
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
  .app-navigator-mobile{
    margin-top: 8px;
    display: flex;
  }
  .right-on-trek{
    margin-right: 8px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: rgba(51, 51, 51, 1);
    cursor: pointer;
    width: fit-content;
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
    color: #33333380;
    border-radius: 4px;
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
  .back{
    display: none;
  }
  .divider{
    margin-top: 28px;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: rgba(51, 51, 51, 0.1);
  }
}

</style>