<template>
  <div class="main">
		<AppBar 
      :dividerVisible="dividerVisible"
      :titleFirst="titleFirstVisible"
      :titleSecond="titleSecondVisible"
      @first="toFirstText"
      @second="toSecondText"
      @third="toThirdText">
    </AppBar>
    <FirstTextComponent 
      @second="toSecondText"
      @third="toThirdText" 
      @dividerVisible="dividerVisible_" 
      @dividerNotVisible="dividerNotVisible_" 
      ref="first"/>
    <BigWhiteComponent @titleFirstVisible="titleFirstVisible_" @titleFirstNotVisible="titleFirstNotVisible_" ref="second"/>
    <BigWhiteComponent2 @titleSecondVisible="titleSecondVisible_" @titleSecondNotVisible="titleSecondNotVisible_" ref="third"/>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue'
import BigWhiteComponent from './components/BigWhiteComponent.vue'
import BigWhiteComponent2 from './components/BigWhiteComponent2.vue'
import FirstTextComponent from './components/FirstTextComponent.vue'
export default {
  data(){
		return{
      dividerVisible: false,
      titleFirstVisible: false,
      titleSecondVisible: false
		}
	},
  methods:{
    dividerVisible_(){
      this.dividerVisible = true
    },
    dividerNotVisible_(){
      this.dividerVisible = false
    },
    titleFirstVisible_(){
      this.titleFirstVisible = true
    },
    titleFirstNotVisible_(){
      this.titleFirstVisible = false
    },
    titleSecondVisible_(){
      this.titleSecondVisible = true
    },
    titleSecondNotVisible_(){
      this.titleSecondVisible = false
    },
    toFirstText(){
      const firstTextElement = this.$refs.first.$el;
      if (firstTextElement) {
        const top = (firstTextElement.offsetTop -50);
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        console.error('Не удалось найти компонент FirstTextComponent');
      }
    },
    toSecondText(){
      const secondTextElement = this.$refs.second.$el;
      if (secondTextElement) {
        const top = secondTextElement.offsetTop;
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        console.error('Не удалось найти компонент FirstTextComponent');
      }
    },
    toThirdText(){
      const thirdTextElement = this.$refs.third.$el; 
      // Получаем DOM-элемент компонента FirstTextComponent
      if (thirdTextElement) {
        const top = thirdTextElement.offsetTop; // Получаем координаты элемента
        window.scrollTo({ top, behavior: 'smooth' }); // Прокручиваем страницу к элементу с плавной анимацией
      } else {
        console.error('Не удалось найти компонент FirstTextComponent');
      }
    },
    scrollToPosition(scrollPosition) {
      if (scrollPosition === 'top') {
        this.$nextTick(() => {
          window.scrollTo(0, 0); // Прокрутка в самый верх
        });
      } else if (scrollPosition === 'check') {
        this.$nextTick(() => {
          window.scrollTo(0, 436); // Прокрутка на высоту 150px
        });
      } else if (scrollPosition === 'gear') {
        this.$nextTick(() => {
          window.scrollTo(0, 2474); // Прокрутка на высоту 1000px
        });
      }
    }
  },
	components:{
    AppBar,
    FirstTextComponent,
    BigWhiteComponent,
    BigWhiteComponent2
	},
  created() {
    const scrollPosition = this.$route.params.scrollPosition
    this.scrollToPosition(scrollPosition);
  },
  watch: {
    '$route.params.scrollPosition'(newValue) {
      this.scrollToPosition(newValue);
    }
  }
}
</script>

<style scoped>
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
    height: fit-content;
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
    height: fit-content;
  }
}

</style>