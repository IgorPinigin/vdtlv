<template>
  <div class="app">
    <div class="app-bar">
      <div class="app-label">
        VDTLV
      </div>
			<div class="app-navigator">
        <div class="back" @click="toMain">Back to projects</div>
        <div class="divider" v-if="dividerVisible">|</div>
        <div class="right-on-trek" @click="toFirst" v-if="dividerVisible">RightOnTrek</div>
        <div class="right-on-trek" @click="toSecond" v-if="titleFirst">Checkout update</div>
        <div class="right-on-trek" @click="toThird" v-if="titleSecond">Gear rental portal</div>
      </div>
      <div class="app-info">
        <div class="contacts">
          Contacts
        </div>
        <div class="line">
          |
        </div>
        <div class="contacts">
          RU
        </div>
      </div>
    </div>
  </div>
  <div class="app-mobile">
    <div class="app-bar">
      <div class="app-label">
        VDTLV
      </div>
      <div class="app-info">
        <div class="contacts">
          Contacts
        </div>
        <div class="line">
          |
        </div>
        <div class="contacts">
          RU
        </div>
      </div>
    </div>
    <div class="divider" v-if="dividerVisible"></div>
    <div class="app-navigator-mobile">
        <div class="right-on-trek" @click="toFirst" v-if="dividerVisible">RightOnTrek</div>
        <div class="right-on-trek" @click="toSecond" v-if="titleFirst">Checkout update</div>
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
      this.$router.push('/main')
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
    align-items: center; 
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #333333;
  }
  .back{
    cursor: pointer;
  }
  .app-navigator{
    left: 272px;
    position: absolute;
    font-size: 16px;
    font-weight: 700;
    color: rgba(51, 51, 51, 0.5);
    cursor: default;
    display: flex;
  }
  .divider{
    margin-left: 8px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
  }
  .right-on-trek{
    margin-left: 8px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: rgba(51, 51, 51, 1);
    cursor: pointer;
  }
  .app-info{
    display: flex;
    height: 24px;
    align-items: center;  
  }
  .contacts{
    margin: 2px 6px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #33333380;
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
    margin: 2px 6px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: #33333380;
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