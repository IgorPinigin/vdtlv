<template>
  <div class="main">
    <AppBar/>
    <TextWithPhoto/>
    <TextWithPhotoMobile/>
    <BigPictureBannerPurple/>
    <BigPictureBannerOrange/>
    <TwoWidgetsComponent/>
    <BigInfoComponent/>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue'
import TextWithPhoto from './components/TextWithPhoto.vue'
import BigPictureBannerPurple from './components/BigPictureBannerPurple'
import BigPictureBannerOrange from './components/BigPictureBannerOrange'
import TwoWidgetsComponent from './components/TwoWidgetsComponent'
import BigInfoComponent from './components/BigInfoComponent.vue'
import TextWithPhotoMobile from './components/TextWithPhotoMobile.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    AppBar,
    TextWithPhoto,
    BigPictureBannerPurple,
    BigPictureBannerOrange,
    TwoWidgetsComponent,
    BigInfoComponent,
    TextWithPhotoMobile
  },
  created() {  
    window.scrollTo(0, 0);
  }
    
  
}
</script>

<style>
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: url('../../assets/fonts/Inter-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('../../assets/fonts/Inter-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url('../../assets/fonts/Inter-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: url('../../assets/fonts/Inter-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: url('../../assets/fonts/Inter-Bold.ttf') format('truetype');
  };
*{
  font-family: 'Inter', sans-serif;
}
@media screen and (min-width: 768px){
  .main {
    display: flex;
    flex-direction: column;
    background-color: #F1F1F1; 
    background-image: url('~@/assets/back.png');
    width: 100%;
    height: max-content;
  }
}
@media screen and (max-width: 768px){
  .main {
    display: flex;
    flex-direction: column;
    background-color: #F1F1F1; 
    background-image: url('~@/assets/back-mobile.png');
    background-size: cover;
    width: 100vw;
    height: max-content;
  }
}

</style>